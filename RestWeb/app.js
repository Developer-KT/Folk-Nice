const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#menu-link');
    const storesPage = document.querySelector('#stores-link');
    const careersPage = document.querySelector('#careers-link');
    const aboutPage = document.querySelector('#about-link');
    let scrollPos = window.scrollY

    if (window.innerWidth > 960 && scrollPos < 1075) {
        homeMenu.classList.add('highlight')
        storesPage.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1950 ) {
        homeMenu.classList.remove('highlight')
        storesPage.classList.add('highlight')
        careersPage.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2500) {
        careersPage.classList.add('highlight')
        storesPage.classList.remove('highlight')
        aboutPage.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 3250) {
        aboutPage.classList.add('highlight')
        careersPage.classList.remove('highlight')
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {             // WHAT?? (revisit this)
        elem.classList.remove('highlight')
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);