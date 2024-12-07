// Scroll Animation Logic
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener('scroll', function () {
    const lessonContents = document.querySelectorAll('.lesson-content');
    lessonContents.forEach(function (lessonContent) {
        if (isInViewport(lessonContent)) {
            lessonContent.classList.add('visible');
        }
    });
});
document.querySelector('.page-link-site').addEventListener('click', (e) => {
    e.preventDefault(); // Ensure this line isn't blocking navigation
  });

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
});

