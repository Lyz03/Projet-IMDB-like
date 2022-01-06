const SmallCarousel = function (srcArray, ratingArray, titleArray, greyButtonText, container) {
    this.src = srcArray;
    this.rating = ratingArray;
    this.title = titleArray;
    this.greyButtonText = greyButtonText;
    this.container = container;

    this.createHtmlBase = function () {

        this.src.forEach(value => {
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
            span.innerText = this.rating[this.src.indexOf(value)];
            div.appendChild(span);

            let starButton = document.createElement('button');
            starButton.className = 'star';
            div.appendChild(starButton);

            let i2 = document.createElement('i');
            i2.classList.add('far');
            i2.classList.add('fa-star');
            starButton.appendChild(i2);

            let h3 = document.createElement('h3');
            h3.innerText = this.title[this.src.indexOf(value)];
            div.appendChild(h3);

            let greyButton = document.createElement('button');
            greyButton.className = "grey_button"
            greyButton.innerText = this.greyButtonText;
            div.appendChild(greyButton);

            let trailerButton = document.createElement('button');
            trailerButton.className = "trailer";
            trailerButton.innerText = "Trailer";
            div.appendChild(trailerButton);

            let i3 = document.createElement('i');
            i3.classList.add('fas');
            i3.classList.add('fa-play');
            trailerButton.prepend(i3)

            this.container.appendChild(posterCard)
        });
    }
}
