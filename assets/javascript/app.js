
//VARIABLESSSSSSS
const questions = [{
    question: "What is the location of the Order of the Phoenix headquarters?",
    options: ["4 Privet Drive", "Shell Cottage", "Privet Circle", "Twelve Grimmauld Place"],
    correctAnswer: 3
}, {
    question: "What is the name of the sweet that Dudley eats when the Weasleys visit PRivet Drive in the Goblet of Fire?",
    options: ["badger", "lion", "eagle", "snake"],
    correctAnswer: 0
}, {
    question: "How many chocolate frog cards does Ron estimate he has in Sorcerers Stone?",
    options: ["250", "100", "50", "500"],
    correctAnswer: 3
}, {
    question: "Who is unanimously elected leader of Dumbledore's Army?",
    options: ["Harry Potter", "Sirius Black", "Hermione Granger", "Dumbledore's brother"],
    correctAnswer: 0
}, {
    question: "Which birthday does Harry celebrate in Sorcerer's Stone?",
    options: ["Tenth", "Thirteenth", "Eleventh", "Fourteenth"],
    correctAnswer: 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var timerRunning = false;
var gameClock;
$(document).ready(function () {

    // Display first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    
                    // Change the text in the next button to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});
// isplays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].options.length;

    // Set to the current question
    $(questionClass).text(question);

    // Remove all <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].options[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

//function reset
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
//function score
function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}

 const gameTimer = 30;

