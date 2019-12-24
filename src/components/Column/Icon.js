import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
    return <i className={`fas fa-${props.name}`}></i>;
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Icon;
