
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

   