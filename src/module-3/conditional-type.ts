// a type is dependent on another type;

type a1 = null;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null

type d = a1 extends null ? null : a3 extends undefined ? undefined : a4 extends number ? number : never;

type Sheikh = {
    wife1: string,
    wife2:string
}

type CheckProperty <T, K>= K extends keyof Sheikh ? true : false;
type checkWife2 = CheckProperty<Sheikh, 'wife2'> 