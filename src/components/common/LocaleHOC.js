import React,{Component} from 'react';

import PropTypes from 'prop-types';

const LocaleHOC  = (WrappedComponent)=>{
    return class LocaleHOC extends Component{

        static contextTypes = {
            locale : PropTypes.object
        }

        componentDidMount(){
            this.context.locale.subscribe(()=> this.forceUpdate());
        }

        
        render(){
            const {locale} = this.context;
            return <WrappedComponent {...this.props} locale={locale}/>
        }
    }
}


export default LocaleHOC;