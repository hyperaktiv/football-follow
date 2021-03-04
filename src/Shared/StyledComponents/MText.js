import styled, { css } from "styled-components/native";

//  font-family: 'Kanit_400Regular';

export const MText = styled.Text`
   color: #aaaaaa;
   font-size: 14px;
  

   ${(props) =>
      props.title && css`
         color: #fcfcfc;
      `}

   ${(props) =>
      props.black && css`
         color: black;
      `}
   ${(props) =>
      props.white && css`
         color: #fcfcfc;
      `}

   ${(props) =>
      props.bold && css`
         font-weight: bold;
      `}

   ${(props) =>
      props.large && css`
         font-size: 20px
      `}
   ${(props) =>
      props.medium && css`
         font-size: 16px
      `}

   ${(props) =>
      props.small && css`
         font-size: 12px
      `}

   ${(props) =>
      props.underline && css`
         text-decoration: underline;
      `}

   ${(props) =>
      props.center && css`
         text-align: center;
      `}
   
`;
