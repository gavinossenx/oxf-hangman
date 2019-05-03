var words = [
    new Character("reaper","./assets/images/reaper.png"),
    new Character("lucio","./assets/images/lucio.jpg"),
    new Character("moira","./assets/images/moira.jpg"),
    new Character("reinhardt","assets/images/reinhardt.jpg"),
    new Character("tracer","assets/images/tracer.jpg"),
    new Character("widowmaker","assets/images/widowmaker.jpg"),
    new Character("wreckingball","assets/images/wreckingball.jpeg"),
    new Character("dva","assets/images/dva.jpg"),
    new Character("orisa","assets/images/orisa.jpeg"),
    new Character("zarya","assets/images/zarya.jpg"),
    new Character("zenyatta","assets/images/zenyatta.jpg"),
    new Character("mercy","assets/images/mercy.jpg"),
    new Character("torbjorn","assets/images/torbjorn.jpg"),
    new Character("symmetra","assets/images/symmetra.jpg"),
    new Character("genji","assets/images/genji.jpg"),
    new Character("hanzo","assets/images/hazno.jpeg"),
    new Character("brigitte","assets/images/briggite.jpg"),
    new Character("bastion","assets/images/bastion.jpg"),
    new Character("doomfist","assets/images/doomfist.jpg"),
    new Character("ashe","assets/images/ashe.jpg"),
    new Character("mei","assets/images/mei.jpg"),
    new Character("sombra","assets/images/sombra.jpeg"),
    new Character("winston","assets/images/winston.png"),
    new Character("pharah","assets/images/pharah.jpeg"),
    new Character("junkrat","assets/images/junkrat.jpg"),
    new Character("soldier76","assets/images/soldier76.jpeg"),
    new Character("baptiste","assets/images/baptiste.jpg"),
    new Character("ana","assets/images/ana.jpeg"),
    new Character("roadhog","assets/images/roadhog.png"),
    new Character("mccree","assets/images/mccree.jpg"),
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
  document.getElementById

function timerloss(){
  loser()
   document.getElementById("characterinfo").innerText ="GAME OVER. YOU HAVE RUN OUT OF TIME.New Game Starting in 15 Seconds"}; 
function initializeGame() {
  reset()
  lettersGuessedElement.innerText =""
  setTimeout(timerloss,45000)
  setTimeout(initializeGame,60000)
     character = words[randomNumber(words.length)]
  allowedGuesses = 15;
  wrongGuesses = [];
  correctGuesses = [];
wordElement.innerText = "word " +correctGuesses
  // correct guess to underscore
  for (var i = 0; i < character.name.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerText = 'word ' +correctGuesses.join(' ');
  letterCountElement.innerHTML = allowedGuesses;
}
function updateGuesses(letter) {
  // subtract from guesses left
  letterCountElement.innerHTML = allowedGuesses;

  if (character.name.indexOf(letter) === -1) { 
    wrongGuesses.push(letter);
    allowedGuesses--; // update letters guessed
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
  } else { // letter IS in the word
    // replace underscore with the letter
    for (var i = 0; i < character.name.length; i++) {
      if (character.name[i] === letter) {
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
    document.getElementById("photo"). = character.photo
    setTimeout(initializeGame,15000)
    clearInterval(time)
    document.getElementById("result").innerText = "you win!";
    
    audio.play();
    winreset()
    game = "won"
    console.log(audio)
  } else if (allowedGuesses === 0) {
    timerloss()
    setTimeout(initializeGame,15000)
    document.getElementById("result").innerText = "you lost";
  }
}


document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
if(game != "won"){checkWin();}
};
initializeGame();




//get picture when you win















