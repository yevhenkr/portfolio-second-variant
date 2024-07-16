import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";
import {HeaderMenu} from "../sections/header/headerMenu/HeaderMenu";
import {CloseIcon} from "../../../../assets/icons/closeIcon";

type PropsType = {
    isMenu: boolean;
    changeMenu: () => void;
    headerHeight: number;
};

export const MobileMenu: React.FC<PropsType> = ({isMenu, changeMenu, headerHeight}) => {
    return (
        <Menu isMenu={isMenu}>
            <CloseButton onClick={changeMenu}><StyledCloseIcon/></CloseButton>
            <MenuButtons height={headerHeight} closeMobileMenu={changeMenu}/>
        </Menu>
    );
};

const Menu = styled.div<{ isMenu: boolean }>`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${myTheme.color.blue};
    top: 0;
    left: 0;
    opacity: ${props => (props.isMenu ? 1 : 0)};
    transform: ${props => (props.isMenu ? 'translateY(0)' : 'translateY(-100%)')};
    transition: opacity 0.5s ease, transform 0.5s ease;
`;

const MenuButtons = styled(HeaderMenu)`
    @media (max-width: ${myTheme.screen.medium}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 0;
        right: 0;
        a {
            color: ${myTheme.color.white};
        }
    }

    li {
        li {
        }
    }
`;

const CloseButton = styled.button`
    position: absolute;
    padding: 0;
    width: 30px;
    height: 30px;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
`;

const StyledCloseIcon = styled(CloseIcon)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
