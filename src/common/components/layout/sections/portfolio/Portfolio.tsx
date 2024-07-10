import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {TitleSection} from "../../../ui/titleSections/TitleSection";
import first from "../../../../../assets/img/Port3.png";
import second from "../../../../../assets/img/Cards.png";
import therd from "../../../../../assets/img/SFood.png";
import {Section} from "../../../ui/section/Section";
import {myTheme} from "../../../../../styles/Theme.styled";

export const Portfolio = () => {
    return (
        <Section>
            <TitleSection wordOne={"My"} wordSecond={"Portfolio"}/>
            <FlexWrapper flexDirection={"row"} justify={"space-around"}>
                <FlexWrapper flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"320px"} padding={"15px"}
                             boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <FlexWrapper padding={"10px 0"} flexDirection={"row"} gap={"10px"} justify={"flex-start"}
                                 width={"100%"}>
                        <StyledSpan color={"#6C63FF"}>Portfolio</StyledSpan>
                    </FlexWrapper>
                    <ImageContainer
                        beforeContent={""}
                        beforeWidth={"195px"}
                        beforeHeight={"195px"}
                        beforeBackgroundColor={"rgba(108,99,255,0.27)"}
                    >
                        <StyledImg src={first} alt={"props.alt"}/>
                    </ImageContainer>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"} borderRadius={"13px"} align_i={"center"} min_width={"320px"} padding={"15px"}
                             boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <FlexWrapper padding={"10px 0"} flexDirection={"row"} gap={"10px"} justify={"flex-start"}
                                 width={"100%"}>
                        <StyledSpan color={"#4581F6"}>Flash cards</StyledSpan>
                    </FlexWrapper>

                    <ImageContainer
                        beforeContent={""}
                        beforeWidth={"195px"}
                        beforeHeight={"195px"}
                        beforeBackgroundColor={"rgba(77,194,241,0.25)"}
                    >
                        <StyledImg src={second} alt={"props.alt"}/>
                    </ImageContainer>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"320px"} padding={"15px"}
                             boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <FlexWrapper padding={"10px 0"} flexDirection={"row"} gap={"10px"} justify={"flex-start"}
                                 width={"100%"}>
                        <StyledSpan color={"#000"}>Food delivery</StyledSpan>
                    </FlexWrapper>
                    <ImageContainer
                        beforeContent={""}
                        beforeWidth={"195px"}
                        beforeHeight={"195px"}
                        beforeBackgroundColor={"rgba(0,0,0,0.22)"}
                    >
                        <StyledImg src={therd} alt={"props.alt"}/>
                    </ImageContainer>
                </FlexWrapper>
            </FlexWrapper>
        </Section>
    );
};
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
    max-width: 290px;
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
`

const StyledImg = styled.img`
    display: block;
    width: 100%;
    position: relative;
    border-radius: 7px;

    z-index: 1;
`