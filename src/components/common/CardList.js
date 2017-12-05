import React from 'react';
import PropTypes from 'prop-types';


class CardList extends React.Component{
    constructor(props){
        super(props);
    }

    removeClicked = (value) =>{
        console.log("remoce");
        this.props.onClick(value);
    }
    

    render(){
        const {values} = this.props;
        return (
            <div > 
                {values &&
                    <div>
                        
    
                        <ul className="list-group">
                            {values.map((value) => {
                                return (
                                <li key={value.LoginCredentialName} className="list-group-item">
                                    {values.length>1 && <span className="badge"  onClick = {()=>this.removeClicked(value)}>
                                        <span className="glyphicon glyphicon-remove"></span>
                                    </span>}
                                        {value.LoginCredentialName}
                                </li> )
                            })}
    
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

export default CardList;