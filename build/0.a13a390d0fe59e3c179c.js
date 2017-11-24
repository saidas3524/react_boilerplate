webpackJsonp([0],{

/***/ 1851:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactLoadable = __webpack_require__(177);

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Exceptions = __webpack_require__(1852);

var _Exceptions2 = _interopRequireDefault(_Exceptions);

var _reactRouterDom = __webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreatePricing = (0, _reactLoadable2.default)({
  loader: function loader() {
    return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 1853));
  },
  loading: function loading() {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  }
});

var Pricing = function (_React$Component) {
  _inherits(Pricing, _React$Component);

  function Pricing() {
    _classCallCheck(this, Pricing);

    return _possibleConstructorReturn(this, (Pricing.__proto__ || Object.getPrototypeOf(Pricing)).apply(this, arguments));
  }

  _createClass(Pricing, [{
    key: 'render',
    value: function render() {
      console.log("Pricing component Invoked");
      var match = this.props.match;

      console.log(match);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/Pricing/CreatePricingRule/', exact: true, component: CreatePricing }),
        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/discussions', exact: true, component: _Exceptions2.default })
      );
    }
  }]);

  return Pricing;
}(_react2.default.Component);

exports.default = Pricing;

/***/ }),

/***/ 1852:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NoAccessToResource = __webpack_require__(290);

Object.defineProperty(exports, 'NoAccessToResource', {
  enumerable: true,
  get: function get() {
    return _NoAccessToResource.NoAccessToResource;
  }
});

/***/ })

});
//# sourceMappingURL=0.a13a390d0fe59e3c179c.js.map