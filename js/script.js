const cryptoKeys = { 
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
}

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
}

document.querySelector('#encrypt').addEventListener('click', encrypt);