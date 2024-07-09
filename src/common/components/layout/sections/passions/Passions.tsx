import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {PassionsFront} from "../../../../../assets/icons/passionsFront";
import {PassionsBack} from "../../../../../assets/icons/passionsBack";
import {PassionsUI} from "../../../../../assets/icons/passionsUI";
import {Section} from "../../../ui/section/Section";
import {myTheme} from "../../../../../styles/Theme.styled";
import {TitleSection} from "../../../ui/titleSections/TitleSection";

export const Passions = () => {
    return (
        <Section id={'Passions'}>
            <TitleSection wordOne={"Additional"} wordSecond={"passions"}/>
            <FlexWrapper flexDirection={"row"} justify={"space-around"} max_width={"1170px"}>
                <FlexWrapper flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"350px"} padding={"20px 0"} boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsFront/>
                    <H3Styled>Front-End Developer</H3Styled>
                    <SpanSkills>(Sass, Bootstrap, Tailwind)</SpanSkills>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"350px"} padding={"20px 0"} boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsBack/>
                    <H3Styled>Back-End Developer</H3Styled>
                    <SpanSkills>(NodeJS, Laravel, Codeigniter)</SpanSkills>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"} borderRadius={"13px"}
                             align_i={"center"} min_width={"350px"} padding={"20px 0"} boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.5)"}>
                    <PassionsUI/>
                    <H3Styled>UI/UX Designer</H3Styled>
                    <SpanSkills>(Figma, Zeplin, Adobe XD)</SpanSkills>
                </FlexWrapper>
            </FlexWrapper>
        </Section>
    );
};
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