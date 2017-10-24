webpackJsonp([1],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(55);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(8);

var _redux = __webpack_require__(14);

__webpack_require__(138);

var _app = __webpack_require__(139);

var _app2 = _interopRequireDefault(_app);

var _reducers = __webpack_require__(148);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)()(_redux.createStore);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: createStoreWithMiddleware(_reducers2.default) },
  _react2.default.createElement(_app2.default, null)
), document.querySelector('.root'));

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(140);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(143);

var _Footer2 = _interopRequireDefault(_Footer);

__webpack_require__(144);

var _Locale = __webpack_require__(145);

var _Locale2 = _interopRequireDefault(_Locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props, context) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

        _this.state = {
            currentLocale: 'enUs'
        };

        _this.changeLocale = function (locale) {
            _this.setState({
                currentLocale: locale
            });
        };

        _this.locale = new _Locale2.default('enUs');
        return _this;
    }

    _createClass(App, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { locale: this.locale };
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this.locale.setLanguage(nextState.currentLocale);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.changeLocale('enUs');
                        } },
                    'English-US'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.changeLocale('enUk');
                        } },
                    'English-UK'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'alert alert-danger', role: 'alert' },
                    '\xA0\xA0',
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-exclamation-sign', 'aria-hidden': 'true' }),
                    '\xA0\xA0',
                    _react2.default.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Error:'
                    ),
                    '\xA0\xA0Enter a valid email address'
                ),
                _react2.default.createElement('div', { className: 'space' }),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

App.childContextTypes = {
    locale: _propTypes2.default.object
};
exports.default = App;

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LocaleHOC = __webpack_require__(73);

var _LocaleHOC2 = _interopRequireDefault(_LocaleHOC);

var _Avatar = __webpack_require__(141);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            user: {
                name: "sai krishna",
                email: "saidaso@microsoft.com",
                avatar_url: "http://placehold.it/45"
            }
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var locale = this.props.locale;

            return _react2.default.createElement(
                'div',
                { className: 'header row' },
                _react2.default.createElement(
                    'div',
                    { className: 'ofset-md-1 col-3' },
                    _react2.default.createElement('img', { src: __webpack_require__(142) })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col' },
                    _react2.default.createElement(
                        'h1',
                        null,
                        locale.strings.HeaderName
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        locale.strings.Headerpara
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-1' },
                    _react2.default.createElement(_Avatar2.default, { user: this.state.user })
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

Header.propTypes = {
    locale: _propTypes2.default.object
};
exports.default = (0, _LocaleHOC2.default)(Header);

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function Avatar(_ref) {
    var user = _ref.user;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: user.avatar_url })
    );
};

exports.default = Avatar;

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAAAuCAMAAAB9NSfbAAAC91BMVEVMaXH///////////////////////////////////////96vwDyUCLgVTH1SyMApPB/ugAAovj///+IuQD/ugD/uQD///9/ugD/uQD////yUCLyUCIApO8ApO99ugD/uQAApvP3Th7////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yUCL/////////////////////////////////////////////////////////////uQB/ugD///////////////////////+IuQB9ugDyUCIApO8ApO////////////////////9/ugB/ugB/ugD/uQD/uQD/////uQD/uQCIuQD/uQD/uQB9ugDyUCL/ugD/uQB3vwD3Th76SR8ApvP/ugAApPwApO8ApvSEvgDkUTL3Th5/ugB6vwD1SyPgVTEAovgApvMApPD3Th4ApvPgVTH/ugD/uQD///9/ugD/uQDyUCIApO/3Th5FKt8AAAAA93RSTlMA9aWoDQf7Bdfik5j6Iyn6OCkgI5g4o+bor+bf6N/41NT4ASsE9/xfBsZd/fCpIl76244R098Z4Noe5Qii/ssbjDo2AxACyjMLVe0OIbVCL+gKzs8PxWCW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"

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LocaleHOC = __webpack_require__(73);

var _LocaleHOC2 = _interopRequireDefault(_LocaleHOC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        _this.state = {
            languages: ["English", "Spanish", "Dutch", "English  - UK", "French"]
        };
        return _this;
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            var locale = this.props.locale;

            return _react2.default.createElement(
                'div',
                { className: 'footer' },
                _react2.default.createElement(
                    'h1',
                    null,
                    locale.strings.FooterName
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    locale.strings.Footerpara
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

Footer.propTypes = {
    locale: _propTypes2.default.object
};
exports.default = (0, _LocaleHOC2.default)(Footer);

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enUs = __webpack_require__(146);

var _enUs2 = _interopRequireDefault(_enUs);

var _enUk = __webpack_require__(147);

var _enUk2 = _interopRequireDefault(_enUk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var locales = { enUs: _enUs2.default, enUk: _enUk2.default };

var Locale = function () {
    function Locale(language) {
        _classCallCheck(this, Locale);

        this.strings = locales[language];
        this.subscriptions = [];
    }

    _createClass(Locale, [{
        key: 'setLanguage',
        value: function setLanguage(language) {
            this.strings = locales[language];
            this.subscriptions.forEach(function (cb) {
                return cb();
            });
        }
    }, {
        key: 'subscribe',
        value: function subscribe(cb) {
            this.subscriptions.push(cb);
        }
    }]);

    return Locale;
}();

exports.default = Locale;

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = {"HeaderName":"Digital Operations Center","Headerpara":"UxModernisation","FooterName":"","Footerpara":""}

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = {"HeaderName":"Digital Operations Center-Uk","Headerpara":"UxModernisation-Uk","FooterName":"","Footerpara":""}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var rootReducer = (0, _redux.combineReducers)({
  state: function state() {
    var _state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return _state;
  }
});

exports.default = rootReducer;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocaleHOC = function LocaleHOC(WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
        _inherits(LocaleHOC, _Component);

        function LocaleHOC() {
            _classCallCheck(this, LocaleHOC);

            return _possibleConstructorReturn(this, (LocaleHOC.__proto__ || Object.getPrototypeOf(LocaleHOC)).apply(this, arguments));
        }

        _createClass(LocaleHOC, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                this.context.locale.subscribe(function () {
                    return _this2.forceUpdate();
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var locale = this.context.locale;

                return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { locale: locale }));
            }
        }]);

        return LocaleHOC;
    }(_react.Component), _class.contextTypes = {
        locale: _propTypes2.default.object
    }, _temp;
};

exports.default = LocaleHOC;

/***/ })

},[106]);