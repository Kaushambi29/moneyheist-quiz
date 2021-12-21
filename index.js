var readlineSync = require('readline-sync')

var score = 0

var userAnswer = readlineSync.question('Who is the Professor?')


function play(question, answer) {
  var userAnswer = readlineSync.question(question)
}

if (userAnswer === 'Sergio') {
  console.log('You are right! ')
  score = score + 1
  // console.log('current score', score)

  // } else if (userAnswer === 'Alvaro'){
  //   console.log('Right answer! ')


} else {

  console.log('You are wrong !')
  score = score - 1
}

    

var question = [{
  question: 'Who is Tokyo?',
  answer: 'Ursula'
}, {

  question: 'Who is Denver?',
  answer: 'Jamie'


}, {

  question: 'Who is Nairobi?',
  answer: 'Alba'

}, {


  question: 'What is the name of Money Hesit in spanish?',
  answer: 'La Casa De Papel'


}, {

  question: 'Who is the Indian actor in La Casa De Papel?',
  answer: 'Ajay Jethi'


}, {

  question: 'Money Heist is premiered on which OTT platform?',
  answer: 'Netflix'


}, {

  question: 'How many seasons of Money Hesit have been realsed so far?',
  answer: 5




}, {

  question: 'Who is Itziar?',
  answer: 'Raquel'


}]

 

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer)
}
score = score + 1 
    console.log('current score', score)

console.log('Total score ' + score)
