import React from 'react'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
// const ShopPage= ({ match }) =>(
//     <div className='shop-page'> 
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//     );


class ShopPage extends React.Component{
    unsubscribeFromSnapShot = null;
    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
           const collectionMap= convertCollectionSnapshotToMap(snapshot);
           updateCollections(collectionMap);
        });
    }
    render(){
        const { match } = this.props;
        return (
            <div className='shop-page'> 
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
            );
    }};


    const mapDispatchToProps = dispatch => ({
        updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
    })

export default  connect(null, mapDispatchToProps)(ShopPage);