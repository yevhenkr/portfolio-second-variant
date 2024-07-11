import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {GithubIcon} from "../../../../../assets/icons/githubIcon";
import {InstagramIcon} from "../../../../../assets/icons/instagramIcon";
import {EmailIcon} from "../../../../../assets/icons/emailIcon";
import {PhoneIcon} from "../../../../../assets/icons/phoneIcon";
import {WaveIcon} from "../../../../../assets/icons/WaveIcon";
import Vector from "../../../../../assets/img/VectorWave.png";
import styled from "styled-components";
import {myTheme} from "../../../../../styles/Theme.styled";
import {SVGProps, useState} from "react";

export const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleCopy = (number:string) => {
        navigator.clipboard.writeText(number).then(() => {
            alert("Номер скопирован в буфер обмена: " + number);
        }, () => {
            alert("Ошибка при копировании номера");
        });
    };
    return (
        <StyledFooter>
            <TitleSection wordOne={"Contact"} wordSecond={"Me"}/>
            <StyledDiv>
                <LinkStyled href={"https://github.com/yevhenkr"}>
                    <GithubIcon/>
                    <span>Github</span>
                </LinkStyled>
                <LinkStyled
                    href={"https://www.instagram.com/sd.youth?igsh=OXFleGM0eHV4NzZw"}>
                    <InstagramIcon/>
                    <span>Instagram</span>
                </LinkStyled>
                <LinkStyled
                    href={"mailto:vasilenkoevgen88@gmail.com"}>
                    <EmailIcon fill={isHovered ? `${myTheme.color.smIconHover}` : `${myTheme.color.smIcon}`}/>
                    <span>Email</span>
                </LinkStyled>
                <LinkStyled onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <PhoneIcon fill={isHovered ? `${myTheme.color.smIconHover}` : `${myTheme.color.smIcon}`} onClick={() => handleCopy("+1234567890")} />
                    <span>Phone</span>
                </LinkStyled>
            </StyledDiv>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    id: "#footer";
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        width: 100%;
        height: 36vh;
        max-height: 380px;
        transform: translateY(50%);
        background-image: url(${Vector});
        background-repeat: no-repeat;
        background-size: 100%;
    }

`

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1628px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;


const LinkStyled = styled.a`
    display: flex;
    flex-direction: column;
    color: ${myTheme.color.black};

    svg {
        cursor: pointer;
    }

    span {
        text-align: center;
    }
`
