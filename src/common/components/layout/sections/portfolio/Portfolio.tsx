import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import first from "../../../../../assets/img/e-commerce 1 1.jpg";
import second from "../../../../../assets/img/SendPay 1.jpg";
import therd from "../../../../../assets/img/Edtech 1.jpg";
import {Section} from "../../../ui/section/Section";
import {myTheme} from "../../../../../styles/Theme.styled";

export const Portfolio = () => {
    return (
        <Section >
            <TitleSection wordOne={"My"} wordSecond={"Portfolio"}/>
            <FlexWrapper flexDirection={"row"} justify={"space-around"}>
                <FlexWrapper flexDirection={"column"}>
                    <StyledSpan>Sendpay</StyledSpan>
                    <img src={`${first}`}/>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <StyledSpan >E- Commerce</StyledSpan>

                    <img src={`${second}`}/>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <StyledSpan>therd</StyledSpan>
                    <img src={`${therd}`}/>
                </FlexWrapper>
            </FlexWrapper>
        </Section>
    );
};

const StyledSpan = styled.span``

const StyledH2 = styled.h2`
    text-align: center;
    padding-bottom: 60px`
const SpanFirst = styled.span`
    font-weight: ${myTheme.font.weights.regular};
    font-size: 25px;
    color: ${myTheme.color.textColor};
`
const SpanSecond = styled.span`
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 25px;
`