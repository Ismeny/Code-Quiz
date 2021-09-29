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

/*var score = 0;
var startBtn = document.getElementById('start-btn');
var quizContainer = document.getElementById('#quiz-container');
var quizQuestions = document.getElementById('#quiz-questions');
var quizAnswers = document.getElementById('#quiz-answers');
var results = document.getElementById('#results');
var secondsLeft = 60;

document.getElementById("myH1").style.display = "none";
document.getElementById("landingPage").style.display = "block";

//timerInterval*/

/*
var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}


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
*/
/*startBtn.addEventListener('click', function() {
    document.getElementById("myH1").style.display = "block"
    document.getElementById("landingPage").style.display = "none"
});*/


/*var body = document.body;
var h1El = document.createElement('h1');
var infoEl = document.createElement('div');

// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = 'What is the current year?';
body.appendChild(h1El);
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;")

li1.textContent ='1995';
li2.textContent ='2000';
li3.textContent = '2021';
li4.textContent = '2051';

body.appendChild(infoEl);
infoEl.appendChild(listEl)
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);


li1.setAttribute("style", "color:black; margin:auto; width:50%; text-align:center;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");*/
var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var questions = document.getElementById('questions');
var choices = document.getElementById('choices');
var currentQuestion = 0;
var currentAnswer = 0;





//questionsContainer.setAttribute("style", " color:white; background: #777777;")
startBtn.setAttribute("style", " color:white; background: #777777;")
nextBtn.setAttribute("style", " color:white; background: #777777;")


startBtn.addEventListener('click', startQuiz)

function startQuiz(){
startBtn.style.display= "none"
questions.style.display= "block"
setNextQuestion()
}
//display questions
function setNextQuestion() {
    questions.textContent = myQuestions[currentQuestion].question;
    choices.textContent = myQuestions[currentAnswer].answers;

}

function selectAnswer() {

}


var myQuestions = [
    {
    question: 'What is the current year?',
    answers: ['1995', '2000', '2021', '2051'],
    correctAnswer: '2021',
    },
    {
        question: 'What city is the capital of Texas?',
        answers: ['Austin', 'Dallas', 'Houston', 'Paris'],
        correctAnswer: 'Austin',
    },
];