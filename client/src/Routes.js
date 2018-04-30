import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import TeamPhotos from './components/TeamPhotos';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path="/our-team" component={ TeamPhotos }/>
                    <Route path="/about" component={ About }/>
                </Switch>
            </main>
        );
    }
}

export default Routes;