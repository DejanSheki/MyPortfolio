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

    }, 2000);
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


//dark/light
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') || 'dark';

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

// show morw/less sr
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