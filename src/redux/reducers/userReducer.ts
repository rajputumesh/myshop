//import { DefaultRootState } from "react-redux";
import { USER_LOGIN, USER_LOGIN_COMPLETE,SIGN_UP, ERROR_LOGIN, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, USER_LOADING } from "../actions/userAction";
import { initialStateType } from "../types";

const initialStatetype: initialStateType ={
    username: "",
    phone: "",
    email: "",
    password: "",
    isLoading: false,
    signUp:"",
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
        user: { ...payload },
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