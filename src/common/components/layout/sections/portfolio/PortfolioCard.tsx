import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import first from "../../../../../assets/img/Port3.png";
import {myTheme} from "../../../../../styles/Theme.styled";

type PropsType = {
    img?: string;
    bgColor: string;
    color: string;
}

export const PortfolioCard = (props: PropsType) => {
    return (
        <WrapperWithMediaQ backgroundColor={`${myTheme.color.white}`} flex={"1"} flexDirection={"column"}
                           borderRadius={"13px"} align_i={"center"} min_width={"320px"} padding={"15px"}
                           boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
            <FlexWrapper padding={"10px 0"} flexDirection={"row"} gap={"10px"} justify={"flex-start"}
                         width={"100%"}>
                <StyledSpan color={`${props.color}`}>Portfolio</StyledSpan>
            </FlexWrapper>
            <ImageContainer beforeContent={""} beforeWidth={"195px"}
                            beforeHeight={"195px"} beforeBackgroundColor={`${props.bgColor}`}>
                <StyledImg src={`${props.img}`} alt={"props.alt"}/>
            </ImageContainer>
        </WrapperWithMediaQ>

    );
};

const WrapperWithMediaQ = styled(FlexWrapper)`
    @media (max-width: ${myTheme.screen.medium}) {
        flex: 1 1 calc(33.33% - 40px);
        box-sizing: border-box;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 20%;
        max-width: 100%;
        top: -50px;
        left: -80px;
    }`

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
            width: 280px;
            height: 280px;
            top: -64px;
            left: -152px;
        }
    }

    @media (max-width: ${myTheme.screen.small}) {
        &::before {
            width: 220px;
            height: 220px;
            top: -60px;
            left: -120px;
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