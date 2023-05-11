// arrow function

const createArray = (param: string): string[]=> {
    return [param]
}


const createArray1 = <T>(param: T): T[]=> {
    return [param]
}

const result1 = createArray1<string>('Hello Bangladesh');
const result2 = createArray1<boolean>(true);
const result3 = createArray1<object>({name: 'amena', age: 23});


//spead operator

// const crush = 'Amena Sultana';
const myInfo = {
    name: 'nurul Islam',
    age: 100,
    salary: 300000
}

const addInMyCrushMind = <T>(myInfo: T) => {
    const crush = 'Amena Sultana';
    const newData = {...myInfo, crush};
    return newData;
    
}
const result5 = addInMyCrushMind(myInfo);

