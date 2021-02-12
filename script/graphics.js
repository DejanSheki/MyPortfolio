//on scroll graphics/chart

function scrollAppear() {
    var elements = document.querySelectorAll('.graphics-appear'),
        positions = [];

    Array.prototype.forEach.call(elements, function(el, index) {
        var positionInfo = el.getBoundingClientRect();
        var appearPosition = positionInfo.top;

        positions.push(appearPosition);

    });

    for (var i = 0; i < elements.length; i++) {
        var screenPosition = window.innerHeight / 1.2;

        if (elements[i].getBoundingClientRect().top < screenPosition) {
            elements[i].classList.add('graphic-up');
            elements[i].classList.remove('invisible');
        } else {
            elements[i].classList.remove('graphic-up');
            elements[i].classList.add('invisible');
        }
    }
}
window.addEventListener('scroll', scrollAppear, { passive: true });

function scrollLineAppear() {
    var elements = document.querySelectorAll('.up-graphics-appear'),
        positions = [];

    Array.prototype.forEach.call(elements, function(el, index) {
        var positionInfo = el.getBoundingClientRect();
        var appearPosition = positionInfo.top;

        positions.push(appearPosition);

    });

    for (var i = 0; i < elements.length; i++) {
        var screenPosition = window.innerHeight / 1.2;

        if (elements[i].getBoundingClientRect().top < screenPosition) {
            elements[i].classList.add('graphic-left');
            elements[i].classList.remove('invisible');
        } else {
            elements[i].classList.remove('graphic-left');
            elements[i].classList.add('invisible');
        }
    }
}
window.addEventListener('scroll', scrollLineAppear, { passive: true });


//scroll effects

function scrollJumpAppear() {
    var elements = document.querySelectorAll('.jump'),
        positions = [];

    Array.prototype.forEach.call(elements, function(el, index) {
        var positionInfo = el.getBoundingClientRect();
        var appearPosition = positionInfo.top;

        positions.push(appearPosition);

    });

    for (var i = 0; i < elements.length; i++) {
        var screenPosition = window.innerHeight / 1.1;

        if (elements[i].getBoundingClientRect().top < screenPosition) {
            elements[i].classList.add('jump-appear');
        } else {
            elements[i].classList.remove('jump-appear');
        }
    }
}
window.addEventListener('scroll', scrollJumpAppear, { passive: true });

//counting percent on scroll

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);

}
const obj = document.getElementById("value-html");
const objJs = document.getElementById("value-js");
const objPhp = document.getElementById("value-php");

function scrollanimateValue() {
    var element = document.querySelector('#value-html').getBoundingClientRect();
    var screenPosition = window.innerHeight / 1;
    var screenPosition2 = window.innerHeight / 1.03;

    if (element.top < screenPosition && element.top > screenPosition2) {
        animateValue(obj, 0, 90, 1500);
    }
}
window.addEventListener('scroll', scrollanimateValue, { passive: true });

function scrollanimateValueJs() {
    var element = document.querySelector('#value-js').getBoundingClientRect();
    var screenPosition = window.innerHeight / 1;
    var screenPosition2 = window.innerHeight / 1.03;

    if (element.top < screenPosition && element.top > screenPosition2) {
        animateValue(objJs, 0, 60, 1500);
    }
}
window.addEventListener('scroll', scrollanimateValueJs, { passive: true });

function scrollanimateValuePhp() {
    var element = document.querySelector('#value-php').getBoundingClientRect();
    var screenPosition = window.innerHeight / 1;
    var screenPosition2 = window.innerHeight / 1.03;

    if (element.top < screenPosition && element.top > screenPosition2) {
        animateValue(objPhp, 0, 55, 1500);
    }
}
window.addEventListener('scroll', scrollanimateValuePhp, { passive: true });

//language blinding on scroll

function scrollLanguageBlinding() {
    var elements = document.querySelectorAll('.language'),
        positions = [];

    Array.prototype.forEach.call(elements, function(el, index) {
        var positionInfo = el.getBoundingClientRect();
        var appearPosition = positionInfo.top;

        positions.push(appearPosition);

    });

    for (var i = 0; i < elements.length; i++) {
        var screenPosition = window.innerHeight / 1.1;

        if (elements[i].getBoundingClientRect().top < screenPosition) {
            elements[i].classList.add('languageAppear');
        } else {
            elements[i].classList.remove('languageAppear');
        }
    }
}
window.addEventListener('scroll', scrollLanguageBlinding, { passive: true });