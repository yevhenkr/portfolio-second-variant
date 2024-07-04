import './App.css';
import styled from 'styled-components';
import {Main} from "./common/components/layout/main/Main";
import {Passions} from "./common/components/layout/sections/passions/Passions";
import {Footer} from "./common/components/layout/sections/footer/Footer";
import {Header} from "./common/components/layout/sections/header/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main />
            <Passions/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;