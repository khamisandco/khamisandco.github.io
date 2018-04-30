import React, { Component } from 'react';
import Navigation from './Navigation';
import '../App.css';
import {
    Container,
    Grid,
    Header,
    Image,
    Segment
} from 'semantic-ui-react';

/* Styles */

const Title = {
    color: '#33CCCC',
    fontFamily: 'Quicksand',
    fontWeight: '300',
    fontSize: '45px',
    textAlign: 'center',
    margin: '40px 0 40px 0'
};

const TextSection = {
    fontFamily: 'Quicksand',
    fontWeight: '300',
    fontSize: '24px',
    color: '#5F5F5F',
    padding: '0 175px 60px 175px',
    width: '100%'
};

class About extends Component {
    render() {
        return(
            <Segment style={{ padding: '0em' }}>
                <Navigation fixed={true} />
                <Grid.Row>
                    <div className="khamis"></div>
                </Grid.Row>
                <Grid.Row style={ Title }>
                    About Khamis + Co.
                </Grid.Row>
                <div style={ TextSection }>
                    The company is named after my grandfather, Khamis Aboelshour, (pictured in the center) who used to
                    bring people that didn't know each other to bond on trips to new places in Egypt. Planning
                    each trip was a familial occasion and everyone helped out. Khamis would go to the sites before the
                    trip in order to pick the best places based on his experience and his recommendation of what’s best
                    for his group. His trips were targeted to educators and their friends from all over Egypt and in
                    this sense they were like-minded educators. He planned three main trips each year to give the
                    attendees many experiences in different regions in all of Egypt. Khamis planned trips for over 50
                    years before he passed away.
                    <br/>
                    <div style={{ marginTop: '30px' }}>
                        <span style={{ color: '#33CCCC', marginTop: '30px' }}>Khamis + Co.</span> is an initiative to keep
                        his legacy alive and to give people a chance to go on trips the way he wanted trips to be. People
                        should have the chance to travel more while meeting new people that have the same interests as them.
                    </div>
                </div>
                <div>
                    <Image style={{ width: '100%' }} src={require('../images/funTeam.png')}/>
                </div>
            </Segment>
        );
    }
}

export default About;