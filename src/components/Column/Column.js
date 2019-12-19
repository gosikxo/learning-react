import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        category: PropTypes.string.isRequired,
    }
    render() {
        return (
            <div className={styles.component}>
                <h3 className={styles.title}>{this.props.category}</h3>
            </div>
        )
    }
}

export default Column;
