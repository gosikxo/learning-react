import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const { title, image, questions } = settings.faq;

const FAQ = () => (
  <Container>
    <Hero titleText={title} backgroundImg={image} />
    {questions.map(({ question, answer }) =>
      <div key="question">
        <h3>{question}</h3><p >{answer}</p>
      </div>
    )}
  </Container>
);


export default FAQ;