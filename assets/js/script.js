const cryptoKeys = { 
  e: 'enter', E: 'ENTER',
  i: 'imes',  I: 'IMES',
  a: 'ai',    A: 'AI',
  o: 'ober',  O: 'OBER',
  u: 'ufat',  U: 'UFAT',
}
let encrypted = false;

function createEmptyMessage() {
  document.querySelector('#copy').classList.add('hide');
  const resultArea = document.querySelector('#result');

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

createEmptyMessage();

function detectEmptyField() {
  const text = document.querySelector('#text').value;
  
  if(text === '') {
    const results = document.querySelector('#result');

    if(results.firstChild.id !== 'empty-message') {
      results.removeChild(results.firstChild);
      createEmptyMessage();
    }
  }
}

function writeText(text) {
  const copyButton = document.querySelector('#copy');
  if (copyButton.classList.contains('hide')) {
    copyButton.classList.remove('hide');
  }

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

  if (text !== '') {
    writeText(text);
    encrypted = false;
  }
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