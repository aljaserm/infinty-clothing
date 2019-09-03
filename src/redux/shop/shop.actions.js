import ShopActionTypes from './shop.types';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = ()=> ({
type: ShopActionTypes.FETECH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETECH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETECH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


export const fetchCollectionStartAsync = ()=> {
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());

        collectionRef.get().then(async snapshot => {
           const collectionMap= convertCollectionSnapshotToMap(snapshot);
           dispatch(fetchCollectionSuccess(collectionMap));
        }).catch(error => dispatch (fetchCollectionFailure(error.message)) );
    };
    };

