import {TitleSection} from "../../../ui/titleSections/TitleSection";
import {FlexWrapper} from "../../../ui/flexWrapper/FlexWrapper";
import {GithubIcon} from "../../../../../assets/icons/githubIcon";
import {InstagramIcon} from "../../../../../assets/icons/instagramIcon";
import {EmailIcon} from "../../../../../assets/icons/emailIcon";
import {PhoneIcon} from "../../../../../assets/icons/phoneIcon";
import {WaveIcon} from "../../../../../assets/icons/WaveIcon";

export const Footer = () => {
    return (
        <FlexWrapper flexDirection={"column"}>
            <TitleSection title={"Contact Me"}/>
            <FlexWrapper flexDirection={"row"}>
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
            </FlexWrapper>
            <WaveIcon style={{position: "absolute" }}/>
        </FlexWrapper>
    );
};
