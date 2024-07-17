import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {GithubIcon} from "../../../../../assets/icons/githubIcon";
import {InstagramIcon} from "../../../../../assets/icons/instagramIcon";
import {EmailIcon} from "../../../../../assets/icons/emailIcon";
import {PhoneIcon} from "../../../../../assets/icons/phoneIcon";
import Vector from "../../../../../assets/img/VectorWave.png";
import styled from "styled-components";
import {myTheme} from "../../../../../styles/Theme.styled";

export const Footer = () => {
    const handleCopy = (number: string) => {
        navigator.clipboard.writeText(number).then(() => {
            alert("Номер скопирован в буфер обмена: " + number);
        }, () => {
            alert("Ошибка при копировании номера");
        });
    };
    return (
        <StyledFooter id={'Contact'}>
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
                    <EmailIcon/>
                    <span>Email</span>
                </LinkStyled>
                <LinkStyled>
                    <PhoneIcon onClick={() => handleCopy("+1234567890")}/>
                    <span>Phone</span>
                </LinkStyled>
            </StyledDiv>
            <DesignSpan> Design By Rauliqbal</DesignSpan>
        </StyledFooter>
    );
};


const DesignSpan = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 20px;
    text-align: center;
    display: flex;
    color: black;
    color: ${myTheme.color.white};
`

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1628px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    @media (max-width: ${myTheme.screen.medium}) {
        flex-direction: column;
        align-items: center;
        gap: 70px;
    }
`;

const LinkStyled = styled.a`
    display: flex;
    flex-direction: column;
    border-radius: 7px;

    :hover {
        box-shadow: 0px 0px 10px ${myTheme.color.smIcon};
        transition: 0.5s;
    }

    span {
        color: ${myTheme.color.black};
        text-align: center;
    }

    @media (max-width: ${myTheme.screen.medium}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const StyledFooter = styled.footer`
    id: "#footer";
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    align-items: center;
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 225px;

    @media (max-width: ${myTheme.screen.medium}) {
        padding-bottom: 180px;
    }

    &::after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        bottom: 127px;
        z-index: -1;
        width: 100vw;
        height: 200vh;
        max-height: 535px;
        transform: translateY(50%);
        background-image: url(${Vector});
        background-repeat: no-repeat;
        background-size: 100%;

        @media (max-width: ${myTheme.screen.medium}) {
            right: 50%;
            left: 50%;
            bottom: 0;
            width: 150vw;
            max-height: 760px;
            height: 390px;
            transform: translate(-50%, 0);
            overflow: clip;
            background-size: cover;
        }
    }
`