import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { connect } from "react-redux";
import { getClaims } from "../../actions";
import { claimsSelector } from "../../selectors";


class ClaimsPage extends Component {

    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>


               {this.props.claims && <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Claim Type</th>
                            <th scope="col">Claim Type</th>
                            <th scope="col">Value</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.claims.map((claim)=>{
                        
                        if(claim.Type.indexOf('ms.it.oem') >= 0)
                                        
                        return(
                        
                        <tr  >
                            <td>Custom Claim</td>
                             <td>{claim.Type}</td>
                             <td>{claim.Value}</td>
                         </tr>)
                        else
                        return(
                            
                            <tr>
                                <td>Default Claim</td>
                                 <td>{claim.Type}</td>
                                 <td>{claim.Value}</td>
                             </tr>)
                        
                        
                        })}
                       

                    </tbody>
                </table>}



            </div>
        );
    }

}


const mapStateToProps = (state) => {
    var claims = claimsSelector(state);
    console.log(claims);
    if (claims) claims = claims.toJS();
    return {
        claims: claims
    }
};
// const mapDispatchToProps = (dispatch) => ({
//     getClaimsInfo(){
//         dispatch(getClaims(""));
//     }
// });
export default connect(mapStateToProps, null)(ClaimsPage);