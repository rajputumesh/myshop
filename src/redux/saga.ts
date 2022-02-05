import {loginUser, USER_LOGIN, ERROR_LOGIN, SIGN_UP_FAILURE, loginComplete, signUp, signUpSuccess, signUpFailure, handleSignOut,USER_LOADING, USER_LOGIN_COMPLETE} from './actions/userAction';
import { put, call, takeEvery } from 'redux-saga/effects';
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

function* loginSaga() {
    yield takeEvery(USER_LOGIN, LoginUserfunction);
}

export default loginSaga;

