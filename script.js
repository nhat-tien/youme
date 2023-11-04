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

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1000: {
            slidesPerView: 4,
        },
        600: {
            slidesPerView: 2,
        }
    },
    loop: true,
});

var swiper3 = new Swiper(".swiper3", {
    pagination: {
        el: '.swiper-pagination3',
        type: 'bullets',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1000: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        }
    },
    loop: true,
});