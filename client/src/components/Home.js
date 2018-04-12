import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import TeamPhotos from './TeamPhotos';

import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Input,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
    <div>
        <Image src={require('../images/homepage_image.png')}/>
    </div>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

/* Styles */

const WhiteFont = {
    fontFamily: 'Quicksand',
    fontSize: '24px',
    color: '#FFF'
};

const LightFont = {
    fontFamily: 'Quicksand',
    fontWeight: '300'
};

class DesktopContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Navigation fixed={fixed}/>
                    <HomepageHeading />
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

class MobileContainer extends Component {
    state = {};

    handlePusherClick = () => {
        const { sidebarOpened } = this.state;

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    };

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar as={ Menu } animation='uncover' inverted vertical visible={ sidebarOpened }>
                        <Menu.Item as='a'>About</Menu.Item>
                        <Menu.Item as='a'>Our Team</Menu.Item>
                        <Menu.Item as='a'>Sign Up</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={ sidebarOpened } onClick={ this.handlePusherClick } style={{ minHeight: '100vh' }}>
                        <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={ this.handleToggle }>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

const Home = () => (
    <ResponsiveContainer>
        <div style={{ background: '#FFF', padding: '50px 20%' }}>
            <Grid.Row style={{ textAlign: 'center' }}>
                <Header as='h1' content='Want to be one of the first to know?' style={{ color: '#33CCCC', fontFamily: 'Quicksand', fontSize: '40px' }}/>
                <Header as='h1' content='Sign up for our mailing list!' style={ LightFont }/>
                    <div>
                        <form action="https://khamisandco.us12.list-manage.com/subscribe/post?u=5a021cfaabc5c04ccd476451a&amp;id=32860af1ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div>

                                <Input type="email" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required/>
                                    {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
                                    <div style={{ position: 'absolute', left: '-5000px' }}><input type="text" name="b_5a021cfaabc5c04ccd476451a_32860af1ef" tabindex="-1" value=""/></div>
                                    <Button id='subscribe'>Subscribe</Button>
                            </div>
                        </form>
                    </div>
            </Grid.Row>
        </div>
        <div style={{ background: '#33CCCC', padding: '50px 20%' }}>
            <Grid.Row style={{ textAlign: 'center' }}>
                <List style={ WhiteFont }>
                    <List.Item>1. Take our travel habit test <Icon name='pencil'/></List.Item>
                    <List.Item>2. Get results based on your personality <Icon name='bar graph'/></List.Item>
                    <List.Item>3. Book your trip, invite a friend if you want <Icon name='users'/></List.Item>
                    <List.Item>4. Enjoy your Khamis + Co. trip! <Icon name='checkmark'/></List.Item>
                </List>
            </Grid.Row>
        </div>

        <TeamPhotos/>

        <Grid.Row>
            <div className="parallax"></div>
        </Grid.Row>

        <div style={{ padding: '100px 20%' }}>
            <Grid.Row style={{ textAlign: 'center' }}>
                <Header as='h1' content='Questions? Email us for additional information' style={{ color: '#33CCCC', fontFamily: 'Quicksand', fontWeight: '300', fontSize: '30px' }}/>
                <Header as='h1' content='khamisco@zahncenternyc.com' style={{ color: '#33CCCC', fontFamily: 'Quicksand', fontSize: '20px', marginTop: '-10px' }}/>
            </Grid.Row>
        </div>

        <div style={{ background: '#DCDCDC', padding: '10px'}}>
            <Grid.Row>
                <Header inverted as='h5' content='&copy; Khamis + Co. 2018' style={{ textAlign: 'center', fontFamily: 'Quicksand', fontWeight: '300', color: '#000' }} />
            </Grid.Row>
        </div>
    </ResponsiveContainer>
);

export default Home;