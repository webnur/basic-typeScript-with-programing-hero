// default value should be last value
function addNumber(num1: number, num2: number= 40): number {
    return num1 + num2
}
addNumber(3, 4)

const newAdd = (num1: number, num2: number) => num1 + num2;
console.log(newAdd);

const arr = [1, 3, 4, 45];

const newArr = arr.map((elem: number) => elem * elem);
console.log(newArr);


const person:{
    name: string,
    balance: number,
    addBalance(money: number):number
} = {
    name: "HM Nur",
    balance: 6,
    addBalance(money:number)  {
        return (this.balance + money)
    },
}


//spread opearator


const myFriends = ['karim', 'sakar', 'rayhan', 'Amena'];
const newFriends = ['tahera', 'alea', 'nabila'];

myFriends.push(...newFriends);
console.log(myFriends)