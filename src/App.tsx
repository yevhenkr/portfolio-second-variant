import styled from 'styled-components';
import {Main} from "./common/components/layout/sections/main/Main";
import {Passions} from "./common/components/layout/sections/passions/Passions";
import {Footer} from "./common/components/layout/sections/footer/Footer";
import {Header} from "./common/components/layout/sections/header/Header";
import {Portfolio} from "./common/components/layout/sections/portfolio/Portfolio";
import {myTheme} from "./styles/Theme.styled";
import {Partickl} from "./common/components/ui/part/partickl";

function App() {
    return (
        <AppStyle>
            <Partickl/>
            <Header/>
            <Main/>
            <Passions/>
            <Portfolio/>
            <Footer/>
        </AppStyle>
    );
}

export default App;

const AppStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Poppins, sans-serif;
    font-weight: ${myTheme.font.weights.regular};
    font-size: 35px;
    color: ${myTheme.color.navy};
    
    @media (max-width:${myTheme.screen.medium}) {
        max-width: 768px;
        width: 100%;
    }
`;