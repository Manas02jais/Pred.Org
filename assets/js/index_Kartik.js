window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var scrollTop = window.scrollY;

    // Change navbar color when scrolled
    if (scrollTop > 750) {
        navbar.classList.add('white');
    } else {
        navbar.classList.remove('white');
    }
});