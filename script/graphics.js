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
            elements[i].classList.remove('nevidljivo');
        } else {
            elements[i].classList.remove('graphic-up');
            elements[i].classList.add('nevidljivo');
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
            elements[i].classList.remove('nevidljivo');
        } else {
            elements[i].classList.remove('graphic-left');
            elements[i].classList.add('nevidljivo');
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