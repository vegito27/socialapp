(this["webpackJsonpsocialape-ui"] = this["webpackJsonpsocialape-ui"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html,\nbody{\n\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    background-color:rgb(245,245,245)\n}\n\n.container{\n  margin:80px auto 0 auto;\n  max-width: 1200px;\n\n}\n\n\n.nav-container{\n  margin: auto;\n}\n\na{\n  text-decoration: none;\n}\n\n.nav-container svg{\n  color:#fff;\n  font-size: 25px\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/createMuiTheme */ "./node_modules/@material-ui/core/styles/createMuiTheme.js");
/* harmony import */ var _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login */ "./src/pages/login.js");
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signup */ "./src/pages/signup.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js");
/* harmony import */ var _util_AuthRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/AuthRoute */ "./src/util/AuthRoute.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var _redux_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./redux/types */ "./src/redux/types.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redux/actions/userActions */ "./src/redux/actions/userActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/App.js";
















const theme = _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2___default()({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b2a00",
      contrastText: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  },
  form: {
    textAlign: 'center',
    width: "40%",
    margin: "auto"
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    margin: '20px',
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10
  },
  progress: {
    position: 'absolute'
  }
});
let authenticated;
const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__["default"])(token);

  if (decodedToken.exp * 1000 < Date.now()) {
    _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch(Object(_redux_actions_userActions__WEBPACK_IMPORTED_MODULE_14__["logoutUser"])());
    authenticated = false;
    window.location.href = '/login';
  } else {
    _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch({
      type: _redux_types__WEBPACK_IMPORTED_MODULE_13__["SET_AUTHENTICATED"]
    });
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.defaults.headers.common['Authorization'] = token;
    _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"].dispatch(Object(_redux_actions_userActions__WEBPACK_IMPORTED_MODULE_14__["getUserData"])());
  }

  console.log(decodedToken);
}

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
      theme: theme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
      store: _redux_store__WEBPACK_IMPORTED_MODULE_12__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/",
      component: _pages_home__WEBPACK_IMPORTED_MODULE_4__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_AuthRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/login",
      component: _pages_login__WEBPACK_IMPORTED_MODULE_5__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_AuthRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/signup",
      component: _pages_signup__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/DeleteScream.js":
/*!****************************************!*\
  !*** ./src/components/DeleteScream.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_MyButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/MyButton */ "./src/util/MyButton.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/DeleteOutline */ "./node_modules/@material-ui/icons/DeleteOutline.js");
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/dataActions */ "./src/redux/actions/dataActions.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/components/DeleteScream.js";














const styles = {
  deleteButton: {
    position: 'absolute',
    left: '58%'
  }
};

class DeleteScream extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };

    this.handleOpen = () => {
      this.setState({
        open: true
      });
    };

    this.handleClose = () => {
      this.setState({
        open: false
      });
    };

    this.deleteScream = () => {
      this.props.deleteScream(this.props.screamId);
      this.setState({
        open: false
      });
    };
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tip: "delete",
      onClick: this.handleOpen,
      btnClassName: classes.deleteButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_12___default.a, {
      color: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 6
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: this.state.open,
      onClose: this.handleClose,
      fullWidth: true,
      maxWidth: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 6
      }
    }, "Are you sure you want to delete this Scream ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: this.handleClose,
      color: "primary",
      variant: "contained",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: this.deleteScream,
      color: "secondary",
      variant: "contained",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }, "Delete"))));
  }

}

DeleteScream.propTypes = {
  deleteScream: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  screamId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, {
  deleteScream: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__["deleteScream"]
})(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(DeleteScream)));

/***/ }),

/***/ "./src/components/EditDetails.js":
/*!***************************************!*\
  !*** ./src/components/EditDetails.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/userActions */ "./src/redux/actions/userActions.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _util_MyButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/MyButton */ "./src/util/MyButton.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/components/EditDetails.js";















const styles = {
  button: {
    float: "right"
  },
  textField: {
    margin: "10px auto 10px auto"
  }
};

class EditDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      bio: '',
      website: '',
      location: '',
      open: false
    };

    this.mapUserDetailsToState = credentials => {
      this.setState({
        bio: credentials.bio ? credentials.bio : '',
        website: credentials.website ? credentials.website : '',
        location: credentials.location ? credentials.location : ''
      });
    };

    this.handleOpen = () => {
      this.setState({
        open: true
      });
      this.mapUserDetailsToState(this.props.credentials);
    };

    this.handleClose = () => {
      this.setState({
        open: false
      });
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = () => {
      const userDetails = {
        bio: this.state.bio,
        website: this.state.website,
        location: this.state.location
      };
      this.props.editUserDetails(userDetails);
      this.handleClose();
    };
  }

  componentDidMount() {
    const {
      credentials
    } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  render() {
    const {
      classes
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tip: "Edit Details",
      onClick: this.handleOpen,
      btnClasssName: classes.button,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 5
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: this.state.open,
      onClose: this.handleClose,
      fullWidth: true,
      maxWidth: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 8
      }
    }, "Edit your Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "bio",
      label: "Bio",
      type: "text",
      multiline: true,
      rows: "3",
      placeholder: "A short bio about yourself",
      className: classes.textField,
      value: this.state.bio,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 10
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "website",
      label: "Website",
      type: "text",
      multiline: true,
      rows: "3",
      placeholder: "Your personal or professional website",
      className: classes.textField,
      value: this.state.website,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 10
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
      name: "location ",
      label: "Location",
      type: "text",
      multiline: true,
      rows: "3",
      placeholder: "Where you live",
      className: classes.textField,
      value: this.state.location,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: this.handleClose,
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }
    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onClick: this.handleSubmit,
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 18
      }
    }, "Save"))));
  }

}

const mapStateToProps = state => ({
  credentials: state.user.credentials
});

const mapActionsToProps = {
  editUserDetails: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_4__["editUserDetails"]
};
EditDetails.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  editUserDetails: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  editUserDetails: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_4__["editUserDetails"]
})(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(EditDetails)));

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util_MyButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/MyButton */ "./src/util/MyButton.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "./node_modules/@material-ui/icons/Notifications.js");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _PostScream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PostScream */ "./src/components/PostScream.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/components/Navbar.js";













class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      authenticated
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      position: "fixed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "nav-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }
    }, authenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      className: "nav-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PostScream__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tip: "Home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tip: "Notifications",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      to: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "inherit",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      to: "/signup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, "SignUp"))));
  }

}

Navbar.propTypes = {
  authenticated: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Navbar));

/***/ }),

/***/ "./src/components/PostScream.js":
/*!**************************************!*\
  !*** ./src/components/PostScream.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util_MyButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/MyButton */ "./src/util/MyButton.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/dataActions */ "./src/redux/actions/dataActions.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../redux/actions/userActions */ "./src/redux/actions/userActions.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/components/PostScream.js";


















const styles = {
  textField: {
    marginBottom: "10px"
  },
  submitButton: {
    position: "relative",
    float: "right"
  },
  progress: {
    position: "absolute"
  },
  closeButton: {
    position: "absolute",
    left: "80%",
    top: "6%"
  }
};

class PostScream extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      open: '',
      scream: '',
      errors: {}
    };

    this.handleOpen = () => {
      this.setState({
        open: true
      });
    };

    this.handleClose = () => {
      this.setState({
        open: false,
        errors: {}
      });
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      this.props.postScream({
        scream: this.state.scream
      });
    };
  }

  componentWillReceiveProps(nextProps) {
    //scream posting error like empty body
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    } // scream posted successfuly


    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        scream: "",
        open: false,
        errors: {}
      });
    }
  }

  render() {
    const {
      errors
    } = this.state;
    const {
      classes,
      UI: {
        loading
      }
    } = this.props;
    console.log(this.props);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: this.handleOpen,
      tip: "Post a Scream!",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_14___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
      open: this.state.open,
      onClose: this.handleClose,
      maxWidth: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tip: "Close",
      onClick: this.handleClose,
      tipClassName: classes.closeButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 6
      }
    }, "Post a new Scream!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "scream",
      type: "text",
      label: "add Scream..",
      multiline: true,
      rows: "2",
      placeholder: "Scream at your fellow apes",
      className: classes.textField,
      errors: errors.scream ? true : false,
      helperText: errors.scream,
      onChange: this.handlechange,
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 8
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      className: classes.submitButton,
      disabled: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, "Post ", loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.progress,
      size: 30,
      thickness: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 57
      }
    }))))));
  }

}

PostScream.propTypes = {
  postScream: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  UI: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, {
  postScream: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__["postScream"]
})(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(PostScream)));

/***/ }),

