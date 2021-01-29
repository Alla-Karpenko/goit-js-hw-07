
const result = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)

function increment() {
    const counterValue = Number(result.textContent)
    result.textContent = counterValue + 1
}
function decrement() {
    const counterValue = Number(result.textContent)
    result.textContent = counterValue - 1
}

// let counterValue = 0;
// const startValue = document.querySelector(`#value`);
// const decrement = document.querySelector(`button[data-action="decrement"]`);
// const increment = document.querySelector(`button[data-action="increment"]`);
// decrement.addEventListener(`click`, () => startValue.textContent = counterValue -= 1);
// increment.addEventListener(`click`, () => startValue.textContent = counterValue += 1);