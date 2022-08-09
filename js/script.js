const cryptoKeys = { 
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
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
      let regex = new RegExp(key, 'gi');
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
    console.log(text, encrypted, 'result');
  } else {
    text = document.querySelector('#text').value;
    console.log(text, encrypted, 'textarea');
  }
  for(key in cryptoKeys) {
    if(text.indexOf(cryptoKeys[key]) >= 0) {
      let regex = new RegExp(cryptoKeys[key], 'gi');
      text = text.replaceAll(regex, key);
    }
  }
  writeText(text);
  encrypted = false;
}

document.querySelector('#encrypt').addEventListener('click', encrypt);
document.querySelector('#decrypt').addEventListener('click', decrypt);