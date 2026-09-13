// ================================
// LANGUAGE SWITCHING
// ================================

// Create English | தமிழ் buttons
const languageSwitch = document.createElement("div");

languageSwitch.innerHTML = `
    <button id="englishBtn">English</button>
    <span>|</span>
    <button id="tamilBtn">தமிழ்</button>
`;

// Style the language switch
languageSwitch.style.display = "flex";
languageSwitch.style.alignItems = "center";
languageSwitch.style.gap = "6px";
languageSwitch.style.marginLeft = "20px";
languageSwitch.style.whiteSpace = "nowrap";

const languageButtons = languageSwitch.querySelectorAll("button");

languageButtons.forEach((button) => {
    button.style.background = "none";
    button.style.border = "none";
    button.style.color = "#f5eee0";
    button.style.cursor = "pointer";
    button.style.fontSize = "14px";
    button.style.padding = "0";
});

document.querySelector("nav").appendChild(languageSwitch);


// ================================
// LANGUAGE CONTENT
// ================================

const englishContent = {
    logo: "St. Antony's Shrine",

    nav: [
        "Home",
        "About",
        "Mass Timings",
        "Ministries",
        "Events",
        "Gallery",
        "Contact"
    ],

    welcome: "WELCOME TO",
    heroTitle: "St. Antony's Shrine",
    heroSubtitle: "A Home for Prayer, A Family in Christ",
    heroText:
        "United in faith, hope and love, following the example of St. Antony and serving God and one another.",

    joinMass: "Join Us for Mass",
    learnMore: "Learn More",

    quickInfo: [
        ["Mass Timings", "Sunday & Weekday Masses"],
        ["Confession", "Every Saturday"],
        ["Prayer Requests", "Let us pray for you"],
        ["Our Community", "A family in Christ"]
    ],

    aboutTitle: "ABOUT US",
    aboutHeading: "St. Antony's Shrine",
    aboutText:
        "St. Antony's Shrine is a place of worship, prayer and community. We come together as one family to grow in faith and live the Gospel in our daily lives.",
    aboutButton: "Our Story →",

    massSmall: "JOIN US",
    massHeading: "Mass Timings",
    massText:
        "Come together with our parish family for prayer and celebration.",

    sundayMass: "Sunday Mass",
    weekdayMass: "Weekday Mass",
    mondaySaturday: "Monday – Saturday",

    eventsSmall: "UPCOMING EVENTS",
    eventsHeading: "Be Part of Our Journey",

    event1: "St. Antony Feast",
    event2: "Youth Fellowship",
    event3: "Bible Study",

    ministriesSmall: "OUR MINISTRIES",
    ministriesHeading: "Serving Together",

    ministries: [
        "Altar Servers",
        "Legion of Mary",
        "Youth Ministry",
        "Catechism",
        "Choir",
        "Social Service"
    ],

    verse: "“For I know the plans I have for you,”",
    verseRef: "— Jeremiah 29:11",

    gallerySmall: "OUR GALLERY",
    galleryHeading: "Moments of Faith",

    footerChurch: "St. Antony's Shrine",
    footerTag: "Faith • Hope • Love",
    quickLinks: "Quick Links",
    contact: "Contact",
    location: "📍 St. Antony's Shrine"
};


