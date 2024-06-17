import React from 'react';
import './Main.css';
import MainContainer from '../MainContainer/MainContainer';

const Main: React.FC = () => {
    return (
        <main className="main">
            <MainContainer>
                <div>Child Component 1</div>
                <div>Child Component 2</div>
                {/* Можно добавлять другие компоненты */}
            </MainContainer>
        </main>
    );
};

export default Main;