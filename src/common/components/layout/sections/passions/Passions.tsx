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
            <CardsWrap >
                <FlexWrapper backgroundColor={`${myTheme.color.white}`} flex={"1"} flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"350px"} padding={"50px 0"} boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
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
            </CardsWrap>
        </StyledDiv>
    );
};

const CardsWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1628px;
    gap: 20px;
    @media(max-width:${myTheme.screen.medium}){
        flex-direction: column;
        padding: 0 20px;
    }
`
const CardWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1628px;
    gap: 20px;
    @media(max-width:${myTheme.screen.medium}){
        flex-direction: column;
        padding: 0 20px;
    }
`
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
            display: none;
        }
    }

    &::before {
        width: 250px;
        height: 250px;
        top: 50%;
        left: 50%;
        @media (max-width: ${myTheme.screen.medium}) {
            display: none;
        }
    }
    @media (max-width:${myTheme.screen.medium}) {
        padding-bottom: 70px;
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