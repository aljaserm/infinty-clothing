import React from 'react'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
// import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector }  from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinn.componnt';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner =WithSpinner(CollectionPage);

class ShopPage extends React.Component{
      componentDidMount(){
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();

    }
    render(){
        const { match, isCollectionFetching, isCollectionLoaded  } = this.props;
        return (
            <div className='shop-page'> 
            <Route
            exact
            path={`${match.path}`}
            render={props => (
              <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={props => (
              <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
            )}
          />
            </div>
            );
    }};

    const mapStateToProps = createStructuredSelector({
      isCollectionFetching: selectIsCollectionFetching,
      isCollectionLoaded: selectIsCollectionsLoaded

    });

    const mapDispatchToProps = dispatch => ({
      fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
    })

export default  connect(mapStateToProps, mapDispatchToProps)(ShopPage);





// const ShopPage= ({ match }) =>(
//     <div className='shop-page'> 
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//     );