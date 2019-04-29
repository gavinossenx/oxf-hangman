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

function initializeGame() {
  setInterval(function(){ document.getElementById("characterinfo").innerText ="GAME OVER. YOU HAVE RUN OUT OF TIME.REFRESH PAGE TO RESTART"; }, 30000);
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

function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    document.getElementById("result").innerText = "you win!";
    var audio = new Audio('./assets/media/overwatch.ogg');
    console.log(audio)
     audio.play();
  } else if (allowedGuesses === 0) {
    document.getElementById("result").innerText = "you lost";
  }
}

document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
  checkWin();
};

initializeGame();




















