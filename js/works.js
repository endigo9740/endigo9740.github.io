// WORKS

let worksData = [
    {
        id: 2,
        name: 'WeatherCaster',
        desc: 'The first nationally available mobile app created and distributed by Belo Corp. It launched to rave reviews on iPad, iPhone, iPod, and Android. I was responsible for the promotional website featured below, as well as several social initatives, as well aas key webview sections within the app itself.',
        url: null,
        color: '#70c4e8',
        media: {
            cover: './img/thumbs/weathercaster.png',
            video: 'https://www.youtube.com/embed/f2yZL5y2A60',
            gallery: [
                './img/projects/weathercaster/project_weathercaster_desktop.jpg',
                './img/projects/weathercaster/project_weathercaster_mobile.jpg'
            ]
        }
    },
    {
        id: 3,
        name: 'Trivie',
        desc: 'Trivie uses cognitive science, adaptive learning, and gamification to help employees remember training. During my time at the company I headed design and implementation of the Trivie brand and company website. This site provides information about the company as well as a portal for signing up for various Trivie for Business SaaS plans. Please note the images below represent the version of the site and application during my time with Trivie.',
        url: 'http://www.trivie.com',
        color: '#5b4c9f',
        media: {
            cover: './img/thumbs/trivie-web.png',
            video: null,
            gallery: [
                './img/projects/trivie_website/project_trivieweb_d001.jpg',
                './img/projects/trivie_website/project_trivieweb_d002.jpg',
                './img/projects/trivie_website/project_trivieweb_d003.jpg',
                './img/projects/trivie_website/project_trivieweb_d004.jpg',
                './img/projects/trivie_website/project_trivieweb_d005.jpg',
                './img/projects/trivie_website/project_trivieweb_m001.jpg',
            ]
        }
    },
    {
        id: 4,
        name: 'Trivie for Business',
        desc: 'This is the flagship SaaS-based hybrid mobile and web application for Trivie. Key client include Subway, American Heart Association, and Goodwill. The product focuses on learning and retention for training material within the enterprise space. I was responsible for planning, UX, design, and development of the frontend client for this application. The app was integrated into a hybrid mobile application for both iOS and Android.',
        url: 'http://www.trivie.com',
        color: '#5b4c9f',
        media: {
            cover: './img/thumbs/trivie.png',
            video: null,
            gallery: [
                './img/projects/trivie_for_business/project_trivie_d001.jpg',
                './img/projects/trivie_for_business/project_trivie_d002.jpg',
                './img/projects/trivie_for_business/project_trivie_d003.jpg',
                './img/projects/trivie_for_business/project_trivie_d004.jpg',
                './img/projects/trivie_for_business/project_trivie_d005.jpg',
                './img/projects/trivie_for_business/project_trivie_m001.png',
                './img/projects/trivie_for_business/project_trivie_m002.png',
                './img/projects/trivie_for_business/project_trivie_m003.png',
                './img/projects/trivie_for_business/project_trivie_m004.png',
                './img/projects/trivie_for_business/project_trivie_m005.png',
                './img/projects/trivie_for_business/project_trivie_m006.png',
                './img/projects/trivie_for_business/project_trivie_m007.png'
            ]
        }
    },
    {
        id: 5,
        name: 'Minirl',
        desc: 'Minirl is procedurally-generated 2D roguelike video game with puzzle elements. This means a unique experience each time you play, and accessible gameplay allowing you to dive right into the fun! This was a six month passion project and my first foray into building an indie video game. I was responsible for everything except audio and music. Both of which were created by the extremely talented Jesse W.D. James, who has gone on to work on featured game projects such as Destiny 2.',
        url: 'http://minirlgame.com/',
        color: '#5a253f',
        media: {
            cover: './img/thumbs/minirl.png',
            video: 'https://www.youtube.com/embed/34FzHsNFN1g',
            gallery: [
                './img/projects/minirl/001.png',
                './img/projects/minirl/002.png',
                './img/projects/minirl/003.png',
                './img/projects/minirl/004.png',
                './img/projects/minirl/005.png',
                './img/projects/minirl/006.png',
            ]
        }
    },
    {
        id: 6,
        name: 'Jackpot Rising',
        desc: 'Jackpot Rising is a software solution that may be integrated into games of all types. It enables users to compete against each other in progressive eSports tournaments for real money, prizes, or digital goods. During my three years at Jackpot Rising I handled the overwhelming majority of the company’s branding, UX, product design (both digital and physical), and development of several key projects and initiatives. Many of which are listed separately on this portfolio site. The company website, logo, and other branding materials are featured below.',
        url: 'https://www.jackpotrising.com/',
        color: '#1d2d3f',
        media: {
            cover: './img/thumbs/jr.png',
            video: 'https://www.youtube.com/embed/0ah2zZQ6xHc',
            gallery: [
                './img/projects/jr_brand/001.png',
                './img/projects/jr_brand/002.png',
                './img/projects/jr_brand/006.jpg'
            ]
        }
    },
    {
        id: 7,
        name: 'Speedleague',
        desc: 'Speedleague is an international motorsports league recently founded by (Red Bull) Global Rallycross Championship creator Brian Gale. Building on the Leagues role as a sports organizer for X Games motorsports, and partnered with ESPN to develop a slate of fresh events that appeal to a younger, more energetic and diverse audience. Jackpot Rising took on the challenge of developing a mobile racing video game to help promote and feature tournaments for each event. Unfortunately the project was never completed, but my work on the game UI and several key segments within both Unreal and Unity may be found below.',
        url: 'https://www.tixr.com/groups/speedleague',
        color: '#a92a55',
        media: {
            cover: './img/thumbs/speedleague.png',
            video: null,
            gallery: [
                './img/projects/speedleague/001.png',
                './img/projects/speedleague/002.png',
                './img/projects/speedleague/003.png',
                './img/projects/speedleague/004.png',
                './img/projects/speedleague/005.png',
                './img/projects/speedleague/006.png',
                './img/projects/speedleague/007.png',
                './img/projects/speedleague/008.png',
                './img/projects/speedleague/009.png',
            ]
        }
    },
    {
        id: 8,
        name: 'Jackpot Rising Arcade',
        desc: 'During my time at Jackpot Rising one of our key verticals included integrating our tournament platform with real world games. This included skeeball, basketball, mini-golf. Working towards large scale integrations with companies such as Top Golf. I designing and implementing video displays on each Raspberry Pi 3 powered unit. As well as assisting with the branding for each device. Some of which have been featured at large charity events, such as the Cattle Baron’s Ball in Dallas, Texas.',
        url: 'https://www.youtube.com/embed/MsQ7q6vdTOo',
        color: '#dc334a',
        media: {
            cover: './img/thumbs/jr_arcade.png',
            video: 'https://www.youtube.com/embed/MsQ7q6vdTOo',
            gallery: [
                './img/projects/jr_arcade/001.jpg'
            ]
        }
    },
    {
        id: 9,
        name: 'PlayerHQ',
        desc: 'The user-facing companion application for the Jackpot Rising platform. This is the central HUB that allowed users to view tournaments, leaderboards, games, socialize, and manage their account and funds. The app was spearheaded by myself as a way to combine both the company’s web and mobile applications. It utilized a wide variety of interesting tech, including Angular 8+, PWA and service worker support, as well as a hybrid mobile application for iOS and Android. It included a web-based WebRTC QR scanner for connecting to Jackpot Rising’s arcade devices and more, using websockets to communicate in real time between the app, server, and device.',
        url: 'https://playerhq.jackpotrising.com',
        color: '#dc334a',
        media: {
            cover: './img/thumbs/jr_playerhq.png',
            video: null,
            gallery: [
                './img/projects/jr_playerhq/001.png'
            ]
        }
    },
    {
        id: 10,
        name: 'Homebase',
        desc: 'The client-facing application for the Jackpot Rising platform. This served as the primary tool for generating content such as tournaments, game metadata, user moderation, and much more. It featured a roles and permissions sytem for large scale corporations. This utilized a wide variety of interesting tech, including Angular 8+, Angular Material UI library, as well as PWA and service worker support. I spearheaded this product as a way to combine separate client and internal tooling in a single and much more efficient application.',
        url: 'https://homebase.jackpotrising.com',
        color: '#dc334a',
        media: {
            cover: './img/thumbs/jr_homebase.png',
            video: null,
            gallery: [
                './img/projects/jr_homebase/001.png',
            ]
        }
    },
    {
        id: 11,
        name: 'JR + Overwolf',
        desc: 'Overwolf provides a middleware solution for tracking data in real time within many AAA game titles, including Fortnite, CS:GO, and League of Legends. They provide third party companies a method to build applications to gather in-game stats and data, presented in overlays within the game (similar to the Steam overlay). I was the project lead for the Jackpot Rising application which collected data for use in competitive tournaments. The application was built with web technology (similar to Electron) and could access data from Overwolf via an integrated API. I managed one contractor to assist with the development of this project. It was built primarily with the use of Vue.js, but we were moving towards utilizing PlayerHQ via a webview that would communicate directly with the app via PostMessage().',
        url: 'https://www.overwolf.com/app/Jackpot_Rising_Inc-Jackpot_Rising',
        color: '#27223e',
        media: {
            cover: './img/thumbs/jr_overwolf.png',
            video: null,
            gallery: [
                './img/projects/jr_overwolf/000.png',
                './img/projects/jr_overwolf/001.jpg',
                './img/projects/jr_overwolf/002.jpg',
                './img/projects/jr_overwolf/003.jpg',
                './img/projects/jr_overwolf/004.jpg'
            ]
        }
    },
];
worksData = worksData.reverse();