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


// carousel
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
]

const container = document.querySelector('.left div.nb1 div');
const nextButton = document.querySelector('.left div.nb1 .next');
const previousButton = document.querySelector('.left div.nb1 .previous');

const captionContainer = [
    ".bottom span",
    ".bottom h2",
    ".bottom p",
    "#poster"
]

const upNextContainer = [
    "div.text span",
    "div.text h3",
    "div.text p",
    "div.images img"
]

let section1Carousel = new Carousel(images, container, 'div.nb1 img', time, title, text, posters, captionContainer, upNextContainer);
section1Carousel.createHtmlBase();
section1Carousel.nextAuto();


previousButton.addEventListener("click", function () {
    section1Carousel.previousTransition();
});

nextButton.addEventListener("click", function () {
    section1Carousel.nextTransition();
});