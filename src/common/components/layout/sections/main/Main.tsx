import {UserSVG} from "../../../../../assets/icons/user";
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    return (
        <StyledMain id={'About'}>
            <StyledDiv>
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
                <Tilt>
                    <WrapSvg>
                        <UserSVG/>
                    </WrapSvg>
                </Tilt>
            </StyledDiv>
        </StyledMain>
    );
};

const WrapSvg = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto 0;
    @media (max-width: ${myTheme.screen.small}) {
        width: 290px;
    }
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1628px;
    @media (max-width: ${myTheme.screen.medium}) {
        flex-direction: column-reverse;
        max-width: 768px;
        align-items: center;
        margin: 0 25px;
    }
`

const StyledMain = styled.main`
    position: relative;
    max-width: 1628px;
    width: 100%;
    padding-bottom: 100px;
    padding-top: 124px;
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
        width: 80px;
        height: 80px;
        top: 18%;
        left: 14%;
    }

    &::before {
        width: 150px;
        height: 150px;
        top: 50%;
        left: 50%;
    }

    @media (max-width: ${myTheme.screen.medium}) {
        padding-bottom: 70px;
    }
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