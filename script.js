//GIVEN I am taking a code quiz
//WHEN I click the start button 
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

var startBtn = document.querySelector('#start-btn')
var quizContainer = document.querySelector('#quiz-container')



var score = 0;
var myQuestions = [{
    question: 'What is the current year?',
    answers: { 
        a: '1995',
        b: '2000',
        c: '2021',
        d: '2050'
    },
    correctAnswer: 'c'
}];

for(var i=0; i <myQuestions.length; i++)

function startQuiz() {};


