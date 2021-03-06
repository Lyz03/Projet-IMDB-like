<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <!-- Bootstrap -->

    <link rel="stylesheet" href="/style.css">

    <title>IMDb</title>
</head>
<body>

<?php
    require "php/menu.php";
?>

<section class="nb1">
    <div class="left">
        <div class="nb1">
            <div></div>
            <button class="rectangle previous"><i class="fas fa-chevron-left"></i></button>
            <button class="rectangle next"><i class="fas fa-chevron-right"></i></button>
        </div>

        <div class="nb2">
            <div>
                <button>+</button>
                <img src="" alt="image" id="poster">
            </div>

            <div class="middle">
                <a href="https://www.youtube.com/watch?v=4wCH1K-ckZw" class="play" target="_blank"><i class="fas fa-play"></i></a>
            </div>

            <div class="bottom">
                <div>
                    <h2>Mark Walhberg & Tom Holland Go Treasure Hunting</h2>
                    <p>Watch the new 'Uncharted' Trailer</p>
                </div>

                <div>
                    <span>2:24</span>
                </div>
            </div>
        </div>
    </div>

    <div class="right">
        <h2>Up Next</h2>

        <div>
            <div class="flex">
                <div class="images">
                    <img src="/images/watch-to-watch-poster.jpg" alt="image">
                </div>

                <div class="text">
                    <a href="https://www.imdb.com/video/vi2261304089?ref_=hp_hp_e_4&listId=ls081395803" class="play" target="_blank">
                        <i class="fas fa-play"></i>
                    </a>
                    <span>2:45</span>
                    <h3>The Most Anticipated New Movies of 2022</h3>
                    <p>Get Your Watchlists Ready</p>
                </div>
            </div>

            <div class="flex">
                <div class="images">
                    <img src="/images/doctor-strange-poster.jpg" alt="image">
                </div>

                <div class="text">
                    <a href="https://www.youtube.com/watch?v=Rt_UqUm38BI" class="play" target="_blank">
                        <i class="fas fa-play"></i>
                    </a>
                    <span>2:12</span>
                    <h3>'Doctor Strange in the Multiverse of Madness'</h3>
                    <p>Watch the Teaser Trailer</p>
                </div>
            </div>

            <div class="flex">
                <div class="images">
                    <img src="/images/watch-to-watch-poster.jpg" alt="image">
                </div>

                <div class="text">
                    <a href="https://www.imdb.com/video/vi2261304089?ref_=hp_hp_e_4&listId=ls081395803" class="play" target="_blank">
                        <i class="fas fa-play"></i>
                    </a>
                    <span>2:30</span>
                    <h3>IMDb Users' Most Anticipated Series</h3>
                    <p>New TV Coming in 2022</p>
                </div>
            </div>

            <a id="trailer_link" href="">Browse trailers <i class="fas fa-chevron-right"></i></a>
        </div>
    </div>
</section>

<section id="fanFav">
    <a class="title" href="">Fan favorites <i class="fas fa-chevron-right"></i></a>
    <span>This week's top TV and movies</span>

    <button class="rectangle previous"><i class="fas fa-chevron-left"></i></button>
    <button class="rectangle next"><i class="fas fa-chevron-right"></i></button>

    <div id="fanFavContainer"></div>
</section>

<footer>
    <div class="social">
        <div><a href="" title="Facebook"><i class="fab fa-facebook-square"></i></a></div>
        <div><a href="" title="Instagram"><i class="fab fa-instagram"></i></a></div>
        <div><a href="" title="Twitch"><i class="fab fa-twitch"></i></a></div>
        <div><a href="" title="Twitter"><i class="fab fa-twitter"></i></a></div>
        <div><a href="" title="Youtube"><i class="fab fa-youtube"></i></a></div>
    </div>

    <div class="links">
        <a href="">Get the IMBd App <i class="fas fa-external-link-alt"></i></a>
        <a href="">Help <i class="fas fa-external-link-alt"></i></a>
        <a href="">Site Index <i class="fas fa-external-link-alt"></i></a>
        <a href="">IMBdPro <i class="fas fa-external-link-alt"></i></a>
        <a href="">Box Office Mojo <i class="fas fa-external-link-alt"></i></a>
        <a href="">IMDb Developer <i class="fas fa-external-link-alt"></i></a>
        <a href="">Press Room</a>
        <a href="">Advertising <i class="fas fa-external-link-alt"></i></a>
        <a href="">Jobs <i class="fas fa-external-link-alt"></i></a>
        <a href="">Condition of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">Interest-Based Ads <i class="fas fa-external-link-alt"></i></a>
    </div>

    <div>
        <p>an amazon company</p>
        <span>&copy; owner</span>
    </div>
</footer>

<script src="https://kit.fontawesome.com/25d98733ec.js" crossorigin="anonymous"></script>
<script src="/js/Carousel.js"></script>
<script src="/js/SmallCarousel.js"></script>
<script src="/js/app.js"></script>
</body>
</html>