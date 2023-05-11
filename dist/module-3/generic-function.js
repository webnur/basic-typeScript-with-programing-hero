"use strict";
// arrow function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
const result1 = createArray1('Hello Bangladesh');
const result2 = createArray1(true);
const result3 = createArray1({ name: 'amena', age: 23 });
//spead operator
// const crush = 'Amena Sultana';
const myInfo = {
    name: 'nurul Islam',
    age: 100,
    salary: 300000
};
const addInMyCrushMind = (myInfo) => {
    const crush = 'Amena Sultana';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result5 = addInMyCrushMind(myInfo);
