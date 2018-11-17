import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';
import Carousel from './components/Carousel';
import SideBar from './components/SideBar';
import LatestEvents from './components/LatestEvents';
import FeaturedEvents from './components/FeaturedEvents';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container>

        <Row>
          {/* HEADER */}
          <Col>
            <Header />
          </Col>
        </Row>
        <br />
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
          {/* SEARCH */}
          <Col><center><Search /></center></Col>
        </Row>
        <br/>
        <Row>
          {/* SIDEBAR */}
          <Col xs="3">
            <SideBar />
          </Col>

          <Col xs="1">
            &nbsp;&nbsp;&nbsp;&nbsp;
          </Col>

          {/* CONTENT */}
          <Col xs="8">
            <h3>Latest Events</h3>
            <LatestEvents />
            <br/>
            <h3>Featured Events</h3>
            <FeaturedEvents />
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
