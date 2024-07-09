import {UserSVG} from "../../../../../assets/icons/user";
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";

export const Main = () => {
    return (
        <StyledMain id={'Main'}>
            <FlexWrapper flexDirection={"row"} justify={"space-between"} max_width={"1170px"}>
                <FlexWrapper flexDirection={"column"} max_width={"600px"} width={"100%"}>
                    <StyledSpan>Hi !</StyledSpan>
                    <FlexWrapper flexDirection={"column"} justify={"center"}>
                        <StyledH2>I’m Muhamad Raul.</StyledH2>
                        <StyledH1>a Front-End Developer</StyledH1>
                    </FlexWrapper>
                    <StyledP>Front-End devel oper based in Bekasi, Indonesian
                        I’am coding with a clean and beautiful problem
                        solving in mind.</StyledP>
                </FlexWrapper>
                <UserSVG/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    max-width: 1170px;
    width: 100%;
    padding-bottom: 120px;
    padding-top: 124px;
`
const StyledSpan = styled.span`
`
const StyledH1 = styled.h1`
    margin: 0;
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 50px;
    padding-bottom: 32px`
const StyledH2 = styled.h2`
    margin: 0;
    line-height: 1;
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.semiBold};
    font-size: 50px;
`
const StyledP = styled.p`
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.regular};
    font-size: 23px;`