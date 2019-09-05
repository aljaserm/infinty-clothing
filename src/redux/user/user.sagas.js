import { takeLatest, call, put, all  } from 'redux-saga/effects';
import UserActionTypes from './user.type';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';

export function* signInWithGoogle(){
    try{
        const { user }= yield auth.signInWithPopup(googleProvider);
        const userRef= yield call(createUserProfileDocument, user);
        const useSnapshot= yield userRef.get();
        yield put (
            googleSignInSuccess({id: useSnapshot.id, ...useSnapshot.data() })
            );
    }catch(error){
        yield put (googleSignInFailure(error));
    }
}


export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}


export function* userSagas(){
    yield all([call(onGoogleSignInStart)]);
};