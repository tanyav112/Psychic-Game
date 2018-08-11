const letterArr = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

for(i=1; i<10; i++) {
  console.log(i);
}

//pick random value from this array//
function randLetters () {
  let randLetters = letterArr[Math.floor(Math.random()) * (letterArr.length)];
    return randLetters;
    console.log(randLetters)
}

function randLetters() {
  document.getElementById("GuessSoFar");
}