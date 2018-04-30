import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

class FooterNav extends Component {
    render() {
        return(
            <div style={{ background: '#DCDCDC', padding: '10px'}}>
                <Grid.Row>
                    <Header inverted as='h5' content='&copy; Khamis + Co. 2018' style={{ textAlign: 'center', fontFamily: 'Quicksand', fontWeight: '300', color: '#000' }} />
                </Grid.Row>
            </div>
        );
    }
}

export default FooterNav;