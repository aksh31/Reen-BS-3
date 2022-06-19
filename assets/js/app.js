let cl = console.log;

$(document).ready(function () {
    $('#searchIcon').on('click', function () {
        $('.mainHeader .search input').toggleClass('show');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
})