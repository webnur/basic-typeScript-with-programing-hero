//Mocking

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = 'fetching data is loading';
        if(data){
            resolve(data)
        } else {
            reject('no data found')
        }
   })
}

const getPromiseData =async (): Promise<string> => {
    const data = makePromise();
    return data
}


// get todo

interface ITodo  {
    userId: number,
    id: number,
    title: string,
    completed: false
}

const getTodo =async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json()
}

const getTodoData =async (): Promise<void> => {
    const todoResult = await getTodo();
    console.log(todoResult);
    
}