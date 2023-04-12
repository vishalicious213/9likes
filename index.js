import cats from "./data.js"
import Cat from "./cat.js"

const catSection = document.getElementById("cat")

// ⬇️ RENDER THE APP ⬇️

function renderCat() {
    catSection.innerHTML = ""
    catSection.style.backgroundImage = `url(${cats[0].avatar})`

    catSection.innerHTML += `
        <div class="cat-profile">
            <div class="profile-img"></div>
        </div>
    `
}

renderCat()