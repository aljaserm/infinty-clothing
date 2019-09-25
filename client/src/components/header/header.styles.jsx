import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen  and (max-width: 800px)  {
           height: 50px;
           padding: 5px;
           margin-bottom: 20 px;
    }

    @media only screen and (min-width: 375px) and (max-height: 667px)  { 
      height: 5px;
           padding: 0px;
           margin-bottom: 3 px;
    }
`;


export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    
  @media screen  and (max-width: 800px)  {
    width: 50px;
    padding: 5px;
    }
    @media only screen and (min-width: 375px) and (max-height: 667px)  { 
      width: 5px;
    padding: 0px;
    }
`;

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
@media screen  and (max-width: 800px)  {
    width: 80%;
    }

    @media only screen and (min-width: 375px) and (max-height: 667px)  { 
      width: 100%;
    }

`;

// export const OptionsStylesContainer=css`
//       padding: 10px 15px;
//       cursor: pointer;
//       color: dodgerblue;
// `;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
     cursor: pointer;
      color: dodgerblue;
`;

// export const OptionDiv = styled.div`
// /* ${OptionsStylesContainer} */

// `;
