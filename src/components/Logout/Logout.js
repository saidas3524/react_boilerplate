import React, { Component } from 'react';
import MSAL_Wrapper from "../../api/msal_wrapper"
class Logout extends React.Component {
    
    componentWillMount()
    {
        MSAL_Wrapper.logout();
    }

    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
           
      return (
        <div>
          <p>You do being logging out {from.pathname}</p>
        </div>
      )
    }
  }

  export default Logout;