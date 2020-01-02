import {connect} from 'react-redux';
import List from './List';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

const mapStateToProps = (state, {id}) => ({
  columns: getColumnsForList(state, id),
});

export default connect(mapStateToProps)(List);
