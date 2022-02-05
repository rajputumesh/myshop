export type initialStateType= {
    username: string;
    phone: string;
    email: string;
    password: string;
    isLoading:boolean;
    signUp:any;
    errorMessage: string;
}


export type rootState = {
    user: initialStateType;
}
