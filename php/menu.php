<?php
// HTML menu
?>

<nav class="top_menu">
    <div class="logo"><a href="../index.php">IMDb</a></div>
    <div><a class="on_hover_grey" href=""><i class="fas fa-bars"></i>Menu</a></div>

    <!-- Bootstrap -->
    <div class="container">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="input-group">
                    <div class="input-group-btn search-panel">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <span id="search_concept">All</span> <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href=""><i class="fas fa-search"></i> All</a></li>
                            <li><a href=""><i class="fas fa-film"></i>Titles</a></li>
                            <li><a href=""><i class="fas fa-tv"></i>TV Episodes</a></li>
                            <li><a href=""><i class="fas fa-user-friends"></i>Celebs</a></li>
                            <li><a href=""><i class="far fa-building"></i>Compagnies</a></li>
                            <li><a href=""><i class="fas fa-tag"></i>Keywords</a></li>
                            <li class="divider"></li>
                            <li><a href=""><i class="fas fa-search-plus"></i>Advanced Search ></a></li>
                        </ul>
                    </div>
                    <input type="hidden" name="search_param" value="all" id="search_param">
                    <input type="text" class="form-control" name="x" placeholder="Search IMDb">
                    <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                </span>
                </div>
            </div>
        </div>
    </div>
    <!-- Bootstrap -->

    <div><a class="on_hover_grey" href="">IMDbPro</a></div>
    <div class="vertical_divider"></div>
    <div><a class="on_hover_grey" href=""><i class="far fa-bookmark"></i>Watchlist</a></div>
    <div><a class="on_hover_grey" href="">Sign In</a></div>
</nav>
