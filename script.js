let menu = document.querySelector("#bars")
let navbar = document.querySelector(".nav")

menu.onclick= ()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.onscroll= ()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
document.querySelector("#search-icon").onclick=()=>{
    document.querySelector("#search-form").classList.toggle('active')
}
document.querySelector("#close").onclick=()=>{
    document.querySelector("#search-form").classList.remove('active')
}
// var swiper = new Swiper(".product-slider", {
//     loop: true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1020: {
//         slidesPerView: 3,
//       },
//     },
//   });