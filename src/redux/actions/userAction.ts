export const USER_LOGIN = 'user/USER-LOGIN';
export const USER_LOGIN_COMPLETE = 'user/USER-LOGIN-COMPLETE';
export const SIGN_UP = 'user/SIGN_UP';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';
export const USER_LOADING = 'USER_LOADING';

export const loginUser = (payload: any) => {
    return {
      type: USER_LOGIN,
      payload,
    };
};

export const loginComplete = (payload: any) => {
    return {
      type: USER_LOGIN_COMPLETE,
      payload,
    };
  };
  
export const signUp = (payload: any) => { 
      return {
        type: SIGN_UP,
        payload 
      }
};

export const signUpSuccess = (payload: any) => {
    return {
      type: SIGN_UP_SUCCESS,
    };
  };

  export const signUpFailure = (payload: any) => {
    return {
      type: SIGN_UP_FAILURE,
      payload,
    };
  };

  export const handleSignOut = () => {
    return {
      type: SIGN_OUT,
    };
  };
