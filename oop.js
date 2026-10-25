const user={
    username:"ebadurrehman",
    loginCount:5,
    Sigin:true,

    getUserDetail:function(){
        //console.log("Got user detail from database ");
    console.log(`Username :${this.username}`);
    console.log(this)
    }

}


console.log(user.username)
//console.log(user.getUserDetail())
console.log(this)


//constructor function

//new keyword is actually a constructor function 
//it allow one one object to make multiple instantance
//new keyword naya context bna nay kay liya kaam ata hai
//or isi ko hum contructor function khetay hai

//const promiseone = new promise()
//const date = new Date()

//lefthand side hmara variable hai or rhs parameter ma jo value pass krae gai
function User(username,loginCount,isLoggedIn){
    this.myusername = username
    this.mylogin = loginCount
    this.islogged = isLoggedIn

}

const userOne = new User("hitesh",22,true)
console.log(userOne)


/*
jaisay hi hum new keyword use krae gai sub sa phelay ik 
empty object create hota hai js ko instance bola jata hai
step1 new object create hota hai
second ap ka constructor function call hota hai new keyword ki wja sa 
ya kiya krta hai jitanay bhi argument hotay hai pack krta hai or da data hai
or 
third step ma this keyword ma jo bhi apnay argument likay hai wo sub inject hojatae hai

4step ma ik object create hoga or jo bhi lika hai wo sub pass on hojae ga
