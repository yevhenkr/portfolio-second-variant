import {UserSVG} from "../../../../assets/icons/user";
import styled from "styled-components";

export const Main = () => {
    return (
        <main>
            <div>
                <StyledSpan>Hi !</StyledSpan>
                <StyledH2>I’m Muhamad Raul.</StyledH2>
                <StyledH1>a Front-End Developer</StyledH1>
                <StyledP>Front-End devel oper based in Bekasi, Indonesian
                    I’am coding with a clean and beautiful problem
                    solving in mind.</StyledP>
            </div>
            <UserSVG/>
        </main>
    );
};

const StyledSpan= styled.span``
const StyledH1= styled.h1``
const StyledH2= styled.h2``
const StyledP= styled.p``