function multiply(num){
    return num*5
}

multiply.power = 2
console.log(multiply(4));
console.log(multiply.power);

function createuser(username,price){
    this.username = username
    this.price = price
    //this ka matlab jis na bhi bulaya
}

createuser.prototype.increment = function(){
   this.price++
}

createuser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
}

const chai = new createuser("chai",25)
const tea = createuser("tea",400)

//js new keywrd kay throw contructor function dati hai

chai.printMe()