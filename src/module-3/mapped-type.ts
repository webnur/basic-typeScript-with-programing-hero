const arrayOfNumbers = [1, 2, 3];
const arrayOfString = arrayOfNumbers.map(number => number.toString());

type AreaNumber = {
    height: number,
    width: number
};
type AreaString = {
    height: string,
    width: string
};

const rectangularArea: AreaNumber = {
    height: 30,
    width: 40
}
rectangularArea.height = 500
type A = AreaNumber['height'];
type B = keyof AreaNumber;


// map type 
type AreaNumber2 = {
    height: number,
    width: number,
    depth: number
};

type Area = {
    [key in keyof AreaNumber2]: AreaNumber2[key]
}
type AreaGeneric<T> = {
   readonly [key in keyof T]: T[key]
}

const firstArea: AreaGeneric<{ height: number, width: number, name: string }> = {
    height: 30,
    width: 34,
    name: 'karima'
}

type Data = { num1: number }



interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  
  
  
  function myFullName<T extends Person>(person: T): string {
  
    return `${person.firstName} ${person.lastName}`;
  
  }
  
  