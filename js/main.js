document.querySelector('.menu-btn').addEventListener('click',()=>{
     document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.container, .showcase');
ScrollReveal().reveal('.news-cards, .cards-banner-one, .cards-banner-two', {delay:500});