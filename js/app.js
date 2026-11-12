// Cruquius Crafts site: routering, taalkeuze en weergave.

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

function whatsappLink(tekst) {
  return "https://wa.me/" + SITE.whatsappNummer + "?text=" + encodeURIComponent(tekst);
}

const TEKSTEN = {
  bestel: { nl: "Hallo Cruquius Crafts! Ik wil graag bestellen: ", en: "Hi Cruquius Crafts! I'd like to order: " },
  workshopAanmelding: { nl: "Hallo! Ik meld me aan voor de workshop '", en: "Hi! I'd like to sign up for the workshop '" },
  op: { nl: "' op ", en: "' on " },
  groet: { nl: "Hallo Cruquius Crafts!", en: "Hi Cruquius Crafts!" },
  bannerAlt: { nl: "Cruquius Crafts — lokaal, ambachtelijk, met passie", en: "Cruquius Crafts — local, artisanal, with passion" },
  bestelKnop: { nl: "Bestel via WhatsApp", en: "Order via WhatsApp" },
  meldKnop: { nl: "Meld je aan", en: "Sign up" },
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
    nl: "Alles is handgemaakt en in beperkte hoeveelheid. Bestellen doe je via WhatsApp — we sturen je dan de betaal- en afhaalmogelijkheden. Ophalen in " + SITE.plaats.nl + " of afspreken.",
    en: "Everything is handmade and in limited supply. To order, send us a WhatsApp message — we'll send you the payment and pickup options. Pick up in " + SITE.plaats.en + " or arrange to meet."
  },
  ceramiekKop: { nl: "🏺 Ceramiek", en: "🏺 Ceramics" },
  keukenKop: { nl: "🫙 Uit de keuken", en: "🫙 From the kitchen" },
  workshopsKop: { nl: "Workshops & evenementen", en: "Workshops & events" },
  workshopsIntro: {
    nl: "Kom langs op de boerderij. Groepen zijn klein, dus meld je op tijd aan via WhatsApp.",
    en: "Come visit the farm. Groups are small, so sign up in time via WhatsApp."
  },
  blogKop: { nl: "Blog", en: "Blog" },
  overKop: { nl: "Over ons", en: "About us" },
  verhaalLeeg: { nl: "Dit verhaal bestaat niet (meer).", en: "This story no longer exists." },
  nietGevonden: {
    nl: "Pagina niet gevonden. <a href=\"#/\">Terug naar home</a>",
    en: "Page not found. <a href=\"#/\">Back to home</a>"
  },
  contactVraag: { nl: "Vragen of iets bestellen?", en: "Questions or want to order?" },
  contactVia: { nl: "Stuur een bericht via ", en: "Send a message via " },
  contactOf: { nl: " of mail naar ", en: " or email " },
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
  footerTag: { nl: "Handgemaakt · Seizoensgebonden · Lokaal", en: "Handmade · Seasonal · Local" },
  bertKop: { nl: "Bert — hout &amp; keuken", en: "Bert — wood &amp; kitchen" },
  bertTekst: {
    nl: "Spiegels en snijplanken uit eigen zaagwerk, fermenten, siropen van echte wortels en fruit — tot de pot dicht moet.",
    en: "Mirrors and cutting boards from his own saw work, ferments, syrups from real roots and fruit — until the lid goes on."
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
          ? `<a class="knop groen klein" target="_blank" rel="noopener" href="${whatsappLink(t(TEKSTEN.bestel) + t(p.naam) + " (" + euro(p.prijs) + ").")}">${t(TEKSTEN.bestelKnop)}</a>`
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
          ? `<a class="knop primair klein" target="_blank" rel="noopener" href="${whatsappLink(t(TEKSTEN.workshopAanmelding) + t(w.naam) + t(TEKSTEN.op) + nldatum(w.datum) + ".")}">${t(TEKSTEN.meldKnop)}</a>`
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

    <section class="sectie">
      <div class="sectie-kop"><h2>${t(TEKSTEN.nieuwInWinkel)}</h2><a href="#/winkel">${t(TEKSTEN.allesBekijken)}</a></div>
      <div class="grid">${inDeShop.map(productKaart).join("")}</div>
    </section>

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
    </section>`;
};

views.winkel = function () {
  const ceramiek = PRODUCTEN.filter(p => p.soort === "ceramiek");
  const keuken = PRODUCTEN.filter(p => p.soort === "keuken");
  return `
    <div class="sectie-kop"><h2>${t(TEKSTEN.winkelKop)}</h2></div>
    <p style="max-width:640px; color:var(--grijs); margin-bottom:20px;">
      ${t(TEKSTEN.winkelIntro)}</p>
    <h2 style="font-size:1.15rem; margin-bottom:12px;">${t(TEKSTEN.ceramiekKop)}</h2>
    <div class="grid">${ceramiek.map(productKaart).join("")}</div>
    <h2 style="font-size:1.15rem; margin:28px 0 12px;">${t(TEKSTEN.keukenKop)}</h2>
    <div class="grid">${keuken.map(productKaart).join("")}</div>`;
};

views.workshops = function () {
  return `
    <div class="sectie-kop"><h2>${t(TEKSTEN.workshopsKop)}</h2></div>
    <p style="max-width:640px; color:var(--grijs); margin-bottom:20px;">
      ${t(TEKSTEN.workshopsIntro)}</p>
    <div class="grid">${WORKSHOPS.map(workshopKaart).join("")}</div>`;
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
      <p>Hoi, wij zijn <strong>Bert en Anna</strong>! We wonen in De Cruquius, in de schaduw
      van het gemaal, en we kunnen niet stilzitten.</p>
      <p>Wat we ook doen, het draait om hetzelfde: <strong>dingen zelf maken</strong>.
      Bert zaagt, freest en lijmt hout tot spiegels en snijplanken, en fermenteert van alles
      tot Anna zegt dat de pot dicht moet. Hij trekt ook siropen van echte wortels en fruit,
      maar dat is er maar één van. Anna draait keramiek: mokken en schaaltjes waar je
      liever uit drinkt dan uit je gewone servies.</p>
      <p>Veel komt van ons eigen erf. De rest halen we zo dichtbij en eerlijk mogelijk.
      Geen troep, wel voldoening.</p>
      <p>Op deze site laten we zien wat we maken en hoe. Soms lukt het in één keer,
      soms niet, en dat vertellen we dan ook. Wil je weten wat we nu onder handen hebben?
      Blijf gerust rondkijken.</p>
      <p class="slotzin"><em>We maken alleen wat we leuk vinden, dus soms is iets op.
      Dat is geen foutje, dat is de bedoeling.</em></p>
      <div class="contact-blok">
        <strong>${t(TEKSTEN.contactVraag)}</strong><br>
        ${t(TEKSTEN.contactVia)}<a target="_blank" rel="noopener" href="${whatsappLink(t(TEKSTEN.groet))}">WhatsApp</a>
        ${t(TEKSTEN.contactOf)}<a href="mailto:${SITE.email}">${SITE.email}</a>.
      </div>
    </div>`;
};

