import enUs from '../../locales/enUs.json';
import enUk  from '../../locales/enUk.json';


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