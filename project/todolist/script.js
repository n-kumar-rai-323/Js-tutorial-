const name = document.querySelector("#data")
console.log(name)
name.style.backgroundColor="green"
name.style.color = 'red'


const display =document.querySelector('ul')
console.log(display)


const listOne = document.querySelector('li:first-child')
listOne.innerText = "I have 3 Desktop and one laptop"
listOne.style.backgroundColor="gray"
listOne.style.color="red"


const list = document.querySelector('li:nth-child(2)')
console.log(list)

list.style.backgroundColor="green"
list.style.color="white"


const listLast = document.querySelector('li:last-child');
// listLast.innerHTML='<li><h1>I see Computer in the table</h1></li>'
listLast.style.backgroundColor="yellow"



// const allList = document.querySelectorAll('li')
// console.log(allList)

// allList[4].style.backgroundColor="blue"

// allList.forEach((data)=>{
//     data.style.color="navy"
//     data.style.backgroundColor="purple"
// })

const listitem =document.getElementsByClassName('list-item')

const conv = Array.from(listitem)
console.log(conv)
conv.map((li)=>{
    li.style.backgroundColor='purple'
    li.style.color='white'
    li.style.border='2px solid black'
})