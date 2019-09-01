import React from 'react';
import { connect } from 'react-redux';
import {selectCollcetionForPreview} from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
// import './collections-overview.styles.scss';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) =>(
    <CollectionsOverviewContainer>
        {collections.map( ({id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollcetionForPreview
});

export default  connect(mapStateToProps)(CollectionsOverview);