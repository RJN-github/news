const apikey = "f2241965ed514ba09b12f8157d4df511"
const apikey1 = "2ad8760105dd4b34bdc697a76d847767"
const api = "&sortBy=publishedAt"
const apiurl = "https://newsapi.org/v2/everything?q="
const searchtext = document.querySelector(".search-text")
const searchbtn = document.querySelector(".search-btn")
const container = document.querySelector(".container")

window.addEventListener('load', () => {
    loadnews("India")
})

document.querySelector(".Global").addEventListener('click', () => {
    console.log("global clicked");
    container.innerHTML = ""
    loadnews("Global")
})

document.querySelector(".Sports").addEventListener('click', () => {
    console.log("Sports clicked");
    container.innerHTML = ""
    loadnews("sports +football +cricket +olympic")
})

document.querySelector(".Finance").addEventListener('click', () => {
    console.log("finance clicked");
    container.innerHTML = ""
    loadnews("Finance +india")
})

document.querySelector(".Politics").addEventListener('click', () => {
    console.log("Politics clicked");
    container.innerHTML = ""
    loadnews("Politics +india +war")
})

searchbtn.addEventListener('click', () => {
    container.innerHTML = ""
    loadnews(searchtext.value)
})

async function loadnews(query) {
    let response = await fetch(`${apiurl}${query}${api}&apikey=${apikey}`)

    if (!response.ok) {
        console.log("1st api key failed");
        response = await fetch(`${apiurl}${query}${api}&apikey=${apikey1}`)
    }
    let container = document.querySelector(".container")
    let data = await response.json()
    console.log(data.articles);
    if(data.articles.length===0){
        container.innerHTML = 'no any recent news on your search'
    }
    
    for (let index = 0; index <= data.articles.length; index++) {

        container.innerHTML = container.innerHTML + `<a href="${data.articles[index].url}" class = "card-cont">
        <div class="card-img">
        <img class ="image" src="${data.articles[index].urlToImage}" alt="Photo Unavailable">
        </div>
        <div class="card-text">
        <div class="title">${data.articles[index].title}</div>
        <div class="date">${data.articles[index].source.name}</div>
        <div class="description">${data.articles[index].description}</div>
        </div>
        </a>
        `
    }
    
}
const modeToggle = document.getElementById('modeToggle');
const main = document.querySelector('.main');

modeToggle.addEventListener('change', function() {
    if (this.checked) {
        main.classList.remove('main');
    } else {
        main.classList.add('main');
    }
});
