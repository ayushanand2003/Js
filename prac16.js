//singleton

//object literals
const JsUser ={
    name:"Ayush",
    age: 18,
    email:"ayushanand141@gmail.com",


}

JsUser.email="ayushanand@gmail.com"
// Object.freeze(JsUser)
JsUser.email="ayushanand@yahoo.com"
console.log(JsUser);

JsUser.greeting= function(){
    console.log("hello Js User");
}
console.log(JsUser.greeting());

JsUser.greetingtwo= function(){
    console.log(`hello Js User ${this.name}`);
}
console.log(JsUser.greetingtwo());