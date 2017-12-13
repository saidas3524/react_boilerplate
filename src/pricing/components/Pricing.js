import Loadable from 'react-loadable';
import React, { Component } from 'react';
import NoAccessToResource from '../../components/Exceptions/NoAccessToResource'
import {
  BrowserRouter as Router,
  Route,
  Switch ,
  Link
} from 'react-router-dom'

const CreatePricing = Loadable({
  loader: () => import('./CreatePricing'),
  loading() {
    return <div>Loading...</div>
  }
});

class Pricing extends React.Component {
  render() {
    console.log("Pricing component Invoked");
    const { match } = this.props;
    console.log(match);
    return (
       <div>
        <Route path="/Pricing/CreatePricingRule/" exact component={CreatePricing} />
        <Route path="/Pricing/"  strict  component={NoAccessToResource} />
      </div>
    );
  }
}

export default Pricing;