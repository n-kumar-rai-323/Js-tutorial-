
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
console.log(randomColor())

let intervalID
const startChangeColor = function () {
    if (!intervalID) {
        intervalID = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopColorChange = function () {
    clearInterval(intervalID);
    intervalID = null;
}
document.querySelector("#button").addEventListener('click', startChangeColor)


document.querySelector("#button1").addEventListener('click', stopColorChange);