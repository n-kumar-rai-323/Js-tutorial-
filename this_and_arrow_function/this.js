const user = {
    username : "Nishan",
    price:999,


welcomeMessage : function(){
    console.log(`${this.username}, welcome to website`)
}
}
user.welcomeMessage()
user.username="Nikita"
user.welcomeMessage()