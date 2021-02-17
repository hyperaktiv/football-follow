import styled, { css } from "styled-components/native";

export const MText = styled.Text`
   color: black;

   ${(props) =>
      props.white && css`
         color: white;
      `}

   ${(props) =>
      props.bold && css`
         font-weight: bold;
      `}


   ${(props) =>
      props.large && css`
         font-size: 26px
      `}
   ${(props) =>
      props.medium && css`
         font-size: 20px
      `}
   ${(props) =>
      props.normal && css`
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

`;
