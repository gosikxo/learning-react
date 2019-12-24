import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

function Card(props) {
    return <div className={styles.component}>{props.title}</div>
}

Card.propTypes = {
    title: PropTypes.string.isRequired
}

export default Card;
