import React from 'react';
import PropTypes from 'prop-types';

import LocaleHOC from './LocaleHOC';



class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            languages: [{
                Code: "enUs",
                Language: "English"
            }, {

                Code: "enUk",
                Language: "English-UK"
            }]
        }
    }
    static propTypes = {
        locale: PropTypes.object
    }


    onChange = (event) => {
        this.setState({
            selectedLanguage: event.target.value
        });
        this.props.languageChanged(event.target.value);
    }

    render() {
        const { locale } = this.props;
        return (
            <div>
                <div className="footer">
                    <div className="row">

                        <div className="col-xs-12 col-sm-4 col-md-6">
                            <span style={{ marginRight: '10px' }} className="glyphicon glyphicon-globe" />
                            <select name="localisation" className="selectpicker" value={this.state.value} onChange={this.onChange}>
                                {this.state.languages.map((language) => {
                                    return <option key={language.Code} value={language.Code}>{language.Language}</option>;
                                })
                                }
                            </select>
                        </div>


                        <div className=" col-xs-12 col-sm-8 col-md-6">
                            <ul className="list-inline optionsPanel">
                                <li className="list-inline-item"><a href="">{locale.strings.ContactUs}</a></li>
                                <li className="list-inline-item"><a href=""> {locale.strings.PrivacyTerms}</a></li>
                                <li className="list-inline-item"><a href=""> {locale.strings.TermsOfUse}</a></li>
                                <li className="list-inline-item"><a href=""> {locale.strings.TradeMarks}</a></li>
                                <li className="list-inline-item">© Microsoft 2017</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default LocaleHOC(Footer);