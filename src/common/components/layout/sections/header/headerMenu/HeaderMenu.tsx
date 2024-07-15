import styled from "styled-components";
import React from 'react';
import {mySections, myTheme} from "../../../../../../styles/Theme.styled";

type PropsType = {
    className?: string;
    closeMobileMenu?: () => void;
    height: number
};

export const HeaderMenu = (props: PropsType) => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = props.height; // Указать необходимое смещение
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: (elementPosition - offset),
                behavior: "smooth"  // Добавляем плавную прокрутку
            });
        }
        if (props.closeMobileMenu) {
            props.closeMobileMenu();
        }
    };

    return (
        <Menu className={props.className}>
            {mySections.map((section, index) => (
                <StyledLi key={index} onClick={() => handleClick(section[1])}>
                    <StyledLink>
                        {section[1]}
                        <Mask><span>{section[1]}</span></Mask>
                        <Mask><span>{section[1]}</span></Mask>
                    </StyledLink>
                </StyledLi>
            ))}
        </Menu>
    );
};

const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 45px;
    position: relative;
    right: 10px;
    padding: 0;
    @media (max-width: ${myTheme.screen.medium}) {
        display: none;
    }

    li {
        padding: 20px 40px;
    }
`;

const StyledLi = styled.li`
    display: flex;
    align-items: center;
    position: relative;

    :hover {
        background-color: transparent;

        &::before {
            content: '';
            display: inline-block;
            height: 3px;
            background-color: ${myTheme.color.textColor};
            position: absolute;
            top: 50%;
            left: -10px;
            right: -10px;
            z-index: 1;
        }
    }
`;

const Mask = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    height: 50%;
    overflow-y: hidden;

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const StyledLink = styled.a`
    display: inline-block;
    line-height: 1;
    font-size: 30px;
    text-decoration: none;
    text-align: center;
    position: relative;
    color: ${myTheme.color.textColor};

    &:hover {
        color: transparent;

        ${Mask} {
            transform: translateX(5px);
            transition: transform 0.5s ease;

            color: ${myTheme.color.textColor};

            & + ${Mask} {
                transform: translateX(-5px);
                transition: transform 0.5s ease;
            }
        }
    }
`;
