// Import the supplied Google document export into the existing Astro collection.
// Run from repository root. ES/EN are editorial translations, pending owner review.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
const source = readFileSync(
  'docs/xavi-calvo-handoff/contingut/projectes-drive.txt',
  'utf8',
)
  .replaceAll('\r\n', '\n')
  .split('\nRevisió editorial — Notes internes\n')[0];
const records = JSON.parse(
  readFileSync(
    'docs/xavi-calvo-handoff/contingut/projectes-translations.json',
    'utf8',
  ),
);
for (let i = 0; i < records.length; i++) {
  const record = records[i];
  const start = source.indexOf('\n' + record.heading + '\n');
  if (start < 0) throw new Error(`Missing source heading: ${record.heading}`);
  const end =
    i < records.length - 1
      ? source.indexOf('\n' + records[i + 1].heading + '\n', start + 1)
      : source.length;
  const block = source.slice(start, end);
  const field = (name) =>
    block.match(new RegExp(`^${name}: (.+)$`, 'm'))?.[1].trim();
  const description = field('Descripció');
  if (!description) throw new Error(`Missing description: ${record.heading}`);
  const split = description.search(/(?:Com a |La meva )/);
  const context = split < 0 ? description : description.slice(0, split).trim();
  const contribution =
    split < 0
      ? ''
      : description.slice(split).replace('efectes.Durant', 'efectes. Durant');
  const data = {
    title: record.heading,
    summary: context,
    description,
    context,
    contribution,
    period: field('Període'),
    role: field('Càrrec'),
    client: field('Client'),
    year: record.year,
    tech: record.tech,
    ...(record.cover
      ? {
          cover: '../../assets/images/Proyectos/' + record.cover,
          coverAlt: record.heading,
        }
      : {}),
    translations: { es: record.es, en: record.en },
  };
  const course = field('Enllaç del curs');
  if (course) data.links = { live: course };
  if (record.folder) {
    data.images = readdirSync('src/assets/images/Proyectos/' + record.folder)
      .filter(
        (name) =>
          /\.(png|jpe?g|webp)$/i.test(name) && !name.startsWith('Portada'),
      )
      .sort((a, b) => a.localeCompare(b, 'ca', { numeric: true }))
      .map((name, index) => ({
        src: '../../assets/images/Proyectos/' + record.folder + '/' + name,
        alt: `${record.heading} — ${index + 1}`,
      }));
  }
  const frontmatter = Object.entries(data)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
  writeFileSync(
    `src/content/projects/${record.id}.md`,
    `---\n${frontmatter}\n---\n\n${description}\n`,
  );
}
console.log(`Imported ${records.length} verified project records.`);
