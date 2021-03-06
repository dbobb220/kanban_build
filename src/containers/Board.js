import Board from '../components/Board';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Board);