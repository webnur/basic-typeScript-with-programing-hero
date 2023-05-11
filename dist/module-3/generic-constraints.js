"use strict";
const myInformation = {
    name: 'nurul Islam',
    age: 100,
    salary: 300000
};
const addInMyCrushMinds = (myInfo) => {
    const crush = 'Amena Sultana';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result6 = addInMyCrushMind(myInfo);
