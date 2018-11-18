import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
 CardSubtitle, Row, Col } from 'reactstrap';

const FeaturedEvents = (props) => {
  return (
    <div>
      <Row>
      <Col sm="4">
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle style={{ padding: '0 0 0 20px' }}><a href="#"><b style={{ fontSize: 'large' }}>Maxx Coffee Barista Competition</b></a></CardTitle>
          <CardSubtitle style={{ padding: '0 0 0 20px', color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ padding: '0 0 0 20px', color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ padding: '0 0 0 0', color: '#ea7f1c' }}>IDR 100,000</span><br/><a href="#">#BaristaCompetition</a><br/>
          <div align="right" style={{ padding: '0 20px 0 0' }}><img src ="images/bookmark.png" alt="Save to wishlist" /> <a href="#">Wishlist</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src ="images/share.png" alt="Share" /> <a href="#">Share</a></div></CardText>
          <Button style={{ margin: '0 10px 10px 10px' }} color="success">Register</Button>
        </Card>
      </Col>
      <Col sm="4">
      <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle style={{ padding: '0 0 0 20px' }}><a href="#"><b style={{ fontSize: 'large' }}>Kicau Mania Competition</b></a></CardTitle>
          <CardSubtitle style={{ padding: '0 0 0 20px', color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ padding: '0 0 0 20px', color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ padding: '0 0 0 0', color: '#ea7f1c' }}>IDR 100,000</span><br/><a href="#">#KicauMania</a><br/>
          <div align="right" style={{ padding: '0 20px 0 0' }}><img src ="images/bookmark.png" alt="Save to wishlist" /> <a href="#">Wishlist</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src ="images/share.png" alt="Share" /> <a href="#">Share</a></div></CardText>
          <Button style={{ margin: '0 10px 10px 10px' }} color="success">Register</Button>
        </Card>
      </Col>
      <Col sm="4">
      <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" /><br/>
          <CardTitle style={{ padding: '0 0 0 20px' }}><a href="#"><b style={{ fontSize: 'large' }}>TarQ Dance Tournament</b></a></CardTitle>
          <CardSubtitle style={{ padding: '0 0 0 20px', color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <CardText style={{ padding: '0 0 0 20px', color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan
          <br/><span style={{ padding: '0 0 0 0', color: '#ea7f1c' }}>IDR 100,000</span><br/><a href="#">#DanceDance</a><br/>
          <div align="right" style={{ padding: '0 20px 0 0' }}><img src ="images/bookmark.png" alt="Save to wishlist" /> <a href="#">Wishlist</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <img src ="images/share.png" alt="Share" /> <a href="#">Share</a></div></CardText>
          <Button style={{ margin: '0 10px 10px 10px' }} color="success">Register</Button>
        </Card>
      </Col>
    </Row>
  </div>
  );
};

export default FeaturedEvents;