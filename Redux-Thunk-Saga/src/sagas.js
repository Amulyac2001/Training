import {call,put,takeEvery} from 'redux-saga/effects';
import { GET_USERS_SUCCESS,GET_USERS_FETCH } from './actions';

function userFetch(){
    return fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
}

function* workGetUsersFetch(){
    const users=yield call(userFetch);
    yield put({type:GET_USERS_SUCCESS,users})
}

function* mySaga(){
    yield takeEvery(GET_USERS_FETCH,workGetUsersFetch);
}

export default mySaga;