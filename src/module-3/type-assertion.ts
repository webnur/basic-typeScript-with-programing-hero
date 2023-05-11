let emni: any;
emni = 'Hello Bangladesh';
(emni as string).length;



function kgToGram(prams: number | string | undefined) {
    if (typeof prams === 'string') {
        const value = parseFloat(prams) * 1000;
        return value
    }
    if (typeof prams === 'number') {
        const value = prams * 1000;
        return value;

    }
}

const resultToBeNumber = kgToGram(4000) as number;


type CustomErrorType = {
    message: string
}

try{

}catch(err){
    console.log((err as CustomErrorType).message);
    
}