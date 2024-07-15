import React from 'react';
import styled from "styled-components";
import { myTheme } from "../../../../styles/Theme.styled";
import { HeaderMenu } from "../sections/header/headerMenu/HeaderMenu";

type PropsType = {
    isMenu: boolean;
    changeMenu: () => void;
};

export const MobileMenu: React.FC<PropsType> = ({ isMenu, changeMenu }) => {
    return (
        <>
            {isMenu ? (
                <Menu>
                    <CloseButton onClick={changeMenu}>Х</CloseButton>
                    <MenuButtons closeMobileMenu={changeMenu}/>
                </Menu>
            ) : null}
        </>
    );
};
const MenuButtons = styled(HeaderMenu)`
    @media (max-width: ${myTheme.screen.medium}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 0;
        right: 0;
        background-color: red;
    }
`;

const Menu = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${myTheme.color.blue};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
`;
