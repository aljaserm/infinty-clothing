import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media only screen and (min-width: 375px) and (max-height: 667px) { 
align-items: center;
    }
  @media screen  and (max-width: 800px)  {
    align-items: center;
    }
`;

export const TitleContainer = styled.h1`
     font-size: 28px;
      margin-bottom: 25px;
      color:dodgerblue;
      cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
      display: flex;
      justify-content: space-between;
      @media only screen and (min-width: 375px) and (max-height: 667px) { 
      display:grid;
      grid-template-columns: 1fr 1fr;
      grid-gap:15px;
    }
  @media screen  and (max-width: 800px)  {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:15px;
    }
`;