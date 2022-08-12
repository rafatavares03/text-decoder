const cryptoKeys = { 
  e: 'enter', E: 'ENTER',
  i: 'imes',  I: 'IMES',
  a: 'ai',    A: 'AI',
  o: 'ober',  O: 'OBER',
  u: 'ufat',  U: 'UFAT',
}
let encrypted = false;

function createEmptyMessageElements(resultArea) {
  const title = document.createTextNode('Nenhuma mensagem encontrada');
  const h1 = document.createElement('h1');
  h1.appendChild(title);

  const img = document.createElement('img');
  img.src = './assets/images/picture.svg';

  const text = document.createTextNode('Escreva uma mensagem que você deseja criptografar ou descriptografar');
  const p = document.createElement('p');
  p.appendChild(text);

  const message = document.createElement('div');
  message.id = 'empty-message';

  message.appendChild(h1);
  message.appendChild(img);
  message.appendChild(p);
  resultArea.appendChild(message);
}

function displayEmptyMessage() {
  const resultArea = document.querySelector('#result');
  
  if (resultArea.childNodes.length === 0) {
    createEmptyMessageElements(resultArea);
  }
}

displayEmptyMessage();

function detectEmptyField() {
  const text = document.querySelector('#text').value;
  
  if(text === '') {
    const results = document.querySelector('#result');

    if(results.firstChild.id !== 'empty-message') {
      results.removeChild(results.firstChild);
      displayEmptyMessage();
    }
  }
}

function writeText(text) {
  const res = document.querySelector('#result');
  res.innerHTML = text;
}

function encrypt() {
  let text = document.querySelector('#text').value;
  for(key in cryptoKeys) {
    if(text.indexOf(key) >= 0) {
      let regex = new RegExp(key, 'g');
      text = text.replaceAll(regex, cryptoKeys[key]);
    }
  }

  writeText(text);
  encrypted = true;
}

function decrypt() {
  var text;
  if (encrypted) {
    text = document.querySelector('#result').innerText;
  } else {
    text = document.querySelector('#text').value;
  }
  for(key in cryptoKeys) {
    if(text.indexOf(cryptoKeys[key]) >= 0) {
      let regex = new RegExp(cryptoKeys[key], 'g');
      text = text.replaceAll(regex, key);
    }
  }

  if (text !== '') {
    writeText(text);
    encrypted = false;
  }
}

function copyText() {
  let text = document.querySelector('#result').innerText;
  navigator.clipboard.writeText(text);
}

document.querySelector('#encrypt').addEventListener('click', encrypt);
document.querySelector('#decrypt').addEventListener('click', decrypt);
document.querySelector('#copy').addEventListener('click', copyText);
document.querySelector('body').addEventListener('keyup', detectEmptyField);