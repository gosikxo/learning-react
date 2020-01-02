import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';

const mapStateToProps = (state, {id}) => ({
  columns: getColumnsForList(state, id),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
