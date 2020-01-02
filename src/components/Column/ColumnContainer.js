import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

const mapStateToProps = (state, {id}) => ({
  cards: getCardsForColumn(state, id),
});

export default connect(mapStateToProps)(Column);
