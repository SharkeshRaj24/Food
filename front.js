

// loader

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeout(){
    setInterval(loader,3000);
}
window.onload = fadeout();
// loder end

// search

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("Search");
    const items = document.querySelectorAll(".item");
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
  
      items.forEach(item => {
        const itemName = item.querySelector("h4").innerText.toLowerCase();
        if (itemName.includes(searchTerm)) {
          item.style.display = "block"; // Show the item
        } else {
          item.style.display = "none"; // Hide the item
        }
      });
    });
  });
  

// search end

//Oredr start
function check(){

let username = document.forms["form"]["name"].value
let gmail = document.forms["form"]["gmail"].value
let address = document.forms["form"]["Address"].value
let foodname = document.forms["form"]["foodname"].value
let Quantity = document.forms["form"]["Quantity"].value
let Payment = document.forms["form"]["pay"].value

if(username==""){
  alert("User name must Brow first fill the column...")
}
 else if(gmail==""){
   alert("Gmail is must Brow first fill the column...")
 }
else if(gmail.length<8){
   alert("Gmail minimum 8 charector your used for this gmail type to use brow...")
 }
else if(address==""){
   alert("Address is must Brow first fill the column...")
 }
 else if(address.length<20){
  alert("Address minimum 20 charector your used for this address type to use brow...")
 }
 else if(foodname==""){
   alert("food name is must brow first fill the column...")
 }
 else if(Quantity==""){
   alert("Quantity is must brow first fill the column...")
 }
 else if(Payment==""){
    alert("Please Enter your Payment Mode....")
 }
 else{
   alert("Your Successfully Ordered your Food...")
 }

}



