import {loginUser, USER_LOGIN, SIGN_UP, ERROR_LOGIN, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, loginComplete, signUpSuccess, signUpFailure, handleSignOut,USER_LOADING, USER_LOGIN_COMPLETE} from './actions/userAction';
import { put, call, takeEvery,all, fork } from 'redux-saga/effects';
import { get } from 'lodash';
import {useNavigate} from 'react-router-dom';
 type responseType= {
    token: any;
    user: any;
  
}
const signIn = async (payload: any) => {
        const response = await fetch('http://myshop.hombrehr.com/api/user/login', {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json"
            }),
            body: JSON.stringify(payload)
        });
        if (response.status === 200) {
            let responseBody: any = await response.json();
            console.log(responseBody);
            return responseBody;
        
        }
    return response;
};

const signUp = async (payload: any) => {
    const response = await fetch('http://myshop.hombrehr.com/api/user/register', {
          method: "post",
          headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json"
          }),
          body: JSON.stringify(payload)
          });
          if (response.status === 200) {
          let responseBody: any = await response.json();
              console.log(responseBody);
              return responseBody;
          }
          return response;
        }

        
function* LoginUserfunction(data:any)
{
    console.log("saga", data);
    const {payload, navigate} = data;
   // const navigate = useNavigate();
    try{
        yield put({ type: USER_LOADING });
        const response: responseType = yield call<any>(signIn, payload);
        if (response.user) {
        yield put({
            type:USER_LOGIN_COMPLETE,
            payload:response,
        }) 
          navigate('/');
      }
    }
    catch(err){
        console.log('error', err);
    };
}

function* SignUpUserfunction(data: any)
{
    console.log("saga", data);
    const {payload, navigate} = data;
   // const navigate = useNavigate();
    try{
        yield put({ type: USER_LOADING });
        const response: responseType = yield call<any>(signUp, payload);
        if (response.user) {
        yield put({
            type:SIGN_UP_SUCCESS,
            payload:response,
        }) 
          navigate('/');
      }
    }
    catch(err){
        console.log('error', err);
    };
}
function* loginSaga() {
    yield takeEvery(USER_LOGIN, LoginUserfunction);
}

function* signUpSaga() {
    yield takeEvery(SIGN_UP, SignUpUserfunction);
}


export default function* authSagas() {
    yield all([
      fork(loginSaga),
      fork(signUpSaga),
    ]);
  }