// bài 1
function student(name, age, address){
    var obj = { 
    name:"Nam",
     age : "16",
     address : "kinh mon"}
     return obj;
 }
console.log(student)
//bài 2
var smartPhone = [
    {name:'iphone','price':649},
    {name:'galaxy s6',price:576},
    {name:'galaxy note 5',price:489}
      
];
console.log(smartPhone.map(smartPhone=>smartPhone.price));
// bài 4
let user = {
    namest : "Minh Son" ,
    agest :"10",
    addressst : "Da Lat"
}   
var stringUser = JSON.stringify(user)
localStorage.setItem('user',stringUser)
localStorage.getItem('user')
console.log(user)
// bài 3


const foo = (x,y,z)=>console.log(x,y,z)
const foo2 = () => {
    alert('hello')
}
const foo3 = (a,b) => {
  let m=a+b*100;return m
}
var a = 5
var b = 3
var c = 0
console.log(c);
var msg = ""
msg = ""
setTimeout(())
console.log(msg)



