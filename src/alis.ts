type CrushType = {
    name: string,
    age?: number, //type optional
    profession: string,
    address: string
}
const crush1: CrushType = {
    name: 'amena',
    age: 20,
    profession: 'student',
    address: 'Chandpur, Bangladesh'
}
const crush2: CrushType = {
    name: 'aleya',
    profession: 'job',
    address: 'dhaka, Bangladesh'
}
const crush3: CrushType = {
    name: 'fatema',
    age: 22,
    profession: 'student',
    address: 'barisal, Bangladesh'
}
const crush4: CrushType = {
    name: 'sultana',
    age: 20,
    profession: 'student',
    address: 'Chandpur, Bangladesh'
}

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = true;


type CourseNameType = string;

const courseName: CourseNameType = 'next lavel web development course';

type OpearationType =  (x:number, y:number) => number

const calculate = (number1: number, number2: number, opearation: OpearationType) => {
   return opearation(number1, number2)
}

calculate(10, 20, (x, y) => x + y )
calculate(10, 20, (x, y) => x - y )
calculate(10, 20, (x, y) => x * y )
calculate(10, 20, (x, y) => x / y )
