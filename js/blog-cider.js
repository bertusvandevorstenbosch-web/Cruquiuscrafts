// Blogpost cider, na de citroenpost. Los bestand zodat data.js klein blijft;
// wordt door index.html geladen tussen blog-citroen.js en app.js.
// Teksten bestaan in twee talen: pas altijd het nl-deel aan.

const CIDERPOSTS = [
  {
    slug: "appel-en-peren-cider",
    titel: { nl: "Appel- en perencider van eigen oogst", en: "Apple and pear cider from our own harvest" },
    datum: "2026-10-16",
    auteur: "Bertus",
    afbeelding: "images/20261016_163625_copy_2048x946.jpg",
    inleiding: {
      nl: "Een paar bomen in de tuin, een bescheiden oogst en wat lef: dit najaar maakten we onze eigen cider. Eindresultaat: 23 flessen — 8 appel, 14 peer.",
      en: "A few trees in the garden, a modest harvest and a bit of nerve: this autumn we made our own cider. The result: 23 bottles — 8 apple, 14 pear."
    },
    tekst: {
      nl: `<p>We hebben een paar bomen in de tuin. De oogst dit jaar was niet geweldig, maar ruim genoeg voor een leuke poging: cider. Appels en peren, samen in &eacute;&eacute;n batch.</p>
<img class="afbeelding" src="images/20260912_112304_copy_437x946.jpg" alt="Geplukte appels in een bak" style="margin: 8px 0 16px;">
<p>Het fruit werd allemaal schoongemaakt. In de keuken veranderde de keukentafel tijdelijk in produktielokaal.</p>
<img class="afbeelding" src="images/20260912_114622_copy_437x946.jpg" alt="De keuken als brouwerij, met een grote pot op het fornuis" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260916_155633_copy_437x946.jpg" alt="Peren klaar om verwerkt te worden" style="margin: 8px 0 16px;">
<p>Daarna ging alles door de blender, en kreeg het mengsel enzym erbij. Het enzym zorgt ervoor dat de vruchten hun sap goed loslaten &mdash; een klein scheutje chemie voor een grote oogst sap.</p>
<img class="afbeelding" src="images/20260916_155636_copy_437x946.jpg" alt="De blender gevuld met fijn gemalen vruchtenmoes" style="margin: 8px 0 16px;">
<p>Een dag later was het persen. Het verse sap ging de gistingsglazen in, en met gist erbij kon de fermentatie beginnen. Vanaf dat moment is het alleen nog maar wachten &mdash; en af en toe een check of alles bubbelde zoals het moest.</p>
<img class="afbeelding" src="images/20260917_151345_copy_437x946.jpg" alt="Gistingsglas met slang aan het gistende sap" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260917_160433_copy_437x946.jpg" alt="Vers geperst sap klaar voor de fermentatie" style="margin: 8px 0 16px;">
<p>Ruim vier weken later was het zover: bottelen. En proeven, natuurlijk &mdash; de glazen hoorden erbij.</p>
<img class="afbeelding" src="images/20261016_154502_copy_2048x946.jpg" alt="Het eindresultaat gropws op tafel, klaar om te proeven" style="margin: 8px 0 16px;">
<p>Uiteindelijk stonden er 23 flessen op de teller: 8 appel en 14 peer. Niet elke fles zal even goed zijn, dat is het spel &mdash; maar thuisgemaakt van eigen fruit smaakt naar meer. Op naar volgend jaar, met hopelijk nog meer vruchten.</p>`,
      en: `<p>We have a few trees in the garden. This year's harvest wasn't spectacular, but plenty for a fun experiment: cider. Apples and pears, together in one batch.</p>
<img class="afbeelding" src="images/20260912_112304_copy_437x946.jpg" alt="Picked apples in a tub" style="margin: 8px 0 16px;">
<p>First, everything got cleaned up. The kitchen temporarily turned into a production floor.</p>
<img class="afbeelding" src="images/20260912_114622_copy_437x946.jpg" alt="The kitchen as a brewery, with a large pot on the stove" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260916_155633_copy_437x946.jpg" alt="Pears ready to be processed" style="margin: 8px 0 16px;">
<p>Then everything went through the blender, and the pulp got some enzyme. The enzyme helps the fruit release all of its juice &mdash; a small splash of chemistry for a big yield.</p>
<img class="afbeelding" src="images/20260916_155636_copy_437x946.jpg" alt="The blender filled with finely crushed fruit pulp" style="margin: 8px 0 16px;">
<p>A day later came the pressing. The fresh juice went into fermentation vessels, and with yeast added, the fermentation could begin. From that moment it was all patience &mdash; and occasionally checking that everything was bubbling as it should.</p>
<img class="afbeelding" src="images/20260917_151345_copy_437x946.jpg" alt="Fermentation vessel with an airlock on the fermenting juice" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260917_160433_copy_437x946.jpg" alt="Freshly pressed juice ready for fermentation" style="margin: 8px 0 16px;">
<p>About four weeks later it was time: bottling. And tasting, of course &mdash; the glasses were part of the deal.</p>
<img class="afbeelding" src="images/20261016_154502_copy_2048x946.jpg" alt="The finished bottles on the table, ready to taste" style="margin: 8px 0 16px;">
<p>In the end the counter read 23 bottles: 8 apple and 14 pear. Not every bottle will be equally good, that's part of the game &mdash; but homemade from our own fruit tastes like more. Here's to next year, hopefully with plenty more fruit.</p>`
    }
  },
];

// Zet de nieuwe posts vooraan in de bloglijst.
BLOGPOSTS.unshift(...CIDERPOSTS);
