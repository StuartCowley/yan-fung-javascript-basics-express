function sayHello(string) {
  return `Hello, ${string}!`;
}

function uppercase(string) {
  return `${string}`.toUpperCase();
}

function lowercase(string) {
  return `${string}`.toLowerCase();
}

function firstCharacter(string) {
  return string[0];
}

function firstCharacters(string, n) {
  return string.slice(0, `${n}`);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
};
