const cryptoKeys = { 
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
}

function encrypt() {
  let text = document.querySelector('#text').value;
  for(key in cryptoKeys) {
    if(text.indexOf(key) >= 0) {
      let regex = new RegExp(key, 'gi');
      console.log(regex)
      text = text.replaceAll(regex, cryptoKeys[key]);
    }
  }
  console.log(text)
}

document.querySelector('#encrypt').addEventListener('click', encrypt);