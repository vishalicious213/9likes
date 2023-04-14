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
    renderStamp(1)
    // getNewCat()

}

function clickedPass() {
    currentCat.passed()
    renderStamp(0)
    // getNewCat()
}

// ⬇️ HELPER FUNCTIONS ⬇️

// get new cat to render or call end screen if no more cats
function getNewCat() {
    if (catIndex + 1 === cats.length) {
        setTimeout(renderEnd, 1500)
    } else {
        catIndex ++
        currentCat = new Cat(cats[catIndex])
        renderCat(currentCat)
    }
}

// ⬇️ RENDER THE APP ⬇️

// show end screen when there are no more cats
function renderEnd() {
    const header = document.getElementById("header")
    const footer = document.getElementById("footer")

    header.innerHTML = ""
    footer.innerHTML = ""
    catSection.innerHTML = ""
    catSection.style.backgroundImage = `url(/images/end.jpg)`
    catSection.style.backgroundColor = "white"

    catSection.innerHTML += `
        <div class="no-cats">
            NO MORE CATS!
        </div>
    `
}

// show the LIKE or NOPE stamp
function renderStamp(stamp) {
    if (stamp === 1) {
        catSection.innerHTML += `
            <div id="stamp">LIKED</div>
        `
    }

    if (stamp === 0) {
        catSection.innerHTML += `
            <div id="stamp">PASSED</div>
        `
    }

    setTimeout(getNewCat, 1500)
}

// render the current cat
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

// render the first non-swiped cat to start app
function renderApp() {
    if (!currentCat.hasBeenSwiped) {
        renderCat(currentCat)
    }
}

// render the splash page and then load the app
function renderSplashPage() {
    let randomNumber = Math.floor(Math.random() * 9) + 1
    catSection.innerHTML = ""

    catSection.innerHTML += `
        <div id="splash">
            <img src="/images/logo/${randomNumber}.png">
        </div>
    `

    setTimeout(renderApp, 1500)
}

renderSplashPage()