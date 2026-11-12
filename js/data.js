// Inhoud van de Cruquius Crafts site. Alles hieraanpassen zonder code-ervaring.
// Teksten bestaan in twee talen: pas altijd het nl-deel aan. Het en-deel (voor
// Anna's familie) wordt daarna bijgewerkt — vraag er gerust om.

const SITE = {
  whatsappNummer: "31615086832",
  email: "hallo@cruquiuscrafts.nl",
  plaats: { nl: "Cruquius", en: "Cruquius" }
};

const PRODUCTEN = [
  {
    id: "mok-handgreep",
    naam: { nl: "Mok met handgreep", en: "Mug with handle" },
    soort: "ceramiek",
    prijs: 24.5,
    afbeelding: "images/product-mok.svg",
    beschrijving: {
      nl: "Handgedraaide mok van steengoed, met een zachte speelse handgreep. Elke mok is uniek.",
      en: "Hand-thrown stoneware mug with a soft, playful handle. Every mug is unique."
    },
    opVoorraad: true
  },
  {
    id: "schaal-oivorm",
    naam: { nl: "Ovale schaal", en: "Oval serving dish" },
    soort: "ceramiek",
    prijs: 32,
    afbeelding: "images/product-schaal.svg",
    beschrijving: {
      nl: "Ovale serveerschaal in aardetinten. Mooi voor salades uit eigen tuin — of gewoon voor elke dag.",
      en: "Oval serving dish in earthy tones. Beautiful for salads from our own garden — or for every day."
    },
    opVoorraad: true
  },
  {
    id: "kom-set",
    naam: { nl: "Set van twee kommen", en: "Set of two bowls" },
    soort: "ceramiek",
    prijs: 45,
    afbeelding: "images/product-kom.svg",
    beschrijving: {
      nl: "Twee kommen die precies in elkaar passen. Glazuur varieert per stook — dat is het charmante.",
      en: "Two bowls that nest perfectly. The glaze varies with every firing — that's the charm."
    },
    opVoorraad: false
  },
  {
    id: "tomatensaus",
    naam: { nl: "Tomatensaus (pot 350 ml)", en: "Tomato sauce (350 ml jar)" },
    soort: "keuken",
    prijs: 6.5,
    afbeelding: "images/product-saus.svg",
    beschrijving: {
      nl: "Langzaam gestoofde saus van onze eigen tomaten, met basilicum en knoflook uit de kas. Seizoensproduct.",
      en: "Slow-simmered sauce from our own tomatoes, with basil and garlic from the greenhouse. A seasonal product."
    },
    opVoorraad: true
  },
  {
    id: "kruidenzout",
    naam: { nl: "Kruidenzout uit de tuin", en: "Garden herb salt" },
    soort: "keuken",
    prijs: 4.5,
    afbeelding: "images/product-zout.svg",
    beschrijving: {
      nl: "Grof zout met gedroogde tuinkruiden: tijm, salie, rozemarijn en een snufje chilipeper.",
      en: "Coarse salt with dried garden herbs: thyme, sage, rosemary and a pinch of chili pepper."
    },
    opVoorraad: true
  },
  {
    id: "droge-bonen",
    naam: { nl: "Droge bonen (250 g)", en: "Dried beans (250 g)" },
    soort: "keuken",
    prijs: 3.5,
    afbeelding: "images/product-bonen.svg",
    beschrijving: {
      nl: "Zelfgedroogde pronkbonen van het afgelopen seizoen. Perfect voor soep of als bijgerecht.",
      en: "Runner beans, dried ourselves last season. Perfect for soup or as a side dish."
    },
    opVoorraad: true
  }
];

const WORKSHOPS = [
  {
    id: "pottenbakken-intro",
    naam: { nl: "Pottenbakken voor beginners", en: "Pottery for beginners" },
    type: "ceramiek",
    datum: "2026-06-14",
    duur: { nl: "2,5 uur", en: "2.5 hours" },
    prijs: 45,
    plekken: 6,
    beschrijving: {
      nl: "Anna neemt je mee op de draaischijf: van klomp klei naar je eigen mok. Inclusief materiaal, stook en een kop koffie uit eigen tuin.",
      en: "Anna takes you to the wheel: from a lump of clay to your own mug. Including materials, firing and a cup of coffee from our own garden."
    },
    opVoorraad: true
  },
  {
    id: "koken-met-de-oogst",
    naam: { nl: "Koken met de oogst", en: "Cooking with the harvest" },
    type: "keuken",
    datum: "2026-06-28",
    duur: { nl: "3 uur", en: "3 hours" },
    prijs: 55,
    plekken: 8,
    beschrijving: {
      nl: "We oogsten samen in de moestuin en koken een volledig seizoensmenu. Met receptenkaart om mee naar huis te nemen.",
      en: "We harvest together in the vegetable garden and cook a full seasonal menu. Includes a recipe card to take home."
    },
    opVoorraad: true
  }
];

