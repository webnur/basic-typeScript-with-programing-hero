// pick

interface Person1 {
    name: string,
    email: string,
    contactNo: string
}

type Contact = Pick<Person1, "email"|"contactNo">;

// Omit
type name = Omit<Person1, "email">;

//partial 

type optional = Partial<Person1>;

// required
type RequiredProps = Required<Person1>;

// readonly

const person34: Readonly<Person1> ={
    name: 'amena',
    email: 'ama',
    contactNo: '3434'
}


// record type

// type myObj = {
//     a: string,
//     b: string,
//     c: string
// }

// using index signature
// type myObj = {
//     [key: string]: string
// }

// type myObj = Record<string, string>;
type myObj = Record<'a'|'b'|'c', string>;

const MyObject: myObj = {
    a: '1',
    b: '3',
    c: 'd'
}

    