import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import CardList from "./CardList";
import { createValidator } from "../../utility/createValidator";


class CardsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailToAdd: '',
            isvalidemail: true,
            errormessage: ''

        }
        this.addLoginClicked = this.addLoginClicked.bind(this);
        this.deleteIconClicked = this.deleteIconClicked.bind(this);
        this.emailChanged = this.emailChanged.bind(this);
        
    }

   


    deleteIconClicked = (value) => {

        console.log(this.props.value);

        this.props.LoginCredentialRemoved(value);
    }

    addLoginClicked = () => {

        console.log('this is prop contains',  this.props);

        console.log('this is prop values',  this.props.values);

        const validator = createValidator('email');

        const valid = validator.test(this.state.emailToAdd);

        var alreadyexists= false;

        if (valid)
        { 
            console.log('this is prop values before loop',  this.props.values);

            var obj=   this.props.values.some(item => this.state.emailToAdd.toUpperCase() === item.LoginCredentialName.toUpperCase());

            console.info('the comparision result is ',obj);

                      
            if(!obj)
            { 
                this.props.AddLoginCredential(this.state.emailToAdd);

                this.props.setValidStatus();

                this.setState({emailToAdd :''});
            }
            else
            {

                this.props.setInvalidStatus();

                this.setState({ isvalidemail: false, errormessage:"There is already one user associated with this realm" });
                
              
            }
        }
        else 
        
        {

            this.props.setInvalidStatus();
            this.setState({ isvalidemail: false, errormessage: validator.report(this.state.emailToAdd) });
            
        }


    }
    emailChanged(event) {
        const field = event.target.name;
              
            if(event.target.value != '')
            this.props.setInvalidStatus();
            else
            this.props.setValidStatus();
       

        return this.setState({ emailToAdd: event.target.value, isvalidemail: true, errormessage: '' });
    }


    render() {
        return (
            <div className="form-group">
                {this.props.values.length < 3 && <div className="input-group">
                    <input type="text" className="form-control has-danger" placeholder="Add Login Account" value={this.state.emailToAdd} onChange={this.emailChanged} />


                    <span className="input-group-btn">
                        <button className="btn btn-secondary" disabled={this.state.emailToAdd === ''} type="button" onClick={this.addLoginClicked}   >Add</button>
                    </span>

                </div>}

                {this.props.values.length >= 3 && <div>
                    <input type="text" className="form-control has-danger" placeholder="Add Login Account" value={this.state.emailToAdd} onChange={this.emailChanged} />
                </div>
                }
                {this.state.isvalidemail == false &&
                    <div class="invalid-feedback" >
                        {this.state.errormessage}
                    </div>

                }
                <br />
                <CardList values={this.props.values} onClick={this.deleteIconClicked} />
            </div>
        )
    }
}

export default CardsContainer;