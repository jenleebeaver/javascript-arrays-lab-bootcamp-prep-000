var kittens = ["Milo", "Otis", "Garfield"] // var kittensString = "foo"

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
kittens.unshift(name);
return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

// Add your functions and code here
