const navSlide = () => {
    const anim = document.querySelector('.anim');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    anim.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';

        }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.35}s `
        }      
        });
        //animation

        anim.classList.toggle('toggle');
    });
}

navSlide();

// button scroll to top

const btnScrollToTop = document.querySelector("#btnscrollup");
btnScrollToTop.addEventListener("click", function() {
    //window.scrollTo(0, 0);
    
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
    });

});

