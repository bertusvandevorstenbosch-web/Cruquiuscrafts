// De vier kas-blogposts. Los bestand zodat data.js klein blijft;
// wordt door index.html geladen tussen data.js en app.js.
// Teksten bestaan in twee talen: pas altijd het nl-deel aan.

const KASPOSTS = [
  {
    slug: "kas-de-fundering",
    titel: { nl: "De kas begint: fundering en frame", en: "The greenhouse begins: foundation and frame" },
    datum: "2026-04-01",
    auteur: "Bertus",
    afbeelding: "images/20260328_143008_copy_1024x2216.jpg",
    inleiding: {
      nl: "Van gras naar sleuven naar een frame van vers hout. De eerste weken van de kas, in avonden en weekenden.",
      en: "From grass to trenches to a frame of fresh lumber. The first weeks of the greenhouse, in evenings and weekends."
    },
    tekst: {
      nl: `<p>Vroeger stond hier gras. Nu graven we sleuven. Zo begint het: op 17 maart liggen de eerste twee sleuven in de grond, omzoomd met stalen platen, met de waterpas er steeds weer bij. Een kas op een scheve fundering wordt een scheve kas — en dat zie je pas als hij af is, en dan is het te laat.</p>
<img class="afbeelding" src="images/20260317_175759_copy_1024x473.jpg" alt="Twee sleuven omzoomd met stalen platen" style="margin: 8px 0 16px;">
<p>Daarna het leukste deel: hout. Vers hout van de bouwmarkt, balken op maat, hoeken haaks, en steeds opnieuw meten want "twee keer meten, één keer zagen" is geen spreekwoord maar overlevingstactiek. Eind maart stond het frame.</p>
<img class="afbeelding" src="images/20260328_143008_copy_1024x2216.jpg" alt="Het houten frame van de kas in aanbouw" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260329_174315_copy_1024x2216.jpg" alt="Close-up van het houten frame" style="margin: 8px 0 16px;">
<p>Op 31 maart, na het werk, nog even door in de avonduren met de ladder ertegenaan. De buren keken op. Wij niet — wij zagen al tomaten.</p>
<img class="afbeelding" src="images/20260331_203928_copy_1024x473.jpg" alt="De kas in de avonduren, met de ladder ertegenaan" style="margin: 8px 0 16px;">`,
      en: `<p>This used to be grass. Now we're digging trenches. That's how it starts: on March 17th the first two trenches go into the ground, lined with steel plates, level checked again and again. A greenhouse on a crooked foundation becomes a crooked greenhouse — and you only notice when it's finished, when it's too late.</p>
<img class="afbeelding" src="images/20260317_175759_copy_1024x473.jpg" alt="Two trenches lined with steel plates" style="margin: 8px 0 16px;">
<p>Then the best part: wood. Fresh lumber from the builders' merchant, beams cut to size, corners square, measuring constantly, because "measure twice, cut once" isn't a saying, it's a survival strategy. By the end of March the frame was standing.</p>
<img class="afbeelding" src="images/20260328_143008_copy_1024x2216.jpg" alt="The wooden frame of the greenhouse under construction" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260329_174315_copy_1024x2216.jpg" alt="Close-up of the wooden frame" style="margin: 8px 0 16px;">
<p>On March 31st, after work, we kept going into the evening with the ladder against the frame. The neighbours looked up. We didn't — we already saw tomatoes.</p>
<img class="afbeelding" src="images/20260331_203928_copy_1024x473.jpg" alt="The greenhouse in the evening, with the ladder against it" style="margin: 8px 0 16px;">`
    }
  },
  {
    slug: "kas-dak-en-deuren",
    titel: { nl: "Deuren, dak en de eerste avonduren erin", en: "Doors, roof and the first evenings inside" },
    datum: "2026-04-12",
    auteur: "Bertus",
    afbeelding: "images/20260406_201154_copy_1024x473.jpg",
    inleiding: {
      nl: "Polycarbonaat op het dak, deuren eraan en een werkbank binnen. En een opmerking van Anna die me wat doet vrezen.",
      en: "Polycarbonate on the roof, doors on and a workbench inside. And a remark from Anna that worries me a little."
    },
    tekst: {
      nl: `<p>Een kas zonder dak is een houten rek. Dus: polycarbonaat platen op het dak. We werkten tot de avondzon erin stond, en toen de laatste plaat vast zat, was het binnen opvallend stil en warm. Alsof de kas al wist wat ze gaan doen.</p>
<img class="afbeelding" src="images/20260406_201154_copy_1024x473.jpg" alt="Het dak van polycarbonaat in de avondzon" style="margin: 8px 0 16px;">
<p>Ook deze week: deuren eraan en een werkbank binnen. Anna stond erbij met de algemene opmerking dat de werkbank "ook wel geschikt is voor pottenbakken". Ze heeft een punt en dat vind ik spannend.</p>
<img class="afbeelding" src="images/20260404_173935_copy_1024x473.jpg" alt="De kas met de deuren eraan" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260405_173400_copy_1024x2216.jpg" alt="De kas van buiten met deuren" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260406_201227_copy_1024x2216.jpg" alt="Binnenin de kas met de werkbank" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260411_140602_copy_1024x473.jpg" alt="Aan het werk in de kas" style="margin: 8px 0 16px;">`,
      en: `<p>A greenhouse without a roof is just a wooden rack. So: polycarbonate sheets on the roof. We worked until the evening sun was gone, and when the last sheet was fastened, it was remarkably quiet and warm inside. As if the greenhouse already knew what it's going to do.</p>
<img class="afbeelding" src="images/20260406_201154_copy_1024x473.jpg" alt="The polycarbonate roof in the evening sun" style="margin: 8px 0 16px;">
<p>Also this week: doors on and a workbench inside. Anna stood there and remarked that the workbench would "also be quite suitable for pottery". She has a point, and that scares me a little.</p>
<img class="afbeelding" src="images/20260404_173935_copy_1024x473.jpg" alt="The greenhouse with its doors on" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260405_173400_copy_1024x2216.jpg" alt="The greenhouse seen from outside" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260406_201227_copy_1024x2216.jpg" alt="Inside the greenhouse with the workbench" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260411_140602_copy_1024x473.jpg" alt="Working inside the greenhouse" style="margin: 8px 0 16px;">`
    }
  },
  {
    slug: "kas-frezen-en-panelen",
    titel: { nl: "Frezen en panelen zetten", en: "Routing and fitting the panels" },
    datum: "2026-04-26",
    auteur: "Bertus",
    afbeelding: "images/20260423_175358_copy_1024x2216.jpg",
    inleiding: {
      nl: "Stofmasker, bril, gehoorbescherming: frezen tot de avond erop zat. Daarna paneel voor paneel polycarbonaat in de wanden.",
      en: "Dust mask, safety glasses, ear defenders: routing until the evening ran out. Then polycarbonate panels into the walls, one by one."
    },
    tekst: {
      nl: `<p>Dit is het deel waar niemand foto's van wil maken en wij dus toch foto's van maken: frezen. Stofmasker op, veiligheidsbril op, gehoorbescherming op — en dan heel veel hout, tot de avonden op 15 april erop zaten.</p>
<img class="afbeelding" src="images/20260415_165002_copy_1024x2216.jpg" alt="Frezen, volledig uitgerust met masker en bril" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260417_205209_copy_1024x2216.jpg" alt="De werkbank met gereedschap, 's avonds" style="margin: 8px 0 16px;">
<p>Daarna de panelen: polycarbonaat in alle ramen en wanden, paneel voor paneel. Elk paneel past maar op één manier, en dat ontdekte ik op de gebruikelijke manier. Op 25 april stond de kas er bijna: hout, polycarbonaat, en een deur die open kan. Nog niet af — maar vanaf nu groeit hier iets.</p>
<img class="afbeelding" src="images/20260421_185058_copy_1024x473.jpg" alt="Panelen in de wanden, met zicht op de tuin" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260423_175358_copy_1024x2216.jpg" alt="De kas met de panelen erin" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260425_173409_copy_1024x2216.jpg" alt="De deur op een kier" style="margin: 8px 0 16px;">`,
      en: `<p>This is the part nobody wants photos of, so of course we took photos: routing. Dust mask on, safety glasses on, ear protection on — and a lot of wood, until the evenings of April 15th ran out.</p>
<img class="afbeelding" src="images/20260415_165002_copy_1024x2216.jpg" alt="Routing wood, fully geared up with mask and glasses" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260417_205209_copy_1024x2216.jpg" alt="The workbench with tools, in the evening" style="margin: 8px 0 16px;">
<p>Then the panels: polycarbonate in all the windows and walls, panel by panel. Every panel only fits one way, which I discovered in the usual way. By April 25th the greenhouse almost stood there: wood, polycarbonate, and a door that opens. Not finished yet — but from now on, things grow here.</p>
<img class="afbeelding" src="images/20260421_185058_copy_1024x473.jpg" alt="Panels in the walls, garden in view" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260423_175358_copy_1024x2216.jpg" alt="The greenhouse with its panels in place" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260425_173409_copy_1024x2216.jpg" alt="The door ajar" style="margin: 8px 0 16px;">`
    }
  },
  {
    slug: "kas-aarde-en-bakken",
    titel: { nl: "Aarde erin, bakken erin", en: "Soil in, beds in" },
    datum: "2026-04-30",
    auteur: "Bertus",
    afbeelding: "images/20260429_202053_copy_1024x2216.jpg",
    inleiding: {
      nl: "De kas krijgt een bodem en de eerste bakken. Nog niet af — maar het wordt heel erg een kas.",
      en: "The greenhouse gets a floor and its first growing beds. Not finished yet — but it's becoming very much a greenhouse."
    },
    tekst: {
      nl: `<p>Laatste week april: de kas moest van binnen nog een bodem krijgen. Aarde erin, egaliseren, en daarna de bakken — leeg nog, maar met een belofte. Gereedschap aan de muur, deur op een kier, en toen stonden we er samen in te kijken.</p>
<img class="afbeelding" src="images/20260427_131830_copy_1024x2216.jpg" alt="Verse aarde in de kas" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260428_202034_copy_1024x2216.jpg" alt="De vloer klaar, met gereedschap ernaast" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260429_202013_copy_1024x2216.jpg" alt="De bakken geplaatst" style="margin: 8px 0 16px;">
<p>Af is hij nog niet — er staat nog een lijstje. Maar van sleuf tot bakken in zes weken, in de avonden en de weekenden ertussen, is niet slecht. Het vervolg volgt op de blog.</p>
<img class="afbeelding" src="images/20260429_202053_copy_1024x2216.jpg" alt="De ingerichte kas met bakken" style="margin: 8px 0 16px;">`,
      en: `<p>Last week of April: the greenhouse still needed a floor inside. Soil in, levelled out, then the growing beds — still empty, but full of promise. Tools on the wall, door ajar, and then we just stood there looking at it together.</p>
<img class="afbeelding" src="images/20260427_131830_copy_1024x2216.jpg" alt="Fresh soil inside the greenhouse" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260428_202034_copy_1024x2216.jpg" alt="The finished floor, tools alongside" style="margin: 8px 0 16px;">
<img class="afbeelding" src="images/20260429_202013_copy_1024x2216.jpg" alt="The growing beds in place" style="margin: 8px 0 16px;">
<p>It's not finished yet — there's still a list. But from trench to growing beds in six weeks, in the evenings and weekends in between, isn't bad at all. To be continued on the blog.</p>
<img class="afbeelding" src="images/20260429_202053_copy_1024x2216.jpg" alt="The greenhouse, furnished and ready" style="margin: 8px 0 16px;">`
    }
  }
];

// Zet de kas-posts vooraan in de bloglijst.
BLOGPOSTS.unshift(...KASPOSTS);
