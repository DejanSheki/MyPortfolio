// preload

window.addEventListener('load', function() {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");

});
window.onload = function loadFrame() {
    setTimeout(function() {
        const wlctx = document.querySelector(".welcome-text");
        const wlctxd = document.querySelector(".welcome-text-d");
        wlctx.classList.add("welcome-text-add");
        wlctx.classList.remove("welcome-text-trans");
        wlctxd.classList.add("welcome-text-d-add");
        wlctxd.classList.remove("welcome-text-d-trans");

    }, 4000)
};

//hamburger

const bars = document.querySelector('.bars');
const menu = document.querySelector('.menu');
const menuA = document.querySelectorAll('.menu a');

bars.addEventListener('click', function() {
    if (bars.classList.contains('bars-open') === false) {
        bars.classList.add('bars-open');
        menu.classList.add('menu-open');
    } else {
        bars.classList.remove('bars-open');
        menu.classList.remove('menu-open');
    }
});

for (var i = 0; i < menuA.length; i++) {
    menuA[i].addEventListener('click', function() {

        if (bars.classList.contains('bars-open') && menu.classList.contains('menu-open')) {
            bars.classList.remove('bars-open');
            menu.classList.remove('menu-open');
        }
    });
}
// });
// $(function() {

//     $('.bars').on('click', function() {
//         $(".bars").toggleClass('bars-open');
//         $('.menu').slideToggle(700);
//     });

//     $('.menu a').on('click', function() {
//         var ww = $(window).width();
//         if (ww < 768) {
//             $('.menu').slideToggle(700);
//             $('.bars-open').toggleClass('bars-open');
//         }
//     });
//     $('.theme-switch input[type="checkbox"]').on('click', function() {
//         var ww = $(window).width();
//         if (ww < 768) {
//             $('.menu').slideToggle(700);
//             $('.bars-open').toggleClass('bars-open');
//         }
//     });

// });

//add class active on click

document.addEventListener('click', function() {

    if (!event.target.classList.contains('nav-link')) return;
    event.target.classList.add('active');

    var links = document.querySelectorAll('.nav-link');

    for (var i = 0; i < links.length; i++) {

        if (links[i] === event.target) continue;
        links[i].classList.remove('active');
    }
}, false);

//dark/light
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') || 'dark';

let docStyle = getComputedStyle(document.documentElement);

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;

    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

/* sticky nav */

window.addEventListener('scroll', function() {
    const windowPos = document.querySelector('html').scrollTop;
    const navbar = document.querySelector('.sticky');
    const navbarTopPos = navbar.getBoundingClientRect().top;

    if (windowPos >= navbarTopPos && !navbar.classList.contains('stickyAdd')) {
        navbar.classList.add('stickyAdd');
    } else if (windowPos <= navbarTopPos && navbar.classList.contains('stickyAdd')) {
        navbar.classList.remove('stickyAdd');
    }
});

//add active class
// $(document).ready(function() {
//     $(document).on('scroll', onScroll);

//     //smoothscroll
//     $('a[href^="#"]').on('click', function(e) {
//         e.preventDefault();
//         $(document).off('scroll');

//         $('a').each(function() {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');

//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//         }, 0, 'swing', function() {
//             window.location.hash = target;
//             $(document).on('scroll', onScroll);
//         });
//     });
// });

// Use Class or ID For Selection 

// function onScroll(event) {
//     var scrollPos = $(document).scrollTop() + 250;
//     $('.menu ul li a').each(function() {
//         var currLink = $(this);
//         var refElement = $(currLink.attr('href'));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() + 200 > scrollPos) {
//             $('.menu ul li a').removeClass('active');
//             currLink.addClass('active');
//         } else {
//             currLink.removeClass('active');
//         }
//     });
// }

//show morw - show less

const btnText = document.getElementById('myBtn');
const hidenContainer = document.querySelector('.hiden-container');

function showMore() {
    if (btnText.innerText === 'More projects ') {

        hidenContainer.classList.remove('hiden-container');
        hidenContainer.classList.add('show-container');
        btnText.innerHTML = 'Less projects <i class="far fa-hand-point-up"></i>';
    } else if (btnText.innerText === 'Less projects ') {

        hidenContainer.classList.add('hiden-container');
        hidenContainer.classList.remove('show-container');
        btnText.innerHTML = 'More projects <i class="far fa-hand-point-down"></i>';
    }
}

btnText.addEventListener('click', showMore);

const btnText2 = document.getElementById('myBtn2');
const hidenContainer2 = document.querySelector('.hiden-container');

//
document.getElementById('myBtn2').addEventListener('click', function() {

    if (btnText2.innerText === 'Još projekata ') {

        hidenContainer2.classList.remove('hiden-container');
        hidenContainer2.classList.add('show-container');
        btnText2.innerHTML = 'Manje projekata <i class="far fa-hand-point-up"></i>';
    } else if (btnText2.innerText === 'Manje projekata ') {

        hidenContainer2.classList.add('hiden-container');
        hidenContainer2.classList.remove('show-container');
        btnText2.innerHTML = 'Još projekata <i class="far fa-hand-point-down"></i>';
    }
}, false);