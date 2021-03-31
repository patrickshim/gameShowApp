const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const parentNode = document.querySelector('#phrase ul');
const misses = document.querySelector('.tries');
const phrasesArray = [
                      'on the ropes', 
                      'down and out', 
                      'a dime a dozen', 
                      'go for broke', 
                      'my cup of tea'
                    ];
let missed = 0;
const resetButton = document.querySelector('#overlay a');

const getRandomPhraseAsArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)].split('');
}

const addPhraseToDisplay = arr => {
  for (let i = 0; i < arr.length; i++) {
    let listItem = document.createElement('li');
    let textNode = document.createTextNode(arr[i]);
    if (arr[i] == " ") {
      listItem.appendChild(textNode);
      parentNode.appendChild(listItem).className = 'space';
    } else {
      listItem.appendChild(textNode);
      parentNode.appendChild(listItem).className = 'letter';
    }
  }
}

const checkLetter = button => {
  const letters = document.querySelectorAll('.letter');
  let matchFound = null;
  for (let i = 0; i < letters.length; i++) {
    if(button === letters[i].textContent.toLowerCase()) {
      letters[i].classList.add('show');
      matchFound = letters[i].textContent;
    }
  }
  return matchFound;
}

const checkWin = () => {
  const letterClass = document.querySelectorAll('.letter');
  const showClass = document.querySelectorAll('.show');
  const winHeadline = document.querySelector('#overlay h2');
  const playAgain = document.querySelector('#overlay a');
  if (letterClass.length === showClass.length) {
    overlay.classList.add('win');
    winHeadline.textContent = 'You Won!';
    overlay.style.display = 'flex';
    playAgain.textContent = 'Play Again';
  } else if (missed > 4) {
    overlay.classList.add('lose');
    winHeadline.textContent = 'Game Over!';
    overlay.style.display = 'flex';
    playAgain.textContent = 'Play Again';
  }
}

startButton.addEventListener('click', () => {
  if (resetButton.textContent === 'Start Game') {
    overlay.style.display = 'none';  
  } else if (resetButton.textContent === 'Play Again') {
    location.reload();
  }
});

qwerty.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    e.target.className = 'chosen';
    e.target.disabled = true;
    const letterFound = checkLetter(e.target.textContent.toLowerCase());
    if (letterFound === null) {
      missed++
      let img = document.querySelector('#scoreboard ol img');
      img.remove();
    }
    checkWin();
  }
});



getRandomPhraseAsArray(phrasesArray);
const characterArray = getRandomPhraseAsArray(phrasesArray);
addPhraseToDisplay(characterArray);