/***/ "./src/components/Profile.js":
/*!***********************************!*\
  !*** ./src/components/Profile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Link */ "./node_modules/@material-ui/icons/Link.js");
/* harmony import */ var _material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CalendarToday */ "./node_modules/@material-ui/icons/CalendarToday.js");
/* harmony import */ var _material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../redux/actions/userActions */ "./src/redux/actions/userActions.js");
/* harmony import */ var _material_ui_icons_KeyboardReturn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/KeyboardReturn */ "./node_modules/@material-ui/icons/KeyboardReturn.js");
/* harmony import */ var _material_ui_icons_KeyboardReturn__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardReturn__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_EditDetails__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/EditDetails */ "./src/components/EditDetails.js");
/* harmony import */ var _util_MyButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../util/MyButton */ "./src/util/MyButton.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/components/Profile.js";




















const styles = {
  paper: {
    paddingTop: 10,
    paddingBottom: 0,
    marginLeft: 30,
    width: 350,
    height: 450
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 160,
      height: 160,
      objectFit: "cover",
      maxWidth: "90%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: "#00bcd4"
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  }
};

class Profile extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleImageChange = event => {
      const image = event.target.files[0];
      const formData = new FormData();
      formData.append('image', image, image.name);
      this.props.uploadImage(formData);
    };

    this.handleLogout = () => {
      this.props.logoutUser();
    };

    this.handleEditPicture = () => {
      const fileInput = document.getElementById('imageInput');
      fileInput.click();
    };
  }

  render() {
    console.log(this.props);
    const {
      classes,
      user: {
        credentials: {
          handle,
          createdAt,
          imageUrl,
          bio,
          website,
          location
        },
        loading,
        authenticated
      }
    } = this.props;
    let profileMarkup = !loading ? authenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.profile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "image-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: imageUrl,
      className: "profile-image",
      alt: "profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 16
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      id: "imageInput",
      hidden: "hidden",
      onChange: this.handleImageChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 16
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
      tip: "Edit Profile picture",
      onClick: this.handleEditPicture,
      btnClassName: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_14___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
      to: `/users/${handle}`,
      color: "primary",
      variant: "h5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, " @", handle, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }), bio && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 20
      }
    }, bio), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 12
      }
    }), location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_8___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 47
      }
    }, location), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 71
      }
    })), website && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 14
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 15
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: website,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, website, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 18
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_CalendarToday__WEBPACK_IMPORTED_MODULE_10___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 14
      }
    }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 52
      }
    }, "Joined ", dayjs__WEBPACK_IMPORTED_MODULE_11___default()(createdAt).format('MMM YYYY '))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: "logout",
      placement: "top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onClick: this.handleLogout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardReturn__WEBPACK_IMPORTED_MODULE_17___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 14
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditDetails__WEBPACK_IMPORTED_MODULE_18__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 12
      }
    }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.paper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body2",
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 5
      }
    }, "No Profile Found,please Login again"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.buttons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
      to: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 6
      }
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "secondary",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"],
      to: "/signup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 6
      }
    }, "SignUp"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    }, "..Loading");
    return profileMarkup;
  }

}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  logoutUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_16__["logoutUser"],
  uploadImage: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_16__["uploadImage"]
};
Profile.propTypes = {
  logoutUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  uploadImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapActionsToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(Profile)));

/***/ }),

/***/ "./src/components/Scream.js":
/*!**********************************!*\
  !*** ./src/components/Scream.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/dataActions */ "./src/redux/actions/dataActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _util_MyButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/MyButton */ "./src/util/MyButton.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "./node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_DeleteScream__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/DeleteScream */ "./src/components/DeleteScream.js");
/* harmony import */ var _ScreamDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ScreamDialog */ "./src/components/ScreamDialog.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/components/Scream.js";


















const styles = {
  card: {
    display: 'flex',
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover'
  }
};

