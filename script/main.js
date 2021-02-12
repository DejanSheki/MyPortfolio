//hamburger

$(function() {

    $('.bars').on('click', function() {
        $(".bars").toggleClass('bars-open');
        $('.menu').slideToggle(700);
    });

    $('.menu a').on('click', function() {
        var ww = $(window).width();
        if (ww < 768) {
            $('.menu').slideToggle(700);
            $('.bars-open').toggleClass('bars-open');
        }
    });
    $('.theme-switch input[type="checkbox"]').on('click', function() {
        var ww = $(window).width();
        if (ww < 768) {
            $('.menu').slideToggle(700);
            $('.bars-open').toggleClass('bars-open');
        }
    });

});


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

//green sock
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to('.text', {
    y: '0%',
    duration: 1.1,
    stagger: 1,
    ease: 'back'
});
tl.to('.slider', {
    y: '-100%',
    duration: 1.5,
    delay: 1
});
tl.to('.intro', {
        y: '-100%',
        duration: 1
    },
    '-=1');
tl.fromTo('nav', {
    opacity: 0
}, {
    opacity: 1,
    duration: 0.8
});


/* media Query */

installMediaQueryWatcher("(min-width: 768px)", function(matches) {

    if (matches) {
        tl.to('.welcome-text', {
                x: '0%',
                y: '-15px',
                duration: 1.5,
                stagger: 1,
                ease: 'back',
            },
            '-=1');
        tl.to('.welcome-text-d', {
                x: '59%',
                y: '-25px',
                duration: 1.5,
                stagger: 1,
                ease: 'back.out(1.2)'
            },
            '-=1');
    } else {
        tl.to('.welcome-text', {
                x: '0%',
                y: '0px',
                duration: 1.5,
                stagger: 1,
                ease: 'back',
            },
            '-=1');
        tl.to('.welcome-text-d', {
                x: '50%',
                y: '-7px',
                duration: 1.5,
                stagger: 1,
                ease: 'back.out(1.2)'
            },
            '-=1');
    }
});

function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function(e) { return layoutChangedCallback(e.matches); });
    layoutChangedCallback(mql.matches);
}

/* sticky nav */

$(document).ready(function() {

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('.sticky').addClass('stickyAdd');
        } else {
            $('.sticky').removeClass('stickyAdd');
        }
    });
});

//add active class
$(document).ready(function() {
    $(document).on('scroll', onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off('scroll');

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 0, 'swing', function() {
            window.location.hash = target;
            $(document).on('scroll', onScroll);
        });
    });
});

// Use Class or ID For Selection 

function onScroll(event) {
    var scrollPos = $(document).scrollTop() + 250;
    $('.menu ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() + 200 > scrollPos) {
            $('.menu ul li a').removeClass('active');
            currLink.addClass('active');
        } else {
            currLink.removeClass('active');
        }
    });
}

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