const tamilContent = {
    logo: "புனித அந்தோணியார் திருத்தலம்",

    nav: [
        "முகப்பு",
        "எங்களைப் பற்றி",
        "திருப்பலி நேரங்கள்",
        "திருச்சபை பணிகள்",
        "நிகழ்வுகள்",
        "புகைப்படங்கள்",
        "தொடர்பு"
    ],

    welcome: "வரவேற்கிறோம்",
    heroTitle: "புனித அந்தோணியார் திருத்தலம்",
    heroSubtitle: "ஜெபத்திற்கான இல்லம், கிறிஸ்துவில் ஒரு குடும்பம்",
    heroText:
        "விசுவாசம், நம்பிக்கை மற்றும் அன்பில் ஒன்றிணைந்து, புனித அந்தோணியாரின் முன்மாதிரியைப் பின்பற்றி இறைவனுக்கும் ஒருவருக்கொருவருக்கும் சேவை செய்வோம்.",

    joinMass: "திருப்பலியில் கலந்து கொள்ளுங்கள்",
    learnMore: "மேலும் அறிய",

    quickInfo: [
        ["திருப்பலி நேரங்கள்", "ஞாயிறு மற்றும் வார நாட்களில்"],
        ["பாவ அறிக்கை", "ஒவ்வொரு சனிக்கிழமையும்"],
        ["ஜெப வேண்டுதல்கள்", "உங்களுக்காக ஜெபிப்போம்"],
        ["நமது சமூகம்", "கிறிஸ்துவில் ஒரு குடும்பம்"]
    ],

    aboutTitle: "எங்களைப் பற்றி",
    aboutHeading: "புனித அந்தோணியார் திருத்தலம்",
    aboutText:
        "புனித அந்தோணியார் திருத்தலம் வழிபாடு, ஜெபம் மற்றும் சமூக ஒற்றுமைக்கான இடமாகும். ஒரே குடும்பமாக ஒன்றிணைந்து விசுவாசத்தில் வளர்ந்து, நமது அன்றாட வாழ்க்கையில் நற்செய்தியை வாழ்கிறோம்.",
    aboutButton: "எங்கள் வரலாறு →",

    massSmall: "எங்களுடன் இணையுங்கள்",
    massHeading: "திருப்பலி நேரங்கள்",
    massText:
        "ஜெபம் மற்றும் இறை ஆராதனையில் நமது பங்குத் திருச்சபை குடும்பத்துடன் ஒன்றிணைவோம்.",

    sundayMass: "ஞாயிறு திருப்பலி",
    weekdayMass: "வார நாட்கள் திருப்பலி",
    mondaySaturday: "திங்கள் – சனிக்கிழமை",

    eventsSmall: "வரவிருக்கும் நிகழ்வுகள்",
    eventsHeading: "எங்கள் பயணத்தில் இணைந்திடுங்கள்",

    event1: "புனித அந்தோணியார் திருவிழா",
    event2: "இளைஞர் சந்திப்பு",
    event3: "விவிலியப் படிப்பு",

    ministriesSmall: "எங்கள் திருச்சபை பணிகள்",
    ministriesHeading: "ஒன்றிணைந்து சேவை செய்வோம்",

    ministries: [
        "பலிபீடப் பணியாளர்கள்",
        "லெஜியன் ஆஃப் மேரி",
        "இளைஞர் பணி",
        "மறைக்கல்வி",
        "பாடகர் குழு",
        "சமூக சேவை"
    ],

    verse: "“நான் உங்களுக்காக வைத்திருக்கும் திட்டங்களை அறிவேன்,”",
    verseRef: "— எரேமியா 29:11",

    gallerySmall: "எங்கள் புகைப்படங்கள்",
    galleryHeading: "விசுவாசத்தின் தருணங்கள்",

    footerChurch: "புனித அந்தோணியார் திருத்தலம்",
    footerTag: "விசுவாசம் • நம்பிக்கை • அன்பு",
    quickLinks: "விரைவு இணைப்புகள்",
    contact: "தொடர்பு",
    location: "📍 புனித அந்தோணியார் திருத்தலம்"
};


// ================================
// CHANGE LANGUAGE
// ================================

