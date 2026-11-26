// Extra blogpost(s), na de kas-serie. Los bestand zodat data.js klein blijft;
// wordt door index.html geladen tussen blog-kas.js en app.js.
// Teksten bestaan in twee talen: pas altijd het nl-deel aan.

const CITROENPOSTS = [
  {
    slug: "citroenen-van-eigen-boom",
    titel: { nl: "Citroenen van eigen boom: sukade en siroop", en: "Lemons from our own tree: succade and syrup" },
    datum: "2026-11-25",
    auteur: "Bertus",
    afbeelding: "images/20261125_160623_copy_1024x2216.jpg",
    inleiding: {
      nl: "Van een boompje in een blauwe pot naar de eerste oogst: acht citroenen. Vier werden sukade, en het restprodukt bleek het hoofdprodukt.",
      en: "From a little tree in a blue pot to the first harvest: eight lemons. Four became succade, and the byproduct turned out to be the main product."
    },
    tekst: {
      nl: `<p>In de lente kocht ik een klein citroenboompje in een blauwe pot. Meer belofte dan boom, eerlijk gezegd. Toen hij in de zomer gewoon groeide, en tenslotte vruchten kreeg, besloot ik hem te behandelen als volwaardig lid van de tuin.</p>
<p>Gisteren was het zover: de oogst. Acht citroenen aan de boom — vier geplukt, vier mochten nog even blijven hangen. Geen kratten vol, maar echt: citroenen van onze eigen aarde.</p>
<p>De vier geplukte werden plakjes, gekookt in simpele 1:1-siroop, en nu liggen ze op het bakblik te drogen. Sukade — glazig, zoet, en bedoeld voor panettone en om gewoon zo op te snoepen.</p>
<img class="afbeelding" src="images/20261125_173049_copy_1024x473.jpg" alt="Citroenplakjes in suiker op het bakblik" style="margin: 8px 0 16px;">
<p>En de siroop die overbleef? Die kookte ik verder in. Het restprodukt bleek het hoofdprodukt: goudgeel, wrang en zoet tegelijk.</p>
<img class="afbeelding" src="images/20261125_174125_copy_1024x2216.jpg" alt="Citroenen en de ingekookte siroop" style="margin: 8px 0 16px;">`,
      en: `<p>In spring I bought a small lemon tree in a blue pot. More promise than tree, honestly. When it kept growing through the summer and eventually set fruit, I decided to treat it as a full member of the garden.</p>
<p>Yesterday was the day: the harvest. Eight lemons on the tree — four picked, four left to hang a little longer. Not crates full, but real: lemons from our own soil.</p>
<p>The four picked ones became slices, cooked in a simple 1:1 syrup and now drying on a baking tray. Succade — glossy, sweet, meant for panettone and for simply snacking on.</p>
<img class="afbeelding" src="images/20261125_173049_copy_1024x473.jpg" alt="Lemon slices in sugar on the baking tray" style="margin: 8px 0 16px;">
<p>And the syrup that was left? I cooked it down further. The byproduct turned out to be the main product: golden, sour and sweet at once.</p>
<img class="afbeelding" src="images/20261125_174125_copy_1024x2216.jpg" alt="Lemons and the reduced syrup" style="margin: 8px 0 16px;">`
    }
  },
];

// Zet de nieuwe posts vooraan in de bloglijst.
BLOGPOSTS.unshift(...CITROENPOSTS);
