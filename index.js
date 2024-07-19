let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(saveEl.textContent)
    if (saveEl.textContent == "Previous entries: ") {
        countStr = count
    } else {
        countStr = " - " + count
    }
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
