const toggleMenuBtn = document.getElementById("toggleMenu")
const menu = document.getElementById("menu")

toggleMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("opened")
});

var swiper1 = new Swiper(".swiper1", {
    pagination: {
        el: '.swiper-pagination1',
        type: 'bullets',
    },
    paginationClickable: true,
    autoplay: {
        delay: 3000,
    },
    loop: true,
});