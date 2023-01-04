let menu = document.querySelector('#menu-bars');

let navbar = document.querySelector('.navbar');



menu.onclick = () =>{

  menu.classList.toggle('fa-times');

  navbar.classList.toggle('active');

}



let section = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('header .navbar a');



window.onscroll = () =>{



  menu.classList.remove('fa-times');

  navbar.classList.remove('active');



  section.forEach(sec =>{



    let top = window.scrollY;

    let height = sec.offsetHeight;

    let offset = sec.offsetTop - 150;

    let id = sec.getAttribute('id');



    if(top >= offset && top < offset + height){

      navLinks.forEach(links =>{

        links.classList.remove('active');

        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

      });

    };



  });



}



var swiper = new Swiper(".home-slider", {

        spaceBetween: 30,

        centeredSlides: true,

        autoplay: {

          delay: 7500,

          disableOnInteraction: false,

        },

        pagination: {

          el: ".swiper-pagination",

          clickable: true,

        },

        loop:true,

      });



var swiper = new Swiper(".review-slider", {

  spaceBetween: 20,

  centeredSlides: true,

  autoplay: {

    delay: 7500,

    disableOnInteraction: false,

  },

  loop:true,

  breakpoints: {

    0: {

        slidesPerView: 1,

    },

    640: {

      slidesPerView: 2,

    },

    768: {

      slidesPerView: 2,

    },

    1024: {

      slidesPerView: 3,

    },

  },

});

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var bin = document.getElementById("binancecoin");
var rip = document.getElementById("ripple");
var teth = document.getElementById("tether");


var settings ={
     
     "async" :true,
     "scrossDomain" :true,
     "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cripple%2Cdogecoin%2Cethereum%2Cbinancecoin%2Ctether&vs_currencies=usd",
     "method" : "GET",
     "headers" : {}
}
    
$.ajax(settings).done(function(response){

  btc.innerHTML= response.bitcoin.usd;
  eth.innerHTML= response.ethereum.usd;
  doge.innerHTML= response.dogecoin.usd;
  bin.innerHTML= response.binancecoin.usd;
  rip.innerHTML= response.ripple.usd;
  teth.innerHTML= response.tether.usd;
});