class Scream extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    this.likedScream = () => {
      if (this.props.user.likes && this.props.user.likes.find(like => like.screamId === this.props.scream.screamId)) return true;else return false;
    };

    this.likeScream = () => {
      this.props.likeScream(this.props.scream.screamId);
    };

    this.unlikeScream = () => {
      this.props.UnlikeScream(this.props.scream.screamId);
    };
  }

  render() {
    dayjs__WEBPACK_IMPORTED_MODULE_6___default.a.extend(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_7___default.a);
    const {
      classes,
      scream: {
        commentCount,
        createdAt,
        likeCount,
        scream,
        screamId,
        userHandle,
        userImage
      },
      user: {
        authenticated,
        credentials: {
          handle
        }
      }
    } = this.props;
    const likeButton = !authenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      tip: "like",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_15___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 12
      }
    }))) : this.likedScream() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      tip: "Undo like",
      onClick: this.unlikeScream,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 12
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      tip: "Like",
      onClick: this.likeScream,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_15___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 12
      }
    }));
    const deleteButton = authenticated && userHandle === handle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DeleteScream__WEBPACK_IMPORTED_MODULE_16__["default"], {
      screamId: screamId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 68
      }
    }) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: this.props.classes.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
      image: this.props.scream.userImage,
      title: "Profile image",
      className: this.props.classes.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: this.props.classes.content,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "h5",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"],
      to: `/users/${this.props.scream.userHandle}`,
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 16
      }
    }, this.props.scream.userHandle), deleteButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body2",
      color: "textSecondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 16
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_6___default()(createdAt).fromNow(), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "body1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 16
      }
    }, this.props.scream.scream), likeButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 16
      }
    }, likeCount, " Likes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      tip: "Comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 16
      }
    }, commentCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScreamDialog__WEBPACK_IMPORTED_MODULE_17__["default"], {
      screamId: screamId,
      userHandle: userHandle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 16
      }
    }))));
  }

}

Scream.propTypes = {
  likeScream: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  unlikeScream: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  scream: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  likeScream: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__["likeScream"],
  UnlikeScream: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_10__["UnlikeScream"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapActionsToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Scream)));

/***/ }),

/***/ "./src/components/ScreamDialog.js":
/*!****************************************!*\
  !*** ./src/components/ScreamDialog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_MyButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/MyButton */ "./src/util/MyButton.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/UnfoldMore */ "./node_modules/@material-ui/icons/UnfoldMore.js");
/* harmony import */ var _material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/actions/dataActions */ "./src/redux/actions/dataActions.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/components/ScreamDialog.js";
















const styles = {
  invisibleSeparator: {
    border: "none",
    margin: 4
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)"
  },
  profileImage: {
    maxWidth: 200,
    height: 200,
    objectFit: "cover",
    borderRadius: "50%"
  },
  dialogContent: {
    paddding: 20
  },
  closeButton: {
    position: "absolute",
    left: "90%"
  },
  expandButton: {
    position: "absolute",
    left: "60%"
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50
  }
};

