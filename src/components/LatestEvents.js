import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
 CardSubtitle, Row, Col } from 'reactstrap';

const LatestEvents = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle><a href="#">Telkomsel Mobile Legends Tour...</a></CardTitle>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ color: '#ea7f1c' }}>IDR 100,000</span><br/>#MobileLegends</CardText>
          <Button color="success">Register</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle><a href="#">Razer Dota 2 Tournament</a></CardTitle>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ color: '#ea7f1c' }}>IDR 100,000</span><br/>#Dota2</CardText>
          <Button color="success">Register</Button>
        </Card>
      </Col>
      <Col sm="4">
      <Card body>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle><a href="#">Kratingdaeng RUN 2019</a></CardTitle>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ color: '#ea7f1c' }}>IDR 100,000</span><br/>#RUN</CardText>
          <Button color="success">Register</Button>
        </Card>
      </Col>
      
    </Row>
  );
};

export default LatestEvents;