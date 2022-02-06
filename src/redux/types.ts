export type tokenState = {
        name: String;
        abilities: [];
        tokenable_id: String;
        tokenable_type: String;
        updated_at: String;
        created_at: String;
        id: any;
};

export type userState = {
        id: any;
        roleid: any;
        name: String;
        phone: String;
        email: String;
        email_verified_at: any;
        created_at: String;
        updated_at: String;   
};

export type loginDateState = {
    token: tokenState;
    user: userState;
}

export type signUpState = {
    token: tokenState;
    user: userState;
}

export type AuthState = {
    loginData: loginDateState;
    signUp:signUpState; 
    loggedIn: false;
    isLoading: false;
    errorMessage: String;
    
};


// export type rootState = {
//     user: initialStateType;
// }
