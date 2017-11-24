import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "../common/TextInput";

const UserReadOnlyProfile = ({ user }) => {
    return (
        <div >
            <div className="profileCircle center-block">
                <div>
                    <span className="glyphicon glyphicon-user" aria-hidden="false" style={{ fontSize: '50px' }}></span>

                    {/* <p>{user.name}</p> */}
                </div>
            </div>
            <h4>Personal Info</h4>
            <hr />

            <div>
                <TextInput readonly={true} name="Name" label="Name" value={user.FirstName} />
                <TextInput readonly={true} name="LastName" label="Last Name" value={user.LastName} />
                <TextInput readonly={true} name="ContactEmail" label="Contact Email" value={user.ContactEmail} />
            </div>
        </div>
    );
};

UserReadOnlyProfile.propTypes = {

};

export default UserReadOnlyProfile;

