(function() {
    var navLinks = document.getElementById("nav-links");
    var menuButton = document.getElementById("menu-button");
    var nav = document.getElementById("nav");

    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("mobile-nav");
    }, false);

    navLinks.addEventListener("click", function() {
        navLinks.classList.toggle("mobile-nav");
    }, false);

    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 0) {
            nav.classList.add("scroll-down");
            navLinks.classList.add("text-dark");
        } else {
            nav.classList.remove("scroll-down");
            navLinks.classList.remove("text-dark");
        }
    });
}());
