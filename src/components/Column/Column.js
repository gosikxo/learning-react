import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from './Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    icon: PropTypes.string.isRequired,
  }

  state = {
    cards: this.props.cards || [],
  }

  render() {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        {
          this.state.cards.map(({ key, ...props }) => (
            <Card key={key} {...props} />
          ))
        }
        <div>
          <Creator text={settings.cardCreatorText} action={this.addCard} />
        </div>
      </div>

    );
  }

  addCard = (title) => {
    this.setState(previousState => {
      const newKey = previousState.cards.length > 0 ? previousState.cards[previousState.cards.length - 1].key + 1 : 0;
      return ({
        cards: [
          ...previousState.cards,
          {
            key: newKey,
            title,
          },
        ],
      });
    });
  }
}

export default Column;
