"use strict";
var character = 'mario';
var age = 30;
var isBlackBelt = false;
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ('hello'));
