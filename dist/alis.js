"use strict";
const crush1 = {
    name: 'amena',
    age: 20,
    profession: 'student',
    address: 'Chandpur, Bangladesh'
};
const crush2 = {
    name: 'aleya',
    profession: 'job',
    address: 'dhaka, Bangladesh'
};
const crush3 = {
    name: 'fatema',
    age: 22,
    profession: 'student',
    address: 'barisal, Bangladesh'
};
const crush4 = {
    name: 'sultana',
    age: 20,
    profession: 'student',
    address: 'Chandpur, Bangladesh'
};
const isCrushMarried = true;
const courseName = 'next lavel web development course';
const calculate = (number1, number2, opearation) => {
    return opearation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
