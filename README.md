# Portfolio Noor Dohmen

Een studieportfolio voor de minor Circulaire Economie (september 2026 – januari 2027). Een rustige, responsive website in offwhite, beige, donkerblauw en salie-/olijfgroen, met een projecttijdlijn, eigen projectpagina's, persoonlijke leerdoelen en een pagina over Noor.

## Website en beheer

- Website: https://portfolio-noor-dohmen.noordohmen.chatgpt.site
- Beheer: https://portfolio-noor-dohmen.noordohmen.chatgpt.site/beheer
- Bezoekers hebben geen account nodig. Alleen het toegestane ChatGPT-account kan wijzigingen opslaan of uploaden.
- In beheer: kies een project of voeg een nieuw project toe, vul de informatie in, upload bestanden en klik op **Alle wijzigingen opslaan**. Nieuwe projecten beginnen als concept. Vink **Project publiceren** aan wanneer het zichtbaar mag worden.
- Foto's, pdf's, tekstbestanden en moderne Office-documenten tot 20 MB per bestand worden ondersteund. Bezoekers kunnen bestanden bekijken/downloaden. Office-bestanden worden gedownload en kunnen daarna lokaal worden geopend.
- Je kunt projecten handmatig op de tijdlijn verplaatsen, updates toevoegen en leerdoelen aan projecten koppelen.
- De beginteksten zijn gebaseerd op de aangeleverde informatie. Nog ontbrekende resultaten, uren, groepsgenoten, reflecties en foto's kunnen worden aangevuld.

## Ontwikkeling

Node.js 22 of nieuwer; geen externe dependencies.

```sh
npm run build
npm test
npm run dev
```

Lokale preview: http://localhost:4317. Voor lokaal testen van de editor: `LOCAL_ADMIN=1 npm run dev`. Deze testidentiteit bestaat uitsluitend in de lokale ontwikkelserver; deze server wordt niet gedeployd.

## Architectuur en opslag

De broncode staat op GitHub. De live website draait als een Cloudflare Worker via Sites; GitHub Pages alleen voert deze servercode niet uit. `web/` bevat de website, `worker/index.js` de API en begininhoud. Het buildscript maakt één Worker-bestand met de ingebedde HTML, CSS en JavaScript.

Projecten, leerdoelen en profieltekst worden als één JSON-document opgeslagen in R2 (`portfolio/content.json`); uploads als losse objecten in dezelfde bucket. Schrijven gebruikt ETags om gelijktijdig overschrijven te voorkomen. Verwijderen uit een project maakt een bestand ontoegankelijk voor bezoekers zodra de wijziging is opgeslagen. Het opslagobject blijft bewaard om onbedoeld gegevensverlies te voorkomen.

Productie heeft een R2-binding `BUCKET` en een privé ingestelde `ADMIN_EMAIL` nodig. Identiteit wordt server-side gecontroleerd met de door Sites aangeleverde ChatGPT-identiteit. Zet nooit wachtwoorden of tokens in GitHub. Lokale `.env`-bestanden en gebruikersuploads worden niet gecommit.

Wijzigingen aan de code op GitHub publiceren zichzelf niet automatisch naar Sites. Inhoudelijke wijzigingen via de beheerpagina verschijnen direct na opslaan en vereisen geen nieuwe deployment. De GitHub-code bevat de begininhoud, niet automatisch de latere uploads of wijzigingen uit het beheer.
