let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function decrease() {
    if(count >= 1) {
    count -= 1
    countEl.textContent = count
    } else {
        console.log("Tore können nicht unter 0 sein.")
    }
}

function save() {
    let message = count + " - "
    saveEl.textContent += message
    countEl.textContent = 0
    count = 0
}
