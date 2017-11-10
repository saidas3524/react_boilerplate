import { connect } from 'react-redux'
import {
    NavigationDisplay
} from './NavigationDisplay';


const mapStateToProps = (state) => {
    return {
        
    }
};
const mapDispatchToProps = (dispatch) => ({
    
});

export const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationDisplay);