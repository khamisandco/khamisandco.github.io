import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                </Switch>
            </main>
        );
    }
}