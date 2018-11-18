import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Trending from './components/Trending';
import Category from './components/Category';
import Info from './components/Info';
import Carousel from './components/Carousel';
import LatestEvents from './components/LatestEvents';
import FeaturedEvents from './components/FeaturedEvents';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container>

        <Row style={{ margin: '0px 0px 80px 0px' }}>
          {/* HEADER */}
          <Col>
            <Header />
          </Col>
        </Row>
        <br/>

        <Row>
          {/* INFO */}
          <Col>
            <Info />
          </Col>
        </Row>

        <Row>
          {/* CAROUSEL */}
          <Col><center><Carousel /></center></Col>
        </Row>
        <br/>

        <Row>
          {/* TRENDING */}
          <Col><center><Trending /></center></Col>
        </Row>

        <Row>
          {/* CATEGORY */}
          <Col><center><Category /></center></Col>
        </Row>
        <hr/>

        <Row>
          {/* CONTENT */}
          <Col>
            <h3>Featured Events</h3>
            <FeaturedEvents />
            <hr/>
            <h3>Latest Events</h3>
            <hr/>
            <LatestEvents />
          </Col>
        </Row>
        <br/>

        {/* FOOTER */}
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
