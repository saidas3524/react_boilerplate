import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from "../common/TextInput";
import Alert from "../common/Alert";
import Avatar from '../common/Avatar';
import UserReadOnlyProfile from '../User/UserReadOnlyProfile';
import { TrackedComponent, ReactAI } from '../../AppInsights';

import { getCurrentUserInfo,updateUser,saveUserProfile,setSaveUserProfileStatus,DIRTY,INVALID,setSaveUserProfileMessage,saveProfileMessage,VALID,setSaveUserProfileVAlidationStatus } from '../../actions';
import { connect } from 'react-redux';
import { currentUserSelector,saveUserProfileStatusSelector,saveUserProfileMessageSelector,saveUserProfileValidationStatusSelector } from "../../selectors";
import SelectInput from "../common/SelectInput";
import CardsContainer from "../common/CardsContainer";



class UserProfile extends TrackedComponent {


    constructor(props, context) {
        super(props, context);
        this.CountryChanged = this.CountryChanged.bind(this);
        this.LanguageChanged = this.LanguageChanged.bind(this);
        this.TimeZoneChanged = this.TimeZoneChanged.bind(this);
        this.DateFormatChanged = this.DateFormatChanged.bind(this);

    }


    componentWillMount() {
        super.componentWillMount();
        this.props.getCurrentUserInfo();
    }

