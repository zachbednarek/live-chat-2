var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var finalScore = document.querySelector("#finalScore");

var answerChoice = document.querySelector(".answerChoice");

var nextQuestionButton = document.querySelector("#nextQuestion");

var x = 0;

var correctAnswers = 0;


var question1 = {
    questions: "What Color is the Reality Stone?",
    choice1: "Red",
    choice2: "Purple",
    choice3: "Blue",
    choice4: "Yellow",
    correctAnswer: "Red"
};

var question2 = {
    questions: "What is Iron Man's Real Name?",
    choice1: "Steve Rogers",
    choice2: "Bruce Banner",
    choice3: "Tony Stark",
    choice4: "Clint Barton",
    correctAnswer: "Tony Stark"
}

var question3 = {
    questions: "How many avengers were there in the first avengers movie?",
    choice1: "5",
    choice2: "6",
    choice3: "8",
    choice4: "7",
    correctAnswer: "6"
}

var question4 = {
    questions: "What is Peter Parkers Aunts name",
    choice1: "Karen",
    choice2: "Pepper",
    choice3: "Gamora",
    choice4: "May",
    correctAnswer: "May"
}

var questionsArray = [question1, question2, question3, question4];

function nextQuestion(){
question.textContent = questionsArray[x].questions;
answer1.textContent = questionsArray[x].choice1;
answer2.textContent = questionsArray[x].choice2;
answer3.textContent = questionsArray[x].choice3;
answer4.textContent = questionsArray[x].choice4;
x++;
}

nextQuestion();


function questionAnswered(event){
    event.preventDefault();
    var chosenAnswer = this.textContent;
    //console.log(chosenAnswer + "  " + questionsArray[x-1].correctAnswer);

    if(chosenAnswer == questionsArray[x-1].correctAnswer){
        console.log("correct");
        correctAnswers++;
    }else{
        console.log("wrong");
    }


if(x < questionsArray.length){
    console.log(chosenAnswer);
    nextQuestion();
}else{
    localStorage.setItem("finalScore", correctAnswers);
    window.location.href = "score.html";
    finalScore.textContent = correctAnswers;
    console.log("done");

}


}

answer1.addEventListener("click", questionAnswered);
answer2.addEventListener("click", questionAnswered);
answer3.addEventListener("click", questionAnswered);
answer4.addEventListener("click", questionAnswered);



console.log(questionsArray);