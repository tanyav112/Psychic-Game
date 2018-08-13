//array of letters to be used in the game
const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// variables within the game
let wins = 0
let losses = 0
let guessedLetters = []
let guessesLeft = 10
let compChoice = ' '
gameState = true

// function to reset the game
function reset () {
  gameState = true
  compChoice = compGuess()
  guessesLeft = 10
  guessedLetters = []
   document.querySelector('#guessesLeft').innerHTML = ' ' + guessesLeft
   document.querySelector('#wins').innerHTML = ' ' + wins
   document.querySelector('#losses').innerHTML = ' ' + losses
   document.querySelector('#guesses').innerHTML = ' ' + guessedLetters.toString()
}


// funtion to get the computers random guess via the letters in the array
 function compGuess () {
   return letters[Math.floor(Math.random() * letters.length)]
   }

// function for if player wins
  function win () {
    wins++
    gameState = false
    document.querySelector('#wins').innerHTML = ' ' + wins


  }

// function for if player loses
  function lose () {
  losses++
  gameState = false
  document.querySelector('#losses').innerHTML = ' ' + losses
  document.querySelector('#guessesLeft').innerHTML = ' ' + guessesLeft

  }

// function for if player is wrong which then passes the guessesLeft to the html page
  function wrong () {
   document.querySelector('#guessesLeft').innerHTML = ' ' + guessesLeft
  }

  // function to make sure only letters in the array are pressed
  function alphaCheck (letter) {
    let result = false

    for (let i = 0; i < letters.length; i++) {
      if  (letter.toLowerCase() === letters[i]) {
        if (gameState === true) {
            return guessedAlready(letter)
        } else {
          return false
        }
      } 
    }
    return result
  }

  // function so that the player cannot press the same letter in the game
  function guessedAlready (letter) {
    let result = true
    for (let i = 0; i < guessedLetters.length; i++) {
      if (letter === guessedLetters[i]) {
        return false
      }
    }
        return result
  }

// keyboad event funtion capturing the letters entered by the player and passes letters guessed to the html page
document.onkeyup = function (event) {
  const letter = event.key
  if (letter != 'Enter') {
    if  (alphaCheck(letter)) {
       guessedLetters.push(letter) 
        document.querySelector('#guesses').innerHTML = guessedLetters.toString()
        guessesLeft--
  
  // is letter guessed same as comp choice? if yes, win; otherwise check to see if guessesLeft >0 if not wrong and goes down by one
  letter === compChoice ? win() : (guessesLeft > 0 ? wrong() : lose(letter))
} 
}else {
     reset()
}
}

reset()