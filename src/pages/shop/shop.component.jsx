import React from 'react'
import { Route } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
// import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
// import { createStructuredSelector }  from 'reselect';
import { connect } from 'react-redux';
// import WithSpinner from '../../components/with-spinner/with-spinn.componnt';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner =WithSpinner(CollectionPage);

class ShopPage extends React.Component{
      componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();

    }
    render(){
        const { match  } = this.props;
        return (
            <div className='shop-page'> 
            <Route
            exact
            path={`${match.path}`}
            component= {CollectionsOverviewContainer}
            // render={props => (
            //   <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
            // )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component= {CollectionPageContainer}
            // render={props => (
            //   <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
            // )}
          />
            </div>
            );
    }};



    const mapDispatchToProps = dispatch => ({
      fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    })

export default  connect(null, mapDispatchToProps)(ShopPage);





// const ShopPage= ({ match }) =>(
//     <div className='shop-page'> 
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//     );