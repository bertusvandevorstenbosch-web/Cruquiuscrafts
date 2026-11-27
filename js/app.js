// Cruquius Crafts site: routering, taalkeuze en weergave.

// Alle blogposts op datum zetten (nieuwste eerst), ongeacht in welke volgorde
// de postbestanden ze toevoegen. ISO-datums sorteren gewoon alfabetisch.
BLOGPOSTS.sort((a, b) => (a.datum < b.datum ? 1 : a.datum > b.datum ? -1 : 0));

function huidigeTaal() {
  try {
    return localStorage.getItem("cruquiuscrafts-taal") || "nl";
  } catch (e) {
    return "nl";
  }
}

let taal = huidigeTaal();

function t(x) {
  if (x && typeof x === "object") return x[taal] || x.nl;
  return x;
}

function locale() {
  return taal === "en" ? "en-US" : "nl-NL";
}

function euro(bedrag) {
  return "€ " + bedrag.toLocaleString(locale(), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function nldatum(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString(locale(), { day: "numeric", month: "long", year: "numeric" });
}

// Contactblok: formulier + direct-mailen-regel. Als functie zodat de labels
// mee-wisselen van taal (het Engelse Over ons is een const die maar één keer
// wordt opgebouwd, dus het formulier mag daar niet statisch in staan).
function contactBlok() {
  return `
      <div class="contact-blok">
        <strong>${t(TEKSTEN.contactVraag)}</strong>
        ${contactFormulier(t(TEKSTEN.formulierOnderwerpContact), t(TEKSTEN.formulierBerichtContact), "", false)}
        <p class="formulier-alt">${t(TEKSTEN.contactDirect)}<a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
      </div>`;
}

// Contactformulier via FormSubmit: berichten komen aan in SITE.email.
// Het telefoonnummer staat nergens meer op de site.
function contactFormulier(onderwerp, berichtLabel, voorkeurBericht, metFoto) {
  return `
    <form class="contact-formulier" action="https://formsubmit.co/${SITE.email}" method="POST">
      <input type="hidden" name="_subject" value="${onderwerp}">
      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="https://cruquiuscrafts.nl/#/bedankt">
      <input type="text" name="_honey" style="display:none;" tabindex="-1" autocomplete="off">
      <div class="formulier-rij">
        <label>${t(TEKSTEN.formulierNaam)}
          <input type="text" name="naam" required>
        </label>
        <label>${t(TEKSTEN.formulierEmail)}
          <input type="email" name="email" required>
        </label>
      </div>
      <label>${berichtLabel}
        <textarea name="bericht" rows="6" required>${voorkeurBericht || ""}</textarea>
      </label>
      ${metFoto ? `<label>${t(TEKSTEN.formulierFoto)}
        <input type="file" name="attachment" accept="image/*">
      </label>` : ""}
      <button class="knop groen" type="submit">${t(TEKSTEN.formulierVerstuur)}</button>
      <p class="formulier-noot">${t(TEKSTEN.formulierToelichting)}</p>
    </form>`;
}

const TEKSTEN = {
  bestelOnderwerp: { nl: "Bestelling: ", en: "Order: " },
  aanmeldOnderwerp: { nl: "Aanmelding workshop: ", en: "Workshop sign-up: " },
  bannerAlt: { nl: "Cruquius Crafts — lokaal, ambachtelijk, met passie", en: "Cruquius Crafts — local, artisanal, with passion" },
  bestelKnop: { nl: "Bestel per mail", en: "Order by email" },
  meldKnop: { nl: "Meld je aan", en: "Sign up" },
  formulierNaam: { nl: "Je naam", en: "Your name" },
  formulierEmail: { nl: "Je e-mailadres", en: "Your email address" },
  formulierBerichtBuurt: { nl: "Je verhaal", en: "Your story" },
  formulierBerichtContact: { nl: "Je bericht", en: "Your message" },
  formulierFoto: { nl: "Foto (optioneel)", en: "Photo (optional)" },
  formulierVerstuur: { nl: "Verstuur", en: "Send" },
  formulierToelichting: {
    nl: "Je bericht komt direct in onze mailbox terecht — we mailen je terug.",
    en: "Your message lands straight in our mailbox — we'll email you back."
  },
  formulierOnderwerpBuurt: { nl: "Buurtverhaal via de website", en: "Neighbourhood story via the website" },
  formulierOnderwerpContact: { nl: "Bericht via de website", en: "Message via the website" },
  contactDirect: { nl: "Liever direct mailen? ", en: "Prefer to email directly? " },
  bedanktKop: { nl: "Bedankt! 🌱", en: "Thank you! 🌱" },
  bedanktTekst: {
    nl: "Je bericht is onderweg naar onze mailbox. We schrijven terug zodra de kippen het toelaten.",
    en: "Your message is on its way to our mailbox. We'll write back as soon as the chickens allow it."
  },
  uitverkocht: { nl: "uitverkocht", en: "sold out" },
  vol: { nl: "vol", en: "full" },
  soort: {
    ceramiek: { nl: "ceramiek", en: "ceramics" },
    keuken: { nl: "keuken", en: "kitchen" }
  },
  perPersoon: { nl: "per persoon", en: "per person" },
  plekken: { nl: "plekken", en: "spots" },
  bekijkWinkel: { nl: "Bekijk de winkel", en: "Visit the shop" },
  nieuwInWinkel: { nl: "Nieuw in de winkel", en: "New in the shop" },
  allesBekijken: { nl: "alles bekijken →", en: "view all →" },
  vanHetBlog: { nl: "Van het blog", en: "From the blog" },
  alleVerhalen: { nl: "alle verhalen →", en: "all stories →" },
  terugNaarBlog: { nl: "← alle verhalen", en: "← all stories" },
  winkelKop: { nl: "Winkel", en: "Shop" },
  winkelIntro: {
    nl: "Alles is handgemaakt en in beperkte hoeveelheid. Bestellen doe je per mail — we sturen je dan de betaal- en afhaalmogelijkheden. Ophalen in " + SITE.plaats.nl + " of afspreken.",
    en: "Everything is handmade and in limited supply. To order, just email us — we'll send you the payment and pickup options. Pick up in " + SITE.plaats.en + " or arrange to meet."
  },
  ceramiekKop: { nl: "🏺 Ceramiek", en: "🏺 Ceramics" },
  keukenKop: { nl: "🫙 Uit de keuken", en: "🫙 From the kitchen" },
  workshopsKop: { nl: "Workshops & evenementen", en: "Workshops & events" },
  workshopsIntro: {
    nl: "Kom langs op de boerderij. Groepen zijn klein, dus meld je op tijd aan per mail.",
    en: "Come visit the farm. Groups are small, so sign up in time by email."
  },
  blogKop: { nl: "Blog", en: "Blog" },
  overKop: { nl: "Over ons", en: "About us" },
  verhaalLeeg: { nl: "Dit verhaal bestaat niet (meer).", en: "This story no longer exists." },
  winkelLeeg: { nl: "De winkel is nog even leeg. Zodra de werkplaats of de keuken iets nieuws oplevert, vind je het hier — of stel gerust alvast iets voor per mail.", en: "The shop is empty for now. As soon as the workshop or the kitchen produces something new, you'll find it here — or feel free to already reach out by email." },
  workshopsLeeg: { nl: "Er staat nog geen workshop gepland. Zodra we er een geven, lees je het hier als eerste.", en: "No workshop is scheduled yet. As soon as we host one, you'll read about it here first." },
  buurtKop: { nl: "Van de buurt", en: "From the neighbourhood" },
  buurtIntro: {
    nl: "Wij zijn niet de enigeen die met handen bezig zijn. Op deze pagina laten we buren en bezoekers aan het woord: wat heb jij gemaakt, gekweekt of gebrouwen?",
    en: "We're not the only ones busy making things. On this page, neighbours and visitors get the floor: what have you made, grown or brewed?"
  },
  buurtLeeg: {
    nl: "Ook iets gemaakt of gekweekt waar je trots op bent? Vul hieronder het formulier in — van moestuin tot werkbank, we plaatsen het graag.",
    en: "Made or grown something you're proud of? Fill in the form below — from vegetable garden to workbench, we'd love to share it."
  },
  buurtBericht: {
    nl: "Hallo! Ik heb iets gemaakt of gekweekt en wil graag mijn verhaal delen op Van de buurt.",
    en: "Hi! I made or grew something and would love to share my story on From the neighbourhood."
  },
  buurtThuisKop: { nl: "Ook iets gemaakt of gekweekt?", en: "Made or grown something yourself?" },
  buurtThuisTekst: {
    nl: "De buurt maakt mee. Deel je verhaal op onze pagina Van de buurt.",
    en: "The neighbourhood makes things too. Share your story on our From the neighbourhood page."
  },
  nietGevonden: {
    nl: "Pagina niet gevonden. <a href=\"#/\">Terug naar home</a>",
    en: "Page not found. <a href=\"#/\">Back to home</a>"
  },
  contactVraag: { nl: "Vragen of iets bestellen?", en: "Questions or want to order?" },
  buurtThuisKnop: { nl: "Deel je verhaal →", en: "Share your story →" },
  nav: {
    home: { nl: "Home", en: "Home" },
    winkel: { nl: "Winkel", en: "Shop" },
    workshops: { nl: "Workshops", en: "Workshops" },
    blog: { nl: "Blog", en: "Blog" },
    over: { nl: "Over ons", en: "About us" },
    contact: { nl: "Contact", en: "Contact" }
  },
  footerOndertitel: { nl: "urban boerderij in Cruquius", en: "urban farm in Cruquius" },
  footerAppLink: { nl: "Onze moestuin-app", en: "Our garden app" },
  footerTag: { nl: "Handgemaakt · Seizoensgebonden · Soms mislukt", en: "Handmade · Seasonal · Failures included" },
  bertKop: { nl: "Bert — hout &amp; keuken", en: "Bert — wood &amp; kitchen" },
  bertTekst: {
    nl: "Spiegels en snijplanken uit eigen zaagwerk, fermenten, siropen van echte wortels en fruit — tot de pot dicht moet. Mislukte experimenten? Die lees je gewoon als blogpost.",
    en: "Mirrors and cutting boards from his own saw work, ferments, syrups from real roots and fruit — until the lid goes on. Failed experiments? Those live on as blog posts."
  },
  annaKop: { nl: "Anna — keramiek", en: "Anna — ceramics" },
  annaTekst: {
    nl: "Handgedraaide mokken en schaaltjes waar je liever uit drinkt dan uit je gewone servies. Elk stuk uniek.",
    en: "Hand-thrown mugs and little bowls you'd rather drink from than your everyday tableware. Every piece unique."
  }
};
function productKaart(p) {
  return `
    <div class="kaart">
      <img class="afbeelding" src="${p.afbeelding}" alt="${t(p.naam)}">
      <div class="inhoud">
        <span class="badge ${p.soort === "ceramiek" ? "terracotta" : ""}">${t(TEKSTEN.soort[p.soort])}</span>
        <h3>${t(p.naam)}</h3>
        <p class="beschrijving">${t(p.beschrijving)}</p>
        <div class="prijs">${euro(p.prijs)}</div>
        ${p.opVoorraad
          ? `<a class="knop groen klein" href="mailto:${SITE.email}?subject=${encodeURIComponent(t(TEKSTEN.bestelOnderwerp) + t(p.naam))}">${t(TEKSTEN.bestelKnop)}</a>`
          : `<span class="badge uit">${t(TEKSTEN.uitverkocht)}</span>`}
      </div>
    </div>`;
}

function workshopKaart(w) {
  return `
    <div class="kaart workshop">
      <img class="afbeelding" src="images/workshop-${w.type}.svg" alt="${t(w.naam)}">
      <div class="inhoud">
        <div class="meta-rij">
          <span class="badge ${w.type === "ceramiek" ? "terracotta" : ""}">${t(TEKSTEN.soort[w.type])}</span>
          <span class="badge">${nldatum(w.datum)}</span>
          <span class="badge">${t(w.duur)}</span>
        </div>
        <h3>${t(w.naam)}</h3>
        <p class="beschrijving">${t(w.beschrijving)}</p>
        <div class="prijs">${euro(w.prijs)} <small style="color:var(--grijs); font-weight:400;">${t(TEKSTEN.perPersoon)} · ${w.plekken} ${t(TEKSTEN.plekken)}</small></div>
        ${w.opVoorraad
          ? `<a class="knop primair klein" href="mailto:${SITE.email}?subject=${encodeURIComponent(t(TEKSTEN.aanmeldOnderwerp) + t(w.naam))}">${t(TEKSTEN.meldKnop)}</a>`
          : `<span class="badge uit">${t(TEKSTEN.vol)}</span>`}
      </div>
    </div>`;
}

const views = {};

views.home = function () {
  const laatste = BLOGPOSTS.slice(0, 2);
  const inDeShop = PRODUCTEN.filter(p => p.opVoorraad).slice(0, 3);
  return `
    <section class="banner-sectie">
      <img class="banner" src="images/banner.png" alt="${t(TEKSTEN.bannerAlt)}">
      <div class="hero-knoppen">
        <a class="knop primair" href="#/winkel">${t(TEKSTEN.bekijkWinkel)}</a>
        <a class="knop groen" href="#/workshops">${t(TEKSTEN.nav.workshops)}</a>
      </div>
    </section>

    <section class="sectie">
      <div class="twee-kolommen">
        <div class="kaart persoon">
          <div class="avatar">🪓</div>
          <h3>${t(TEKSTEN.bertKop)}</h3>
          <p>${t(TEKSTEN.bertTekst)}</p>
        </div>
        <div class="kaart persoon">
          <div class="avatar">🏺</div>
          <h3>${t(TEKSTEN.annaKop)}</h3>
          <p>${t(TEKSTEN.annaTekst)}</p>
        </div>
      </div>
    </section>

    ${inDeShop.length ? `
    <section class="sectie">
      <div class="sectie-kop"><h2>${t(TEKSTEN.nieuwInWinkel)}</h2><a href="#/winkel">${t(TEKSTEN.allesBekijken)}</a></div>
      <div class="grid">${inDeShop.map(productKaart).join("")}</div>
    </section>` : ""}

    <section class="sectie">
      <div class="sectie-kop"><h2>${t(TEKSTEN.vanHetBlog)}</h2><a href="#/blog">${t(TEKSTEN.alleVerhalen)}</a></div>
      <div class="grid">
        ${laatste.map(p => `
          <a class="kaart post-kaart" href="#/blog/${p.slug}" style="text-decoration:none; color:inherit;">
            <img class="afbeelding" src="${p.afbeelding}" alt="">
            <div class="inhoud">
              <div class="datum">${nldatum(p.datum)}</div>
              <h3>${t(p.titel)}</h3>
              <p class="beschrijving">${t(p.inleiding)}</p>
            </div>
          </a>`).join("")}
      </div>
    </section>

    <section class="sectie">
      <div class="contact-blok" style="text-align:center;">
        <h2 style="margin-bottom:6px;">${t(TEKSTEN.buurtThuisKop)}</h2>
        <p style="margin-bottom:14px;">${t(TEKSTEN.buurtThuisTekst)}</p>
        <a class="knop groen" href="#/buurt">${t(TEKSTEN.buurtThuisKnop)}</a>
      </div>
    </section>`;
};

views.winkel = function () {
  const ceramiek = PRODUCTEN.filter(p => p.soort === "ceramiek");
  const keuken = PRODUCTEN.filter(p => p.soort === "keuken");
  return `
    <div class="sectie-kop"><h2>${t(TEKSTEN.winkelKop)}</h2></div>
    <p style="max-width:640px; color:var(--grijs); margin-bottom:20px;">
      ${t(TEKSTEN.winkelIntro)}</p>
    ${PRODUCTEN.length === 0 ? `<div class="leeg">${t(TEKSTEN.winkelLeeg)}</div>` : `
    <h2 style="font-size:1.15rem; margin-bottom:12px;">${t(TEKSTEN.ceramiekKop)}</h2>
    <div class="grid">${ceramiek.map(productKaart).join("")}</div>
    <h2 style="font-size:1.15rem; margin:28px 0 12px;">${t(TEKSTEN.keukenKop)}</h2>
    <div class="grid">${keuken.map(productKaart).join("")}</div>`}`;
};

views.workshops = function () {
  return `
    <div class="sectie-kop"><h2>${t(TEKSTEN.workshopsKop)}</h2></div>
    <p style="max-width:640px; color:var(--grijs); margin-bottom:20px;">
      ${t(TEKSTEN.workshopsIntro)}</p>
    ${WORKSHOPS.length ? `<div class="grid">${WORKSHOPS.map(workshopKaart).join("")}</div>` : `<div class="leeg">${t(TEKSTEN.workshopsLeeg)}</div>`}`;
};

views.buurt = function () {
  const posts = BLOGPOSTS.filter(p => p.buurt);
  return `
    <div class="sectie-kop"><h2>${t(TEKSTEN.buurtKop)}</h2></div>
    <p style="max-width:640px; color:var(--grijs); margin-bottom:20px;">
      ${t(TEKSTEN.buurtIntro)}</p>
    ${posts.length ? `
    <div class="grid">
      ${posts.map(p => `
        <a class="kaart post-kaart" href="#/blog/${p.slug}" style="text-decoration:none; color:inherit;">
          <img class="afbeelding" src="${p.afbeelding}" alt="">
          <div class="inhoud">
            <div class="datum">${nldatum(p.datum)} · ${p.auteur}</div>
            <h3>${t(p.titel)}</h3>
            <p class="beschrijving">${t(p.inleiding)}</p>
          </div>
        </a>`).join("")}
    </div>` : ""}
    <div class="leeg" style="margin-top: ${posts.length ? "26px" : "0"};">
      <p>${t(TEKSTEN.buurtLeeg)}</p>
      ${contactFormulier(t(TEKSTEN.formulierOnderwerpBuurt), t(TEKSTEN.formulierBerichtBuurt), t(TEKSTEN.buurtBericht), true)}
    </div>`;
};

views.blog = function () {
  return `
    <div class="sectie-kop"><h2>${t(TEKSTEN.blogKop)}</h2></div>
    <div class="grid">
      ${BLOGPOSTS.map(p => `
        <a class="kaart post-kaart" href="#/blog/${p.slug}" style="text-decoration:none; color:inherit;">
          <img class="afbeelding" src="${p.afbeelding}" alt="">
          <div class="inhoud">
            <div class="datum">${nldatum(p.datum)} · ${p.auteur}</div>
            <h3>${t(p.titel)}</h3>
            <p class="beschrijving">${t(p.inleiding)}</p>
          </div>
        </a>`).join("")}
    </div>`;
};

views.blogPost = function (slug) {
  const p = BLOGPOSTS.find(x => x.slug === slug);
  if (!p) return `<div class="leeg">${t(TEKSTEN.verhaalLeeg)}</div>`;
  return `
    <article class="artikel">
      <a class="terug" href="#/blog">${t(TEKSTEN.terugNaarBlog)}</a>
      <h1>${t(p.titel)}</h1>
      <div class="meta">${nldatum(p.datum)} · ${p.auteur}</div>
      <img class="afbeelding" src="${p.afbeelding}" alt="">
      <div class="tekst">${t(p.tekst)}</div>
    </article>`;
};

views.over = function () {
  return `
    <div class="sectie-kop"><h2>${t(TEKSTEN.overKop)}</h2></div>
    <div class="artikel">
      <p>Wij zijn <strong>Bert en Anna</strong>. Op 460 m² in De Cruquius kweken, fermenteren,
      bouwen en maken we van alles, en onder de naam Cruquius Crafts laten we zien hoe dat gaat.
      Inclusief de dingen die mislukken. <strong>Vooral die.</strong></p>
      <p>Bert doet de projecten: een kas die ook kippenhok is, sojasaus die vijf maanden later
      begon dan gepland, een tomatenjungle die hem "gewoon overkwam", jam van de sloot achter
      het huis en zelfgemaakte frisdranksiropen. Anna maakt keramiek en zorgt ervoor dat het
      ook mooi wordt.</p>
      <p>We zijn geen boeren en geen professionals, alleen twee mensen met een grotere
      achtertuin dan verstandig is. Wat we leren, delen we hier. Anna is Amerikaans en haar
      familie leest mee, dus je vindt alles in het Nederlands én het Engels.</p>
            <p>Waarom doen we dit? Eigenlijk voor drie redenen:</p>
      <ol>
        <li><strong>We willen gezonder leven</strong> &mdash; en ja, dat begon met zelfgemaakte
        cider, dat moet je dan maar even voor lief nemen.</li>
        <li><strong>We willen minder afhankelijk van de winkel zijn.</strong> Wat bleek: heel veel is
        verrassend goed zelf te maken &mdash; zonder E-nummers, zonder kleurstoffen, zonder
        ingredi&euml;nten waarvan niemand weet wat ze doen. En als je het niet kunt uitspreken, is het
        meestal ook niet goed voor je.</li>
        <li><strong>We hopen anderen te motiveren hetzelfde te doen.</strong> En dus delen we niet
        alleen wat lukt, maar &oacute;&oacute;k onze missers &mdash; zodat jij niet dezelfde fouten
        maakt als wij. Lachen om onze fouten mag trouwens ook.</li>
      </ol>
      <p>Dan de rest van het team: <strong>Ollie</strong> (hond, houdt toezicht),
      <strong>Miles</strong> (kat, houdt zich erbuiten) en <strong>vijf kippen</strong>.
      Lucy had even pensioen genomen, maar is weer aan het werk.</p>
      <p class="slotzin"><em>Van zaadje tot sambal.</em></p>
      ${contactBlok()}
    </div>`;
};

views.contact = views.over;

views.bedankt = function () {
  return `
    <div class="leeg">
      <h2>${t(TEKSTEN.bedanktKop)}</h2>
      <p style="margin-top:10px;">${t(TEKSTEN.bedanktTekst)}</p>
      <p style="margin-top:14px;"><a class="knop groen klein" href="#/">${t(TEKSTEN.nav.home)}</a></p>
    </div>`;
};


const OVER_EN = `
    <div class="sectie-kop"><h2>${TEKSTEN.overKop.en}</h2></div>
    <div class="artikel">
      <p>We are <strong>Bert and Anna</strong>. On about 5,000 square feet in De Cruquius we grow, ferment,
      build and make all kinds of things — and as Cruquius Crafts we show how it's done,
      including the things that fail. <strong>Especially those.</strong></p>
      <p>Bert does the projects: a greenhouse that doubles as a chicken coop, soy sauce that
      started five months later than planned, a tomato jungle that "just sort of happened",
      jam from whatever grows along the ditch out back, and homemade soda syrups. Anna makes ceramics
      and makes sure it all looks good too.</p>
      <p>We're not farmers and not professionals — just two people with a bigger back garden
      than is sensible. What we learn, we share here. Anna is American and her family reads
      along, so you'll find everything in Dutch and English.</p>
            <p>Why do we do this? Three reasons:</p>
      <ol>
        <li><strong>We want to live healthier</strong> &mdash; and yes, that apparently started with
        homemade cider, we're choosing not to see the irony.</li>
        <li><strong>We want to depend less on the supermarket.</strong> Turns out a surprising amount
        is very makeable at home &mdash; no E-numbers, no colorings, no ingredients you can't
        pronounce. And if you can't pronounce it, it's usually not good for you either.</li>
        <li><strong>We hope to inspire others to do the same.</strong> Which is why we share not only
        what works, but also our mistakes &mdash; so you don't have to make the same ones we did.
        Laughing at our mistakes is allowed too.</li>
      </ol>
      <p>As for the rest of the team: <strong>Ollie</strong> (dog, supervises),
      <strong>Miles</strong> (cat, stays out of it) and <strong>five chickens</strong>.
      Lucy had even taken early retirement, but is back at work.</p>
      <p class="slotzin"><em>From seed to sambal.</em></p>
    </div>`;

views.overEn = function () {
  return OVER_EN + contactBlok();
};

function render() {
  const hash = location.hash.replace(/^#\/?/, "");
  const delen = hash.split("/");
  const app = document.getElementById("app");

  let html;
  if (hash === "") html = views.home();
  else if (delen[0] === "winkel") html = views.winkel();
  else if (delen[0] === "workshops") html = views.workshops();
  else if (delen[0] === "buurt") html = views.buurt();
  else if (delen[0] === "blog" && delen[1]) html = views.blogPost(delen[1]);
  else if (delen[0] === "blog") html = views.blog();
  else if (delen[0] === "over" || delen[0] === "contact") html = taal === "en" ? views.overEn() : views.over();
  else if (delen[0] === "bedankt") html = views.bedankt();
  else html = `<div class="leeg">${t(TEKSTEN.nietGevonden)}</div>`;

  app.innerHTML = html;
  document.querySelectorAll("#nav a").forEach(a => {
    const href = a.getAttribute("href");
    const sleutel = href.replace(/^#\//, "") || "home";
    const label = t(TEKSTEN.nav[sleutel]);
    if (label) a.textContent = label;
    a.classList.toggle("actief", href === "#/" + (delen[0] || ""));
  });
  const contactLink = document.getElementById("footer-contact");
  if (contactLink) contactLink.textContent = t(TEKSTEN.nav.contact);
  const appLink = document.getElementById("footer-app-link");
  if (appLink) appLink.textContent = t(TEKSTEN.footerAppLink);
  const ondertitel = document.getElementById("footer-ondertitel");
  if (ondertitel) ondertitel.textContent = t(TEKSTEN.footerOndertitel);
  const tag = document.getElementById("footer-tag");
  if (tag) tag.textContent = t(TEKSTEN.footerTag);
  document.documentElement.lang = taal;
  if (!(delen[0] === "blog" && delen[1])) window.scrollTo(0, 0);
}

function zetTaalKnop() {
  const knop = document.getElementById("taal-knop");
  if (!knop) return;
  knop.textContent = taal === "nl" ? "EN" : "NL";
}

document.getElementById("taal-knop").addEventListener("click", () => {
  taal = taal === "nl" ? "en" : "nl";
  try {
    localStorage.setItem("cruquiuscrafts-taal", taal);
  } catch (e) {}
  zetTaalKnop();
  render();
});

window.addEventListener("hashchange", render);
zetTaalKnop();
render();