class ScreamDialog extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false,
      oldPath: "",
      newPath: ""
    };

    this.handleOpen = () => {
      let oldPath = window.location.pathname;
      const {
        userHandle,
        screamId
      } = this.props;
      const newPath = `/users/${userHandle}/scream/${screamId}`;

      if (oldPath === newPath) {
        oldPath = `/users/${userHandle}`;
      }

      window.history.pushState(null, null, newPath);
      this.setState({
        open: true,
        oldPath,
        newPath
      });
      this.props.getScream(this.props.screamId);
    };

    this.handleClose = () => {
      window.history.pushState(null, null, this.state.oldPath);
      this.setState({
        open: false
      });
    };
  }

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  render() {
    const {
      classes,
      scream: {
        body,
        createdAt,
        userHandle,
        userImage,
        screamId,
        likeCount,
        commentCount,
        comments
      },
      UI: {
        loading
      }
    } = this.props;
    const dialogMarkup = loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.spinnerDiv,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {
      size: 100,
      thickness: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      container: 16,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: true,
      sm: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: userImage,
      alt: "profile",
      className: classes.profileImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      item: true,
      sm: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"],
      color: "primary",
      variant: "h5",
      to: `/users/${userHandle}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, "@", userHandle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: classes.invisibleSeparator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      color: "textSecondary",
      variant: "body2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_3___default()(createdAt).format("h:mm a, MMMM DD YYYY")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: classes.invisibleSeparator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "body1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }
    }, likeCount, " Likes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tip: "comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_13___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }
    }, commentCount, " comments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: classes.visibleSeparator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: this.handleOpen,
      tip: "expand scream",
      tipClassName: classes.expandButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_12___default.a, {
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
      open: this.state.open,
      onClose: this.handleClose,
      fullWidth: true,
      maxWidth: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_MyButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tip: "close",
      onClick: this.handleClose,
      tipClassName: classes.closeButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.dialogContent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }, dialogMarkup)));
  }

}

ScreamDialog.propTypes = {
  getScream: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  clearErrors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  UI: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  scream: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  screamId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  userHandle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI
});

const mapActionsToProps = {
  getScream: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_15__["getScream"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapActionsToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(styles)(ScreamDialog)));

/***/ }),

/***/ "./src/images/icon.png":
/*!*****************************!*\
  !*** ./src/images/icon.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_Scream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Scream */ "./src/components/Scream.js");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/dataActions */ "./src/redux/actions/dataActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/pages/home.js";









class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    this.props.getScreams();
  }

  render() {
    const {
      screams,
      loading
    } = this.props.data;
    let recentScreamsMarkUp = !loading ? screams.map(scream => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Scream__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: scream.screamId,
      scream: scream,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 58
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 108
      }
    }, "Loading....");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      container: true,
      spacing: 1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      sm: 8,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }, recentScreamsMarkUp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 6
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: true,
      sm: 4,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 31
      }
    }, "Profile....")));
  }

}

Home.propTypes = {
  getScreams: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getScreams: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_6__["getScreams"]
})(Home));

/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon.png */ "./src/images/icon.png");
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/userActions */ "./src/redux/actions/userActions.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/pages/login.js";













const styles = {
  form: {
    textAlign: 'center',
    width: "40%",
    margin: "auto"
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    margin: '20px',
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10
  },
  progress: {
    position: 'absolute'
  }
};

class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    this.handleSubmit = event => {
      event.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData, this.props.history);
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
  }

  render() {
    const {
      classes,
      UI: {
        loading
      }
    } = this.props;
    const {
      errors
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      container: true,
      className: classes.form,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      sm: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "monkey image",
      className: classes.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 8
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h4",
      className: classes.pageTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 8
      }
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      noValidate: true,
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      helperText: errors.email,
      error: errors.email ? true : false,
      className: classes.textField,
      value: this.state.email,
      onChange: this.handleChange,
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 12
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      helperText: errors.password,
      error: errors.password ? true : false,
      className: classes.textField,
      value: this.state.password,
      onChange: this.handleChange,
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 12
      }
    }), errors.general && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "body2",
      className: classes.customError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 32
      }
    }, errors.general), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "submit",
      variant: "contained",
      value: "Submit",
      disabled: loading,
      color: "primary",
      className: classes.button,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 12
      }
    }, "Login ", loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: 20,
      className: classes.progress,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 149
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 12
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 12
      }
    }, "Don't Have an account sign up ?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/signup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 50
      }
    }, "here")))));
  }

}

Login.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  loginUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  UI: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["loginUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapActionsToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Login)));

/***/ }),

/***/ "./src/pages/signup.js":
/*!*****************************!*\
  !*** ./src/pages/signup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icon.png */ "./src/images/icon.png");
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/userActions */ "./src/redux/actions/userActions.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/pages/signup.js";













const styles = {
  form: {
    textAlign: 'center',
    width: "40%",
    margin: "auto"
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    margin: '20px',
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10
  },
  progress: {
    position: 'absolute'
  }
};

class SignUp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    this.handleSubmit = event => {
      event.preventDefault();
      this.setState({
        loading: true
      });
      const newUserData = {
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        handle: this.state.handle
      };
      this.props.signupUser(newUserData, this.props.history);
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
  }

  render() {
    const {
      classes,
      UI: {
        loading
      }
    } = this.props;
    const {
      errors
    } = this.state;
    console.log(this.state);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      container: true,
      className: classes.form,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      sm: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: "monkey image",
      className: classes.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 8
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h4",
      className: classes.pageTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 8
      }
    }, "SignUp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      noValidate: true,
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 8
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      helperText: errors.email,
      error: errors.email ? true : false,
      className: classes.textField,
      value: this.state.email,
      onChange: this.handleChange,
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 12
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      helperText: errors.password,
      error: errors.password ? true : false,
      className: classes.textField,
      value: this.state.password,
      onChange: this.handleChange,
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 12
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      helperText: errors.confirmPassword,
      error: errors.confirmPassword ? true : false,
      className: classes.textField,
      value: this.state.confirmPassword,
      onChange: this.handleChange,
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 12
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "handle",
      name: "handle",
      type: "text",
      label: "Handle",
      helperText: errors.handle,
      error: errors.handle ? true : false,
      className: classes.textField,
      value: this.state.handle,
      onChange: this.handleChange,
      fullWidth: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 12
      }
    }), errors.general && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "body2",
      className: classes.customError,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 32
      }
    }, errors.general), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: "submit",
      variant: "contained",
      value: "Submit",
      disabled: loading,
      color: "primary",
      className: classes.button,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 12
      }
    }, "SignUp ", loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: 30,
      className: classes.progress,
      thickness: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 150
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 12
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 12
      }
    }, "Already Have an account ? Login ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      to: "/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 51
      }
    }, " here")))));
  }

}

SignUp.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  UI: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  logoutUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, {
  signupUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_12__["signupUser"]
})(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(SignUp)));

/***/ }),

/***/ "./src/redux/actions/dataActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/dataActions.js ***!
  \******************************************/
/*! exports provided: getScreams, getScream, likeScream, UnlikeScream, deleteScream, postScream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreams", function() { return getScreams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScream", function() { return getScream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likeScream", function() { return likeScream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlikeScream", function() { return UnlikeScream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScream", function() { return deleteScream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postScream", function() { return postScream; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const getScreams = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_DATA"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/screams').then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SCREAMS"],
      payload: res.data
    });
  }).catch(err => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SCREAMS"],
      payload: []
    });
  });
};
const getScream = screamId => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`scream/${screamId}`).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SCREAM"],
      payload: res.data
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING_UI"]
    });
  }).catch(err => console.log(err));
};
const likeScream = screamId => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/scream/${screamId}/like`).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["LIKE_SCREAM"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};
const UnlikeScream = screamId => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/scream/${screamId}/unlike`).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["UNLIKE_SCREAM"],
      payload: res.data
    });
  }).catch(err => {
    console.error(err);
  });
};
const deleteScream = screamId => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/scream/${screamId}`).then(() => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_SCREAM"],
      payload: screamId
    });
  }).catch(err => {
    console.error(err);
  });
};
const postScream = newScream => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/scream', newScream).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["POST_SCREAM"],
      payload: res.data
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
    });
  }).catch(err => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_ERRORS"],
      payload: err.response.data
    });
  });
};

