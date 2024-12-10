const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal)



const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2000
    },
    {
        itemName: "DevOps",
        price: 5000
    },
    {
        itemName: "Java Programming",
        price: 2000
    },
    {
        itemName: "Python Programming",
        price: 1400
    },
    {
        itemName: "MERN Stack",
        price: 1000
    },
    {
        itemName: "Data Science",
        price: 2300
    },
    
]

const TotalCourseFee= shoppingCart.reduce((initVal,item)=>initVal + item.price,0)
console.log(TotalCourseFee)