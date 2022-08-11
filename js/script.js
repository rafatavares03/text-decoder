const cryptoKeys = { 
  e: 'enter', E: 'ENTER',
  i: 'imes',  I: 'IMES',
  a: 'ai',    A: 'AI',
  o: 'ober',  O: 'OBER',
  u: 'ufat',  U: 'UFAT',
}
let encrypted = false;

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
  writeText(text);
  encrypted = false;
}

function copyText() {
  let text = document.querySelector('#result').innerText;
  navigator.clipboard.writeText(text);
}

document.querySelector('#encrypt').addEventListener('click', encrypt);
document.querySelector('#decrypt').addEventListener('click', decrypt);
document.querySelector('#copy').addEventListener('click', copyText);