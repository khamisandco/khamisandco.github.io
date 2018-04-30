import React, { Component } from 'react';
import AOS from 'aos';
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

const Center = {
    textAlign: 'center'
};

const Turquoise = {
    color: '#33CCCC'
};

const TextSection = {
    fontFamily: 'Quicksand',
    fontWeight: '300',
    fontSize: '24px',
    color: '#5F5F5F',
    padding: '75px',
    width: '50%',
    height: '473px'
};

AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back'
});

/* Our Team Component */

class TeamPhotos extends Component {
    render() {
        return(
            <Segment style={{ padding: '0em' }}>
                <Navigation fixed={true} />
                <Grid.Row>
                    <div className="prlx"></div>
                </Grid.Row>
                <Grid.Row style={ Title }>
                    Our Team
                </Grid.Row>
                <div>
                    <Image className="team-image left margin-bot" data-aos="fade-right" src={require('../images/Raneem_Elsayed.jpg')}/>
                    <div className="left" style={ TextSection }>
                        <a href="https://www.linkedin.com/in/raneem-elsayed/" target="_blank" rel="noopener noreferrer">Raneem</a> is the Founder and CEO of Khamis + Co. She is a prominent student leader on and off
                        campus and is always giving back to the community. She loves to travel, volunteer, attend
                        conferences and meet new people. Raneem is an explorer and loves spontaneous adventures, she
                        prefers to live in the moment without knowing the final destination.
                    </div>
                </div>
                <div>
                    <div style={ TextSection }>
                        <a href="https://www.linkedin.com/in/virginiadeguzman/" target="_blank" rel="noopener noreferrer">Virginia</a> is the Chief Creative Officer of Khamis + Co. She is a freelance designer that also
                        loves to be involved with conferences and volunteer opportunities all over New York City. She
                        hoped to travel more in the future and is always up for a new adventure.
                    </div>
                    <Image className="team-image" data-aos="fade-right" src={require('../images/Virginia_DeGuzman.jpg')}/>
                </div>
                <div>
                    <Image className="team-image left margin-bot" data-aos="fade-right" src={require('../images/Laisa_Barros.jpg')}/>
                    <div className="left" style={ TextSection }>
                        <a href="https://www.linkedin.com/in/laisa-barros/" target="_blank" rel="noopener noreferrer">Laisa</a> is the Chief Technology Officer of Khamis + Co. She has experience in web and mobile
                        development as well as user experience research and graphic design. She enjoys exploring new
                        places and trying different food from different cultures.
                    </div>
                    <div style={ TextSection }>
                        <a href="https://www.linkedin.com/in/renee-elise-piana/" target="_blank" rel="noopener noreferrer">Renee-Elise</a> is the Chief Marketing Officer of Khamis + Co. She's always up and about,
                        balancing both her academic and professional commitments. When she does have free time, she
                        loves trying new activities with her friends, reading, and planning for her next trip. Renee
                        knows daydreaming can only go so far, so she lives every day to the fullest.
                    </div>
                </div>
                <div>
                    <Image className="team-image left" data-aos="fade-right" src={require('../images/Renee-Elise.jpg')}/>
                </div>
                <div>
                    <Image className="team-image left" data-aos="fade-right" src={require('../images/Hanane_Sobhi.jpg')}/>
                    <div className="left" style={ TextSection }>
                        <a href="https://www.linkedin.com/in/hanane-sobhi/" target="_blank" rel="noopener noreferrer">Hanane</a> is the Chief Financial Officer of Khamis + Co. She was born in the heart of Casablanca
                        in Morocco. She has lived in Ohio, Washington D.C., and now she lives in the great NYC. She
                        loves to travel and meet new people. She is looking forward to traveling more and experiencing
                        new cultures.
                    </div>
                </div>
            </Segment>
        );
    }
}

export default TeamPhotos;