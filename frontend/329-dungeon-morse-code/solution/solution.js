module.exports = function(fullCode) {
  // ваш код
};

const morse = {
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9'
}

function decodeMorse(code){
  let morseCode = ''

  if (code[0] === 'T') {
    morseCode = code.slice(1).split('').reverse().join('');
    return morse[morseCode];
  } else if (code[0] === 'R') {
    morseCode = code.slice(1).split('').filter((_, index) => index %2 === 0).join('');
    return morse[morseCode];
  } else {
    return morse[code];
  }
}

function decode(fullCode) {
  return fullCode.split('   ').map(combination =>
    combination.split(' ').map(number => decodeMorse(number)).join('')
  ).join(' ');
}

decode('T..... T---.. -.... .----   .---- R........-- T..... T.----   R.......... .---- T..... ---..   .---- R----...... R----...... ...--'); // 5261 1459 5158 1773
