
const translations = {
    en: {
        churchName: "St. Antony's Church",
        navHome: "Home",
        navAbout: "About",
        navMass: "Mass Timings",
        navMinistries: "Ministries",
        navEvents: "Events",
        navGallery: "Gallery",
        navContact: "Contact",

        heroTagline: "WORSHIP • PRAYER • FAITH",
        heroTitle: "Mass Timings",
        heroDescription:
            "Join us in prayer and worship. Come together as a community to celebrate the Holy Mass and strengthen your faith.",
        viewTimings: "View Mass Timings",

        sectionTagline: "JOIN US IN PRAYER",
        weeklyTitle: "Weekly Mass Schedule",
        sectionDescription:
            "Please check the timings below before attending. Replace these example timings with your church's confirmed schedule.",

        sundayMass: "Sunday Mass",
        weekdayMass: "Weekday Mass",
        holyMass: "Holy Mass",
        specialServices: "Special Services",
        prayerDevotion: "Prayer and Devotion",
        confirmTiming: "Add confirmed timing",
        checkChurch: "Check with the church",
        timingNote:
            "Note: Mass timings may change on feast days and special occasions.",

        prayerTitle: "Come and Pray With Us",
        prayerDescription:
            "Let us gather in faith, share in prayer, and grow together in God's love.",
        backHome: "Back to Home",

        footerTagline: "Faith • Hope • Love",
        quickLinks: "Quick Links",
        footerContact: "Contact",
        location: "📍 St. Antony's Church",
        copyright: "All Rights Reserved."
    },

    ta: {
        churchName: "புனித அந்தோணியார் ஆலயம்",
        navHome: "முகப்பு",
        navAbout: "எங்களைப் பற்றி",
        navMass: "திருப்பலி நேரங்கள்",
        navMinistries: "பணிக்குழுக்கள்",
        navEvents: "நிகழ்வுகள்",
        navGallery: "புகைப்படத் தொகுப்பு",
        navContact: "தொடர்புக்கு",

        heroTagline: "வழிபாடு • ஜெபம் • நம்பிக்கை",
        heroTitle: "திருப்பலி நேரங்கள்",
        heroDescription:
            "எங்களுடன் இணைந்து ஜெபத்திலும் வழிபாட்டிலும் பங்கேற்க வாருங்கள். ஒன்றிணைந்து திருப்பலியைக் கொண்டாடி உங்கள் விசுவாசத்தை வளர்த்துக்கொள்ளுங்கள்.",
        viewTimings: "திருப்பலி நேரங்களைக் காண்க",

        sectionTagline: "ஜெபத்தில் எங்களுடன் இணையுங்கள்",
        weeklyTitle: "வாராந்திர திருப்பலி அட்டவணை",
        sectionDescription:
            "பங்கேற்பதற்கு முன் கீழே உள்ள நேரங்களைச் சரிபார்க்கவும். உங்கள் ஆலயத்தின் உறுதிப்படுத்தப்பட்ட நேரங்களை இங்கே குறிப்பிடவும்.",

        sundayMass: "ஞாயிற்றுக்கிழமை திருப்பலி",
        weekdayMass: "வாரநாள் திருப்பலி",
        holyMass: "திருப்பலி",
        specialServices: "சிறப்பு வழிபாடுகள்",
        prayerDevotion: "ஜெபம் மற்றும் பக்தி வழிபாடு",
        confirmTiming: "உறுதிப்படுத்தப்பட்ட நேரத்தைச் சேர்க்கவும்",
        checkChurch: "ஆலயத்தில் விசாரிக்கவும்",
        timingNote:
            "குறிப்பு: திருவிழா நாட்களிலும் சிறப்பு நிகழ்வுகளின்போதும் திருப்பலி நேரங்கள் மாறக்கூடும்.",

        prayerTitle: "எங்களுடன் இணைந்து ஜெபியுங்கள்",
        prayerDescription:
            "நம்பிக்கையுடன் ஒன்றுகூடி, ஜெபத்தில் இணைந்து, இறைவனின் அன்பில் ஒன்றாக வளர்வோம்.",
        backHome: "முகப்புப் பக்கத்திற்குத் திரும்பு",

        footerTagline: "விசுவாசம் • நம்பிக்கை • அன்பு",
        quickLinks: "விரைவு இணைப்புகள்",
        footerContact: "தொடர்புக்கு",
        location: "📍 புனித அந்தோணியார் ஆலயம்",
        copyright: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
};

const englishBtn = document.getElementById("englishBtn");
const tamilBtn = document.getElementById("tamilBtn");

function setLanguage(language) {
    const words = translations[language];

    if (!words) return;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.dataset.key;

        if (words[key] !== undefined) {
            element.textContent = words[key];
        }
    });

    englishBtn.classList.toggle("active", language === "en");
    tamilBtn.classList.toggle("active", language === "ta");

    try {
        localStorage.setItem("churchLanguage", language);
    } catch (error) {
        // The language switch still works if storage is unavailable.
    }
}

englishBtn.addEventListener("click", () => setLanguage("en"));
tamilBtn.addEventListener("click", () => setLanguage("ta"));

let savedLanguage = "en";

try {
    savedLanguage = localStorage.getItem("churchLanguage") || "en";
} catch (error) {
    savedLanguage = "en";
}

setLanguage(translations[savedLanguage] ? savedLanguage : "en");
