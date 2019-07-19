import { connect } from 'react-redux';
import { selectItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';
import { deleteItem } from '../../actions/items_actions';

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state, parseInt(ownProps.match.params.itemId)),
  errors: state.ui.errors,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);