//Get Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;
    
//UI element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('.#guess-btn'),
      guessInput = document.querySelector('.#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum){
    //Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    //Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      //Game over - lost
      gameOver(false, `GAME OVER, you lost. The correct number was ${winningNum}`);
      
    } else {
    //Game continue - answer wrong

    // Change border color
    guessInput.style.borderColor = 'red';

    //Clear Input
    guessInput.value = '';

    //Tell user its the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');  
    }
  }
});

//Game over
function setMessage(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  //set text color
  message.style.color = color;
  // Set message
  setMessage(msg);
}

// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
