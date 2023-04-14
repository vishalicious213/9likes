import cats from "./data.js"
import Cat from "./cat.js"

const catSection = document.getElementById("cat")
let catIndex = 0
let currentCat = new Cat(cats[catIndex])

console.log(currentCat)

// ⬇️ RENDER THE APP ⬇️

function renderCat(index) {
    catSection.innerHTML = ""
    catSection.style.backgroundImage = `url(${cats[index].avatar})`

    catSection.innerHTML += `
        <div class="cat-profile">
            <h2>${cats[index].name}, ${cats[index].age}</h2>
            <p>${cats[index].bio}</p>
        </div>
    `
}

function renderApp() {
    for (let i = 0; i < cats.length; i++) {
        if (cats[i].hasBeenSwiped === false) {
            renderCat(i)
        }
    }
}

// render the splash page and then load the app
function renderSplashPage() {
    catSection.innerHTML = ""
    let randomNumber = Math.floor(Math.random() * 9) + 1

    catSection.innerHTML += `
        <div id="splash">
            <img src="/images/logo/${randomNumber}.png">
        </div>
    `

    setTimeout(renderApp, 1500)
}

renderSplashPage()