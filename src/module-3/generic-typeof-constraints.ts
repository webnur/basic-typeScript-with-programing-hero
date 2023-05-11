type PersonType = {
    name: string,
    age: number,
    address: string
}


type NewTypeUsingKeyOf = keyof PersonType;
// const b: NewTypeUsingKeyOf = 'address'

function getProperty <X, Y extends keyof X>(obj:X, key:Y) {
    obj[key]
}

const property = getProperty({name:'amena', age: 20}, 'age')