import styled from 'styled-components'
import React from "react";
import {myTheme} from "../../../../styles/Theme.styled";

type TitleProps = {
  wordOne: string
  wordSecond: string
}

export const TitleSection = (props: TitleProps) => {
  return (
      <StyledH2>
          <SpanFirst>{`${props.wordOne}`} </SpanFirst>
          <SpanSecond>{props.wordSecond}</SpanSecond>
      </StyledH2>
  )
}

const StyledH2 = styled.h2`
    text-align: center;
    column-gap: 10px;
    flex-direction: row;
    justify-content: center;
    display: flex;
    position: relative;
    margin-top: 0;
    margin-bottom: 80px;

    @media (max-width: ${myTheme.screen.medium}) {
        margin-bottom: 30px;
    }
`
const SpanFirst = styled.span`
    font-weight: ${myTheme.font.weights.regular};
    font-size: 35px;
    color: ${myTheme.color.textColor};
`
const SpanSecond = styled.span`
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 35px;
`
