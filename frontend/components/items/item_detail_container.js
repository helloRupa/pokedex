import { connect } from 'react-redux';
import { selectItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state, parseInt(ownProps.match.params.itemId)),
});

export default connect(mapStateToProps)(ItemDetail);