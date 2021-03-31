const overlay = document.getElementById('overlay');
const startButton = document.getElementsByClassName('btn__reset')[0];
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const phrasesArray = ['on the ropes', 'down and out', 'a dime a dozen', 'go for broke', 'my cup of tea'];


const getRandomPhraseAsArray = arr => {
  return arr[Math.floor(Math.random() * arr.length)].split('');
}

const addPhraseToDisplay = arr => {
  let parentNode = document.querySelector('#phrase ul');
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

const checkLetter = arr => {

}

const checkWin = arr => {

}

startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

qwerty.addEventListener('click', e => {

});

getRandomPhraseAsArray(phrasesArray);
const characterArray = getRandomPhraseAsArray(phrasesArray);
addPhraseToDisplay(characterArray);