views.contact = views.over;


const OVER_EN = `
    <div class="sectie-kop"><h2>${TEKSTEN.overKop.en}</h2></div>
    <div class="artikel">
      <p>Hi, we're <strong>Bert and Anna</strong>! We live in De Cruquius, in the shadow
      of the pumping station, and we can't sit still.</p>
      <p>Whatever we do, it always comes down to the same thing: <strong>making things ourselves</strong>.
      Bert saws, routs and glues wood into mirrors and cutting boards, and ferments everything
      until Anna says the jar needs sealing. He also makes syrups from real roots and fruit,
      but that's just one of many things. Anna throws pottery: mugs and little bowls you'd
      rather drink from than your everyday tableware.</p>
      <p>Much of it comes from our own plot. The rest we source as locally and honestly as we can.
      No junk, just satisfaction.</p>
      <p>On this site we show what we make and how. Sometimes it works on the first try,
      sometimes it doesn't, and we tell you about that too. Want to know what we're working
      on right now? Feel free to look around.</p>
      <p class="slotzin"><em>We only make what we enjoy, so sometimes something is sold out.
      That's not a mistake, that's the idea.</em></p>
      <div class="contact-blok">
        <strong>${t(TEKSTEN.contactVraag)}</strong><br>
        ${t(TEKSTEN.contactVia)}<a target="_blank" rel="noopener" href="${whatsappLink(t(TEKSTEN.groet))}">WhatsApp</a>
        ${t(TEKSTEN.contactOf)}<a href="mailto:${SITE.email}">${SITE.email}</a>.
      </div>
    </div>`;

views.overEn = function () {
  return OVER_EN;
};

function render() {
  const hash = location.hash.replace(/^#\/?/, "");
  const delen = hash.split("/");
  const app = document.getElementById("app");

  let html;
  if (hash === "") html = views.home();
  else if (delen[0] === "winkel") html = views.winkel();
  else if (delen[0] === "workshops") html = views.workshops();
  else if (delen[0] === "blog" && delen[1]) html = views.blogPost(delen[1]);
  else if (delen[0] === "blog") html = views.blog();
  else if (delen[0] === "over" || delen[0] === "contact") html = taal === "en" ? views.overEn() : views.over();
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
