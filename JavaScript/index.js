randomNumber1 = Math.floor(Math.random()*6)+1;
randomNumber2 = Math.floor(Math.random()*6)+1;

var diceImg1 = document.querySelector(".img1");
if(randomNumber1 === 1){diceImg1.setAttribute("src", "images/dice1.png")}
else if(randomNumber1 === 2){diceImg1.setAttribute("src", "images/dice2.png")}
else if(randomNumber1 === 3){diceImg1.setAttribute("src", "images/dice3.png")}
else if(randomNumber1 === 4){diceImg1.setAttribute("src", "images/dice4.png")}
else if(randomNumber1 === 5){diceImg1.setAttribute("src", "images/dice5.png")}
else if(randomNumber1 === 6){diceImg1.setAttribute("src", "images/dice6.png")}

var diceImg2 = document.querySelector(".img2");
if(randomNumber2 === 1){diceImg2.setAttribute("src", "images/dice1.png")}
else if(randomNumber2 === 2){diceImg2.setAttribute("src", "images/dice2.png")}
else if(randomNumber2 === 3){diceImg2.setAttribute("src", "images/dice3.png")}
else if(randomNumber2 === 4){diceImg2.setAttribute("src", "images/dice4.png")}
else if(randomNumber2 === 5){diceImg2.setAttribute("src", "images/dice5.png")}
else if(randomNumber2 === 6){diceImg2.setAttribute("src", "images/dice6.png")}

var texth1Change = document.getElementsByClassName("container")[0].getElementsByTagName("h1")[0];
if(randomNumber1>randomNumber2){texth1Change.innerText = "Player 1 Wins!";}
else if(randomNumber1<randomNumber2){texth1Change.innerText = "Player 2 Wins!";}
else{texth1Change.innerText = "It's a draw!"}