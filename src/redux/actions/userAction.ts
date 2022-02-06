export const USER_LOGIN = 'user/USER-LOGIN';
export const USER_LOGIN_COMPLETE = 'user/USER-LOGIN-COMPLETE';
export const SIGN_UP = 'user/SIGN_UP';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';
export const SIGN_OUT = 'SIGN_OUT';
export const USER_LOADING = 'USER_LOADING';
export const ERROR_LOGIN = 'user/ERROR_LOGIN';

export const loginUser = (payload: any, navigate: any) => {
  console.log('loginUser');
    return {
      type: USER_LOGIN,
      payload,
      navigate,
    };
};

export const loginComplete = (payload: any) => {
  console.log('logincomplete');
    return {
      type: USER_LOGIN_COMPLETE,
      payload,
    };
  };
  
export const signUp = (payload: any, navigate: any) => { 
      return {
        type: SIGN_UP,
        payload,
        navigate 
      }
};

export const signUpSuccess = () => {
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

