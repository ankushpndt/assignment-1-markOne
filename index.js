//ex01
console.log("Ankush Sharma");

//ex02
readlineSync=require('readline-sync');
name=readlineSync.question("What is your name? ");


//ex03

console.log("Welcome "+name);

//ex04
readlineSync=require('readline-sync');
name=readlineSync.question("What is your name? ");
console.log("Welcome "+name);

//ex05
readlineSync=require('readline-sync');
age=readlineSync.question("Are you older than 25 ");
if(age==="yes"){
  console.log("right")
}
else{
  console.log("wrong")
}

//ex06
var score=0
readlineSync=require('readline-sync');
city=readlineSync.question("Enter your city ");
if(city==="Ghaziabad"){
  score=score+1;
  console.log("Score is "+score);
}
else{
  score=score-1;
  console.log("Score is "+score);
}

// ex07

function add(numberOne, numberTwo) {
  console.log("numberOne: ", numberOne, "numberTwo: ", numberTwo)
  var sum = numberOne + numberTwo;
  return sum;
}

// use the function

var result = add(2,5);
console.log("The sum of 2 and 5 is: " + result);
console.log(add(2,9));



 // write a function to find the product of two numbers 
 
function prod(one, two){
  var prod = one*two;
  return prod;
}

var result2 = prod(5,2);
console.log(result2);

//homework: star pattern
for(i=1;i<=5;i++){
  console.log(i," Ankush Sharma");}

for(var a=1;a<=5;a++){   
    var o="";  
    for(var b=1;b<=a;b++){  
        o +="*";    
    }   
    console.log(o);   
}

//ex08
var readlineSync=require('readline-sync');
function fun(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    
    score=score+1;
    console.log("Correct answer");
  }
  else{
    score=score-1;
    console.log("Wrong answer");
  }
}

var result=fun("Where do I work? ","Microsoft");

//ex09

for(var i=0;i<5;i++){
  console.log(i+" Ankush");
}
//ex10
list_of_items =['Pulses','Rice','Flour','samosa','pizza'];
console.log(list_of_items[0]);
console.log(list_of_items[2]);
console.log(list_of_items[list_of_items.length-1]);
console.log("*****************************")
//ex11
for(i=0;i<list_of_items.length;i++){
  console.log(list_of_items[i]);
}

console.log("*****************************")
//ex12
var superman={
  name: "Clark Kent",
  superpower: "Laser beam",
  costumeColor: "blue and red"
}

var batman={
  name: "Bruce Wayne",
  superpower: "intelligence",
  costumeColor: "black"
}

console.log(superman.name);
console.log(batman.name);

var superheroes = [superman, batman];
for(var i=0;i<superheroes.length;i++){
  console.log(superheroes[i].name);
  console.log(superheroes[i].costumeColor);
}

//ex13
var questionOne={
  question: "What is your hobby?",
  answer: "Playing cricket"
}

var questionTwo={
  question: "What is your favourite food?",
  answer: "Pizza"
}

console.log(questionOne.question+" "+questionOne.answer);
console.log(questionTwo.question+" "+questionTwo.answer);

console.log("*****************************")
//ex14
var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your name? ");
console.log("Welcome to the quiz "+userName);
var score=0;
function play(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer===answer){
    score=score+5;
    
  }
  else{
    score=score-1;
    
  }
  console.log("Your current score is "+score);
}

//array of objects

var questions=[{
  question: "What is your hobby? ",
  answer: "cricket"
},
{
  question: "What is your favourite food? ",
  answer: "pizza"
}];
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

//ex15
highScore=[
  {name: "A", score:"6"},
  {name: "B", score:"5"}
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