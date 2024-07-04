import React from 'react';
import styled from "styled-components";
import {LogoIcon} from "../../../../../assets/icons/LogoIcon";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";

export const Header = () => {
    return (
        <StyledDiv >
            <FlexWrapper align_i={"center"}>
                <LogoIcon />
            </FlexWrapper>
            <StyledUl>
                <StyledLi><StyledLink href={"#Main"}>About</StyledLink></StyledLi>
                <StyledLi><a href={"#Passions"}>Passions</a></StyledLi>
                <StyledLi><a href={"#"}>Portfolio</a></StyledLi>
                <StyledLi><a href={"#footer"}>Contact Me</a></StyledLi>
            </StyledUl>
        </StyledDiv>
    );
};

const StyledUl =styled.ul`
display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 10px;
`
const StyledLi =styled.li`
    display: flex;
    align-items: center;
`

const StyledLink =styled.a`
    text-align: center`


const StyledDiv =styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;

    width: 100%;
    
    min-height: 50px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    background: #b0bdfd;
    border-bottom: 1px solid black;
`