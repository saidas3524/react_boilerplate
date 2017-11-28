//import enUs from '../../locales/enUs.json';
//import enUk  from '../../locales/enUk.json';

const enUs = {
    "HeaderName":"Digital Operations Center-Uk",
    "Headerpara":"UxModernisation-Uk",
    "FooterName":"",
    "Footerpara":"",
    "ContactUs":"Uk-Contact us",
    "TradeMarks":"Uk-Trademarks",
    "PrivacyTerms":"Uk-Privacy & Cookies",
    "TermsOfUse":"Uk-Terms of use",
    "WelcomeMessage":"UK-From this HOme page you can access the specific Microsoft OEm Operations applications you use for your job function . Just select an application from one of the fucntional areas listed in the menu",
    "WelcomeMessage2":"Uk-You can also view current notifications in the News and Information area below. if you need help you can contact us"
};

const enUk = {
    "HeaderName":"Digital Operations Center-Uk",
    "Headerpara":"UxModernisation-Uk",
    "FooterName":"",
    "Footerpara":"",
    "ContactUs":"Uk-Contact us",
    "TradeMarks":"Uk-Trademarks",
    "PrivacyTerms":"Uk-Privacy & Cookies",
    "TermsOfUse":"Uk-Terms of use",
    "WelcomeMessage":"UK-From this HOme page you can access the specific Microsoft OEm Operations applications you use for your job function . Just select an application from one of the fucntional areas listed in the menu",
    "WelcomeMessage2":"Uk-You can also view current notifications in the News and Information area below. if you need help you can contact us"
};

const locales = {enUs,enUk};


class Locale{
    constructor(language){
       this.strings = locales[language];
       this.subscriptions = [];     
    }

    setLanguage(language){
        this.strings = locales[language];
        this.subscriptions.forEach(cb=>cb());
    }
    subscribe(cb){
        this.subscriptions.push(cb);
    }

}

export default Locale;