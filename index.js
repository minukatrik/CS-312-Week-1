// generate first random number 
var randNum1 = Math.floor(Math.random() * 6);

// select new dice image according to generated number
var selectImage1 = "images/" + "dice" + (randNum1 + 1) + ".png";

// select image 1 to change
var newImage1 = document.querySelectorAll("img")[0];

// set source to new image
newImage1.setAttribute("src", selectImage1);


// generate first random number
var randNum2 = Math.floor(Math.random() * 6);

var selectImage2 = "images/" + "dice" + (randNum2 + 1) + ".png";

var newImage2 = document.querySelectorAll("img")[1];

newImage2.setAttribute("src", selectImage2);


// check if first number is greater than second number
if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

// check if first number is greater than second number
else if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}