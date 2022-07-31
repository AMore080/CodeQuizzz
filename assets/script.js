var secondsLeft = 10;
var start = document.getElementById("startbutton");
var homePage = document.getElementById('containerHead');
var questionsCont = document.getElementById('questionContainer');
var questionString = document.getElementById('questions');
var btnElement = document.getElementsByClassName('btn');
var shuffledQuestions, currentQuestionIndex


start.addEventListener("click",gameStart);



function gameStart(){
    console.log("I am being clicked");
    homePage.classList.add('hide');
    questionsCont.classList.remove('hide');
    showQuestions();
}

function showQuestions(){
    questionString.innerHTML = questionsArr.question
    document.getElementsByClassName('btn').innerHTML = " ";
    btnElement.textcontent = questionsArr.answers.text
    }




    const questionsArr = 
        {
        question: "Which option is the correct way to close a tag?",
        answers: [
            {text: '</>'}
        ]
    }