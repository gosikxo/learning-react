import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const { title, image, description } = settings.info;

const Info = () => (
  <Container>
    <Hero titleText={title} backgroundImg={image}/>
    <p>{description}</p>
  </Container>
);


export default Info;