export interface IUser {
    name: string;
    email: string;
}

export interface IUserCreation extends IUser {
    password: string;
}

export interface IUserAcessParams {
    id: string;
}

export interface IUserUpdate {
    name?: string;
    email?: string;
    password?: string;
    password_hash?: string;
}
