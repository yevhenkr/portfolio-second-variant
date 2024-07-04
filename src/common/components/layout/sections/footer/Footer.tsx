import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {GithubIcon} from "../../../../../assets/icons/githubIcon";
import {InstagramIcon} from "../../../../../assets/icons/instagramIcon";
import {EmailIcon} from "../../../../../assets/icons/emailIcon";
import {PhoneIcon} from "../../../../../assets/icons/phoneIcon";
import {WaveIcon} from "../../../../../assets/icons/WaveIcon";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FlexWrapper id={"footer"} flexDirection={"column"}>
            <TitleSection title={"Contact Me"}/>
            <StyledDiv >
                <FlexWrapper flexDirection={"column"}>
                    <GithubIcon/>
                    <TitleSection title={"Github"}/>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <InstagramIcon/>
                    <TitleSection title={"Github"}/>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <EmailIcon/>
                    <TitleSection title={"Github"}/>
                </FlexWrapper>
                <FlexWrapper flexDirection={"column"}>
                    <PhoneIcon/>
                    <TitleSection title={"Github"}/>
                </FlexWrapper>
            </StyledDiv >
            <WaveIcon style={{position: "absolute", bottom: "0", width:"100%", height:"350px", left:"0px", right:"0px", backgroundRepeat: "no-repeat", backgroundSize: "100%"}}/>
        </FlexWrapper>
    );
};

const StyledDiv = styled.div`
    display: flex;
flex-direction: row;
    justify-content: center;
    //position: relative;
    //:before{
    //    position: absolute;
    //    width: 100%;
    //    height: 100px;
    //    content: '';
    //    background-image: url("../../../../../assets/icons/WavePng.png");
    //}
`