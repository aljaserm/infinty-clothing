import { takeLatest, call, put, all  } from 'redux-saga/effects';
import UserActionTypes from '../user/user.type';
import { clearCart } from './cart.actions';


export function* clearCartOnSignOut(){
yield put(clearCart());
}

export function* onSignOutSucess(){
    yield takeLatest(UserActionTypes.SIGIN_OUT_SUCCESS, clearCartOnSignOut);
}


export function* cartSagas() {
    yield all([
        call(onSignOutSucess)
    ]);
}