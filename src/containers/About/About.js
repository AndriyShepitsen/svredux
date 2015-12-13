import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import config from '../../config';
import {Grid, Row, Col, Button} from 'react-bootstrap';

export default class About extends Component {

    state = {
      showKitten: false
    }


    render() {
      return (
            <div className="container">
                <h1>About Us</h1>
                <DocumentMeta title={config.app.title + ': About Us'}/>
                <Button bsStyle="info">Info</Button>

                <Grid>
                    <Row>
                        <Col xs={6} md={3}>
                            <Button bsStyle="info">Info</Button>
                        </Col>
                        <Col xs={6} md={3}>
                            <Button bsStyle="info">Info</Button>
                        </Col>
                        <Col xs={6} md={3}>
                            <Button bsStyle="info">Info</Button>
                        </Col>
                    </Row>
                </Grid>


            </div>
        );
    }
}
