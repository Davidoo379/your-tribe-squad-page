
# Tribe Squad page
fdnd

## Beschrijving
### Opdracht
Voor iedereen in fdnd klas k jaar 1 (2026/2027) een squad page website die mobile first ontworpen is, waar iedereen profile card te zien is en naar linked. Ook waar interesante locaties op en rond op Amstel campus van HVA te zien zijn en naar linken.
### Resultaat
**Features waar we trots op zijn:**
- De hero start animatie waarbij de profile cards tevoorschijn komen schept veel blikken. 
- Ook is de optie tussen carrousel en grid in de profile card section erg goed gelukt. 
- De navigatie popup window komt ook goed tevoorschijn.
**link:**
https://edu.nl/n44fk


## Gebruik
### Structue
De pagina heeft een duidelijke heading/title waar onder twee section voor de profile cards en locations.
In de header zit een navigatie knop waarmee je over de pagina kan navigeren of je kan scrollen.
### Hero
De hero heeft plaatjes die doormiddel van een animatie invliegen op random plekken. De locatie van de plaatjes is dus ook elke keer anders. De plaatjes linken naar de corresponderende pagina's.
### Profile Cards
Deze section heeft alle profile cards met de naam van wie hij is, in twee viewing modes, een scroll carrousel en een grid, waar je tussen kan switchen via de buttons eronder. Deze plaatjes linken ook weer naar de corresponderende pagina's.
### Locations
Hier is een lijst met plaatjes van locaties en hun naam met een link naar hun locatie pagina.

## Kenmerken
### HTML
De website is op deze manier gestructureerd
```
<body>
  <header>
    <h1> title
    <nav> navigatie
  </header>
  <main>
    <section> profile-cards
    <section> locations
  </main>
  <footer>
  <a> Back to top button
  </footer>
</body>
```
Profile cards zijn gestructureerd met een heading en een image waar je op kan klicken door de anchor element er omheen.
Ook is er duidelijk semantische elementen gebruikt voor Search Engines, Screen readers en LLMs.

### CSS
De css staat opgebroken in verschillende files om per deel van de pagina te werken. In de style.css staan de base stijl en varaibelen.
Met het gebruik van @media is er een breakpoint op 40em, dit flipped de righting van de carrousel in de profile card section. En de title verplaats naar de header bar op die breakpoint.
Alles schaalt via de viewport witdh responsieve voor verschillende apparaten.

## Bronnen
- Google fonts: https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap
- Google fonts: https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap
- OpenAI ChatGPT (only code questions): https://chatgpt.com
- Antropic Claude (only code questions): https://claude.ai
- SVGRepo: https://www.svgrepo.com/svg/
- MDN: https://developer.mozilla.org/en-US/

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
