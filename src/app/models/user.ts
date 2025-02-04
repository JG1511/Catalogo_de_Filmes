export class User { // representação do usuários do nosso sitema
    name: string;
    email: string;

    constructor(user: IUser) {
        this.name = user.name;
        this.email = user.email;
    }
}

interface IUser { // define com o objeto vai ser estruturado 
    name: string;
    email: string;

}
