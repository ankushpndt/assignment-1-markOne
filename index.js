

var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your name? ");
console.log("Welcome "+userName+"do you know Ankush");
var score=0;
function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right!");
    score=score+1;  
  }
  else{
    console.log("wrong!");
  }
  console.log("current score: "+score);
  console.log("-------------");
}

//array of objects

var questions=[{
  question: "Where do I live? ",
  answer: "Ghaziabad"
},
{
  question: "My favorite superhero would be? ",
  answer: "spiderman"
},
{
  question: "Where do I work? ",
  answer:"TCS"
}];

//loop
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


highScore=[
  {name: "A", score:"1"},
  {name: "B", score:"0"}
]

for(var i=0;i<highScore.length;i++){
  
  console.log(highScore[i].name+":"+highScore[i].score);
 
}
console.log(userName+":"+score);
for(var i=0;i<highScore.length;i++){
 if(score>highScore[i].score){
    console.log("Send me the screenshot");
    break;
  }
}
