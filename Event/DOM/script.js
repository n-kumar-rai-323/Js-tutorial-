const input = document.querySelector("#inputText")
const button = document.querySelector("#btn")
const ul = document.querySelector("ul")


button.addEventListener("click", () => {
    const inputValue  = input.value.trim();
    if(inputValue){
        const li = document.createElement('li')
        li.innerHTML = inputValue;
        ul.appendChild(li)
        input.value = "";

    }else{
        alert("Please enter an item.")
    }
})