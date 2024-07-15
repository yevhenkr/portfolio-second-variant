import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";

type PropsType={
    isMenu: boolean;
    changeMenu: () => void
}


export const MobileMenu = (props: PropsType) => {
    return (
        <>
            {props.isMenu ? <Menu>
                <button onClick={() => {
                    props.changeMenu()
                }}>Х
                </button>
            </Menu> : ""}
        </>
    );
};

const Menu = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: ${myTheme.color.blue};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;