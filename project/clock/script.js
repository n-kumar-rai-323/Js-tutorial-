const clock = document.querySelector('#clock')


setInterval(function(){
let date = new Date();
clock.innerHTML = date.toLocaleTimeString()
},1000)

document.getElementById("toggleBgBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });