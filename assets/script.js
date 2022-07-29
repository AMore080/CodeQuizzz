var secondsLeft = 10;
var start = document.getElementById("startbutton");
var homePage = document.getElementById('containerHead');
var questionsCont = document.getElementById('questionContainer');



start.addEventListener("click",gameStart);

function gameStart(){
    console.log("I am being clicked");
    homePage.classList.add('hide');
    questionsCont.classList.remove('hide');

}