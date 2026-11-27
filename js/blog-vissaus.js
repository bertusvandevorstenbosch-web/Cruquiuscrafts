// Blogpost vissaus, na de aardbeienpost. Los bestand zodat data.js klein blijft;
// wordt door index.html geladen tussen blog-aardbei.js en app.js.
// Teksten bestaan in twee talen: pas altijd het nl-deel aan.
// LET OP: foto 4 (elf maanden later) volgt nog \u2014 plek staat gemarkeerd in beide talen.

const VISSAUSPOSTS = [
  {
    slug: "zelf-vissaus-maken",
    titel: { nl: "Zelf vissaus maken: 4 kilo ansjovis en elf maanden geduld", en: "Homemade fish sauce: nine pounds of anchovies and eleven months of patience" },
    datum: "2026-01-02",
    auteur: "Bertus",
    afbeelding: "images/20260102_141749_copy_1024x2276.jpg",
    inleiding: {
      nl: "Vissaus zelf maken bleek het makkelijkste recept op deze site: vis, zout en bijna een jaar geduld. Het moeilijkste onderdeel? De fles nog niet open durven.",
      en: "Homemade fish sauce turned out to be the easiest recipe on this site: fish, salt, and nearly a year of patience. The hardest part? Not daring to open the jar."
    },
    tekst: {
      nl: `<p>In december kreeg ik het geniale idee om zelf vissaus te maken. Zo'n flesje in de winkel is aan de prijs, en met 4 kilo bevroren ansjovis en een zak zout ben je er volgens mij ook. Zout had ik al, dus die bestelling was snel gedaan. Begin januari stond de doos aan de deur en was er geen weg meer terug.</p>
<p>Het recept is zo eenvoudig dat het bijna niet opschrijft:</p>
<ul>
<li>Alle vis in stukjes hakken \u2014 bij 4 kilo het meeste werk van het hele project</li>
<li>Verdeeld over de fermentatieflessen, goed gesloten</li>
<li>Zout afwegen: <strong>20%</strong>, dus 800 gram op 4 kilo vis</li>
<li>Zout over de vis verdelen en goed roeren, deksel erop</li>
</ul>
<img class="afbeelding" src="images/20260102_141948_copy_1024x2276.jpg" alt="Zout afwegen: de pot met vis op de keukenweegschaal" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260102_143431_copy_1024x2276.jpg" alt="De vis en het zout, goed door elkaar geroerd" style="margin: 8px 0 16px;">
<p>En dan het moeilijkste onderdeel van het hele recept: niets doen. Vissaus is het tegendeel van de tomatenjungle. Daar moest ik ingrijpen en deed ik het niet; hier hoef ik niets te doen \u2014 en dat houdt me aardig vol.</p>
<p>Ik wist van tevoren dat dit minimaal een jaar zou duren, dus daar was ik op voorbereid. Voorbereider dan gedacht, zelfs: er staat een gekochte fles goede vissaus in de kast. Zolang die niet leeg is, laat ik de mijne gewoon doorrijpen. En als ik ga bottelen, open ik \u00e9\u00e9n fles per keer, zodat de rest door kan rijpen. Dan haal ik nieuwe ansjovis en begin ik weer een verse fles. Iets als het solera-principe, of hoe dat ook heet \u2014 in ieder geval: er gaat nooit een fles helemaal leeg.</p>
<img class="afbeelding" src="images/20261127_154728_copy_1024x2216.jpg" alt="Elf maanden later: de vissaus, donker en zonder een spoor van vis" style="margin: 8px 0 16px;">
<p>Elf maanden later zie je door het glas inderdaad geen vis meer, alleen een donkere vloeistof. Maar van proeven komt nog niks: ik durf de fles niet eens open te doen. Het plan was minimaal een jaar, en het einde komt in zicht. Tot die tijd: wachten, en intussen de gekochte fles leegmaken.</p>
<p class="slotzin"><em>Vervolg volgt zodra ik durf.</em></p>`,
      en: `<p>In December I had a brilliant idea: we'll just make our own fish sauce. Those little bottles at the store cost a small fortune, and with nine pounds of frozen anchovies and a bag of salt, I figured I was set. I already had salt, so that order went out in no time. Early January the box was at the door, and there was no way back.</p>
<p>The recipe is so simple I almost feel guilty writing it down:</p>
<ul>
<li>Chop all the fish into pieces \u2014 with nine pounds, that's most of the work of the entire project</li>
<li>Divide it between the fermentation jars, tightly closed</li>
<li>Weigh the salt: <strong>20%</strong>, about 1\u00be pounds on nine pounds of fish</li>
<li>Work the salt through the fish, stir well, lid on</li>
</ul>
<img class="afbeelding" src="images/20260102_141948_copy_1024x2276.jpg" alt="Weighing the salt: the jar of fish on the kitchen scale" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260102_143431_copy_1024x2276.jpg" alt="Fish and salt, stirred together well" style="margin: 8px 0 16px;">
<p>Then comes the hardest ingredient: doing nothing. Fish sauce is the opposite of the tomato jungle. There, intervention was needed and I didn't act; here, doing nothing is the job \u2014 and that part I'm remarkably good at.</p>
<p>I knew going in that this would take at least a year. Turns out I'd prepared for that better than expected: there's a good store-bought bottle in the cupboard. As long as that one lasts, mine keeps ripening. And when I do start bottling, I'll open one jar at a time so the rest can keep going. Then I buy new anchovies and start a fresh jar. Something like the solera system from sherry making, or whatever it's called \u2014 the point is: we never run out.</p>
<img class="afbeelding" src="images/20261127_154728_copy_1024x2216.jpg" alt="Eleven months later: the fish sauce, dark, with no trace of fish left" style="margin: 8px 0 16px;">
<p>Eleven months in, there's no fish visible through the glass anymore \u2014 just a dark liquid. But no tasting yet: I don't even dare open the jar. The plan said at least a year, and the finish line is in sight. Until then: wait, and work through the store-bought bottle.</p>
<p class="slotzin"><em>Part two follows as soon as I dare.</em></p>`
    }
  },
];

// Zet de nieuwe posts vooraan in de bloglijst.
BLOGPOSTS.unshift(...VISSAUSPOSTS);
