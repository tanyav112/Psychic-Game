//array of letters to be used in the game
const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

let wins = 0
let losses = 0
let guessedLetters = []
let guessesLeft = 10
let compChoice = compGuess()

// keyboad event funtion capturing the letters entered by the player
document.onkeyup = function (event) {
  const letter = event.key 
  guessedLetters.push(letter)
  document.querySelector('#guesses').innerHTML = guessedLetters.toString()
 
  // is letter guessed same as comp choice? if yes, win; otherwise check to see if guessesLeft >0 if not wrong and goes down by one
  letter === compChoice? win() : (guessesLeft > 0 ?  wrong () : lose ())

}

// funtion to get the computers random guess via the letters in the array
 function compGuess () {
   return letters[Math.floor(Math.random() * letters.length)]
   }

// function for if player wins
  function win () {
    wins++


  }

// function for if player loses
  function lose () {
  losses++

  }

// function for if player is wrong
  function wrong () {
     guessesLeft--

  }





// for(i=1; i<10; i++) {
//   console.log(i);
// }



// function randLetters() {
//   document.getElementById("GuessSoFar");
// }