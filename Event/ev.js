// const ol = document.querySelector("#ol")


// ol.addEventListener("click",(e)=>{
//     console.log("Ol click")
//     e.stopPropagation()
// },false)

// const image = document.querySelector("#image")


// image.addEventListener("click", (e)=>{

//     console.log("clicked inside ul")

// },false)


const image = document.querySelector("#image")
image.addEventListener("click", (e) => {
    console.log(e.target.parentNode)
    console.log(e.target.tagName)
    if (e.target.tagName === "IMG") {
        let removeIt = e.target.parentNode
        removeIt.remove()
    } else {
        console.log("You Click ul")
    }

})


const counter = document.getElementById('counter');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');


let count = 0
increaseButton.addEventListener("click", (e) => {
    count++;
    updateCounter();
})

decreaseButton.addEventListener("click", (e)=>{
    count--;
    updateCounter();
})

resetButton.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    counter.textContent = count;
}