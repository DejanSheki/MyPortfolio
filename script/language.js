var serbian = document.getElementById('sr_click');
var english = document.getElementById('en_click');
var sr_txt = document.querySelectorAll('.sr');
var en_txt = document.querySelectorAll('.en');

serbian.addEventListener('click', function() {
    serbian.classList.add('active');
    english.classList.remove('active');
    for (var i = 0; i < sr_txt.length; i++) {

        if (sr_txt[i].classList.contains('hide')) {
            sr_txt[i].classList.remove('hide');
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
            en_txt[i].classList.remove('hide');
        }
    }
    for (var j = 0; j < sr_txt.length; j++) {
        sr_txt[j].classList.add('hide');
    }
});