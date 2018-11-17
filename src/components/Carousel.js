import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'images/slide1.jpg',
    altText: 'Kratingdaeng E-Sports Championship',
    caption: '',
    header: ''
  },
  {
    src: 'images/slide2.jpg',
    altText: 'Color Run 2019',
    caption: '',
    header: ''
  },
  {
    src: 'images/slide3.jpg',
    altText: 'BINUS ASO Tamiya Competition',
    caption: '',
    header: ''
  }
];

const Karosel = () => <UncontrolledCarousel items={items} />;

export default Karosel;