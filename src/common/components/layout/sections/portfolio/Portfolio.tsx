import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import first from "../../../../../assets/img/Port3.png";
import second from "../../../../../assets/img/Cards.png";
import therd from "../../../../../assets/img/SFood.png";
import {myTheme} from "../../../../../styles/Theme.styled";
import {PortfolioCard} from "./PortfolioCard";

export const Portfolio = () => {
    return (
        <StyledSection>
            <TitleSection wordOne={"My"} wordSecond={"Portfolio"}/>
            <FlexWrapperWithMediaQuery wrap={"wrap"} gap={"20px"} flexDirection={"row"} justify={"space-around"}>
                <PortfolioCard bgColor={"rgba(108,99,255,0.27)"} color={"#6C63FF"} img={first}/>
                <PortfolioCard bgColor={"rgba(77,194,241,0.25)"} color={"#4581F6"} img={second}/>
                <PortfolioCard bgColor={"rgba(0,0,0,0.22)"} color={`${myTheme.color.black}`} img={therd}/>
            </FlexWrapperWithMediaQuery>
        </StyledSection>
    );
};
const FlexWrapperWithMediaQuery = styled(FlexWrapper)`
    
    @media (max-width: ${myTheme.screen.medium}) {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 20px;
        max-width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        
    }`

const WrapperWithMediaQ = styled(FlexWrapper)`
    @media (max-width: ${myTheme.screen.medium}) {
        flex: 1 1 calc(33.33% - 40px);
        box-sizing: border-box;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 90px;
        max-width: 100%;
        top: -50px;
        left: -80px;
    }`

const StyledSection = styled.section`
    padding-bottom: 170px;
    max-width: 1628px;
    width: 100%;
    position: relative;
    z-index: 1;

    &::after, &::before {
        content: "";
        position: absolute;
        background-color: rgba(69, 129, 246, 0.5);
        border-radius: 50%;
        filter: blur(40px);
        z-index: -1;
    }

    &::after {
        width: 100px;
        height: 100px;
        top: 17%;
        left: 10%;
        z-index: -2;
    }

    &::before {
        width: 250px;
        height: 250px;
        top: 51%;
        left: 68%;
    }

    @media (max-width: ${myTheme.screen.medium}) {
        padding-bottom: 70px;
        gap: 30px;
        &::after, &::before {
            display: none;
        }
    }
`

type StyledSpanType = {
    color?: string
    width?: string
}

const StyledSpan = styled.span<StyledSpanType>`
    color: ${props => props.color || ""};
    width: ${props => props.width || ""};
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 25px;
    display: flex;
    align-items: center;
`

type DivType = {
    beforeContent?: string;
    beforeWidth?: string;
    beforeHeight?: string;
    beforeBackgroundColor?: string;
}

const ImageContainer = styled.div<DivType>`
    position: relative;
    display: block;
    max-width: 450px;
    width: 100%;
    margin-left: auto;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.09);

    &::before {
        content: ${props => `'${props.beforeContent || ''}'`};
        position: absolute;
        width: ${props => props.beforeWidth || ''};
        height: ${props => props.beforeHeight || ''};
        background-color: ${props => props.beforeBackgroundColor || ''};
        border-radius: 50%;
        top: -60px;
        left: -30px;
        z-index: 0;
    }

    @media (max-width: ${myTheme.screen.medium}) {
        max-width: calc(100% - 30px);
        width: 600px;

        &::before {
            width: 250px;
            height: 250px;
            top: -70px;
            left: -100px;
        }
    }
`

const StyledImg = styled.img`
    display: block;
    width: 765px;
    max-width: 100%;
    position: relative;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    z-index: 1;
`