    findWithAttr = (array, attr, value)=> {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    setFormDirty = ()=>{
        this.props.setDirtyStatus();
        this.props.setSaveProfileMessage('');
    }

    setInvalidStatus= () =>
    {
        this.props.setValidationStatus(INVALID);
    }

    setValidStatus= () =>
    {
        this.props.setValidationStatus(VALID);
    }


    CountryChanged (event){
        this.setFormDirty();
        var selectedCountry = this.props.userTotalInfo.user.Countries.filter(function (country) {
            return country.CountryId == event.target.value;
        })[0];
        this.props.userTotalInfo.user.CurrentCountry = selectedCountry;
        this.props.updateUserInfo(this.props.userTotalInfo);
    }


    LanguageChanged (event){
        this.setFormDirty();
        var selectedLanguage = this.props.userTotalInfo.user.Languages.filter(function (language) {
            return language.LanguageId == event.target.value;
        })[0];
        this.props.userTotalInfo.user.CurrentLanguage = selectedLanguage;
        this.props.updateUserInfo(this.props.userTotalInfo);
    }


    TimeZoneChanged (event){

        this.setFormDirty();
        var selectedTimeZone = this.props.userTotalInfo.user.TimeZones.filter(function (timeZone) {
            return timeZone.TimeZoneId == event.target.value;
        })[0];
        this.props.userTotalInfo.user.CurrentTimeZone = selectedTimeZone;
        this.props.updateUserInfo(this.props.userTotalInfo);
    }


    DateFormatChanged (event){
        this.setFormDirty();
        var selectedDateFormat = this.props.userTotalInfo.user.DateFormats.filter(function (dateFormat) {
            return dateFormat.DateFormatId == event.target.value;
        })[0];
        this.props.userTotalInfo.user.CurrentDateFormat = selectedDateFormat;
        this.props.updateUserInfo(this.props.userTotalInfo);
    }


    LoginCredentialRemoved = (value)=>{
        this.setFormDirty();
        var index = this.findWithAttr(this.props.userTotalInfo.user.CurrentLoginAccounts,'LoginCredentialId',value.LoginCredentialId)
        this.props.userTotalInfo.user.CurrentLoginAccounts.splice(index,1);
        this.props.updateUserInfo(this.props.userTotalInfo);
    }


    getLoginCredentialWithContactEmail = (email)=>{
        var realmToAdd;
        var credentialTypeToAdd;
        this.props.userTotalInfo.user.Realms.forEach(function(realm) {
            var realm = realm.LoginCredentialTypes.forEach(function(type) {
                if(type.LoginCredentialTypeName == "Live"){
                  realmToAdd = realm;
                  credentialTypeToAdd = type;
                  return;
                }
            }, this);
        }, this);
        return {
                Realm : realmToAdd,
                LoginCredentialType:credentialTypeToAdd,
                LoginCredentialName: email,
                AADLoginCredentialName: email,
        }
    }


    AddLoginCredential = (contactEmail)=>{
        this.setFormDirty();
        var value = this.getLoginCredentialWithContactEmail(contactEmail);
        this.props.userTotalInfo.user.CurrentLoginAccounts.push(value);
        this.props.updateUserInfo(this.props.userTotalInfo);
    }


    SaveProfile = (event)=>{

        console.log("this is save user", this.props.userTotalInfo.user);

        event.preventDefault();
        
        // if(this.props.userTotalInfo.user.CurrentLoginAccounts.length>0)
        this.props.SaveProfile(this.props.userTotalInfo);
        // else
        // {
        //    this.props.setInvalidStatus();
        //    this.props.setSaveProfileMessage("There is no logincredential");
        //    console.info(this.props);
        // }

    }

    render() {
        const { props } = this;
        const { userProfile } = props;

        console.info('this is state in props',props);

        console.info('this is state in props',this.props.status);

        return (

            <div>
                {this.props.fetched && <div>
                    <br />
                    <br />
                    <br />

                    <form style={{ width: '100%', paddingBottom: "15px" }}>
                        <div style={{ backgroundColor: "#f2f2f2", marginBottom: "15px", paddingBottom: "15px" }} className="col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-sm-offset-3  col-sm-6 col-xs-12">
                            <div style={{ margin: "20px" }}>
                                <UserReadOnlyProfile user={userProfile} />
                                <br />
                                <h4>Settings</h4>
                                <hr />
                                <SelectInput options={props.countries} value={userProfile.Country.CountryId} name="countries" label="Country" onChange = {this.CountryChanged} />
                                <SelectInput options={props.languages} value={userProfile.Language.LanguageId} name="languages" label="Language" onChange = {this.LanguageChanged} />
                                <SelectInput options={props.timezones} value={userProfile.TimeZone.TimeZoneId} name="timezones" label="Time Zone" onChange = {this.TimeZoneChanged} />
                                <SelectInput options={props.dateFormats} value={userProfile.DateFormat.DateFormatId} name="dateFormats" label="Date Format" onChange={this.DateFormatChanged} />
                                <hr />
                                <div className="foo">
                                    <div style={{padding:"15px"}}>
                                    <label>Login Accounts</label>
                                    
                                    <CardsContainer values={userProfile.LoginCredentials} AddLoginCredential = {this.AddLoginCredential} LoginCredentialRemoved = {this.LoginCredentialRemoved}  setValidStatus={this.setValidStatus} setInvalidStatus ={this.setInvalidStatus} />
                                    
                                    </div>
                                </div>
                                <br/>
                                <div className="span2">
                                    <p><button className="btn btn-primary btn-block" disabled={ this.props.validationstatus == INVALID  }  onClick = {this.SaveProfile}>Save</button></p>
                                    {/* <p><button className="btn btn-primary btn-block">Discard Changes</button></p> */}
                                </div>
                                {this.props.status && this.props.status!=DIRTY && <Alert status ={this.props.status} message = {this.props.message}/>}
                            </div>
                        </div>
                    </form></div>}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    getCurrentUserInfo() {
        dispatch(getCurrentUserInfo('test'));
    },
    updateUserInfo(value){
        dispatch(updateUser(value))
    },
    SaveProfile(value){
        dispatch(saveUserProfile(value));
    },
    setDirtyStatus(){
        dispatch(setSaveUserProfileStatus(DIRTY))
    },
    setValidationStatus(value){
        dispatch(setSaveUserProfileVAlidationStatus(value))
    },
    setSaveProfileMessage(value){
        dispatch(setSaveUserProfileMessage(value))
    }
});


const mapStateToProps = (state) => {
    var userTotalInfo = currentUserSelector(state);
    var status = saveUserProfileStatusSelector(state);

    var message = saveUserProfileMessageSelector(state);

    var validationstatus = saveUserProfileValidationStatusSelector(state);

    console.info("this is validationstatus",validationstatus);

    console.info("this is state in state to props",state);

    if (userTotalInfo) {
        userTotalInfo = userTotalInfo.toJS();
        var user = userTotalInfo.user;
        var countries = [];
        var userProfile = {
            FirstName: user.FirstName,
            LastName: user.LastName,
            ContactEmail: user.ContactEmail,
            TimeZone: user.CurrentTimeZone,
            Country: user.CurrentCountry,
            Language: user.CurrentLanguage,
            DateFormat: user.CurrentDateFormat,
            LoginCredentials: user.CurrentLoginAccounts,
           
        }
        user.Countries.forEach(function (country) {
            countries.push({
                value: country.CountryId,
                text: country.CountryName
            })
        }, this);
        var timezones = [];
        user.TimeZones.forEach(function (timezone) {
            timezones.push({
                value: timezone.TimeZoneId,
                text: timezone.TimeZoneName
            })
        }, this);
        var dateFormats = [];
        user.DateFormats.forEach(function (dateFormat) {
            dateFormats.push({
                value: dateFormat.DateFormatId,
                text: dateFormat.DateFormatRepresentation
            })
        }, this);
        var languages = [];
        user.Languages.forEach(function (language) {
            languages.push({
                value: language.LanguageId,
                text: language.LanguageName
            })
        }, this);
        return {
            userTotalInfo:userTotalInfo,
            userProfile: userProfile,
            countries: countries,
            languages: languages,
            dateFormats: dateFormats,
            languages: languages,
            timezones: timezones,
            fetched: true,
            status: status,
            message: message,
            validationstatus : validationstatus
        }
    }
    return {

        fetched: false
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);






