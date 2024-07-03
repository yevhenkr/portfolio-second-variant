import './App.css';
import styled from 'styled-components';
import {Main} from "./common/components/layout/main/Main";


function App() {
    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;