let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date
const Days =['Sun','Mon','Tue','Thurs','Fri','Sat'];
console.log(newDate.getMonth()+1);
console.log(newDate.getDay().toString());
console.log(Days[(newDate.getDay().toString())]);

newDate.toLocaleString('defaul',{
    weekday:"long"
} )