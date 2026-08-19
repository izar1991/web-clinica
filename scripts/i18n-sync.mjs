import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const catalogPath = join(root, 'src/i18n/catalog.json');
const translationsDir = join(root, 'src/i18n/translations');
const locales = ['ca', 'en-GB', 'de-DE', 'fr-FR', 'zh-CN', 'ar'];
const providerLocales = { 'en-GB': 'en', 'de-DE': 'de', 'fr-FR': 'fr', 'zh-CN': 'zh', ar: 'ar', ca: 'ca' };
const checkOnly = process.argv.includes('--check');
const endpoint = process.env.TRANSLATION_ENDPOINT;
const source = JSON.parse(await readFile(catalogPath, 'utf8'));
const sourceHash = createHash('sha256').update(JSON.stringify(source)).digest('hex');

async function translate(text, locale) {
  if (!endpoint) return text;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ q: text, source: 'es', target: providerLocales[locale] || locale }),
  });

  if (!response.ok) {
    throw new Error(`Translation endpoint returned ${response.status} for ${locale}`);
  }

  const payload = await response.json();
  return payload.translatedText || payload.translation || text;
}

let pending = 0;

for (const locale of locales) {
  const path = join(translationsDir, `${locale}.json`);
  const current = JSON.parse(await readFile(path, 'utf8'));
  const next = { _meta: { ...current._meta, locale, sourceHash } };
  const sourceChanged = Boolean(current._meta?.sourceHash && current._meta.sourceHash !== sourceHash);

  for (const [key, text] of Object.entries(source)) {
    if (typeof current[key] === 'string' && current._meta?.sourceHash === sourceHash) {
      next[key] = current[key];
      continue;
    }

    if (typeof current[key] === 'string' && current[key] !== text) {
      next[key] = current[key];
      if (sourceChanged) pending += 1;
      continue;
    }

    pending += 1;
    next[key] = checkOnly ? text : await translate(text, locale);
  }

  if (!checkOnly && endpoint) {
    next._meta.status = current._meta?.status === 'reviewed' ? 'reviewed' : 'machine';
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, `${JSON.stringify(next, null, 2)}\n`);
  }
}

if (pending > 0 && checkOnly) {
  console.error(`${pending} translation entries need generation or review.`);
  process.exitCode = 1;
} else if (!endpoint && !checkOnly) {
  console.log('No TRANSLATION_ENDPOINT configured; no files changed.');
} else {
  console.log(`Translation sync complete for ${locales.length} locales.`);
}
