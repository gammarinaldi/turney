import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, Row, Col } from 'reactstrap';

const FeaturedEvents = (props) => {
  return (
    <div>
      <Row>
      <Col sm="4">
        <Card body>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle><a href="#">Maxx Coffee Barista Competition</a></CardTitle>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ color: '#ea7f1c' }}>IDR 100,000</span><br/>#BaristaCompetition<br/>
          <center><img src ="images/bookmark.png" alt="Save to wishlist" /> <a href="#">Wishlist</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src ="images/share.png" alt="Share" /> <a href="#">Share</a></center></CardText>
          <Button color="success">Register</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle><a href="#">Kicau Mania Competition</a></CardTitle>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ color: '#ea7f1c' }}>IDR 100,000</span><br/>#KicauMania<br/>
          <center><img src ="images/bookmark.png" alt="Save to wishlist" /> <a href="#">Wishlist</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src ="images/share.png" alt="Share" /> <a href="#">Share</a></center></CardText>
          <Button color="success">Register</Button>
        </Card>
      </Col>
      <Col sm="4">
      <Card body>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle><a href="#">TarQ Dance Tournament</a></CardTitle>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ color: '#ea7f1c' }}>IDR 100,000</span><br/>#DanceDance<br/>
          <center><img src ="images/bookmark.png" alt="Save to wishlist" /> <a href="#">Wishlist</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src ="images/share.png" alt="Share" /> <a href="#">Share</a></center></CardText>
          <Button color="success">Register</Button>
        </Card>
      </Col>
    </Row>
    <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
    <br/>
    <center><Button outline color="secondary">See more</Button>{' '}</center>
    </Col>
  </Row>
  </div>
  );
};

export default FeaturedEvents;