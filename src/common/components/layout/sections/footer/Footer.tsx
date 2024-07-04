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
        <FlexWrapper id={"footer"} flexDirection={"column"}>
            <TitleSection title={"Contact Me"} />
            <StyledDiv>
                <FlexWrapper flexDirection={"column"}>
                    <GithubIcon />
                    <TitleSection title={"Github"} />
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <InstagramIcon />
                    <TitleSection title={"Instagram"} />
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <EmailIcon />
                    <TitleSection title={"Email"} />
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <PhoneIcon />
                    <TitleSection title={"Phone"} />
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
    //height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`;

const WaveBackground = styled.div`
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    z-index: -1;

    svg {
        width: 100%;
        //height: 100%;
    }
`;
