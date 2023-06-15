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
// getAdviceRandom();

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

async function getAdviceFirstId() {
    ;
    const url = `https://api.adviceslip.com/advice/${inputSearch.value}`;
    const res = await fetch(url);
    const data = await res.json();

    counterAdvice.textContent = data.slip.id;
    subTitle.textContent = `"${data.slip.advice}"`;
}
getAdviceFirstId();

async function getAdviceId(evt) {
    evt.preventDefault();
    const url = `https://api.adviceslip.com/advice/${inputSearch.value}`;
    const res = await fetch(url);
    const data = await res.json();

    counterAdvice.textContent = data.slip.id;
    subTitle.textContent = `"${data.slip.advice}"`;
}

inputSearch.value = "5";

searchButton.addEventListener("click", getAdviceId);


// Создаем локальное хранилище с данными
function setLocalStorage() {
    localStorage.setItem("adviceCounter", inputSearch.value);
}
window.addEventListener("beforeunload", setLocalStorage);

// Получаем из локального хранилища данные
function getLocalStorage() {
    if (localStorage.getItem("adviceCounter")) {
        inputSearch.value = localStorage.getItem("adviceCounter");
    }
}
window.addEventListener("load", getLocalStorage);


// 3. Поиск через input по string
const inputSearchString = document.querySelector(".advice__input-string");
const searchButtonString = document.querySelector(".advice__button-string");

async function getAdviceString(evt) {
    evt.preventDefault();
    const url = `https://api.adviceslip.com/advice/search/${inputSearchString.value}`;
    const res = await fetch(url);
    const data = await res.json();

    data.slips.forEach(element => {
        counterAdvice.textContent = element.id;
        subTitle.textContent = `"${element.advice}"`;
    })
}

searchButtonString.addEventListener("click", getAdviceString);