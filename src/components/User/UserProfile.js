import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from "../common/TextInput";
import Avatar from '../common/Avatar'; 
import UserReadOnlyProfile from '../User/UserReadOnlyProfile';
import {TrackedComponent,ReactAI} from '../../AppInsights';



class UserProfile extends TrackedComponent {


    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                name: "Sai Krishna",
                lastName: "Dasoju",
                contactEmail: "saidaso@microsoft.com"

            }
        };


    }

    textChanged = () =>{

    }

    render() {
        const { user } = this.state;
        
        return (
            <div>
                <br />
                <br />
                <br />
                {/* <div className="row row-eq-height">
                <form style={{ width:'100%'}}>
                    <div style={{backgroundColor: "#f2f2f2"}} className=" col-xs-12 col-sm-4">
                        <UserReadOnlyProfile user={user}/>
                    </div>
                    <div className=" col-xs-12 col-sm-8">
                        <h4>Settings</h4>
                        <TextInput readonly={false} name="Name" label="Name" value={user.name} />
                        <TextInput readonly={true} name="LastName" label="Last Name" value={user.lastName} />
                        <TextInput readonly={true} name="ContactEmail" label="Contact Email" value={user.contactEmail} />
                    </div>
                </form>


            </div> */}
                <form style={{ width: '100%', paddingBottom: "15px" }}>
                    <div style={{ backgroundColor: "#f2f2f2", marginBottom: "15px", paddingBottom: "15px" }} className="col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-offset-3  col-sm-6 col-xs-12">
                        <div style={{ margin: "20px" }}>
                            <UserReadOnlyProfile user={user} />
                            <br />
                            <h4>Settings</h4>
                            <hr />
                          
                            <TextInput readonly={false} onChange={this.textChanged} name="Name" label="Name" value={user.name} />
                            <TextInput readonly={true} onChange={this.textChanged} name="LastName" label="Last Name" value={user.lastName} />
                            <TextInput readonly={true} onChange={this.textChanged} name="ContactEmail" label="Contact Email" value={user.contactEmail} />
                            {/* <div className="btn-group" style={{ float: "right" }}>
                                <button style={{ float: "right" }} type="submit" class="btn btn-primary btn-default">Save Changes</button>
                                <button style={{ float: "right" }} type="button" class="btn btn-primary btn-default">Discard Changes</button>
                            </div> */}
                            <hr />
                            <div className="span2">
                                <p><button className="btn btn-primary btn-block">Save</button></p>
                                <p><button className="btn btn-primary btn-block">Discard Changes</button></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserProfile;

