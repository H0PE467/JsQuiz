// Document Selectors
var startButton = document.querySelector(".start");
var timer = document.querySelector(".clock");
var menuSection = document.querySelector(".startGame");
var questionSection = document.querySelector(".questions");
var answerTextBox = document.querySelector(".answerTextBox");
var answerSubmitButton = document.querySelector(".answerSubmit");
var endgameSection = document.querySelector(".endGame");
var scoreList = document.querySelector(".scoreList");
var scoreSubmit = document.querySelector(".scoreSubmit");
var username = document.querySelector(".username");
var finalscore = document.querySelector(".score");


var questionAsked = document.querySelector(".question");
var listA = document.querySelector(".optionA");
var listB = document.querySelector(".optionB");
var listC = document.querySelector(".optionC");
var listD = document.querySelector(".optionD");

// Variables
var seconds = 59;
var minutes = 4;
var score = 0;
var currentQuestion = 0;
var answerToQuestion = "";
var endGameActive = false;


var scores = [];


// Objects with Questions
let question0 = {
    question: 'Which option is a string?',
    optionA: 'a) "hello"',
    optionB: 'b) 5',
    optionC: 'c) true',
    optionD: 'd) 0.0258',
    answer: 'a',
};

let question1 = {
    question: 'Which word is used in Js to declare a function?',
    optionA: 'a) funcion',
    optionB: 'b) function',
    optionC: 'c) None, you dont need a word',
    optionD: 'd) def',
    answer: 'b',
};

let question2 = {
    question: 'All functions must have a name',
    optionA: 'a) true',
    optionB: 'b) false',
    optionC: '',
    optionD: '',
    answer: 'b',
};

let question3 = {
    question: 'What is the difference between a method and a function?',
    optionA: 'a) a method is faster',
    optionB: 'b) a function is faster',
    optionC: 'c) a method needs more space to be stored',
    optionD: 'd) a method must be inside an object and a function is outside the objects',
    answer: 'd',
};

let question4 = {
    question: 'Which symbol is used for declaring arrays?',
    optionA: 'a) ()',
    optionB: 'b) {}',
    optionC: 'c) []',
    optionD: 'd) $',
    answer: 'c',
};

let questions = [question0,question1,question2, question3, question4]

function displayTimer() {
    if (seconds < 10) {
        if (minutes < 10) {
            timer.textContent = "0" + minutes + ":" + "0" + seconds;
        }
        else{
            timer.textContent = minutes + ":" + "0" + seconds; 
        }
    }
    else{
        if (minutes < 10) {
            timer.textContent = "0" + minutes + ":" + seconds;
        }
        else{
            timer.textContent = minutes + ":" + seconds; 
        }
    }
}

function startTimer(event) {
    event.preventDefault();
    let clockInterval = setInterval(() =>{
        displayTimer();
        if (seconds == 0 && minutes == 0) {
            endgame();
        }

        if(endGameActive){
            clearInterval(clockInterval);
        }

        if (seconds == 0) {
            seconds = 60;
            minutes--;
        }
        seconds--;  
    }, 1000);
;
    menuSection.style.display = "none";
    questionSection.style.display = "flex";
    nextQuestion();
}

function nextQuestion() {

    if(currentQuestion==questions.length){
        endgame();
    }else{
        next = questions[currentQuestion]
    
        questionAsked.textContent = next.question;
        listA.textContent = next.optionA;
        listB.textContent = next.optionB;
        listC.textContent = next.optionC;
        listD.textContent = next.optionD;
        answerToQuestion = next.answer;
    
        currentQuestion++;
    }
}

function checkAnswer() {
    if(answerToQuestion == answerTextBox.value.toLowerCase()){
        score++;
    }else{
        if (seconds > 10) {
            seconds = seconds - 10;
        }else{
            minutes = minutes - 1;
            seconds = seconds + 50;
        }
    }
    answerTextBox.value = "";
    nextQuestion();
}

function endgame() {
    questionSection.style.display = "none";
    endgameSection.style.display = "flex";
    finalscore.textContent = score;
    endGameActive = true;


}

function appendPreviousScores(){
    scoreList.innerHTML = "";
    for (i = 0; i < scores.length; i++) {
        var li = document.createElement("li");
        console.log(li);
        li.textContent = scores[i];
        scoreList.appendChild(li);
    }
}

function addScore(){
    scores.push(username.value + " " + score)
    localStorage.setItem("scores", JSON.stringify(scores))
    appendPreviousScores();
}

startButton.addEventListener("click", startTimer);

answerSubmitButton.addEventListener("click", checkAnswer)

scoreSubmit.addEventListener("click",addScore)

if (localStorage.getItem("scores") != null) {
    var savedscores = JSON.parse(localStorage.getItem("scores"));

    scores = savedscores;
}


appendPreviousScores();




