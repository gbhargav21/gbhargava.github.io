$(window).on('load', function() {

    $(".navbar-toggler").click(function() {
        if ($(".navbar-toggler").hasClass("collapsed")) {
            $(".collapse-bg").css({
                display: 'none'
            });
        } else {
            $(".collapse-bg").css({
                display: 'block'
            });
        }
    });

    $(".collapse-bg").click(function() {
        $(".navbar-toggler").removeClass("collapsed");
        $(".navbar-collapse").removeClass("show");
        $(".collapse-bg").css({
            display: 'none'
        });
    });

});


// var linkClicked = document.getElementsByClassName('nav-link');
// var numClass = linkClicked.length;

// for (var i = 0; i < numClass; i++) {
//     linkClicked[i].addEventListener('click', function() {
//         var onTheMoment = document.getElementsByClassName('active');
//         onTheMoment[0].className = onTheMoment[0].className.replace(' active', '');
//         this.className += ' active';
//     }, false);
// }