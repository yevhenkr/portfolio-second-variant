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
            <PassionsWrap>
                <WrapWithMediaQ backgroundColor={`${myTheme.color.white}`} flex={"1"} flexDirection={"column"}
                                borderRadius={"13px"}
                                align_i={"center"} min_width={"250px"} padding={"50px 0"}
                                boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsFront/>
                    <H3Styled>Front-End Developer</H3Styled>
                    <SpanSkills>(Sass, Bootstrap, Tailwind)</SpanSkills>
                </WrapWithMediaQ>
                <WrapWithMediaQ backgroundColor={`${myTheme.color.white}`} flex={"1"} flexDirection={"column"}
                                borderRadius={"13px"}
                                align_i={"center"} min_width={"250px"} padding={"50px 0"}
                                boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsBack/>
                    <H3Styled>Back-End Developer</H3Styled>
                    <SpanSkills>(NodeJS, Laravel, Codeigniter)</SpanSkills>
                </WrapWithMediaQ>
                <WrapWithMediaQ backgroundColor={`${myTheme.color.white}`} flex={"1"} borderRadius={"13px"}
                                align_i={"center"} min_width={"250px"} padding={"50px 0"}
                                boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsUI/>
                    <H3Styled>UI/UX Designer</H3Styled>
                    <SpanSkills>(Figma, Zeplin, Adobe XD)</SpanSkills>
                </WrapWithMediaQ>
            </PassionsWrap>
        </StyledDiv>
    );
};

const PassionsWrap = styled.div`
    max-width: 1628px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 50px;
    padding: 20px;
    box-sizing: border-box;
    @media (max-width: ${myTheme.screen.medium}) {
        flex-wrap: wrap;
        flex-direction: column;
        gap: 30px;
        padding: 20px;
        max-width: 100%;
    }
`

const WrapWithMediaQ = styled(FlexWrapper)`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-width: 250px;
    background-color: ${myTheme.color.white};
    @media (max-width: ${myTheme.screen.medium}) {
        flex: 1 1 calc(33.33% - 40px);
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 0;
    }
`

const StyledDiv = styled.section`
    padding-bottom: 170px;
    max-width: 100%;
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
        @media (max-width: ${myTheme.screen.medium}) {
            display: none;
        }
    }

    &::after {
        width: 1px;
        height: 1px;
        top: 50%;
        left: 19%;
    }

    &::before {
        width: 1px;
        height: 1px;
        top: 50%;
        left: 19%;
    }

    &::after, &::before {
        @media (max-width: ${myTheme.screen.medium}) {
            height: 0;
            width: 0;
            overflow: hidden;
            display: none;
        }
    }

    @media (max-width: ${myTheme.screen.medium}) {
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