const BLOGPOSTS = [
  {
    slug: "eerste-seizoen",
    titel: { nl: "Ons eerste seizoen op de urban boerderij", en: "Our first season on the urban farm" },
    datum: "2026-04-12",
    auteur: "Cruquius Crafts",
    afbeelding: "images/blog-eerste-seizoen.svg",
    inleiding: {
      nl: "Van kale graszode naar een tuin vol perken, een kas en twee gekke tuinders. Dit is hoe het begon.",
      en: "From bare grass to a garden full of beds, a greenhouse and two crazy gardeners. This is how it started."
    },
    tekst: {
      nl: `<p>Toen we de tuin overnamen stond er vooral... gras. Veel gras. In één weekend hebben we de eerste vier verhoogde bedden neergezet, en sindsdien is er geen stoppen meer aan.</p>
<h2>Wat er nu groeit</h2>
<p>In de kas staan de tomaten en paprika's al weken te pronken. Buiten gingen de bonen, wortels en bieten de grond in, en de sla komt op — letterlijk, om de paar weken een nieuwe rij, zodat we blijven oogsten.</p>
<h2>Wat we geleerd hebben</h2>
<ul>
<li>Een bed van 60 cm breed is smal: één rij tomaten, en daartussen wortel en basilicum. Perfect.</li>
<li>Vruchtwisseling is geen theorie maar overleving: wat vorig jaar kool was, wordt dit jaar bonen.</li>
<li>Slakken houden van onze verhoogde bedden. Wij iets minder.</li>
</ul>
<p>Volgende keer meer over de oogst — en wat we ermee gaan doen in de keuken.</p>`,
      en: `<p>When we took over the garden it was mostly... grass. Lots of grass. In a single weekend we built the first four raised beds, and since then there's been no stopping us.</p>
<h2>What's growing now</h2>
<p>In the greenhouse the tomatoes and peppers have been showing off for weeks. Outside, the beans, carrots and beets went into the ground, and the lettuce keeps coming — literally, a new row every few weeks, so we keep harvesting.</p>
<h2>What we've learned</h2>
<ul>
<li>A bed 60 cm wide is narrow: one row of tomatoes, with carrots and basil in between. Perfect.</li>
<li>Crop rotation isn't theory but survival: what was cabbage last year is beans this year.</li>
<li>Slugs love our raised beds. We like them rather less.</li>
</ul>
<p>Next time more about the harvest — and what we'll do with it in the kitchen.</p>`
    }
  },
  {
    slug: "ceramiek-uit-eigen-hands",
    titel: { nl: "Waarom elk stuk anders is", en: "Why every piece is different" },
    datum: "2026-04-25",
    auteur: "Anna",
    afbeelding: "images/blog-ceramiek.svg",
    inleiding: {
      nl: "Mokken die licht scheef staan, glazuur dat nooit twee keer hetzelfde loopt — dat is geen fout, dat is het punt.",
      en: "Mugs that lean slightly, glaze that never flows the same way twice — that's not a flaw, that's the point."
    },
    tekst: {
      nl: `<p>Elke mok begint als een klomp klei op de draaischijf. En elke klomp heeft zijn eigen wil. Ik kan twee identieke mokken proberen te draaien, maar de kil, het glazuur en de stook beslissen mee.</p>
<h2>Steengoed en alledaags</h2>
<p>Alles wat ik maak is van steengoed en gebakken op hoge temperatuur: vaatwasserbestendig, ovenbestendig, en gemaakt om elke dag te gebruiken. Niet voor in de kast, maar op tafel.</p>
<h2>Van tuin naar tafel</h2>
<p>Het mooiste aan Cruquius Crafts is de cirkel: de schaal die ik draaide, zit binnen een week vol tomatensaus uit onze eigen kas. En de lege mok? Die gaat weer vol met koffie terwijl de volgende oogst alweer wacht.</p>`,
      en: `<p>Every mug starts as a lump of clay on the wheel. And every lump has a will of its own. I can try to throw two identical mugs, but the kiln, the glaze and the firing get a say too.</p>
<h2>Stoneware, made for every day</h2>
<p>Everything I make is stoneware, fired at high temperature: dishwasher-safe, oven-safe, and made to be used every day. Not for the cupboard, but for the table.</p>
<h2>From garden to table</h2>
<p>The best thing about Cruquius Crafts is the circle: the bowl I threw is full of tomato sauce from our own greenhouse within a week. And the empty mug? It goes right back to being full of coffee while the next harvest is already waiting.</p>`
    }
  },
  {
    slug: "sojasaus-gestart",
    titel: { nl: "De langste fermentatie die we ooit startten: sojasaus", en: "The longest fermentation we ever started: soy sauce" },
    datum: "2026-04-20",
    auteur: "Bertus",
    afbeelding: "images/20260419_200938_copy_1024x2216.jpg",
    inleiding: {
      nl: "Vandaag de eerste stap gezet voor onze eigen shoyu: geweekte en gekookte sojabonen, geroosterde tarwe en een koji-cultuur. Over een jaar of twee mag je mee proeven.",
      en: "Today we took the first step towards our own shoyu: soaked and cooked soybeans, roasted wheat and a koji culture. In a year or two, you'll get to taste it."
    },
    tekst: {
      nl: `<p>Eerder maakten we al mede, kombucha en sambal, maar dit is van een andere orde: echte sojasaus. Van boon tot saus duurt het makkelijk een tot twee jaar. Vandaag, 20 april, is dag één.</p>
<h2>Stap 1: weken</h2>
<img class="afbeelding" src="images/20260416_201407_copy_1024x2216.jpg" alt="Sojabonen aan het weken in een emmer" style="margin: 8px 0 16px;">
<p>De droge sojabonen gaan eerst een nacht de emmer in. Zacht geworden, opgezwollen en klaar voor de volgende stap.</p>
<h2>Stap 2: koken en roosteren</h2>
<img class="afbeelding" src="images/20260417_165102_copy_1024x2216.jpg" alt="Pan met graan voor het roosteren op het gasfornuis" style="margin: 8px 0 16px;">
<p>De bonen worden zacht gekookt tot je ze fijn kunt drukken tussen je vingers. De tarwe roosteren we in de pan tot hij lekker naar noten ruikt — dat geeft de saus later haar diepte. Daarna mengen we alles en laten we het mengsel afkoelen op de bakplaat.</p>
<img class="afbeelding" src="images/20260417_210059_copy_1024x2216.jpg" alt="Afgekoeld bonen-tarwe-mengsel op de bakplaat" style="margin: 8px 0 16px;">
<h2>Stap 3: koji eroverheen</h2>
<img class="afbeelding" src="images/20260419_085625_copy_1024x473.jpg" alt="Bonen-tarwe-mengsel bestrooid met koji-cultuur" style="margin: 8px 0 16px;">
<p>Op het afgekoelde bonen-tarwe-mengsel gaat de koji-cultuur (Aspergillus oryzae). Twee dagen in een warme, vochtige omgeving, en dan begint het vanzelf te bloeien met een wit laagje schimmel — precies wat we willen. De enzymen van de koji breken de bonen en het graan straks af tot smaak.</p>
<h2>En dan: wachten</h2>
<img class="afbeelding" src="images/20260419_200938_copy_1024x2216.jpg" alt="Twee glazen potten met moromi" style="margin: 8px 0 16px;">
<p>Daarna gaat alles in grote potten met pekel: de moromi. Elke week even roeren, en verder... geduld. Eerste proefronde over een paar maanden, de echte saus hoop ik in de winter van 2027 te kunnen bottelen.</p>
<p>We houden het op de blog bij — van boon tot druppel.</p>`,
      en: `<p>We've made mead, kombucha and sambal before, but this is a different league: real soy sauce. From bean to sauce easily takes one to two years. Today, April 20th, is day one.</p>
<h2>Step 1: soaking</h2>
<img class="afbeelding" src="images/20260416_201407_copy_1024x2216.jpg" alt="Soybeans soaking in a bucket" style="margin: 8px 0 16px;">
<p>The dry soybeans spend their first night in the bucket. Softened, swollen and ready for the next step.</p>
<h2>Step 2: cooking and roasting</h2>
<img class="afbeelding" src="images/20260417_165102_copy_1024x2216.jpg" alt="Pan with grain being roasted on the gas stove" style="margin: 8px 0 16px;">
<p>The beans are cooked until soft enough to press flat between your fingers. We roast the wheat in a pan until it smells wonderfully nutty — that's what gives the sauce its depth later on. Then we mix everything and let it cool on the baking sheet.</p>
<img class="afbeelding" src="images/20260417_210059_copy_1024x2216.jpg" alt="Cooled bean-and-wheat mixture on the baking sheet" style="margin: 8px 0 16px;">
<h2>Step 3: adding the koji</h2>
<img class="afbeelding" src="images/20260419_085625_copy_1024x473.jpg" alt="Bean-and-wheat mixture sprinkled with koji culture" style="margin: 8px 0 16px;">
<p>The koji culture (Aspergillus oryzae) goes onto the cooled mixture. Two days in a warm, humid place, and it starts to bloom all by itself with a white layer of mold — exactly what we want. The koji's enzymes will break down the beans and grain into flavor.</p>
<h2>And then: waiting</h2>
<img class="afbeelding" src="images/20260419_200938_copy_1024x2216.jpg" alt="Two glass jars with moromi" style="margin: 8px 0 16px;">
<p>After that, everything goes into large jars with brine: the moromi. Stir it every week, and then... patience. First tasting in a few months, and I hope to bottle the real sauce in the winter of 2027.</p>
<p>We'll keep updating the blog — from bean to drop.</p>`
    }
  }
];
