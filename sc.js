const items = document.querySelectorAll(".items");
const score = document.querySelector(".absolute")
let arr = []
let arrCorrect = []
let count = 0
console.log(arr)
function shuffle() {
    let arrShuffle = []
    let arrTest = []
    for (let i = 0; i < 16; i++) {
        arrShuffle.push(Math.floor(Math.random() * 16))
        arrTest.push(items[arrShuffle[i]])
    }
}
shuffle()
function itemClick(evt) {
    console.log(evt);
    if (arr.length === 0) {
        evt.target.classList.add("disabled")
        evt.target.classList.remove("hide")
        arr.push(evt.target);
    } else {
        evt.target.classList.add("disabled")
        evt.target.classList.remove("hide")
        arr.push(evt.target);
        if (arr[0].innerHTML === arr[1].innerHTML) {
            evt.target.classList.remove("hide")
            evt.target.classList.add("disabled")
            arr.push(evt.target);
            arrCorrect.push(arr[0], arr[1])
            arr.length = 0
        } else {
            count++
            wrongFreeze()
            setTimeout(function () {
                arr[0].classList.add("hide");
                arr[1].classList.add("hide");
                arr.length = 0
                wrongUnFreeze()
            }, 1000)
        }
    }
}
function wrongFreeze() {
    for (const item of items) {
        item.classList.add("disabled");

    }
}
function wrongUnFreeze() {
    for (const item of items) {
        item.classList.remove("disabled");
        for (const inn of arrCorrect) {
            inn.classList.add("disabled")
        }

    }
}
function startFreeze() {
    for (const item of items) {
        item.classList.add("disabled")

    }
}
startFreeze()
function endStartFreeze() {
    for (const item of items) {
        item.classList.remove("disabled")

    }
}
setTimeout(endStartFreeze, 3000)
function hideAll() {
    for (const item of items) {
        item.classList.add("hide")
    }
}
setTimeout(hideAll, 3000)
for (const item of items) {
    item.addEventListener("click", itemClick)

}