
const imagesAddress = ['img/animation.gif', 'img/animation2.gif',

]

function imgrandom() {
    const rndImage = Math.floor(Math.random() * imagesAddress.length)


    document.body.style = `background-image: url(${imagesAddress[rndImage]}) ; background-size :cover ; background-repeat :no-repeat ; `


};
imgrandom()

const items = document.querySelectorAll(".items");
const score = document.querySelector(".top-11");
const attempt = document.querySelector(".top-20");


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


            // debugger
            setTimeout(function () {
                arr[0].classList.add("hide");
                arr[1].classList.add("hide");

                arr.length = 0

                wrongUnFreeze()



            }, 1000)


        }



    }


    if (arrCorrect.length === 16) {
        setTimeout(() => (
            alert("you win")
        ),10 )
    }
    if (count === 3) {
        alert("you lose")
        for (const item of items) {
            item.removeEventListener("click", itemClick)

        }


    }
    attempt.textContent = `attempt:${count}`
    score.textContent = `your score: ${arrCorrect.length / 2}`
    if (arrCorrect.length === 16) {
        score.textContent = `you win:*${arrCorrect.length / 2}*`
    }
    if (count === 3) {
        score.textContent = `your final:${arrCorrect.length / 2}`
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