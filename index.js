var randommNumber1=Math.floor(Math.random()*6)+1;
var randommNumber2=Math.floor(Math.random()*6)+1;

var image1=document.querySelectorAll("img")[0];
var diceImage="dice"+randommNumber1+".png";
var diceImageSrc="images/"+diceImage;
image1.setAttribute("src", diceImageSrc);

var image2=document.querySelectorAll("img")[1];
var diceImage2="dice"+randommNumber2+".png";
var diceImageSrc2="images/"+diceImage2;
image2.setAttribute("src", diceImageSrc2);

if(randommNumber1>randommNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";

}
else if(randommNumber2>randommNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else if(randommNumber1==randommNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}