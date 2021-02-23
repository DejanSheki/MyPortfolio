var serbian = document.getElementById('sr_click');
var english = document.getElementById('en_click');
var sr_txt = document.querySelectorAll('.sr');
var en_txt = document.querySelectorAll('.en');

serbian.addEventListener('click', function() {
    serbian.classList.add('active');
    english.classList.remove('active');
    for (var i = 0; i < sr_txt.length; i++) {

        if (sr_txt[i].classList.contains('hide')) {
            sr_txt[i].classList.remove('hide')
        }
    }
    for (var j = 0; j < en_txt.length; j++) {
        en_txt[j].classList.add('hide');
    }
});

english.addEventListener('click', function() {
    english.classList.add('active');
    serbian.classList.remove('active');
    for (var i = 0; i < en_txt.length; i++) {

        if (en_txt[i].classList.contains('hide')) {
            en_txt[i].classList.remove('hide')
        }
    }
    for (var j = 0; j < sr_txt.length; j++) {
        sr_txt[j].classList.add('hide');
    }
});



// function addActiveClass() {
//     var elements = document.querySelectorAll('.link-href'),
//         positions = [];

//     Array.prototype.forEach.call(elements, function(el, index) {
//         var positionInfo = el.getBoundingClientRect();
//         var appearPosition = positionInfo.top;

//         positions.push(appearPosition);

//     });

//     for (var i = 0; i < elements.length; i++) {
//         var screenPosition = window.innerHeight / 1.2;
//         var home = document.querySelectorAll('.home1');
//         var homeArr = Array.from(home);
//         // console.log(homeArr);
//         // console.log(home);
//         if (elements[i].getBoundingClientRect().top < screenPosition) {
//             // console.log(elements[i].attributes[0].nodeValue);

//         }
//         if (elements[i].attributes[0].nodeValue == 'home') {
//             homeArr.forEach(function(node, idx) {

//                 homeArr.classList.add('active');

//                 // console.log();
//             });
//             // console.log(homeArr);

//             for (var j = 0; j < homeArr.length; j++) {
//                 // home.classList.add('active');
//                 // console.log(home);

//             }
//         } else {
//             // home.classList.remove('active');
//         }
//     }
// }

// window.addEventListener('scroll', addActiveClass);