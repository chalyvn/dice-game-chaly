var randomNumber1 = Math.floor((Math.random()*6) + 1); //1-6
var randomImageSource1 = `./images/dice${randomNumber1}.png`
var randomNumber2 = Math.floor((Math.random()*6) + 1); //1-6
var randomImageSource2 = `./images/dice${randomNumber2}.png`
document.querySelector(".img1").setAttribute("src",randomImageSource1);
document.querySelector(".img2").setAttribute("src",randomImageSource2);

//change text
var theWinner = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    theWinner.innerHTML = "😜 Chaly win!";
} else if (randomNumber1 < randomNumber2){
    theWinner.innerHTML = "😋 You win!";
} else {
    theWinner.innerHTML = "🤭 Draw!";
}
