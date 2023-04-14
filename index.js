import cats from "./data.js"
import Cat from "./cat.js"

const catSection = document.getElementById("cat")
const like = document.getElementById("heart")
const pass = document.getElementById("cross")

let catIndex = 0
let currentCat = new Cat(cats[catIndex])

// ⬇️ EVENT LISTENERS ⬇️

like.addEventListener("click", function() {
    clickedLike()
})

pass.addEventListener("click", function() {
    clickedPass()
})

// ⬇️ EVENT HANDLERS ⬇️

function clickedLike() {
    currentCat.liked()
    console.log(currentCat)
    getNewCat()

}

function clickedPass() {
    currentCat.passed()
    console.log(currentCat)
    getNewCat()
}

// ⬇️ RENDER THE APP ⬇️

function getNewCat() {
    console.log(catIndex + 1, cats.length)
    if (catIndex + 1 === cats.length) {
        console.log("END OF CATS")
        setTimeout(renderEnd, 1500)
    } else {
        catIndex ++
        currentCat = new Cat(cats[catIndex])
        renderCat(currentCat)
    }
}

function renderEnd() {
    catSection.innerHTML = ""

    catSection.innerHTML += `
        <div class="no-cats">
            <img src="/images/end.jpg">
        </div>
    `
}

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

    // if (catIndex > cats.length) {
    //     console.log("END OF CATS")
    // }
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