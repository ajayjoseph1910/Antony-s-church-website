
const translations = {
    en: {
        aboutUs: "ABOUT US",
        churchName: "St. Antony's Church",
        tagline: "A Home for Prayer, a Family in Christ",
        welcome: "Welcome to St. Antony's Church, a community built on faith, prayer, love and service. Our church seeks to bring people closer to God and to one another through worship, fellowship and Christian service.",
        ourChurch: "OUR CHURCH",
        aboutChurch: "About St. Antony's Church",
        description1: "St. Antony's Church is a spiritual home for families, children, young people and everyone who seeks God's presence in their lives.",
        description2: "Through Holy Mass, prayer, sacraments, community activities and charitable service, the church continues to encourage people to live according to the teachings of Jesus Christ.",
        description3: "Our parish community is united by faith and guided by the values of love, compassion, forgiveness and service. The church welcomes everyone to grow in faith and become part of a loving Christian community.",
        ourJourney: "OUR JOURNEY",
        historyTitle: "History of Our Church",
        historyIntro: "A journey of faith, dedication and God's grace through the years.",
        today: "TODAY",
        todayTitle: "Our Church Today",
        todayText: "Today, St. Antony's Church continues its mission of bringing people closer to Christ through prayer, worship, fellowship and service.",
        findUs: "FIND US",
        churchAddress: "Church Address",
        navHome: "Home",
        navAbout: "About",
        navMass: "Mass Timings",
        navMinistries: "Ministries",
        navEvents: "Events",
        navGallery: "Gallery",
        navContact: "Contact"
    },

    ta: {
        aboutUs: "எங்களைப் பற்றி",
        churchName: "புனித அந்தோணியார் ஆலயம்",
        tagline: "ஜெபத்தின் இல்லம், கிறிஸ்துவில் ஒரு குடும்பம்",
        welcome: "புனித அந்தோணியார் ஆலயத்திற்கு வரவேற்கிறோம். நம்பிக்கை, ஜெபம், அன்பு மற்றும் சேவையை அடிப்படையாகக் கொண்ட ஒரு சமூகமாக எங்கள் ஆலயம் திகழ்கிறது. வழிபாடு, ஐக்கியம் மற்றும் கிறிஸ்தவ சேவையின் மூலம் மக்களை இறைவனுக்கும் ஒருவருக்கொருவருக்கும் நெருக்கமாகக் கொண்டுவருவதே எங்கள் நோக்கம்.",
        ourChurch: "எங்கள் ஆலயம்",
        aboutChurch: "புனித அந்தோணியார் ஆலயத்தைப் பற்றி",
        description1: "புனித அந்தோணியார் ஆலயம் குடும்பங்கள், குழந்தைகள், இளைஞர்கள் மற்றும் இறைவனின் பிரசன்னத்தைத் தங்கள் வாழ்வில் நாடும் அனைவருக்கும் ஒரு ஆன்மீக இல்லமாகத் திகழ்கிறது.",
        description2: "திருப்பலி, ஜெபம், திருவருட்சாதனங்கள், சமூக நடவடிக்கைகள் மற்றும் தொண்டு சேவைகளின் மூலம், இயேசு கிறிஸ்துவின் போதனைகளின்படி வாழ மக்களை ஊக்குவித்து வருகிறது.",
        description3: "எங்கள் பங்குச் சமூகம் நம்பிக்கையில் ஒன்றுபட்டு, அன்பு, இரக்கம், மன்னிப்பு மற்றும் சேவை ஆகிய மதிப்புகளால் வழிநடத்தப்படுகிறது. அனைவரும் விசுவாசத்தில் வளர்ந்து, அன்பான கிறிஸ்தவ சமூகத்தின் ஒரு பகுதியாக மாற எங்கள் ஆலயம் வரவேற்கிறது.",
        ourJourney: "எங்கள் பயணம்",
        historyTitle: "எங்கள் ஆலயத்தின் வரலாறு",
        historyIntro: "ஆண்டுகள் கடந்தும் தொடரும் நம்பிக்கை, அர்ப்பணிப்பு மற்றும் இறைவனின் அருளின் பயணம்.",
        today: "இன்று",
        todayTitle: "இன்றைய எங்கள் ஆலயம்",
        todayText: "இன்று, ஜெபம், வழிபாடு, ஐக்கியம் மற்றும் சேவையின் மூலம் மக்களை கிறிஸ்துவிடம் நெருக்கமாகக் கொண்டுவரும் தனது பணியை புனித அந்தோணியார் ஆலயம் தொடர்ந்து செய்து வருகிறது.",
        findUs: "எங்களைக் காண",
        churchAddress: "ஆலய முகவரி",
        navHome: "முகப்பு",
        navAbout: "எங்களைப் பற்றி",
        navMass: "திருப்பலி நேரங்கள்",
        navMinistries: "திருப்பணிகள்",
        navEvents: "நிகழ்வுகள்",
        navGallery: "புகைப்படத் தொகுப்பு",
        navContact: "தொடர்பு"
    }
};

function setLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.textContent = dictionary[key];
        }
    });

    document.documentElement.lang = language;

    document.getElementById("englishBtn").classList.toggle(
        "active",
        language === "en"
    );

    document.getElementById("tamilBtn").classList.toggle(
        "active",
        language === "ta"
    );

    localStorage.setItem("churchLanguage", language);
}

document.getElementById("englishBtn").addEventListener("click", () => {
    setLanguage("en");
});

document.getElementById("tamilBtn").addEventListener("click", () => {
    setLanguage("ta");
});

const savedLanguage = localStorage.getItem("churchLanguage") || "en";
setLanguage(savedLanguage);
