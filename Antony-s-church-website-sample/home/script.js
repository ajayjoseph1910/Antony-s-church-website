
document.addEventListener("DOMContentLoaded", function () {

    const englishBtn = document.getElementById("englishBtn");
    const tamilBtn = document.getElementById("tamilBtn");

    // ENGLISH CONTENT
    const english = {
        navHome: "Home",
        navAbout: "About",
        navMass: "Mass Timings",
        navMinistries: "Ministries",
        navEvents: "Events",
        navGallery: "Gallery",
        navContact: "Contact",

        logo: "St. Antony's Church",
        welcome: "WELCOME TO",
        heroTitle: "St. Antony's Church",
        heroSubtitle: "A Home for Prayer, A Family in Christ",
        heroText: "United in faith, hope and love, following the example of St. Antony and serving God and one another.",
        joinMass: "Join Us for Mass",
        learnMore: "Learn More",

        quickMass: "Mass Timings",
        quickMassText: "Sunday & Weekday Masses",
        confession: "Confession",
        confessionText: "Every Saturday",
        prayer: "Prayer Requests",
        prayerText: "Let us pray for you",
        community: "Our Community",
        communityText: "A family in Christ",

        aboutLabel: "ABOUT US",
        aboutHeading: "St. Antony's Church",
        aboutText: "St. Antony's Church is a place of worship, prayer and community. We come together as one family to grow in faith and live the Gospel in our daily lives.",
        ourStory: "Our Story →",

        joinUs: "JOIN US",
        massHeading: "Mass Timings",
        massText: "Come together with our parish family for prayer and celebration.",
        sundayMass: "Sunday Mass",
        weekdayMass: "Weekday Mass",
        weekdays: "Monday – Saturday",
        viewMass: "View Full Mass Timings →",

        eventsLabel: "UPCOMING EVENTS",
        eventsHeading: "Be Part of Our Journey",
        event1: "St. Antony Feast",
        event2: "Youth Fellowship",
        event3: "Bible Study",
        event4: "Bible Study",
        eventPlace1: "Church Premises",
        eventPlace2: "Parish Hall",
        eventPlace3: "Church Hall",
        eventPlace4: "Church Hall",
        viewEvents: "View all events →",

        ministriesLabel: "OUR MINISTRIES",
        ministriesHeading: "Serving Together",
        ministry1: "Altar Servers",
        ministry2: "Legion of Mary",
        ministry3: "Youth Ministry",
        ministry4: "Catechism",
        ministry5: "Choir",
        ministry6: "Social Service",

        verse: "“For I know the plans I have for you,”",
        verseRef: "— Jeremiah 29:11",

        galleryLabel: "OUR GALLERY",
        galleryHeading: "Moments of Faith",
        viewGallery: "View all →",

        footerChurch: "St. Antony's Church",
        footerTag: "Faith • Hope • Love",
        quickLinks: "Quick Links",
        footerContact: "Contact",
        location: "📍 St. Antony's Church",
        copyright: "All Rights Reserved."
    };


    // TAMIL CONTENT
    const tamil = {
        navHome: "முகப்பு",
        navAbout: "எங்களைப் பற்றி",
        navMass: "திருப்பலி நேரங்கள்",
        navMinistries: "திருச்சபை பணிகள்",
        navEvents: "நிகழ்வுகள்",
        navGallery: "புகைப்படங்கள்",
        navContact: "தொடர்பு",

        logo: "புனித அந்தோணியார் திருச்சபை",
        welcome: "அன்புடன் வரவேற்கிறோம்",
        heroTitle: "புனித அந்தோணியார் திருச்சபை",
        heroSubtitle: "ஜெபத்திற்கான இல்லம், கிறிஸ்துவில் ஒரு குடும்பம்",
        heroText: "விசுவாசம், நம்பிக்கை மற்றும் அன்பில் ஒன்றிணைந்து, புனித அந்தோணியாரின் முன்மாதிரியைப் பின்பற்றி இறைவனுக்கும் ஒருவருக்கொருவர் சேவை செய்வோம்.",
        joinMass: "திருப்பலியில் கலந்து கொள்ளுங்கள்",
        learnMore: "மேலும் அறிய",

        quickMass: "திருப்பலி நேரங்கள்",
        quickMassText: "ஞாயிறு மற்றும் வார நாட்களில் திருப்பலி",
        confession: "பாவ அறிக்கை",
        confessionText: "ஒவ்வொரு சனிக்கிழமையும்",
        prayer: "ஜெப வேண்டுதல்கள்",
        prayerText: "உங்களுக்காக ஜெபிப்போம்",
        community: "நமது சமூகம்",
        communityText: "கிறிஸ்துவில் ஒரு குடும்பம்",

        aboutLabel: "எங்களைப் பற்றி",
        aboutHeading: "புனித அந்தோணியார் திருச்சபை",
        aboutText: "புனித அந்தோணியார் திருச்சபை வழிபாடு, ஜெபம் மற்றும் சமூக ஒற்றுமைக்கான இடமாகும். ஒரே குடும்பமாக ஒன்றிணைந்து விசுவாசத்தில் வளர்ந்து, நமது அன்றாட வாழ்க்கையில் நற்செய்தியை வாழ்கிறோம்.",
        ourStory: "எங்கள் வரலாறு →",

        joinUs: "எங்களுடன் இணையுங்கள்",
        massHeading: "திருப்பலி நேரங்கள்",
        massText: "ஜெபத்திலும் இறைவழிபாட்டிலும் நமது பங்குக் குடும்பத்துடன் ஒன்றிணைவோம்.",
        sundayMass: "ஞாயிறு திருப்பலி",
        weekdayMass: "வாரநாள் திருப்பலி",
        weekdays: "திங்கள் – சனிக்கிழமை",
        viewMass: "முழு திருப்பலி நேரங்களைக் காண →",

        eventsLabel: "வரவிருக்கும் நிகழ்வுகள்",
        eventsHeading: "எங்கள் பயணத்தில் இணைந்திடுங்கள்",
        event1: "புனித அந்தோணியார் திருவிழா",
        event2: "இளைஞர் சந்திப்பு",
        event3: "விவிலியப் படிப்பு",
        event4: "விவிலியப் படிப்பு",
        eventPlace1: "திருச்சபை வளாகம்",
        eventPlace2: "பங்குக் கூடம்",
        eventPlace3: "திருச்சபை மண்டபம்",
        eventPlace4: "திருச்சபை மண்டபம்",
        viewEvents: "அனைத்து நிகழ்வுகளையும் காண →",

        ministriesLabel: "எங்கள் திருச்சபை பணிகள்",
        ministriesHeading: "ஒன்றிணைந்து சேவை செய்வோம்",
        ministry1: "பலிபீடப் பணியாளர்கள்",
        ministry2: "லெஜியன் ஆஃப் மேரி",
        ministry3: "இளைஞர் பணி",
        ministry4: "மறைக்கல்வி",
        ministry5: "பாடகர் குழு",
        ministry6: "சமூக சேவை",

        verse: "“நான் உங்களுக்காக வைத்திருக்கும் திட்டங்களை அறிவேன்,”",
        verseRef: "— எரேமியா 29:11",

        galleryLabel: "எங்கள் புகைப்படங்கள்",
        galleryHeading: "விசுவாசத்தின் தருணங்கள்",
        viewGallery: "அனைத்தையும் காண →",

        footerChurch: "St. Antony's Church",
        footerTag: "விசுவாசம் • நம்பிக்கை • அன்பு",
        quickLinks: "விரைவு இணைப்புகள்",
        footerContact: "தொடர்பு",
        location: "📍 புனித அந்தோணியார் திருச்சபை",
        copyright: "All Rights Reserved."
    };


    // CHANGE LANGUAGE
    function changeLanguage(language) {

        const content = language === "ta" ? tamil : english;

        document.documentElement.lang = language;

        // Update all translated text
        document.querySelectorAll("[data-key]").forEach(function (element) {
            const key = element.getAttribute("data-key");

            if (content[key] !== undefined) {
                element.textContent = content[key];
            }
        });

        // Update church logo
        document.querySelector(".logo span").textContent = content.logo;

        // Update language button colours
        englishBtn.classList.toggle("active", language === "en");
        tamilBtn.classList.toggle("active", language === "ta");

        englishBtn.setAttribute("aria-pressed", language === "en");
        tamilBtn.setAttribute("aria-pressed", language === "ta");

        // Update copyright
        const copyright = document.querySelector(".copyright");

        if (copyright) {
            copyright.textContent =
                "© " + new Date().getFullYear() +
                " " + content.footerChurch + ". " +
                content.copyright;
        }

        // Save language choice across pages
        localStorage.setItem("churchLanguage", language);

        // Update browser tab title
        document.title = language === "ta"
            ? "புனித அந்தோணியார் திருச்சபை"
            : "St. Antony's Church";
    }


    englishBtn.addEventListener("click", function () {
        changeLanguage("en");
    });

    tamilBtn.addEventListener("click", function () {
        changeLanguage("ta");
    });


    // RESTORE PREVIOUSLY SELECTED LANGUAGE
    const savedLanguage = localStorage.getItem("churchLanguage") || "en";
    changeLanguage(savedLanguage);


    // ACTIVE NAVIGATION LINK
    function updateActiveLink() {

        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll("header nav > a").forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#contact") {
                if (window.location.hash === "#contact") {
                    link.classList.add("active");
                }
                return;
            }

            if (href && !href.startsWith("#")) {
                const targetPage = href.split("/").pop();

                if (
                    targetPage === currentPage &&
                    !window.location.hash
                ) {
                    link.classList.add("active");
                }
            }
        });
    }

    updateActiveLink();

    window.addEventListener("hashchange", updateActiveLink);


    // GALLERY IMAGE LIGHTBOX
    document.querySelectorAll(".gallery-container img").forEach(function (image) {

        image.addEventListener("click", function () {

            const lightbox = document.createElement("div");
            lightbox.className = "image-lightbox";

            const largeImage = document.createElement("img");
            largeImage.src = image.src;
            largeImage.alt = image.alt;

            lightbox.appendChild(largeImage);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });

});