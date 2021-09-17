const character = 'mario';
let age = 30;
let isBlackBelt = false;

console.log(character);

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach(input => {
	console.log(input);
});

var circ = (diameter: number)=>{
	return diameter * Math.PI;
}

console.log(circ('hello'));