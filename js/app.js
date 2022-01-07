// Bootstrap
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        // let param = $(this).attr("href").replace("#","");
        let concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        // $('.input-group #search_param').val(param);
    });
});


// main carousel
let images = [
    "/images/uncharted.jpg",
    "/images/movies.jpg",
    "/images/doctor-strange.jpg",
    "/images/series.jpg"
];

let time = [
    "2:24",
    "2:45",
    "2:12",
    "2:30"
];

let title = [
    "Mark Walhberg & Tom Holland Go Treasure Hunting",
    "The Most Anticipated New Movies of 2022",
    "'Doctor Strange in the Multiverse of Madness'",
    "IMDb Users' Most Anticipated Series",
];

let text = [
    "Watch the new 'Uncharted' Trailer",
    "Get Your Watchlists Ready",
    "Watch the Teaser Trailer",
    "New TV Coming in 2022"
];

let posters = [
    "/images/uncharted-poster.jpg",
    "/images/watch-to-watch-poster.jpg",
    "/images/doctor-strange-poster.jpg",
    "/images/watch-to-watch-poster.jpg"
];

let trailerLink = [
    "https://www.youtube.com/watch?v=4wCH1K-ckZw",
    "https://www.imdb.com/video/vi2261304089?ref_=hp_hp_e_4&listId=ls081395803",
    "https://www.youtube.com/watch?v=Rt_UqUm38BI",
    "https://www.imdb.com/video/vi2261304089?ref_=hp_hp_e_4&listId=ls081395803"
]

const container = document.querySelector('.left div.nb1 div');
const nextButton = document.querySelector('.left div.nb1 .next');
const previousButton = document.querySelector('.left div.nb1 .previous');

const captionContainer = [
    ".bottom span",
    ".bottom h2",
    ".bottom p",
    "#poster",
    ".left .play"
]

const upNextContainer = [
    "div.text span",
    "div.text h3",
    "div.text p",
    "div.images img",
    ".right .play"
]

let section1Carousel = new Carousel(images, container, 'div.nb1 img', time, title, text, posters, trailerLink, captionContainer, upNextContainer);
section1Carousel.createHtmlBase();
section1Carousel.nextAuto();


previousButton.addEventListener("click", function () {
    section1Carousel.previousTransition();
});

nextButton.addEventListener("click", function () {
    section1Carousel.nextTransition();
});

// small carousel
let smallCarousel1Images = [
    "/images/smallCarousel/dont-look-up-poster.jpg",
    "/images/smallCarousel/spider-man-poster.jpg",
    "/images/smallCarousel/hawkeye-poster.jpg",
    "/images/smallCarousel/the-witcher-poster.jpg",
    "/images/smallCarousel/the-unforgivable-poster.jpg",
    "/images/smallCarousel/dune-poster.jpg",
    "/images/smallCarousel/wheel-of-time-poster.jpg",
    "/images/smallCarousel/arcane-poster.jpg",
    "/images/smallCarousel/squid-game-poster.jpg",
    "/images/smallCarousel/free-guy-poster.jpg",
];

let smallCarousel1Rating = [
    "7.3",
    "8.8",
    "7.8",
    "8.2",
    "7.2",
    "8.2",
    "7.3",
    "9.2",
    "8.0",
    "7.2"
];

let smallCarousel1Title = [
    "Don't Look Up: Déni cosmique",
    "Spider-Man: No Way Home",
    "Hawkeye",
    "The Witcher",
    "Impardonnable",
    "Dune",
    "The Wheel of Time",
    "Arcane",
    "Squid Game",
    "Free Guy"
];

let smallCarousel1Href = [
    "https://www.youtube.com/watch?v=wplebVZB8FQ",
    "https://www.youtube.com/watch?v=7w_w10HVa54",
    "https://www.youtube.com/watch?v=sulRiT2Cm-I",
    "https://www.youtube.com/watch?v=_dYsvC9fJ8I",
    "https://www.youtube.com/watch?v=rqJAethv9kM",
    "https://www.youtube.com/watch?v=fDYnHcM58t0",
    "https://www.youtube.com/watch?v=-ADarnCYs8I",
    "https://www.youtube.com/watch?v=v-dgpzE7txk",
    "https://www.youtube.com/watch?v=_434vl32oJY",
    "https://www.youtube.com/watch?v=sL5SgG_mxF8"
]

let smallCarousel1Container = document.querySelector('#fanFavContainer');

let smallCarousel1 = new SmallCarousel(smallCarousel1Images, smallCarousel1Rating, smallCarousel1Title, smallCarousel1Href,
    "+ Watchlist", smallCarousel1Container, ".poster_card");

smallCarousel1.createHtmlBase();

document.querySelector('#fanFav .previous').addEventListener("click", function () {
    smallCarousel1.previousTransition();
});

document.querySelector('#fanFav .next').addEventListener("click", function () {
    smallCarousel1.nextTransition();
});