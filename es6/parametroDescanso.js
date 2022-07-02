fn = [3, 'A', 'B', 'C']

function junta(a, ...fn) {
  console.log(fn);
  return a + fn.join('')
}
junta('Abacate', ...fn)

function f(a, b, ...args) {
	console.log(args);
}
f(1,2,3,4,5,6)

//objeto literal
const sweets = {
  'Nestle': 'Prestígio',
  'Ferrero': 'Kinder Ovo',
  'Garoto': 'Batom'
}

for(choco in sweets){
  console.log(choco + ': ' + sweets[choco]);
}

let prefix = 'computer';
let machine = {
    [prefix + ' name']: 'eniac',
    [prefix + ' year']: 1949
};

console.log(machine['computer name']);
console.log(machine['computer year']);