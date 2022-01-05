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

// small carousel


/**
 * creat the html for each images
 * @param srcArray
 * @param ratingArray
 * @param titleArray
 * @param greyButtonText
 */
function smallCarouselHtml(srcArray, ratingArray, titleArray, greyButtonText) {

    let container = document.querySelector('#fanFavContainer')

    srcArray.forEach(value => {
        let posterCard = document.createElement('div');
        posterCard.className = "poster_card";

        let img = document.createElement('img');
        img.src = value;
        posterCard.appendChild(img);

        let div = document.createElement('div');
        div.className = "margin";
        posterCard.appendChild(div);

        let addButton = document.createElement('button');
        addButton.innerText = "+";
        addButton.className = "add";
        div.appendChild(addButton);

        let blueStar = document.createElement('i');
        blueStar.classList.add("fas");
        blueStar.classList.add("fa-star");
        blueStar.classList.add("blue");
        div.appendChild(blueStar);

        let span = document.createElement('span');
        span.innerText = ratingArray[srcArray.indexOf(value)];
        div.appendChild(span);

        let starButton = document.createElement('button');
        starButton.className = 'star';
        div.appendChild(starButton);

        let i2 = document.createElement('i');
        i2.classList.add('far');
        i2.classList.add('fa-star');
        starButton.appendChild(i2);

        let h3 = document.createElement('h3');
        h3.innerText = titleArray[srcArray.indexOf(value)];
        div.appendChild(h3);

        let greyButton = document.createElement('button');
        greyButton.className = "grey_button"
        greyButton.innerText = greyButtonText;
        div.appendChild(greyButton);

        let trailerButton = document.createElement('button');
        trailerButton.className = "trailer";
        trailerButton.innerText = "Trailer";
        div.appendChild(trailerButton);

        let i3 = document.createElement('i');
        i3.classList.add('fas');
        i3.classList.add('fa-play');
        trailerButton.prepend(i3)

        container.appendChild(posterCard)
    })
}

//test
smallCarouselHtml(["/images/uncharted-poster.jpg"], ["8.2"], ["Uncharted"], "+ Watchlist")