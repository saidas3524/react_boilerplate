import { UserAgentApplication } from 'msalx';


var applicationConfig = {
    clientID: 'd1d9a68c-35e0-4ff5-ac06-3ef3dc438bc6',
    authority: "",// "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
    b2cScopes: ['d1d9a68c-35e0-4ff5-ac06-3ef3dc438bc6'],
    webApi: 'https://api.microsoftoem.net/Companyaad/royd/v1/GetNavigation',
};

class MSAL_Wrapper {
   
    constructor() {
        var self=this;
        this._type = 'MSAL_Wrapper';       
        this.userName =  this.clientApplication.userName;
      }

      clientApplication = new UserAgentApplication(applicationConfig.clientID, applicationConfig.authority,
              (errorDesc, token, error, tokenType) => {
           // debugger;
            // Called after loginRedirect or acquireTokenPopup
            if (tokenType == "id_token") {
                this.userName = this.clientApplication.getUser().name;
               // this.setState({ isLoggedIn: true });
              //  this.logMessage("User '" + this.userName + "' logged-in");
            } else {
              //  this.logMessage("Error during login:\n" + error);
            }
        }, { cacheLocation: 'localStorage' });

       

    getUserName()
    {
        return this.clientApplication.userName;
    }

    logMessage(message) {
      //  this.setState({ message: this.state.message + "\n" + message });
      console.log(message);
    }

    loginRedirect() {
       
        this.clientApplication.loginRedirect(applicationConfig.b2cScopes);
    }

    logout() {
        console.log("loggin off");
        this.clientApplication.logout();
    }

    loginPopup() {
        this.clientApplication.loginPopup(applicationConfig.b2cScopes).then((idToken) => {
            this.clientApplication.acquireTokenSilent(applicationConfig.b2cScopes).then((accessToken) => {
                var userName = this.clientApplication.getUser().name;
             //   this.setState({ isLoggedIn: true });
                this.logMessage("User '" + userName + "' logged-in");
            }, (error) => {
                this.clientApplication.acquireTokenPopup(applicationConfig.b2cScopes).then((accessToken) => {
                    var userName = this.clientApplication.getUser().name;
               //     this.setState({ isLoggedIn: true });
                    this.logMessage("User '" + userName + "' logged-in");
                }, (error) => {
                    this.logMessage("Error acquiring the popup:\n" + error);
                });
            })
        }, (error) => {
            this.logMessage("Error during login:\n" + error);
        });
    }

    callApi() {
        this.clientApplication.acquireTokenSilent(applicationConfig.b2cScopes).then((accessToken) => {
            this.callApiWithAccessToken(accessToken);
        }, (error) => {
            this.clientApplication.acquireTokenPopup(applicationConfig.b2cScopes).then((accessToken) => {
                this.callApiWithAccessToken(accessToken);
            }, (error) => {
                this.logMessage("Error acquiring the access token to call the Web api:\n" + error);
            });
        })
    }

    getAccessToken = () => {       
        return this.clientApplication.acquireTokenSilent(applicationConfig.b2cScopes);        
    }

    callApiWithAccessToken(accessToken) {
        // Call the Web API with the AccessToken
        fetch(applicationConfig.webApi, {
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => {
            response.text().then(text => this.logMessage("Web APi returned:\n" + JSON.stringify(text)));
        }).catch(result => {
            this.logMessage("Error calling the Web api:\n" + result);
        });
    }

}

export default (new MSAL_Wrapper())