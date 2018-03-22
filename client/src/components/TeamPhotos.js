import React, { Component } from 'react';
import {
    Container,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

/* Styles */

const Title = {
    color: '#33CCCC',
    fontSize: '30px',
    marginBottom: '30px'
};

const Center = {
    textAlign: 'center'
};

const Turquoise = {
    color: '#33CCCC'
};

const LightFont = {
    fontFamily: 'Quicksand',
    fontWeight: '300'
};

/* Our Team Component */

class TeamPhotos extends Component {
    render() {
        return(
            <Segment style={{ padding: '2.5em 0em' }} vertical>
                <Container text>
                    <Grid>
                        <Grid.Row style={ Center }>
                            <Grid.Row style={ Center }>
                                <Header as='h1' content='Our Team' style={ Title }/>
                            </Grid.Row>
                            <Grid.Column width={3} style={ Center }>
                                <Image className="team-image" src={require('../images/virginia.jpg')}/>
                                <Header as='h2' content='Virginia deGuzman' style={ Turquoise }/>
                                <Header as='h3' content='Chief Creative Officer' style={ LightFont }/>
                            </Grid.Column>
                            <Grid.Column width={3} style={ Center }>
                                <Image className="team-image" src={require('../images/raneem.jpg')}/>
                                <Header as='h2' content='Raneem Elsayed' style={ Turquoise }/>
                                <Header as='h3' content='Founder & CEO' style={ LightFont }/>
                            </Grid.Column>
                            <Grid.Column width={3} style={ Center }>
                                <Image className="team-image" src={require('../images/laisa.png')}/>
                                <Header as='h2' content='Laisa Barros' style={ Turquoise }/>
                                <Header as='h3' content='Chief Technology Officer' style={ LightFont }/>
                            </Grid.Column>
                            <Grid.Column width={3} style={ Center }>
                                <Image className="team-image" src={require('../images/ebony.jpg')}/>
                                <Header as='h2' content='Ebony Anderson-Brown' style={ Turquoise }/>
                                <Header as='h3' content='Chief Marketing Officer' style={ LightFont }/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default TeamPhotos;