type MyInfoType = {
    name: string,
    age: number,
    salary: number
}

const myInformation: MyInfoType = {
    name: 'nurul Islam',
    age: 100,
    salary: 300000
}

const addInMyCrushMinds = <T extends { name: string, age: number, salary: number }>(myInfo: T) => {
    const crush = 'Amena Sultana';
    const newData = { ...myInfo, crush };
    return newData;

}
const result6 = addInMyCrushMind<MyInfoType>(myInfo);