/***/ }),

/***/ "./src/redux/actions/userActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/userActions.js ***!
  \******************************************/
/*! exports provided: logoutUser, getUserData, editUserDetails, loginUser, signupUser, uploadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUserDetails", function() { return editUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupUser", function() { return signupUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const logoutUser = () => dispatch => {
  localStorage.removeItem('FBIdToken');
  delete axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Authorization'];
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_UNAUTHENTICATED"]
  });
};
const getUserData = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_USER"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user').then(res => {
    console.log(res);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_USER"],
      payload: res.data
    });
  }).catch(err => console.log(err));
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Authorization'] = FBIdToken;
};

const editUserDetails = userDetails => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_USER"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', userDetails).then(() => {
    dispatch(getUserData());
  }).catch(err => console.log(err));
};
const loginUser = (userData, history) => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/login', userData).then(response => {
    setAuthorizationHeader(response.data.token);
    dispatch(getUserData());
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
    });
    history.push('/');
  }).catch(err => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_ERRORS"],
      payload: err.response.data
    });
  });
};
const signupUser = (newUserData, history) => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/signup', newUserData).then(response => {
    setAuthorizationHeader(response.data.token);
    const FBIdToken = `Bearer ${response.data.token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Authorization'] = FBIdToken;
    dispatch(getUserData());
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
    });
    undefined.setState({
      loading: false
    });
    history.push('/');
  }).catch(err => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_ERRORS"],
      payload: err.response.data
    });
  });
};
const uploadImage = formData => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_USER"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/image', formData).then(() => {
    dispatch(getUserData());
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./src/redux/reducer/dataReducer.js":
/*!******************************************!*\
  !*** ./src/redux/reducer/dataReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");

const initialState = {
  screams: [],
  scream: {},
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_DATA"]:
      return { ...state,
        loading: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_SCREAMS"]:
      return { ...state,
        screams: action.payload,
        loading: false
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_SCREAM"]:
      return { ...state,
        scream: action.payload
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LIKE_SCREAM"]:
    case _types__WEBPACK_IMPORTED_MODULE_0__["UNLIKE_SCREAM"]:
      let index = state.screams.findIndex(scream => scream.screamId === action.payload.screamId);
      state.screams[index] = action.payload;
      return { ...state
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_SCREAM"]:
      index = state.screams.findIndex(scream => scream.screamId === action.payload);
      state.screams.splice(index, 1);
      return { ...state
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["POST_SCREAM"]:
      return { ...state,
        screams: [action.payload, ...state.screams]
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/reducer/uiReducer.js":
/*!****************************************!*\
  !*** ./src/redux/reducer/uiReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");

const initialState = {
  loading: false,
  errors: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ERRORS"]:
      return { ...state,
        loading: false,
        errors: action.payload
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]:
      return { ...state,
        loading: false,
        errors: null
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_UI"]:
      return { ...state,
        loading: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["STOP_LOADING_UI"]:
      return { ...state,
        loading: false
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/reducer/useReducer.js":
/*!*****************************************!*\
  !*** ./src/redux/reducer/useReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");

const initialState = {
  authenticated: false,
  credentials: {},
  loading: false,
  likes: [],
  notifications: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_AUTHENTICATED"]:
      return { ...state,
        authenticated: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_UNAUTHENTICATED"]:
      return initialState;

    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_USER"]:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_USER"]:
      return { ...state,
        loading: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LIKE_SCREAM"]:
      return { ...state,
        likes: [...state.likes, {
          userHandle: state.credentials.handle,
          screamId: action.payload.screamId
        }]
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["UNLIKE_SCREAM"]:
      return { ...state,
        likes: state.likes.filter(like => like.screamId !== action.payload.screamId)
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer_dataReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer/dataReducer */ "./src/redux/reducer/dataReducer.js");
/* harmony import */ var _reducer_useReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/useReducer */ "./src/redux/reducer/useReducer.js");
/* harmony import */ var _reducer_uiReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer/uiReducer */ "./src/redux/reducer/uiReducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");





