const Carousel = function (imagesArray, container, nextButton, previousButton, time) {
    this.images = imagesArray;
    this.container = container;
    // this.width = widthPx;
    // this.height = heightPx;
    this.next = nextButton;
    this.previous = previousButton;
    this.time = time

    this.createHtmlBase = function () {
        // img and small div
        let a = 0;

        this.images.forEach(value => {
            let img = document.createElement('img');
            img.id = "image" + a.toString();
            img.src = value;
            img.alt = "image";
            this.container.appendChild(img);

            a++;
        });
    }

    // swipe effect
    let translate = 0;

    // for events
    this.previousTransition = function () {
        // if first image go back to the last one
        if (translate === 0)
            translate = (imagesArray.length * parseInt(widthPx)) - parseInt(widthPx);
        else
            translate -= parseInt(widthPx);

        document.querySelectorAll('#carousel img').forEach(value => {
            value.style.transform = "translateX(" + (- translate) + "px)";
        });
    }

    // for events
    this.nextTransition = function () {

        // if last image go back to the first one
        if (translate === (imagesArray.length * parseInt(widthPx)) - parseInt(widthPx))
            translate = 0;
        else
            translate += parseInt(widthPx);

        document.querySelectorAll('#carousel img').forEach(value => {
            value.style.transform = "translateX(-" + translate + "px)";
        });
    }

    this.nextAuto = function () {
        setInterval(() => this.nextTransition(), 5000)
    }

}