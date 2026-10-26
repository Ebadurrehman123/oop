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



Yaad rakhne ka simple rule: Constructor function object banane ke liye use ho raha ho, to new lagao
. this us naye object ki properties set karne mein help karta hai.

To new JavaScript ko kehta hai:

"Ek naya object banao, us object ke andar ye properties set karo, 
aur phir woh object mujhe return kar do."



Agar new na lagayein to kya hoga?

Normal function call mein JavaScript automatically naya object nahi
 banata. Tumhare function mein return bhi nahi hai, isliye userOne ki
value undefined hogi.

Yani tumne data store karne ke liye object banane ka tareeqa use kiya
, lekin object create hi nahi hua.


1. Sabse pehle function dekho
function User(name) {
    this.name = name
}


Yahan humne sirf ek function define kiya hai. Abhi humne koi object manually nahi banaya.

Is function ko hum ek blueprint samajh sakte hain — jaise ghar ka naqsha.
2. Ab object kahan banta hai?
const user1 = new User("Ali")


Is ek line mein teen important cheezein hain:
Step 1 — new User("Ali")

Object create hota hai

JavaScript ek naya object banata hai aur constructor function execute karta hai.


Step 2 — this.name = name

Object mein data save hota hai

this.name ki value "Ali" ho jati hai.


Step 3 — const user1 = ...

Object ka reference save hota hai

user1 us naye object ko access karne ke liye use hota hai.


Ab object kuch aisa hai:
user1 = {
    name: "Ali"
}


Ye sirf samjhane ke liye object ki representation hai. JavaScript ne is object ko new User("Ali") execute karte waqt banaya.
3. Phir user2 kya hai?
const user2 = new User("Ahmed")


Yahan new dobara use hua, isliye ek doosra, separate object create hua.
user1 = { name: "Ali" }

user2 = { name: "Ahmed" }


Dono objects alag hain, lekin dono ek hi constructor function se bane hain.
4. Kya ye method hai?
Nahi, is example mein new User("Ali") ko constructor function call kehte hain.
- User — constructor function ka naam.
- new — naya object banane ke liye.
- user1 — object ka reference rakhne wala variable.
- name — object ki property.
Method aam tor par woh function hota hai jo object ki property ke taur par hota hai, jaise:










*/