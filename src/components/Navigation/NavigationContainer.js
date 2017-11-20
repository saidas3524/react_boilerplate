import { connect } from 'react-redux'
import {
    NavigationDisplay
} from './NavigationDisplay';


import {
    navigationSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    const navigationMenu = navigationSelector(state);
    if(navigationMenu != null)
    {
        console.log("mapStateToProps: nav selector called :" + navigationMenu.toJS());
    }    
    return navigationMenu ? {
        ...navigationMenu.toJS(),
        fetched:true,
        navigationMenu: navigationMenu.toJS()
    } : {
        fetched:false
    }
};
const mapDispatchToProps = (dispatch) => ({
    
});

export const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationDisplay);