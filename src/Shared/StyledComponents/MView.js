import styled, { css } from "styled-components/native";

export const MView = styled.View`
   background-color: #0b0b0b;


   ${(props) =>
      props.center && css`
         justify-content: center;
         align-items: center;
      `}

   ${(props) =>
      props.cContent && css`
            justify-content: center;
         `}
   ${(props) =>
      props.cItems && css`
         align-items: center;
      `}

   ${(props) =>
      props.row && css`
         flex-direction: row;
         padding: 5px;
      `}
`;