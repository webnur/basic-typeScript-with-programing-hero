// it's use for primitive type data
type User = {
    name: string,
    age: number
}

// it's use for object type data
interface IUser {
    name: string,
    age: number
}

interface IExtendedUser extends IUser {
    role: string
}

type RollNumber = number;

type RollNumbersType = number[];
// interface IRollNumber {
//     [index:number]: number
// }
const rollNumbers: RollNumbersType = [1, 2, 3, 4]


type AddNumbersType = (num1:number, num2:number)=>number;

// interface IAddNumbers  {
//     (num1:number, num2:number):number
// }

const addNumbers: AddNumbersType = (num1, num2) => num1 + num2

const interfaceUser:IExtendedUser = {
    name: 'Musliha',
    age: 30,
    role: 'admin'
}

// const userWithTypeAlias: User = {
//     name: 'type alias',
//     age: 43
// }

// const userWithInterface: IUser = {
//     name: 'interface',
//     age: 43
// }