const right = document.querySelector(".right");
const hamburger = document.querySelector(".hamburger");
const searchInput = document.querySelector("#search-input");
const searchContainer = document.querySelector(".search");

hamburger.addEventListener("click", ()=>{
    right.classList.toggle("show");
});

document.querySelector('.search img').addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) {
        searchContainer.classList.remove('active');
    }
});