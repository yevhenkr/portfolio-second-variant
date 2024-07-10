import React from 'react';
import styled from "styled-components";
import {LogoIcon} from "../../../../../assets/icons/LogoIcon";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {myTheme} from "../../../../../styles/Theme.styled";

export const Header = () => {
    return (
        <StyledDiv>
            <FlexWrapper align_i={"center"}>
                <LogoIcon/>
            </FlexWrapper>
            <HeaderMenu />
        </StyledDiv>
    );
};


const StyledDiv = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 2;
    top: 0;
    width: 100%;
    max-width: 1628px;
    min-height: 50px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    background: ${myTheme.color.white};
    border-bottom: 1px solid black;
`