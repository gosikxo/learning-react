import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    img: PropTypes.string.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero backgroundImg={this.props.img} titleText={this.props.title} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column category="Animals"></Column>
          <Column category="Plants"></Column>
          <Column category="Minerals"></Column>
        </div>
      </section>
    )
  }
}

export default List;
