$(document).ready(function() {
    function e() {
        $(".sticky-left-nav").offset().top + $(".sticky-left-nav").height() >= $("footer").offset().top - 10 && $(".sticky-left-nav").addClass("bottom-menu").removeClass("top-menu"),
        $(document).scrollTop() + window.innerHeight < $("footer").offset().top && $(".sticky-left-nav").addClass("top-menu").removeClass("bottom-menu")
    }
    var a = window.location.pathname.toLowerCase()
      , t = "others";
    if ("/australia" !== a && "/australia.html" !== a && "/cn.html" !== a || (t = "home"),
    0 !== $("#core_capabilities").length && "home" !== t)
        new Waypoint({
            element: document.getElementById("core_capabilities"),
            handler: function() {
                $("header .container > .navbar-header,.container > .header-menu").toggleClass("hidden-xs hidden-sm hidden-md hidden-lg"),
                $("header .container").toggleClass("mt45")
            }
        });
    $(document).on("click", ".expandHead", function() {
        var e = $(this).data("id");
        $(e).fadeIn(),
        $(e).addClass("expandWrpr").removeClass("contractWrpr"),
        $(".closeWrpr").addClass("closeWrprAnim")
    }),
    $(document).on("click", ".closeWrpr", function() {
        $(".expandableDiv").removeClass("expandWrpr").addClass("contractWrpr"),
        $(".expandableDiv").fadeOut(),
        $(".closeWrpr").removeClass("closeWrprAnim")
    });
    var n = $("#employeespeak_slider").find(".item").length;
    $("#employeespeak_slider").owlCarousel({
        dots: n > 1,
        nav: n > 1,
        touchDrag: n > 1,
        mouseDrag: n > 1,
        loop: n > 1,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }),
    $(document).on("mouseenter", ".sticky-left-nav li", function() {
        $(this).hasClass("mb50") || $(this).addClass("nav-active")
    }),
    $(document).on("mouseleave", ".sticky-left-nav li", function() {
        $(this).hasClass("mb50") || $(this).removeClass("nav-active")
    }),
    $(window).scroll(function() {
        var a = $(window).scrollTop();
        a >= 100 ? $("section.scroll-section").each(function(e) {
            $(this).position().top <= a - 0 && ($(".sticky-left-nav li.nav-active").removeClass("nav-active mb50"),
            $(".sticky-left-nav li").eq(e).addClass("nav-active mb50"))
        }) : $(".stick-left-nav-ul li.nav-active-menu").removeClass("nav-active-menu"),
        e()
    }),
    $("nav.sticky-left-nav a").click(function(e) {
        e.preventDefault(),
        $(this).parent().addClass("nav-active"),
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + 10
        }, 500)
    })
});
