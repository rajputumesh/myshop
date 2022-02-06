//import { DefaultRootState } from "react-redux";
import { USER_LOGIN, USER_LOGIN_COMPLETE,SIGN_UP, ERROR_LOGIN, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, USER_LOADING } from "../actions/userAction";
import { AuthState } from "../types";

const initialStatetype: AuthState = {
  loginData: {
    token: {
      name: "",
      abilities: [],
      tokenable_id: "",
      tokenable_type: "",
      updated_at: "",
      created_at: "",
      id: null,
    },
    user: {
      id: null,
      roleid: null,
      name: "",
      phone: "",
      email: "",
      email_verified_at: "",
      created_at: "",
      updated_at: "",
    }
  },
  signUp: {
    token: {
      name: "",
      abilities: [],
      tokenable_id: "",
      tokenable_type: "",
      updated_at: "",
      created_at: "",
      id: null,
    },
    user: {
      id: null,
      roleid: null,
      name: "",
      phone: "",
      email: "",
      email_verified_at: "",
      created_at: "",
      updated_at: "",
    }
  },
    loggedIn: false,
    isLoading: false,
    errorMessage: ""
}
const userReducer = (state = initialStatetype, action: any ) => {
    const {type , payload} = action;
    switch(type){
        case USER_LOGIN:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        isLoading: false,
        loginData: { ...payload },
        errorMessage: '',
        loggedIn: true,
      };
    case SIGN_UP:
      return {
        ...state,
        signUp: {
          message: '',
          isLoading: true,
        },
      };
      case ERROR_LOGIN:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          email: payload,
          isLoading: false,
        },
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUp: {
          message: payload,
          isLoading: false,
        },
      };
      
    default:
        return state;

    }
};

export default userReducer;