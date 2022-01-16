const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board');


let time = 0,
    score = 0;


startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up')
})

/* Делегирование событий */
timeList.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        let elAttr = e.target.getAttribute('data-time')
        // console.log(elAttr);
        time = Number(elAttr)
        startGame()
    }
})


function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide')
    } else {
        let currentTime = --time

        if (currentTime < 10) {
            currentTime = `0${currentTime}`
        }


        timeEl.innerHTML = `00:${currentTime}`
    }
}


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function createRandomCircle() {
    const circle = document.createElement('div')

    circle.classList.add('circle')

    let a = random(5,20)
    circle.style = `
        width: ${a}%;
        height: ${a}%;
        top: ${random(20,80)}%;
        left: ${random(20,80)}%;
        background: rgb(${random(0,256)},${random(0,256)},${random(0,256)})
    `

    board.appendChild(circle)
}

function random(min, max){
    let a = Math.floor(Math.random() * (max - min + 1) ) + min;
    return a
}
board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        score++
        e.target.remove();
        createRandomCircle()
    }
})