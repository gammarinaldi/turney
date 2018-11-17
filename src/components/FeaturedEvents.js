import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const FeaturedEvents = (props) => {
  return (
    <CardDeck>
      <Card style={{ backgroundColor: '#fff098', borderColor: '#fff098' }}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
            <CardTitle>Maxx Coffee Barista Competition</CardTitle>
          <br/>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <br/>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> JCC, Jakarta Selatan<br/><br/>#BaristaCompetition</CardText>
          <Button color="success">Register</Button>
        </CardBody>
      </Card>
      <Card style={{ backgroundColor: '#fff098', borderColor: '#fff098' }}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kicau Mania Competition</CardTitle>
          <br/>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SUN, NOV 18</CardSubtitle>
          <br/>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> Alun-Alun, Tangerang Selatan<br/><br/>#LombaBurung</CardText>
          <Button color="success">Register</Button>
        </CardBody>
      </Card>
      <Card style={{ backgroundColor: '#fff098', borderColor: '#fff098' }}>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>TarQ Dance Tournament</CardTitle>
          <br/>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <br/>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> SMA Tarakanita 1, Jakarta Selatan<br/><br/>#DanceTournament</CardText>
          <Button color="success">Register</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default FeaturedEvents;