import { TitleSection } from "../../../ui/titleSections/TitleSection";
import { FlexWrapper } from "../../../ui/flexWrapper/FlexWrapper";
import { GithubIcon } from "../../../../../assets/icons/githubIcon";
import { InstagramIcon } from "../../../../../assets/icons/instagramIcon";
import { EmailIcon } from "../../../../../assets/icons/emailIcon";
import { PhoneIcon } from "../../../../../assets/icons/phoneIcon";
import { WaveIcon } from "../../../../../assets/icons/WaveIcon";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FlexWrapper id={"footer"} flexDirection={"column"} max_width={"1628px"} width={"100%"}>
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
                <WaveBackground>
                <WaveIcon />
                </WaveBackground>
            </StyledDiv>
        </FlexWrapper>
    );
};

const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    max-width: 1070px;
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
