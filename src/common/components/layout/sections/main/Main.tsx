import {UserSVG} from "../../../../../assets/icons/user";
import styled from "styled-components";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {myTheme} from "../../../../../styles/Theme.styled";

export const Main = () => {
    return (
        <StyledMain id={'Main'}>
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
                <WrapSvg>
                    <UserSVG/>
                </WrapSvg>
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
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        max-width: 768px;
        align-items: center;
        margin: 0 25px;
    }
`

const StyledMain = styled.main`
    max-width: 1628px;
    width: 100%;
    padding-bottom: 120px;
    padding-top: 124px;
    position: relative;

    //&::after, &::before {
    //    content: "";
    //    position: absolute;
    //    background-color: rgba(69, 129, 246, 0.5); /* Полупрозрачный синий */
    //    border-radius: 50%;
    //    filter: blur(60px); /* Размытие */
    //    z-index: -1; /* Чтобы элемент был позади контента */
    //}
    //
    //&::after {
    //    width: 150px;
    //    height: 150px;
    //
    //    top: 18%; /* Положение относительно родителя */
    //    left: 14%; /* Положение относительно родителя */
    //}
    //
    //&::before {
    //    width: 250px;
    //    height: 250px;
    //    top: 50%; /* Положение относительно родителя */
    //    left: 50%; /* Положение относительно родителя */
    //}
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