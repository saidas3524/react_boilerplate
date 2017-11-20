import React, { Component } from 'react';

class NoAccessToResource extends React.Component {
    
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state
      
      if (redirectToReferrer) {
        return (
          <Redirect to={from}/>
        )
      }
      
      return (
        <div>
          <p>You do not access to given page {from.pathname}</p>
        </div>
      )
    }
  }

  export default NoAccessToResource;