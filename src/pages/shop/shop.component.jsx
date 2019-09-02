import React from 'react'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
// import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinn.componnt';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner =WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state= {
        loading : true
    };

    unsubscribeFromSnapShot = null;
    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
           const collectionMap= convertCollectionSnapshotToMap(snapshot);
           updateCollections(collectionMap);
           this.setState({loading: false});
        });
    }
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'> 
            <Route
            exact
            path={`${match.path}`}
            render={props => (
              <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={props => (
              <CollectionPageWithSpinner isLoading={loading} {...props} />
            )}
          />
            </div>
            );
    }};


    const mapDispatchToProps = dispatch => ({
        updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
    })

export default  connect(null, mapDispatchToProps)(ShopPage);





// const ShopPage= ({ match }) =>(
//     <div className='shop-page'> 
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//     );