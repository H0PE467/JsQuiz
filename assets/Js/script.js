
// Document Selectors
var startButton = document.querySelector(".start");
var timer = document.querySelector(".clock");
var menuSection = document.querySelector(".startGame");
var questionSection = document.querySelector(".questions");


var questionAsked = document.querySelector(".question");
var listA = document.querySelector(".optionA");
var listB = document.querySelector(".optionB");
var listC = document.querySelector(".optionC");
var listD = document.querySelector(".optionD");

// Variables
var seconds = 0;
var minutes = 5;
var score = 0;
var currentQuestion = 0;

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

function updateTimer(){
    if (seconds == 0) {
        seconds = 60;
        minutes--;
    }
    seconds--;
    displayTimer();
}

function startTimer(event) {
    event.preventDefault();
    setInterval(updateTimer, 1000);
    menuSection.style.display = "none";
    questionSection.style.display = "flex";

}

function nextQuestion() {
    next = questions[currentQuestion]
    
    questionAsked.textContent = next.question;
    listA.textContent = next.optionA;
    listB.textContent = next.optionB;
    listC.textContent = next.optionC;
    listD.textContent = next.optionD;

    currentQuestion++;
}

nextQuestion();
startButton.addEventListener("click", startTimer);


