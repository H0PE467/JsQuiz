
// Document Selectors
var startButton = document.querySelector(".start");
var timer = document.querySelector(".clock");
var menuSection = document.querySelector(".startGame");
var questionSection = document.querySelector(".questions");
var answerTextBox = document.querySelector(".answerTextBox");
var answerSubmitButton = document.querySelector(".answerSubmit");



var questionAsked = document.querySelector(".question");
var listA = document.querySelector(".optionA");
var listB = document.querySelector(".optionB");
var listC = document.querySelector(".optionC");
var listD = document.querySelector(".optionD");

// Variables
var seconds = 2;
var minutes = 0;
var score = 0;
var currentQuestion = 0;
var answerToQuestion = "";


// Objects with Questions
let question0 = {
    question: 'How much is 2+2?',
    optionA: 'a) 1',
    optionB: 'b) 2',
    optionC: 'c) 3',
    optionD: 'd) 4',
    answer: 'd',
};

let question1 = {
    question: 'How much is 2+1?',
    optionA: 'a) 1',
    optionB: 'b) 2',
    optionC: 'c) 3',
    optionD: 'd) 4',
    answer: 'c',
};

let question2 = {
    question: 'How much is 1+1?',
    optionA: 'a) 1',
    optionB: 'b) 2',
    optionC: 'c) 3',
    optionD: 'd) 4',
    answer: 'b',
};

let questions = [question0,question1,question2]

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
            clearInterval(clockInterval);
            endgame();
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
    if(answerToQuestion == answerTextBox.value){
        score++;
    }
    answerTextBox.value = "";
    nextQuestion();
}

function endgame() {
    
}

startButton.addEventListener("click", startTimer);

answerSubmitButton.addEventListener("click", checkAnswer)



