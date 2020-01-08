import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeSearchString: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  componentDidMount(){
    this.updateSearchString();
  }

  componentDidUpdate() {
    this.updateSearchString();
  }

  updateSearchString() {
    const newSearch = this.props.match.params.search; 
    this.props.changeSearchString(newSearch);
  }

  render() {
    const { cards } = this.props;
    return (
      <Container>
        <div className={styles.component}>
          <h3 className={styles.title}>{settings.search.results}</h3>
          {
            cards.map((props) => (
              <Card key={props.id} {...props} />
            ))
          }
        </div>
      </Container>
    );
  }
}

export default SearchResults;
