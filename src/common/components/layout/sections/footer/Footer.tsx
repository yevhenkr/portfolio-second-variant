import { TitleSection } from "../../../ui/titleSections/TitleSection";
import { FlexWrapper } from "../../../ui/flexWrapper/FlexWrapper";
import { GithubIcon } from "../../../../../assets/icons/githubIcon";
import { InstagramIcon } from "../../../../../assets/icons/instagramIcon";
import { EmailIcon } from "../../../../../assets/icons/emailIcon";
import { PhoneIcon } from "../../../../../assets/icons/phoneIcon";
import { WaveIcon } from "../../../../../assets/icons/WaveIcon";
import  Vector  from "../../../../../assets/img/VectorWave.png";
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter >
            <TitleSection wordOne={"Contact"} wordSecond={"Me"}/>
            <StyledDiv>
                <FlexWrapper flexDirection={"column"}>
                    <GithubIcon />
                    <span>Github</span>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <InstagramIcon/>
                    <span>Instagram</span>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <EmailIcon/>
                    <span>Email</span>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <PhoneIcon/>
                    <span>Phone</span>
                </FlexWrapper>
                {/*<WaveBackground>*/}
                {/*<WaveIcon />*/}
                {/*</WaveBackground>*/}
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
    margin: 0 136px;
    max-width: 1628px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

const WaveBackground = styled.div`
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100vh;
    max-width: 1920px;
    z-index: -1;

    svg {
        width: 100%;
        //height: 100%;
    }
`;
