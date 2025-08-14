const right = document.querySelector(".right");
const hamburger = document.querySelector(".hamburger");
const searchInput = document.querySelector("#search-input");
const searchContainer = document.querySelector(".search");

hamburger.addEventListener("click", () => {
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

const gridItems = document.querySelectorAll(".grid1");

gridItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const player = item.querySelector(".player");
        if (player) player.classList.add("activate");
    });

    item.addEventListener("mouseleave", () => {
        const player = item.querySelector(".player");
        if (player) player.classList.remove("activate");
    });

    item.addEventListener("click", () => {
        window.location.href = "next.html";
    });
});

async function getSongs() {
    const res = await fetch("./song.json"); // JSON file se list le rahe
    const songList = await res.json();
    return songList;
}

async function main() {
    let songs = await getSongs();
    let button = document.querySelector(".grid-button");
    button.addEventListener("click", () => {
        if (songs.length > 0) {
            var audio = new Audio(songs[1]);
            audio.play();
        } else {
            console.log("No songs found!");
        }
    });
}
main();


