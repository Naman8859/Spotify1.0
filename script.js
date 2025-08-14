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

  item.addEventListener("click", ()=>{
    window.location.href = "next.html";
  })  
});
async function getSongs(){
    const a = await fetch("http://127.0.0.1:5501/songs/")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let song = []
    for(let index = 0; index<as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mkv")){
            song.push(element.href)
        }
    }
    return song
}

async function main() {
    let songs = await getSongs()
    let button = document.querySelector(".grid-button")
    button.addEventListener("click", ()=>{
        var audio = new Audio(songs[0])
        audio.play();
    })
    
}
main()
