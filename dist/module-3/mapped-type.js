"use strict";
const arrayOfNumbers = [1, 2, 3];
const arrayOfString = arrayOfNumbers.map(number => number.toString());
const rectangularArea = {
    height: 30,
    width: 40
};
rectangularArea.height = 500;
const firstArea = {
    height: 30,
    width: 34,
    name: 'karima'
};
function myFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
