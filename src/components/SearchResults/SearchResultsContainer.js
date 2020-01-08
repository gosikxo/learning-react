import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getSearchResults } from '../../redux/cardsRedux';
import { getSearchString, createActionChange } from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({
  cards: getSearchResults(state, getSearchString(state)),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createActionChange(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
