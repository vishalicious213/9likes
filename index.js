import cats from "./data.js"
import Cat from "./cat.js"

const catSection = document.getElementById("cat")
const like = document.getElementById("heart")
const pass = document.getElementById("cross")

let catIndex = 0
let currentCat = new Cat(cats[catIndex])

console.log(currentCat)

// ⬇️ USER INTERFACE / EVENT LISTENERS ⬇️

like.addEventListener("click", function() {
    console.log("liked", currentCat.name)
})

pass.addEventListener("click", function() {
    console.log("passed", currentCat.name)
})

// ⬇️ RENDER THE APP ⬇️

function renderCat(catData) {
    catSection.innerHTML = ""
    catSection.style.backgroundImage = `url(${catData.avatar})`

    catSection.innerHTML += `
        <div class="cat-profile">
            <h2>${catData.name}, ${catData.age}</h2>
            <p>${catData.bio}</p>
        </div>
    `
}

function renderApp() {
    if (!currentCat.hasBeenSwiped) {
        renderCat(currentCat)
    }

    if (catIndex > cats.length) {
        console.log("END OF CATS")
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