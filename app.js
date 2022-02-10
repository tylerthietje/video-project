// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


// select button and video container
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

// add el for btn 
btn.addEventListener('click', function () {
    // check for class slide on btn using .contains
    // use !btn in if statement to add and remove slide class
    if (!btn.classList.contains('slide')) {
        // when slide class is added, also video.pause();
        btn.classList.add('slide');
        video.pause();
    } else {
        // when slide class is removed, also video.play(); 
        btn.classList.remove('slide');
        video.play();
    }
});

// preloader
// select preloader
const preloader = document.querySelector('.preloader');

// ael on window for load event
window.addEventListener('load', function () {
    preloader.classList.add('hide-preloader');
});
    // add class hide-preloader to preloader on load