function reset() {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  }

const cats = ["Milo", "Otis", "Garfield"];

reset();

function destructivelyAppendCat() {
    cats.push("Ralph");
}

reset();

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

reset();

function destructivelyRemoveLastCat() {
    cats.pop();
}

reset();

function destructivelyRemoveFirstCat() {
    cats.shift();
}

reset();

function appendCat(name) {
    const newcats = [...cats, name];
    return newcats
}

appendCat("Broom");

reset();

function prependCat(name) {
    const newcats = [name, ...cats];
    return newcats
}

appendCat("Arnold");

reset();

function removeLastCat() {
    const newcats = cats.slice(0, 2);
    return newcats
}

reset();

function removeFirstCat() {
    const newcats = cats.slice(1);
    return newcats
}