import {loginUser, USER_LOGIN, SIGN_UP_FAILURE, loginComplete, signUp, signUpSuccess, signUpFailure, handleSignOut,USER_LOADING} from './actions/userAction';
import { put, call, takeEvery } from 'redux-saga/effects';

const signIn = async (payload: any) => {
    try {
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
        }else{
            return response;
        }
    } catch (ex) {
    console.log(ex);
        return ex;
    }
};

function* loginUserfunction(data:any)
{
    const {payload} = data;
    try{
        yield put({ type: USER_LOADING });
        const response = yield call<any>(signIn, payload);
        yield put({
            type:USER_LOGIN,
            payload:response,
        }) 
    }
    catch(ex){
        yield put({ 
            type:  SIGN_UP_FAILURE,
            payload:ex,
        });
        console.log("saga error ="+ex);
    };
}

function* loginSaga() {
    yield takeEvery(USER_LOGIN, loginUserfunction);
}

export default loginSaga;

