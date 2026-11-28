// Blogpost tomatenjungle, na de ciderpost. Los bestand zodat data.js klein blijft;
// wordt door index.html geladen tussen blog-cider.js en app.js.
// Teksten bestaan in twee talen: pas altijd het nl-deel aan.

const TOMAATPOSTS = [
  {
    slug: "de-tomatenjungle",
    titel: { nl: "De tomatenjungle \u2014 een eerlijk verslag", en: "The tomato jungle \u2014 an honest report" },
    datum: "2026-10-17",
    auteur: "Bertus",
    afbeelding: "images/20260707_164012_copy_1024x2216.jpg",
    inleiding: {
      nl: "In februari zaaiden we tomaten met veel moed en weinig bescheidenheid. In oktober oogsten we groene tomaten uit wat inmiddels een jungle was. Dit is wat er tussen die twee momenten gebeurde.",
      en: "In February we sowed tomatoes with plenty of courage and little humility. In October we harvested green tomatoes from what had by then become a jungle. This is what happened in between."
    },
    tekst: {
      nl: `<p>Het begint in februari, zoals altijd onschuldig: zaaitrays vol tomatenzaadjes. Alles kiemt. Dat is het gevaarlijke eraan &mdash; het lukt.</p>
<img class="afbeelding" src="images/IMG-20260501-WA0005_copy_1024x1820.jpg" alt="Uitplanten van tomatenzaailingen in de kas" style="margin: 8px 0 16px;">
<p><strong>1 mei.</strong> Eindelijk uitgeplant. De plannen zeiden eerder, maar de kas was nog niet klaar &mdash; de zaailingen moesten dus gewoon wachten. Planten hebben geen agenda, maar als ze die hadden gehad, hadden ze ons hier op uitgekeken.</p>
<img class="afbeelding" src="images/20260606_142640_copy_1024x2216.jpg" alt="Uitgeplante tomatenplanten in nette rijtjes, begin juni" style="margin: 8px 0 16px;">
<p><strong>6 juni.</strong> Alles staat erin. Nette rijtjes, overzichtelijk, nog beheersbaar. Foto's liegen niet, maar ze liegen ook over de toekomst.</p>
<img class="afbeelding" src="images/20260707_164000_copy_1024x2216.jpg" alt="De tomatenjungle: &eacute;&eacute;n gesloten groene massa in de kas, begin juli" style="margin: 8px 0 16px;">
<p><strong>7 juli.</strong> En toen gebeurde het: niemand snoeide, iedereen groeide. Wat ooit rijtjes waren, werd &eacute;&eacute;n groene massa. In plaats van tomaten te telen, gingen we op ontdekkingsreis.</p>
<img class="afbeelding" src="images/20260707_181212_copy_1024x473.jpg" alt="De kruiwagen vol snoeisel, pas laat op de avond" style="margin: 8px 0 16px;">
<p>Pas in de avond werd de schaar tevoorschijn gehaald. Wat eruit moest &mdash; en veel meer dan we wilden toegeven &mdash; lag die avond in de kruiwagen. Te laat. Zoals altijd.</p>
<img class="afbeelding" src="images/20261017_123301_copy_1024x2216.jpg" alt="Gele bladeren en slappe stengels, half oktober" style="margin: 8px 0 16px;">
<p><strong>17 oktober.</strong> Het seizoen eindigde zoals het begon: anders dan gepland. Gele bladeren, slappe stengels. De oogst?</p>
<img class="afbeelding" src="images/20261017_123306_copy_1024x2216.jpg" alt="Een bak groene tomaten van het einde van het seizoen" style="margin: 8px 0 16px;">
<p>Een bak groene tomaten &mdash; want in een jungle rijpt niemand. De paar rijpe die er waren, werden met gepaste trots geoogst; er waren er niet veel.</p>
<p>Maar laat ik het niet mooier maken dan het is: de vensterbank redt een oogst, maar redt geen seizoen. Wie niet snoeit, plukt aan het eind van het jaar vooral groene tomaten &mdash; en dat is de hele les. De vensterbank was een reddingsoperatie, geen strategie. Volgend jaar snoeien we gewoon op tijd.</p>
<h2>Update, 28 november</h2>
<p>Nog even een nasleep en dan sluiten we dit dossier: de vensterbank-reddingsoperatie was verrassend succesvol. De groene tomaten rijpten langzaam maar gestaag na, en vandaag, 28 november, eet Anna er nog steeds van &mdash; er liggen nog maar een paar over. Gezaaid in februari, op aan het eind van november: bijna tien maanden tomatenseizoen. Geen dank aan het snoeien \u2014 puur aan de vensterbank.</p>
<p>En voor de volledigheid: Anna had me gewaarschuwd dat ik moest snoeien. Zelfs voordat de jungle begon. Ze had gelijk, en nu staat het hier zwart-op-wit, dus daar is niets meer aan te doen.</p>
<p class="slotzin"><em>Volgend jaar snoeien we. Echt. Het staat letterlijk in onze plannen voor 2027 &mdash; en wie ons in augustus betrapt op jungle 2.0, mag het hier teruglezen.</em></p>`,
      en: `<p>It starts innocently enough in February: seed trays full of tomato seeds. Everything germinates. That's the dangerous part &mdash; it works.</p>
<img class="afbeelding" src="images/IMG-20260501-WA0005_copy_1024x1820.jpg" alt="Planting out tomato seedlings in the greenhouse" style="margin: 8px 0 16px;">
<p><strong>May 1.</strong> Finally in the ground. The plan said earlier, but the greenhouse wasn't ready, so the seedlings just had to wait. Plants don't keep calendars, but if they did, they'd have stopped trusting ours by now.</p>
<img class="afbeelding" src="images/20260606_142640_copy_1024x2216.jpg" alt="Tomato plants in neat rows in early June" style="margin: 8px 0 16px;">
<p><strong>June 6.</strong> All planted. Neat rows, everything still under control. Photos don't lie &mdash; but they don't show the future either.</p>
<img class="afbeelding" src="images/20260707_164000_copy_1024x2216.jpg" alt="The tomato jungle: one closed green mass in the greenhouse, early July" style="margin: 8px 0 16px;">
<p><strong>July 7.</strong> And then it happened: nobody pruned, everybody grew. The neat rows merged into one green mass. Instead of growing tomatoes, we started exploring.</p>
<img class="afbeelding" src="images/20260707_181212_copy_1024x473.jpg" alt="The wheelbarrow full of pruned branches, only late in the evening" style="margin: 8px 0 16px;">
<p>The shears only came out in the evening. What had to go &mdash; more than we cared to admit &mdash; ended up in the wheelbarrow that night. Too late. As usual.</p>
<img class="afbeelding" src="images/20261017_123301_copy_1024x2216.jpg" alt="Yellow leaves and tired stems in mid-October" style="margin: 8px 0 16px;">
<p><strong>October 17.</strong> The season ended the way it started: not according to plan. Yellow leaves, tired stems. The harvest?</p>
<img class="afbeelding" src="images/20261017_123306_copy_1024x2216.jpg" alt="A tray of green tomatoes from the end of the season" style="margin: 8px 0 16px;">
<p>A tray of green tomatoes &mdash; because in a jungle, nothing ripens. The few ripe ones were picked with appropriate ceremony; there weren't many.</p>
<p>But let's not dress it up: the windowsill saves a harvest, it doesn't save a season. If you don't prune, you pick mostly green tomatoes at the end of the year &mdash; and that's the whole lesson. The windowsill was a rescue operation, not a strategy. Next year, we'll prune on time.</p>
<h2>Update, November 28</h2>
<p>One footnote and then we're closing this file: the windowsill rescue turned out to be the most successful part of the whole operation. The green tomatoes ripened slowly but steadily, and today, November 28, Anna is still eating them &mdash; only a few left. Sown in February, still on the plate at the end of November: nearly ten months of tomato season. No thanks to any pruning \u2014 that's all windowsill.</p>
<p>And for the record: Anna warned me about the pruning. Before the jungle even took over. She was right, and now it's in writing here, so there's nothing left to argue about.</p>
<p class="slotzin"><em>Next year we'll prune. We really will. It's literally in our plans for 2027 &mdash; and if you catch us with jungle 2.0 in August, feel free to come back and laugh at this post.</em></p>`
    }
  },
];

// Zet de nieuwe posts vooraan in de bloglijst.
BLOGPOSTS.unshift(...TOMAATPOSTS);
