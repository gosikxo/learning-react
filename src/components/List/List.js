import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  state = {
    columns: this.props.columns || [],
  }

  addColumn = (title) => {
    this.setState(previousState => {
      const newKey = previousState.columns.length ? previousState.columns[previousState.columns.length - 1].key + 1 : 0;
      return ({
        columns: [
          ...previousState.columns,
          {
            key: newKey,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      });
    }
    );
  }


  render() {
    return (
      <section className={styles.component}>
        <Hero backgroundImg={this.props.image} titleText={this.props.title} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {
            this.state.columns.map(
              ({ key, ...columnProps }) => (
                <Column key={key} {...columnProps} />
              )
            )
          }
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={this.addColumn} />
        </div>
      </section>
    );
  }
}

export default List;
