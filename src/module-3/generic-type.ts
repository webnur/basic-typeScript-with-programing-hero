
// const rollNumbers1:number[] = [12, 34, 43];
// const rollNumbers2:string[] = ['12', '34', '43'];
// const rollNumbers3:boolean[] = [true, false];

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ['amena', 'Musilha'];

// type relationWithSalaryType = {
//     name: string,
//     age: number,
//     salary: number
// };

// use this for object type data
interface relationWithSalaryInterface {
    name: string,
    age: number,
    salary: number   
}

const relationShipWithSalary: GenericTuple<relationWithSalaryInterface, string> = [
    {
        name: 'HM Nur',
        age: 23,
        salary: 45555
    },
    'Hello jorina'
]

type GenericArray<T> = Array<T> // for type generic array

const rollNumbers1:GenericArray<number> = [12, 34, 43];
const rollNumbers2:GenericArray<string> = ['12', '34', '43'];
const rollNumbers3:GenericArray<boolean> = [true, false];

const userNameAndRollNumber: GenericArray<{name: string; roll: number}> =[
   {
    name: 'kalam',
    roll: 34
   }
]



// generic interface

interface CrushInterface<T, U = null> {
    name: string,
    husband: T,
    wife?: U
}


const myCrush1: CrushInterface<boolean> = {
    name: 'jamela',
    husband: true
}