var player1="Ilu";
var player2="Sudu";
document.querySelector(".player1").innerHTML=player1;
document.querySelector(".player2").innerHTML=player2;
var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
document.querySelector(".dice1Img").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
document.querySelector(".dice2Img").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩"+player1+"! Wins";
}
else if(randomNumber2>randomNumber1){

    document.querySelector("h1").innerHTML=player2+"! Wins"+"🚩";
}
else
    document.querySelector("h1").innerHTML="Draw!";
