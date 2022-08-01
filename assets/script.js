let secondsLeft = 10;
let start = document.getElementById("startbutton");
let homePage = document.getElementById('containerHead');
let questionsCont = document.getElementById('questionContainer');
let questionString = document.getElementById('questions');
let btnElement = document.getElementsByClassName('btn');

start.addEventListener("click",gameStart);



function gameStart(){
    console.log("I am being clicked");
    homePage.classList.add('hide');
    questionsCont.classList.remove('hide');
    timer();
    showQuestions();
}

function timer(){
    document.getElementById('timer').innerHTML = "Timer: " + secondsLeft;
    secondsLeft--;
    if (secondsLeft < 0){
        alert('YOU LOSE');     
    } else {
        setTimeout(timer, 1000);
    }
}

function showQuestions(){
    questionString.innerHTML = questionsArr.question
}


    const questionsArr = 
        {
        question: "Commonly used Data types do NOT include?", 
        answers: [
            {text:"</>"}
        ]
    }

    window.onload = showQuestions;