let secondsLeft = 1;
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
        nextQuestion()
    } else {
        setTimeout(timer, 1000);
    }
}

function showQuestions(){
    questionString.innerHTML = questionsArr.question[0]
}

function nextQuestion(){
    for(let i = 0; i < questionsArr.question.length; i++){
        questionString.innerHTML = questionsArr.question[i]
    }
    }


    const questionsArr = 
        {
        question: ["Commonly used Data types do NOT include?", "What is our DOM?"]
        }

    window.onload = showQuestions;