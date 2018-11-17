import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const LatestEvents = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Telkomsel Mobile Legends Tournament</CardTitle>
          <br/>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <br/>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> Tebet, Jakarta Selatan<br/><br/>#MobileLegends</CardText>
          <Button color="success">Register</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Razer Dota 2 Tournament</CardTitle>
          <br/>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <br/>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> ICE BSD, Kab. Tangerang<br/><br/>#Dota2</CardText>
          <Button color="success">Register</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kratingdaeng RUN 2019</CardTitle>
          <br/>
          <CardSubtitle style={{ color: '#666666' }}><img src ="images/calendar.png" alt="Calendar" /> SAT, NOV 17</CardSubtitle>
          <br/>
          <CardText style={{ color: '#898989' }}><img src ="images/location.png" alt="Location" /> Bundaran HI, Jakarta Pusat<br/><br/>#Run</CardText>
          <Button color="success">Register</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default LatestEvents;