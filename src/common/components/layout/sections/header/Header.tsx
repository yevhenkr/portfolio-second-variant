import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {LogoIcon} from "../../../../../assets/icons/LogoIcon";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {myTheme} from "../../../../../styles/Theme.styled";
import {BurgerIcon} from "../../../../../assets/icons/burgerIcon";
import {MobileMenu} from "../../mobileMenu/MobileMenu";


export const Header = () => {
    const [squares, setSquares] = useState<boolean>(false);
    const handleClick = () => {
        setSquares(!squares);
    };
    const [headerHeight, setHeaderHeight] = useState<number>(0); // Состояние для хранения высоты header
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.clientHeight;
            setHeaderHeight(height);
        }
    }, []); // Пустой массив зависимостей гарантирует, что эффект сработает только один раз после монтирования

    return (
        <StyledDiv ref={headerRef}>
            <FlexWrapper display={"flex"} align_i={"center"}>
                <LogoIcon/>
            </FlexWrapper>
            <HeaderMenu height={headerHeight}/>
            <Burger
                onClick={() => {
                    handleClick()
                }}>
                <BurgerIcon/>
            </Burger>
            <MobileMenu headerHeight={headerHeight} isMenu={squares} changeMenu={handleClick}/>
        </StyledDiv>
    );
};


const Burger = styled.a`
    display: none;
    position: relative;
    @media (max-width: ${myTheme.screen.medium}) {
        display: flex;
        right: 10px;
    }
`

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
    @media (max-width: ${myTheme.screen.medium}) {
        padding: 0;
    }
`