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


const hrefHome = document.querySelectorAll('a[href="#home"]');
const hrefProjects = document.querySelectorAll('a[href="#projects"]');
const hrefProjekti = document.querySelectorAll('a[href="#projekti"]');
const hrefSkills = document.querySelectorAll('a[href="#skills"]');
const hrefVestine = document.querySelectorAll('a[href="#vestine"]');
const hrefProfile = document.querySelectorAll('a[href="#profile"]');
const hrefProfil = document.querySelectorAll('a[href="#profil"]');

function changeLinkState() {

    var sectionHome = document.querySelector('#home').getBoundingClientRect();
    var sectionProjects = document.querySelector('.href-link-projects').getBoundingClientRect();
    var sectionProjekti = document.querySelector('.href-link-projekti').getBoundingClientRect();
    var sectionSkills = document.querySelector('.href-link-skills').getBoundingClientRect();
    var sectionVestine = document.querySelector('.href-link-vestine').getBoundingClientRect();
    var sectionProfile = document.querySelector('.href-link-profile').getBoundingClientRect();
    var sectionProfil = document.querySelector('.href-link-profil').getBoundingClientRect();

    var screenPosition = window.innerHeight / 1.1;
    var screenPosition2 = window.innerHeight / 2.5;

    if (sectionHome.top > screenPosition2) {
        hrefHome[1].classList.add('active');
        console.log(hrefHome[1].classList);
    } else {
        hrefHome[1].classList.remove('active');
    }

    if (sectionProjects.top < screenPosition) {
        hrefProjects[0].classList.add('active');
        hrefSkills[0].classList.remove('active');
        hrefProfile[0].classList.remove('active');

    } else {
        hrefProjects[0].classList.remove('active');
    }

    if (sectionProjekti.top < screenPosition) {
        hrefProjekti[0].classList.add('active');
        hrefVestine[0].classList.remove('active');
        hrefProfil[0].classList.remove('active');
    } else {
        hrefProjekti[0].classList.remove('active');
    }

    if (sectionSkills.top < screenPosition) {
        hrefSkills[0].classList.add('active');
        hrefProjects[0].classList.remove('active');
        hrefProfile[0].classList.remove('active');
    } else {
        hrefSkills[0].classList.remove('active');
    }

    if (sectionVestine.top < screenPosition) {
        hrefVestine[0].classList.add('active');
        hrefProjekti[0].classList.remove('active');
        hrefProfil[0].classList.remove('active');
    } else {
        hrefVestine[0].classList.remove('active');
    }

    if (sectionProfile.top < screenPosition) {
        hrefProfile[0].classList.add('active');
        hrefSkills[0].classList.remove('active');
        hrefProjects[0].classList.remove('active');
    } else {
        hrefProfile[0].classList.remove('active');
    }


    if (sectionProfil.top < screenPosition) {
        hrefProfil[0].classList.add('active');
        hrefProjekti[0].classList.remove('active');
        hrefVestine[0].classList.remove('active');;
    } else {
        hrefProfil[0].classList.remove('active');
    }
}
window.addEventListener('scroll', changeLinkState);


// const links = document.querySelectorAll('.nav-link');
// const sections = document.querySelectorAll('.href-link');
// console.log(links);

// function changeLinkState() {
//     let index = sections.length;

//     while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

//     links.forEach((link) => link.classList.remove('active'));
//     links[index].classList.add('active');
// }

// changeLinkState();
// window.addEventListener('scroll', changeLinkState);