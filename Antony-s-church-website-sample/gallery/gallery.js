
const translations = {
    home: "முகப்பு",
    about: "எங்களைப் பற்றி",
    mass: "திருப்பலி நேரங்கள்",
    ministries: "பணிக்குழுக்கள்",
    events: "நிகழ்வுகள்",
    gallery: "புகைப்படத் தொகுப்பு",
    contact: "தொடர்பு",

    heroLabel: "எங்கள் புகைப்படத் தொகுப்பு",
    heroTitle: "விசுவாசத்தின் தருணங்கள்",
    heroSubtitle: "நமது பங்குக் குடும்பத்தின் நினைவுகள்",
    heroIntro:
        "புனித அந்தோனியார் ஆலயத்தின் வாழ்க்கை, விசுவாசம் மற்றும் சமூகத்தைப் பிரதிபலிக்கும் தருணங்களின் தொகுப்பு.",

    sectionLabel: "எங்கள் நினைவுகள்",
    sectionTitle: "ஆலயப் புகைப்படங்கள்",
    sectionIntro:
        "நமது ஆலயம் மற்றும் பங்குச் சமூகத்தின் வாழ்க்கையில் நிகழ்ந்த தருணங்களைக் காணுங்கள்.",

    view: "காண்க",

    verse:
        "“இதோ, சகோதரர்கள் ஒற்றுமையுடன் வாழ்வது எவ்வளவு நன்று, எவ்வளவு இனிமையானது!”",

    welcomeLabel: "எங்கள் பங்குக் குடும்பம்",
    welcomeLine1: "ஒவ்வொரு தருணமும்",
    welcomeLine2: "ஒரு நினைவாகிறது.",
    welcomeText:
        "ஒவ்வொரு சந்திப்பும், கொண்டாட்டமும், இறைவேண்டல் தருணமும் நமது பங்குக் குடும்பத்தை மேலும் ஒன்றிணைக்கட்டும்.",

    tagline: "இறைவேண்டலின் இல்லம், கிறிஸ்துவில் ஒரு குடும்பம்",
    copyright:
        "© 2026 புனித அந்தோனியார் ஆலயம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
};

const originalTexts = new Map();

document.querySelectorAll("[data-translate]").forEach((element) => {
    originalTexts.set(element, element.textContent.trim());
});

function setLanguage(language) {
    const isTamil = language === "ta";

    document.documentElement.lang = isTamil ? "ta" : "en";

    document.querySelectorAll("[data-translate]").forEach((element) => {
        const key = element.dataset.translate;

        if (isTamil && translations[key]) {
            element.textContent = translations[key];
        } else {
            element.textContent = originalTexts.get(element) || "";
        }
    });

    document.getElementById("englishBtn").classList.toggle(
        "selected",
        !isTamil
    );

    document.getElementById("tamilBtn").classList.toggle(
        "selected",
        isTamil
    );

    try {
        localStorage.setItem("churchLanguage", language);
    } catch (error) {
        // The language switch still works if browser storage is unavailable.
    }
}

document.getElementById("englishBtn").addEventListener("click", () => {
    setLanguage("en");
});

document.getElementById("tamilBtn").addEventListener("click", () => {
    setLanguage("ta");
});

// Restore the previously selected language when possible.
try {
    const savedLanguage = localStorage.getItem("churchLanguage");

    if (savedLanguage === "ta") {
        setLanguage("ta");
    }
} catch (error) {
    // Keep English as the default language.
}
