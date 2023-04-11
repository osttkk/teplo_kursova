// Home Carousel
$('.home-carousel').owlCarousel({
    loop:true,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    nav: false,
    responsive:{
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Navbar
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    //Toggles Fixed Class In Navbar On Scroll
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Nav Buttons
let menuBtn = document.querySelector('.menu-btn'); 
let searchBtn = document.querySelector('.searchbtn'); 
let cartBtn = document.querySelector('.cartbtn'); 
let darkBtn = document.querySelector('.darkbtn');
let signImg = document.getElementById('signImg');


menuBtn.onclick = function(){
    // Toggles Active Class In Nav Items On Click 
    document.getElementById("nav-items").classList.toggle('active');

    // Changes Icon on Click
    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }
    else{
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu"); 
    }

}



searchBtn.onclick = function(){
    // Toggles Active Class In Search Form On Click 
    document.getElementById("search-form").classList.toggle('active');

    // Changes Icon on Click
    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else{
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2"); 
    }

}

cartBtn.onclick = function(){
    // Toggles Active Class In Cart On Click 
    document.getElementById("cart").classList.toggle('active');


    // Changes Icon on Click
    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    }
    else{
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart"); 
    }
}

darkBtn.onclick = function(){
    //   Dark Mode Class To Body On Click 
    document.body.classList.toggle('dark-mode');


    // If Body Contains Dark Mode Class
    if(document.body.classList.contains('dark-mode')){


        // Changes Dark Mode Button Icon To Sun
        darkBtn.classList.remove("bx-moon");
        darkBtn.classList.add("bx-sun");

        //Changes Sing Img For Dark Background
        signImg.src = '/Images/sign/sign-dark.png';
    }
    else{
        // Changes Dark Mode Button Icon To Moon
        darkBtn.classList.remove("bx-sun");
        darkBtn.classList.add("bx-moon"); 

        //Changes Sing Img For Light Background
        signImg.src = '/Images/sign/sign-light.png';
    }
}