const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]];
const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _reducer_useReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _reducer_dataReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  UI: _reducer_uiReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/redux/types.js":
/*!****************************!*\
  !*** ./src/redux/types.js ***!
  \****************************/
/*! exports provided: SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER, LOADING_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_SCREAM, SET_SCREAMS, LIKE_SCREAM, UNLIKE_SCREAM, LOADING_DATA, DELETE_SCREAM, POST_SCREAM, STOP_LOADING_UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTHENTICATED", function() { return SET_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNAUTHENTICATED", function() { return SET_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_USER", function() { return LOADING_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERRORS", function() { return SET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_UI", function() { return LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SCREAM", function() { return SET_SCREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SCREAMS", function() { return SET_SCREAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_SCREAM", function() { return LIKE_SCREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_SCREAM", function() { return UNLIKE_SCREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_DATA", function() { return LOADING_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SCREAM", function() { return DELETE_SCREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_SCREAM", function() { return POST_SCREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LOADING_UI", function() { return STOP_LOADING_UI; });
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
const SET_USER = 'SET_USER';
const LOADING_USER = 'LOADING_USER';
const SET_ERRORS = 'SET_ERRORS';
const LOADING_UI = 'LOADING_UI';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
const SET_SCREAM = 'SET_SCREAM';
const SET_SCREAMS = 'SET_SCREAMS';
const LIKE_SCREAM = 'LIKE_SCREAM';
const UNLIKE_SCREAM = 'UNLIKE_SCREAM';
const LOADING_DATA = 'LOADING_DATA';
const DELETE_SCREAM = 'DELETE_SCREAM';
const POST_SCREAM = "POST_SCREAM";
const STOP_LOADING_UI = 'STOP_LOADING_UI';

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/util/AuthRoute.js":
/*!*******************************!*\
  !*** ./src/util/AuthRoute.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/util/AuthRoute.js";





const AuthRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, rest, {
  render: props => authenticated === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 31
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 53
    }
  })),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}));

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

AuthRoute.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(AuthRoute));

/***/ }),

/***/ "./src/util/MyButton.js":
/*!******************************!*\
  !*** ./src/util/MyButton.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
var _jsxFileName = "/Users/rishabhtripathii/Documents/Node/socialape-ui/src/util/MyButton.js";



/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  onClick,
  tip,
  btnClassName,
  tipClassName
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: tip,
  className: tipClassName,
  placement: "top",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
  onClick: onClick,
  className: btnClassName,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, children)));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rishabhtripathii/Documents/Node/socialape-ui/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/rishabhtripathii/Documents/Node/socialape-ui/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/rishabhtripathii/Documents/Node/socialape-ui/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map