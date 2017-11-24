import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import CardList from "./CardList";


class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailToAdd : ''
        }
        this.addLoginClicked = this.addLoginClicked.bind(this);
        this.deleteIconClicked = this.deleteIconClicked.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
    }

    deleteIconClicked = (value)=>{
        this.props.LoginCredentialRemoved(value);
    }
    
    addLoginClicked = ()=>{
        this.props.AddLoginCredential(this.state.emailToAdd);
    }
    emailChanged (event){
        const field = event.target.name;
        return this.setState({emailToAdd:event.target.value});
    }


    render() {
        return (
            <div className="form-group">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add Login Account" value={this.state.emailToAdd} onChange={this.emailChanged}/>
              
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button" onClick = {this.addLoginClicked}>Add</button>
                        </span>
                    </div>
                    <br/>
                    <CardList values={this.props.values} onClick = {this.deleteIconClicked}/>
            </div>
        )
    }
}

export default CardsContainer;