# Especificació de disseny
## Objectiu
Portafoli personal de Xavi Calvo per a estudis de VFX, cinema, videojocs i productores. Eix: creació en temps real, amb Unreal Engine com a eina principal. Imatges grans, estructura clara, negre predominant i accents magenta i verd.

## Referències i prioritats
Les set imatges de maquetes/ defineixen composició, jerarquia i atmosfera. Aquest document resol possibles diferències entre maquetes. Utilitzar un únic logo mestre i una única capçalera compartida: les petites variacions del símbol generat no són versions de marca.

## Colors de treball
- Fons: #08090B, negre quasi absolut.
- Text principal: #F3F0EB.
- Text secundari: #A7A7A7.
- Magenta: #B51B8A.
- Verd llima: #A8CF65.
- Línies separadores: blanc de baixa opacitat.
Els valors són una proposta d'implementació coherent, no mostres exactes extretes de cada píxel. Preservar el degradat original del logo. Evitar textures de negre o efectes de llum de les imatges generades al CSS.

## Logo i tipografia
Símbol magenta amb ull i degradat superior; nom XAVI / CALVO apilat en verd. Deixar un espai clar entre el morro i les lletres. Fer servir el fitxer mestre del repositori o aportat per Xavi. No retallar el logo de les maquetes ni reconstruir-lo amb text d'una font aproximada.
Titulars: sans condensada, pes fort, majoritàriament majúscules. Cos i navegació: sans llegible, pes normal. La família exacta no està definida; revisar les fonts locals abans d'incorporar-ne cap.

## Capçalera comuna
- Logo a l'esquerra, enllaç a Inici de l'idioma actual.
- Menú centrat respecte de tota la finestra: INICI, PROJECTES, SERVEIS, GALERIA, SOBRE MI, CONTACTE.
- Idiomes ES · EN · CA alineats a la dreta.
- Secció activa: text verd i una ratlla curta magenta a sota. Detall de projecte activa PROJECTES.
- Idioma actiu verd. Canviar idioma ha de conservar la pàgina equivalent quan existeixi.
- Fons negre; a Inici pot superposar-se sobre la imatge amb contrast suficient.
- Implementar amb tres zones; per exemple grid-template-columns: 1fr auto 1fr, logo amb justify-self:start i idiomes amb justify-self:end. Canviar al menú mòbil abans que les zones xoquin.
- Escala orientativa d'escriptori: marges laterals 4vw; altura 96–112 px; text de menú 12–14 px. Ajustar-ho al repositori i comparar amb la maqueta.
- No pressuposa una capçalera fixa en fer scroll.

## Pàgines
### Inici
Imatge de projecte a pantalla completa (primera vista, mínim 100svh). Titular centrat REAL-TIME CREATION com a proposta provisional. Sota: Creació d’escenaris · Producció virtual · Experiències immersives. Menció discreta Amb Unreal Engine i enllaç Veure projectes. Degradat negre subtil per llegibilitat; protagonista és la imatge. Preparar titular i imatge com a contingut editable.
### Projectes
Títol PROJECTES sense subtítol ni filtres. Graella de portades amb títol i informació mínima; tota la targeta enllaça al detall. Dues o tres columnes segons amplada i imatges; una en mòbil.
### Detall de projecte
Capçalera comuna, títol, imatge principal gran, breu context, apartat La meva aportació i metadades (any, rol, eines i client si s'aporta). Imatges de resultat i procés amb peus quan calgui. Tornar a projectes i projecte següent. Plantilla única alimentada amb les dades de cada treball.
### Serveis
Títol SERVEIS. Sense subtítol d'Unreal Engine. Sis serveis visibles d'un cop d'ull en escriptori, graella 3 × 2, tots amb la mateixa mida i pes: imatge, títol i descripció curta. Ordre:
1. Creació d'escenaris
2. Producció virtual
3. Experiències immersives
4. Previsualització
5. Gaussian splatting
6. Fotogrametria
Cap targeta destacada o ampliada. Prioritat expressada només per l'ordre. En pantalles estretes passar a dues i després una columna.
### Galeria
Graella d'imatges de diferents proporcions. Pot mantenir Tot / Renders / Procés si hi ha prou contingut. Els filtres no s'apliquen a Projectes. En ampliar una imatge, mostrar títol o peu; permetre tancar amb Escape, navegar amb teclat i retornar el focus.
### Sobre mi
Text breu i foto real de treball. Nom, especialitat, manera de treballar i enllaços a Projectes i Contacte. El text de la maqueta és una proposta pendent de validació, sense atribuir clients o experiència no aportats.
### Contacte
Titular Parlem del teu projecte. Text breu, correu real i formulari amb Nom, Correu electrònic i Missatge. Reutilitzar el servei d'enviament existent si n'hi ha. No simular enviaments reeixits: si no hi ha integració, informar-ne al desenvolupador i oferir el correu real quan estigui disponible. Dades entre claudàtors són pendents i no s'han de publicar.

## Comportament i adaptació
En mòbil: logo a l'esquerra i botó de menú a la dreta; desplegable amb sis seccions i idiomes. Text i controls llegibles, focus visible, ordre de tabulació coherent i àrees tàctils còmodes. Respectar reducció de moviment. Imatges amb dimensions reservades per evitar salts; formats web i càrrega diferida fora de la primera vista. No retallar els textos amb altures fixes per imitar la captura.

## Idiomes i contingut
Mantenir el sistema de rutes i traduccions que ja existeixi. Les maquetes utilitzen català; els noms del menú s'han de localitzar. No donar per traduïts textos inexistents. Les carpetes Markdown són una entrada editorial: adaptar-les al format de dades del projecte, sense imposar un nou CMS.

## Comprovació
Comparar visualment les set pàgines amb les maquetes a escriptori i mòbil. Verificar menú realment centrat, logo consistent, selector d'idiomes funcional, Projectes sense filtres, sis serveis iguals amb Fotogrametria al final, navegació de detall i formulari sense falsos missatges d'èxit.
