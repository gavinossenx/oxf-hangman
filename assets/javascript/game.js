var words = [
    "reaper",
    "lucio",
    "moira",
    "reinhardt",
    "tracer",
    "widowmaker",
    "wreckingball",
    "dva",
    "orisa",
    "zarya",
    "zenyatta",
    "mercy",
    "torbjorn",
    "symmetra",
    "genji",
    "hanzo",
    "brigitte",
    "bastion",
    "doomfist",
    "ashe",
    "mei",
    "sombra",
    "winston",
    "pharah",
    "junkrat",
    "soldier76",
    "baptiste",
    "ana",
    "roadhog",
    "mccree"
]
function Character(name,photo){
  this.name = name 
  this.photo = photo
}

var stats = {win:0,loss:0,totalgames:0};
var totalgame =function() {document.getElementById("totalgames").innerText ="total games:" +stats.totalgames}
var winner =function(){stats.win++;stats.totalgames++;userwins();totalgame()
}
var loser =function(){stats.loss++;stats.totalgames++;userloses();totalgame()
}
var userwins =function(){
  document.getElementById("wins").innerHTML = "wins:"+stats.win;
}
var userloses =function(){
  document.getElementById("losses").innerHTML= "losses:"+stats.loss
}
var audio = new Audio('./assets/media/overwatch.ogg')
var mccree = new Character("mccree","./assets/javascript/overwatch.jpg")
var word;
var allowedGuesses;
var correctGuesses;
var wrongGuesses;
var timeLength;
var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');
var randomNumber = function(len){
   return Math.floor(Math.random() * len)
};
function reset(){document.getElementById("characterinfo").innerText ="";
document.getElementById("result").innerText ="";
game =""
audio.pause();
audio.currentTime = 0;;
}
var losstimer = setTimeout(timerloss,55000)
var time = setTimeout(initializeGame,60000)
function winreset(){
  document.getElementById("characterinfo").innerText ="Congradulations! New game starting in 15 seconds"}

function timerloss(){
  loser()
   document.getElementById("characterinfo").innerText ="GAME OVER. YOU HAVE RUN OUT OF TIME.New Game Starting in 15 Seconds"}; 
function initializeGame() {
  reset()
  lettersGuessedElement.innerText =""
  setTimeout(timerloss,45000)
  setTimeout(initializeGame,60000)
     word = words[randomNumber(words.length)]
  allowedGuesses = 15;
  wrongGuesses = [];
  correctGuesses = [];
wordElement.innerText = "word " +correctGuesses
  // correct guess to underscore
  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerText = 'word ' +correctGuesses.join(' ');
  letterCountElement.innerHTML = allowedGuesses;
}
function updateGuesses(letter) {
  // subtract from guesses left
  letterCountElement.innerHTML = allowedGuesses;

  if (word.indexOf(letter) === -1) { 
    wrongGuesses.push(letter);
    allowedGuesses--; // update letters guessed
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
  } else { // letter IS in the word
    // replace underscore with the letter
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML ="word " +correctGuesses.join(' ');
  }
}
 var game;
function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    winner()
    setTimeout(initializeGame,15000)
    clearInterval(time)
    document.getElementById("result").innerText = "you win!";
    
    audio.play();
    winreset()
    game = "won"
    console.log(audio)
  } else if (allowedGuesses === 0) {
    loser()
    document.getElementById("result").innerText = "you lost";
  }
}

document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
if(game != "won"){checkWin();}
};
initializeGame();




















