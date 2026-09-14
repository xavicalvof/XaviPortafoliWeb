# Revisió del portafoli

Tipografia Space Grotesk local als títols i Inter al cos de text, amb caixa natural i mida continguda. Separació de 36–56 px entre títol de pàgina i contingut. Projectes i Serveis comparteixen graella i portades horitzontals 2,15:1; la portada del detall ocupa les mateixes dimensions que una targeta de Projectes, també en mòbil. Galeria sense subtítol ni noms visibles, amb ampliació modal transparent sobre la pàgina. Tancament amb botó, Escape o clic exterior, navegació amb fletxes i retorn del focus. Les etiquetes accessibles de les imatges es conserven.

La capçalera utilitza els originals separats `src/assets/Logos/xavi-calvo-svg/simbol.svg` (magenta) i `nom.svg` (verd), amb 20 px de separació en escriptori i 18 px en mòbil. Les icones de navegador i aplicació deriven del símbol oficial aportat de la mateixa carpeta. `refresh-icons.mjs` en reprodueix les exportacions.

L'anglès és l'idioma predeterminat a les rutes arrel; castellà a `/es/` i català a `/ca/`. Les rutes `/en/` es mantenen compatibles. El selector conserva la pàgina actual, i els enllaços antics `?lang=` continuen funcionant. Inici conserva el titular editable i les especialitats, sense el text «Amb Unreal Engine» ni l'enllaç «Veure projectes».

## Projectes

Font editorial: document de Google facilitat per Xavi, `https://docs.google.com/document/d/1Ip8h_51g7JUlGBa3rySRva38HY1zbaKE1VNc-p5NEos/edit`. Còpia local a `contingut/projectes-drive.txt`. Conté vuit projectes: Berlín T1, Berlín T2, El refugio atómico, Llotja de Mallorca, ECAM, McKallan, Audi e-tron i Mapi.

Les dades reals substitueixen els textos de demostració de la col·lecció Astro `src/content/projects/`. Es conserven els cinc identificadors originals per mantenir els enllaços. S'han afegit tres fitxes i les imatges locals d'ECAM i El refugio atómico. Els períodes indiquen participació, no estrena. Les versions ES/EN són traduccions preparades durant aquesta implementació i pendents de revisió editorial del propietari. El nom McKallan es conserva tal com figura al document.

`node docs/xavi-calvo-handoff/import-projects.mjs` reconstrueix les fitxes a partir de l'exportació i `contingut/projectes-translations.json`. Cal editar aquestes fonts si es vol tornar a executar la importació; sobrescriu les fitxes generades. No descarrega automàticament canvis del document.

Pendents: portades d'Audi e-tron i McKallan; foto i biografia de Sobre mi. Les imatges dels projectes encara necessiten peus i textos alternatius editorials més descriptius. No s'han atribuït dades ni eines absents del document.

## Imatges provisionals

S'han generat amb l'eina integrada `image_gen` set imatges: una portada d'Inici i sis il·lustracions de serveis. Fitxers definitius del projecte a `src/assets/images/ai/`, amb el conjunt exacte de prompts a `prompts.json`. Les imatges originals generades també es conserven a la carpeta de generació de Codex. La web indica discretament que són imatges conceptuals d'IA; no s'utilitzen a les fitxes de treballs reals. Astro genera versions AVIF/WebP responsives.

## Revisió local

`npm.cmd run check`, `npm.cmd run lint`, `npm.cmd run build`.

`npm.cmd run preview -- --host 127.0.0.1 --port 4321` → `http://127.0.0.1:4321/`.

`node docs/xavi-calvo-handoff/verify.mjs` comprova les set pàgines i els vuit detalls en CA/ES/EN a 1440 i 390 píxels, els enllaços interns, el menú centrat, les portades horitzontals, la mida de portada al detall, l'espai dels títols, la galeria i el formulari. Utilitza la instal·lació local de Playwright; en un altre equip, cal definir `PLAYWRIGHT_PATH` amb la ubicació del paquet. Captures i informe a `docs/screenshots/handoff/`.

El formulari conserva el flux `mailto:` existent; prepara el missatge al client de correu i no anuncia enviaments reeixits. Les proves no envien correus.
