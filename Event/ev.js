const ol = document.querySelector("#ol")


ol.addEventListener("click",(e)=>{
    console.log("Ol click")
    e.stopPropagation()
},false)

const image = document.querySelector("#image")


image.addEventListener("click", (e)=>{
   
    console.log("clicked inside ul")
    
},false)