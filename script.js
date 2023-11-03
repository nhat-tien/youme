const toggleMenuBtn = document.getElementById("toggleMenu")
const menu = document.getElementById("menu")

toggleMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("opened")
})