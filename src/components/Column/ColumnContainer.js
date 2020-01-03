import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux';
import {
  getSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state, {id}) => ({
  cards: getCardsForColumn(state, id, getSearchString(state)),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
