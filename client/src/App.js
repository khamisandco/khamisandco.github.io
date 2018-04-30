import React, { Component } from 'react';
import Routes from './Routes';
import FooterNav from './components/FooterNav';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes />
                <FooterNav />
            </div>
        );
    }
}

export default App;