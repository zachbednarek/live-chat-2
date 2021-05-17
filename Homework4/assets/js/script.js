question = document.querySelector("#question");
answer1 = document.querySelector("#answer1");
answer2 = document.querySelector("#answer2");
answer3 = document.querySelector("#answer3");
answer4 = document.querySelector("#answer4");

var question1 = {
    questions: "What Color is the Reality Stone?",
    answer1: "Red",
    answer2: "Purple",
    answer3: "Blue",
    answer4: "Yellow",
    correctAnswer: "Red"
};

var question2 = {
    questions: "What is Iron Man's Real Name?",
    answer1: "Steve Rodgers",
    answer2: "Bruce Banner",
    answer3: "Tony Stark",
    answer4: "Clint Barton",
    correctAnswer: "Tony Stark"
}

var questionsArray = [question1, question2];


for(var i = 0; i < questionsArray.length; i++){
    question.textContent = questionsArray[i].questions;
    answer1.textContent = questionsArray[i].answer1;
    answer2.textContent = questionsArray[i].answer2;
    answer3.textContent = questionsArray[i].answer3;
    answer4.textContent = questionsArray[i].answer4;
}



console.log(questionsArray);