const chiatay = async()=>{
var reponse = "chua co tin nhan"
reponse = await fetch("https://retoolapi.dev/U9Z01Z/userdata")
data = await reponse.json()
console.log(data);
document.getElementById("nam").innerHTML = data[0].fullName
document.getElementById("name").innerHTML = data[1].fullName
document.getElementById("fname").innerHTML = data[2].fullName
document.getElementById("tuoi").innerHTML = data[0].sex
document.getElementById("age").innerHTML = data[1].sex
document.getElementById("agee").innerHTML = data[2].sex
}
chiatay()

