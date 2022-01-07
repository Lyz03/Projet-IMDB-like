const Carousel = function (imagesArray, container, imgBalise, time, title, text, posters, trailerLink, captionContainer, upNextContainer) {
    this.images = imagesArray;
    this.container = container;
    this.imgBalise = imgBalise;
    this.time = time;
    this.title = title;
    this.text = text;
    this.posters = posters;
    this.trailerLink = trailerLink;
    this.captionContainer = captionContainer;
    this.upNextContainer = upNextContainer;

    this.createHtmlBase = function () {
        // img
        let a = 0;

        this.images.forEach(value => {
            let img = document.createElement('img');
            img.id = "image" + a.toString();
            img.src = value;
            img.alt = "image";
            this.container.appendChild(img);

            a++;
        });

        document.querySelector(this.captionContainer[3]).src = this.posters[0];
    }

    // for the swipe effect
    let translate = 0;
    let width;

    // for events
    this.previousTransition = function () {
        width = document.querySelector(this.imgBalise).clientWidth;

        // if first image go back to the last one
        if (translate === 0)
            translate = (this.images.length * width) - width;
        else
            translate -= width;

        this.captionUpdate();

        // translate images
        document.querySelectorAll(this.imgBalise).forEach(value => {
            value.style.transform = "translateX(" + (- translate) + "px)";
        });
    }

    // for events
    this.nextTransition = function () {
        width = document.querySelector(this.imgBalise).clientWidth;

        // if last image go back to the first one
        if (translate === (this.images.length * width) - width)
            translate = 0;
        else
            translate += width;

        this.captionUpdate();

        // translate images
        document.querySelectorAll(this.imgBalise).forEach(value => {
            value.style.transform = "translateX(-" + translate + "px)";
        });
    }


    this.nextAuto = function () {
        setInterval(() => this.nextTransition(), 7000);
    }


    // update the caption for each image
    this.captionUpdate = () => {
        let index = translate / width;

        setTimeout(() => {
            document.querySelector(this.captionContainer[0]).innerText = this.time[index];
            document.querySelector(this.captionContainer[1]).innerText = this.title[index];
            document.querySelector(this.captionContainer[2]).innerText = this.text[index];
            document.querySelector(this.captionContainer[3]).src = this.posters[index];
            document.querySelector((this.captionContainer[4])).href = this.trailerLink[index];

            // for innerText
            this.upNextUpdate(index, this.upNextContainer[0], this.time);
            this.upNextUpdate(index, this.upNextContainer[1], this.title);
            this.upNextUpdate(index, this.upNextContainer[2], this.text);

            let a = index;

            // for src
            document.querySelectorAll(this.upNextContainer[3]).forEach(value => {

                if (a < this.images.length - 1)
                    a++
                else
                    a = 0;

                value.src = this.posters[a];
            });

            a = index;
            // for href
            document.querySelectorAll(this.upNextContainer[4]).forEach(value => {

                if (a < this.images.length - 1)
                    a++
                else
                    a = 0;

                value.href = this.trailerLink[a];
            });

        }, 500);

    }

    this.upNextUpdate = function (index, container, array) {
        let a = index;

        document.querySelectorAll(container).forEach(value => {

            if (a < this.images.length - 1)
                a++
            else
                a = 0;

            value.innerText = array[a];
        })
    }
}