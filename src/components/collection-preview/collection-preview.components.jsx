import React from 'react';
// import './collection-preview.styles.scss';
import { withRouter } from 'react-router-dom';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';
import  CollectionItem from '../collection-item/collection-item.components';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>

        {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {
                items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id}  item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
