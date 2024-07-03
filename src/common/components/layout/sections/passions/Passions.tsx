import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {PassionsFront} from "../../../../../assets/icons/passionsFront";
import {PassionsBack} from "../../../../../assets/icons/passionsBack";
import {PassionsUI} from "../../../../../assets/icons/passionsUI";

export const Passions = () => {
    return (
        <StyledSection>
            <StyledH2>Additional passions</StyledH2>
            <FlexWrapper flexDirection={"row"} justify={"space-around"}>
                <FlexWrapper flexDirection={"column"}><PassionsFront/><h3>Front-End Developer</h3><span>
                    (Sass, Bootstrap, Tailwind)</span></FlexWrapper>
                <FlexWrapper flexDirection={"column"}><PassionsBack/><h3>Back-End Developer</h3><span>
                    (NodeJS, Laravel, Codeigniter)</span></FlexWrapper>
                <FlexWrapper flexDirection={"column"}><PassionsUI/><h3>UI/UX Designer</h3><span>
                    (Figma, Zeplin, Adobe XD)</span></FlexWrapper>
            </FlexWrapper>
        </StyledSection>
    );
};


const StyledSection = styled.section``
const StyledH2 = styled.h2`
text-align: center`
