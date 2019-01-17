var kittens = ["Milo", "Otis", "Garfield"] // var kittensString = "foo"

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependLastKitten(name) {
kittens.unshift(name);
return kittens;
}
// Add your functions and code here
