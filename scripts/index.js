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

randomButton.addEventListener("click", getAdviceRandom);