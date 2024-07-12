import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {PassionsFront} from "../../../../../assets/icons/passionsFront";
import {PassionsBack} from "../../../../../assets/icons/passionsBack";
import {PassionsUI} from "../../../../../assets/icons/passionsUI";
import {myTheme} from "../../../../../styles/Theme.styled";
import {TitleSection} from "../../../ui/titleSections/TitleSection";

export const Passions = () => {
    return (
        <StyledDiv id={'Passions'}>
            <TitleSection wordOne={"Additional"} wordSecond={"passions"}/>
            <FlexWrapper wrap={"wrap"} flexDirection={"row"} justify={"space-around"} max_width={"1628"} gap={"20px"}>
                <FlexWrapper backgroundColor={`${myTheme.color.white}`} flex={"1"} flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} max_width={ "500px"} min_width={"350px"} padding={"50px 0"} boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsFront/>
                    <H3Styled>Front-End Developer</H3Styled>
                    <SpanSkills>(Sass, Bootstrap, Tailwind)</SpanSkills>
                </FlexWrapper>
                <FlexWrapper backgroundColor={`${myTheme.color.white}`} flex={"1"} flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"350px"} padding={"50px 0"} boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsBack/>
                    <H3Styled>Back-End Developer</H3Styled>
                    <SpanSkills>(NodeJS, Laravel, Codeigniter)</SpanSkills>
                </FlexWrapper>
                <FlexWrapper backgroundColor={`${myTheme.color.white}`} flex={"1"} flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"350px"} padding={"50px 0"} boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsUI/>
                    <H3Styled>UI/UX Designer</H3Styled>
                    <SpanSkills>(Figma, Zeplin, Adobe XD)</SpanSkills>
                </FlexWrapper>
            </FlexWrapper>
        </StyledDiv>
    );
};

const StyledDiv = styled.section`
    padding-bottom: 170px;
    max-width: 1628px;
    width: 100%;
    position: relative;

    &::after, &::before {
        content: "";
        position: absolute;
        background-color: rgba(69, 129, 246, 0.5);
        border-radius: 50%;
        filter: blur(60px);
        z-index: -1;
    }

    &::after {
        width: 150px;
        height: 150px;
        top: 10%;
        left: 10%;
        @media (max-width:${myTheme.screen.medium}) {
            position: absolute;
        }
    }

    &::before {
        width: 250px;
        height: 250px;
        top: 50%;
        left: 50%;
        @media (max-width: ${myTheme.screen.medium}) {
            position: absolute;
        }
    }
`

const H3Styled = styled.span`
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 25px;
    color: ${myTheme.color.black};
`
const SpanSkills = styled.span`
    font-weight: ${myTheme.font.weights.regular};
    font-size: 18px;
    color: ${myTheme.color.black};
`