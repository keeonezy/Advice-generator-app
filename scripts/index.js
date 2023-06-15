// Advice:
// 1. js style name: https://www.w3schools.com/jsref/prop_style_transition.asp
// 2. Api info https://api.adviceslip.com/

// 1. Рандом цитата через кнопку
const counterAdvice = document.querySelector(".advice__counter");
const subTitle = document.querySelector(".advice__subtitle");
const randomButton = document.querySelector(".advice__random");

async function getAdviceRandom() {
    const url = `https://api.adviceslip.com/advice`;
    const res = await fetch(url);
    const data = await res.json();

    counterAdvice.textContent = data.slip.id
    subTitle.textContent = `"${data.slip.advice}"`;
}
getAdviceRandom();

function timeRandomButton() {
    getAdviceRandom();
    randomButton.disabled = true;
    randomButton.style.opacity = "0";

    setTimeout(() => {
        randomButton.disabled = false;
        randomButton.style.opacity = "1";
    }, 2000);
}

randomButton.addEventListener("click", timeRandomButton);



// 2. Поиск через input по id
const inputSearch = document.querySelector(".advice__input");
const searchButton = document.querySelector(".advice__button");

async function getAdviceId(evt) {
    evt.preventDefault();
    const url = `https://api.adviceslip.com/advice/${inputSearch.value}`;
    const res = await fetch(url);
    const data = await res.json();

    counterAdvice.textContent = data.slip.id
    subTitle.textContent = `"${data.slip.advice}"`;
}

searchButton.addEventListener("click", getAdviceId);

inputSearch.value = "5";