module.exports = function check(str, bracketsConfig) {
  // your solution
  const configX = bracketsConfig.map(item => item.join(''));
  let brackets = str;
  let length;
  do {
    length = brackets.length;
    configX.forEach(item => {
      brackets = brackets.replace(item, '');
    });
  } while (length !== brackets.length);
  return Boolean(!brackets);
}

