// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Kate) {
  cats.push(Kate);
}

function destructivelyPrependCat(Kate) {
  cats.unshift(Kate);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(Arnold) {
  return [...cats, Arnold];
}

function prependCat(Arnold) {
  return [Arnold, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}



