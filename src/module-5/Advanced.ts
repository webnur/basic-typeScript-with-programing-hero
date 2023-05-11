interface Model<TData, TMethods> {
    data: TData,
    method: TMethods
}

interface IUsers {
    firstName: string,
    lastName: string
}

interface IMethods {
    fullName(): string
}

type model = Model<IUsers, IMethods>;

class UserData implements model {
    data: IUsers;
    method: IMethods;

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.method = {
            fullName: () => `${firstName} ${lastName}`
        }
    }
}

const user1 = new UserData('Nurul', 'Islam');
console.log(user1.method.fullName())