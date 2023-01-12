//on scroll graphics/chart

// function scrollAppear() {
//     var elements = document.querySelectorAll('.graphics-appear'),
//         positions = [];

//     Array.prototype.forEach.call(elements, function(el) {
//         var positionInfo = el.getBoundingClientRect();
//         var appearPosition = positionInfo.top;

//         positions.push(appearPosition);

//     });

//     for (var i = 0; i < elements.length; i++) {
//         var screenPosition = window.innerHeight / 1.2;

//         if (elements[i].getBoundingClientRect().top < screenPosition) {
//             elements[i].classList.add('graphic-up');
//             elements[i].classList.remove('invisible');
//         } else {
//             elements[i].classList.remove('graphic-up');
//             elements[i].classList.add('invisible');
//         }
//     }
// }
// window.addEventListener('scroll', scrollAppear, {
//     passive: true
// });

// function scrollLineAppear() {
//     var elements = document.querySelectorAll('.up-graphics-appear'),
//         positions = [];

//     Array.prototype.forEach.call(elements, function(el) {
//         var positionInfo = el.getBoundingClientRect();
//         var appearPosition = positionInfo.top;

//         positions.push(appearPosition);

//     });

//     for (var i = 0; i < elements.length; i++) {
//         var screenPosition = window.innerHeight / 1.2;

//         if (elements[i].getBoundingClientRect().top < screenPosition) {
//             elements[i].classList.add('graphic-left');
//             elements[i].classList.remove('invisible');
//         } else {
//             elements[i].classList.remove('graphic-left');
//             elements[i].classList.add('invisible');
//         }
//     }
// }
// window.addEventListener('scroll', scrollLineAppear, {
//     passive: true
// });


//scroll heading jump

function scrollJumpAppear() {
    var elements = document.querySelectorAll('.jump'),
        positions = [];

    Array.prototype.forEach.call(elements, function(el) {
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
window.addEventListener('scroll', scrollJumpAppear, {
    passive: true
});

//counting percent on scroll

function animateValue(obj, start, end, duration) {
    var startTimestamp = null;
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

function dateDiff(start) {
    var dayStart = new Date(start);
    var dayEnd = new Date();
    var totalDays = (dayEnd - dayStart) / (1000 * 60 * 60 * 24);
    var days = Math.ceil(totalDays);

    return days;
}

const obj = document.getElementById("value-html");
const objJs = document.getElementById("value-css");
const objPhp = document.getElementById("value-javascript");

function scrollanimateValue() {
    var element = document.querySelector('#value-html').getBoundingClientRect();
    var screenPosition = window.innerHeight / 1 + 60;
    var screenPosition2 = window.innerHeight / 1.1 + 40;

    if (element.top < screenPosition && element.top > screenPosition2) {
        animateValue(obj, 0, dateDiff('02/01/2020'), 1500);
    }
}
window.addEventListener('scroll', scrollanimateValue, {
    passive: true
});

function scrollanimateValueJs() {
    var element = document.querySelector('#value-css').getBoundingClientRect();
    var screenPosition = window.innerHeight / 1 + 60;
    var screenPosition2 = window.innerHeight / 1.1 + 40;

    if (element.top < screenPosition && element.top > screenPosition2) {
        animateValue(objJs, 0, dateDiff('02/10/2020'), 1500);
    }
}
window.addEventListener('scroll', scrollanimateValueJs, {
    passive: true
});

function scrollanimateValuePhp() {
    var element = document.querySelector('#value-javascript').getBoundingClientRect();
    var screenPosition = window.innerHeight / 1 + 60;
    var screenPosition2 = window.innerHeight / 1.1 + 40;

    if (element.top < screenPosition && element.top > screenPosition2) {
        animateValue(objPhp, 0, dateDiff('06/15/2020'), 1500);
    }
}
window.addEventListener('scroll', scrollanimateValuePhp, {
    passive: true
});

//technologies blinding on scroll

// function scrollLanguageBlinding() {
//     var elements = document.querySelectorAll('.language'),
//         positions = [];

//     Array.prototype.forEach.call(elements, function(el) {
//         var positionInfo = el.getBoundingClientRect();
//         var appearPosition = positionInfo.top;

//         positions.push(appearPosition);

//     });

//     for (var i = 0; i < elements.length; i++) {
//         var screenPosition = window.innerHeight / 1.3;

//         if (elements[i].getBoundingClientRect().top < screenPosition) {
//             elements[i].classList.add('languageAppear');
//         } else {
//             elements[i].classList.remove('languageAppear');
//         }
//     }
// }
// window.addEventListener('scroll', scrollLanguageBlinding, {
//     passive: true
// });

// draw lines
// function scrollDrawLines() {
//     var elements = document.querySelectorAll('.line'),
//         positions = [];

//     Array.prototype.forEach.call(elements, function(el) {
//         var positionInfo = el.getBoundingClientRect();
//         var appearPosition = positionInfo.top;

//         positions.push(appearPosition);

//     });

//     for (var i = 0; i < elements.length; i++) {
//         var screenPosition = window.innerHeight / 1.1;

//         if (elements[i].getBoundingClientRect().top < screenPosition) {
//             elements[i].classList.add('drawline');
//         } else {
//             elements[i].classList.remove('drawline');
//         }
//     }
// }
// window.addEventListener('scroll', scrollDrawLines, {
//     passive: true
// });


// function scrollDrawLinesFooter() {
//     var elements = document.querySelectorAll('.line-footer'),
//         positions = [];

//     Array.prototype.forEach.call(elements, function(el) {
//         var positionInfo = el.getBoundingClientRect();
//         var appearPosition = positionInfo.top;

//         positions.push(appearPosition);

//     });

//     for (var i = 0; i < elements.length; i++) {
//         var screenPosition = window.innerHeight / 1.1;

//         if (elements[i].getBoundingClientRect().top < screenPosition) {
//             elements[i].classList.add('drawlineFooter');
//         } else {
//             elements[i].classList.remove('drawlineFooter');
//         }
//     }
// }
// window.addEventListener('scroll', scrollDrawLinesFooter, {
//     passive: true
// });

////

const scrollElements = document.querySelectorAll('.line');
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    })
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});