function changeLanguage(language) {

    const content =
        language === "ta"
            ? tamilContent
            : englishContent;


    // Logo
    document.querySelector(".logo span").textContent = content.logo;


    // Navigation
    const navLinks = document.querySelectorAll("nav > a");

    navLinks.forEach((link, index) => {
        link.textContent = content.nav[index];
    });


    // Hero
    document.querySelector(".hero .small-title").textContent =
        content.welcome;

    document.querySelector(".hero h1").textContent =
        content.heroTitle;

    document.querySelector(".hero h2").textContent =
        content.heroSubtitle;

    document.querySelector(".hero-content > p:last-of-type").textContent =
        content.heroText;


    const heroButtons = document.querySelectorAll(".hero .btn");

    heroButtons[0].textContent = content.joinMass;
    heroButtons[1].textContent = content.learnMore;


    // Quick Info
    const quickBoxes = document.querySelectorAll(".quick-info > div");

    quickBoxes.forEach((box, index) => {

        box.querySelector("h3").textContent =
            content.quickInfo[index][0];

        box.querySelector("p").textContent =
            content.quickInfo[index][1];

    });


    // About
    document.querySelector(".about .small-title").textContent =
        content.aboutTitle;

    document.querySelector(".about h2").textContent =
        content.aboutHeading;

    document.querySelector(".about-text > p:nth-of-type(2)").textContent =
        content.aboutText;

    document.querySelector(".about .btn").textContent =
        content.aboutButton;


    // Mass
    document.querySelector(".mass .small-title").textContent =
        content.massSmall;

    document.querySelector(".mass h2").textContent =
        content.massHeading;

    document.querySelector(".mass > div:first-child > p:last-child").textContent =
        content.massText;

    const timingCards = document.querySelectorAll(".timing-card");

    timingCards[0].querySelector("h3").textContent =
        content.sundayMass;

    timingCards[1].querySelector("h3").textContent =
        content.weekdayMass;

    timingCards[1].querySelector("p").textContent =
        content.mondaySaturday;


    // Events
    document.querySelector(".events .small-title").textContent =
        content.eventsSmall;

    document.querySelector(".events h2").textContent =
        content.eventsHeading;

    const eventCards = document.querySelectorAll(".event-card");

    eventCards[0].querySelector("h3").textContent =
        content.event1;

    eventCards[1].querySelector("h3").textContent =
        content.event2;

    eventCards[2].querySelector("h3").textContent =
        content.event3;


    // Ministries
    document.querySelector(".ministries .small-title").textContent =
        content.ministriesSmall;

    document.querySelector(".ministries h2").textContent =
        content.ministriesHeading;

    const ministryCards =
        document.querySelectorAll(".ministry-container div");

    ministryCards.forEach((card, index) => {

        const icon = card.innerHTML.split("<br>")[0];

        card.innerHTML =
            icon + "<br>" + content.ministries[index];

    });


    // Verse
    document.querySelector(".verse p").textContent =
        content.verse;

    document.querySelector(".verse span").textContent =
        content.verseRef;


    // Gallery
    document.querySelector(".gallery .small-title").textContent =
        content.gallerySmall;

    document.querySelector(".gallery h2").textContent =
        content.galleryHeading;


// ================================
// FOOTER
// ================================

document.querySelector("footer h2").textContent =
    "✝ " + content.footerChurch;

document.querySelector("footer > div:first-child p").textContent =
    content.footerTag;

// Footer Quick Links
const footerQuickLinks =
    document.querySelectorAll("footer > div:nth-child(2) a");

const footerLinks = language === "ta"
    ? [
        "முகப்பு",
        "எங்களைப் பற்றி",
        "திருப்பலி நேரங்கள்",
        "நிகழ்வுகள்"
    ]
    : [
        "Home",
        "About",
        "Mass Timings",
        "Events"
    ];

footerQuickLinks.forEach((link, index) => {
    link.textContent = footerLinks[index];
});

// Footer headings
document.querySelector("footer > div:nth-child(2) h3").textContent =
    content.quickLinks;

document.querySelector("footer > div:nth-child(3) h3").textContent =
    content.contact;

document.querySelector("footer > div:nth-child(3) p").textContent =
    content.location;


    // HTML language
    document.documentElement.lang =
        language === "ta" ? "ta" : "en";


    // Page title
    document.title =
        language === "ta"
            ? "புனித அந்தோணியார் திருத்தலம்"
            : "St. Antony's Shrine";


    // Active language
    const englishBtn =
        document.getElementById("englishBtn");

    const tamilBtn =
        document.getElementById("tamilBtn");

    if (language === "ta") {

        tamilBtn.style.color = "#e5b84b";
        englishBtn.style.color = "#f5eee0";

    } else {

        englishBtn.style.color = "#e5b84b";
        tamilBtn.style.color = "#f5eee0";

    }


    // Save language
    localStorage.setItem("churchLanguage", language);
}


// ================================
// LANGUAGE BUTTONS
// ================================

document
    .getElementById("englishBtn")
    .addEventListener("click", function () {

        changeLanguage("en");

    });


document
    .getElementById("tamilBtn")
    .addEventListener("click", function () {

        changeLanguage("ta");

    });


// Load saved language
const savedLanguage =
    localStorage.getItem("churchLanguage");

if (savedLanguage) {
    changeLanguage(savedLanguage);
}


// ================================
// GALLERY
// ================================

const galleryImages =
    document.querySelectorAll(".gallery-container img");

galleryImages.forEach((image) => {

    image.style.cursor = "pointer";

    image.addEventListener("click", function () {

        const lightbox = document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,0.85)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.zIndex = "9999";
        lightbox.style.cursor = "pointer";

        const largeImage = document.createElement("img");

        largeImage.src = image.src;
        largeImage.style.maxWidth = "90%";
        largeImage.style.maxHeight = "85%";
        largeImage.style.borderRadius = "8px";

        lightbox.appendChild(largeImage);

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", function () {
            lightbox.remove();
        });

    });

});


// ================================
// AUTOMATIC COPYRIGHT YEAR
// ================================

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} St. Antony's Shrine. All Rights Reserved.`;

}