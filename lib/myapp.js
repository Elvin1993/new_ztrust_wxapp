(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actions = exports.store = exports.bindActionCreators = exports.connect = exports.weapp = undefined;

	var _redux = __webpack_require__(1);

	var _weappNext = __webpack_require__(22);

	var _weappNext2 = _interopRequireDefault(_weappNext);

	var _reduxWeapp = __webpack_require__(23);

	var _reduxWeapp2 = _interopRequireDefault(_reduxWeapp);

	var _store = __webpack_require__(24);

	var _store2 = _interopRequireDefault(_store);

	var _actions = __webpack_require__(27);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.weapp = _weappNext2.default;
	exports.connect = _reduxWeapp2.default;
	exports.bindActionCreators = _redux.bindActionCreators;
	exports.store = _store2.default;
	exports.actions = _actions2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(2);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(17);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(19);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(20);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(21);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(3);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(13);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(4),
	    getPrototype = __webpack_require__(10),
	    isObjectLike = __webpack_require__(12);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5),
	    getRawTag = __webpack_require__(8),
	    objectToString = __webpack_require__(9);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(6);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(7);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(5);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(11);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(16);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(15)(module)))

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(2);

	var _isPlainObject = __webpack_require__(3);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(18);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (true) {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (true) {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(21);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.Promise = exports.default = undefined;

		var _weapp = __webpack_require__(1);

		var _weapp2 = _interopRequireDefault(_weapp);

		var _promise = __webpack_require__(4);

		var _promise2 = _interopRequireDefault(_promise);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = _weapp2.default;
		exports.Promise = _promise2.default;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _definitions = __webpack_require__(2);

		var _definitions2 = _interopRequireDefault(_definitions);

		var _factory = __webpack_require__(3);

		var _factory2 = _interopRequireDefault(_factory);

		var _http = __webpack_require__(69);

		var _http2 = _interopRequireDefault(_http);

		var _enhancements = __webpack_require__(70);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var wrapMethods = function wrapMethods(dest, src, methods) {
		  for (var i = 0; i < methods.length; i++) {
		    var _methods$i = methods[i],
		        name = _methods$i.name,
		        wrapper = _methods$i.wrapper;

		    dest[name] = _factory2.default[wrapper](src, name);
		  }
		};

		function wxWrapper(x) {
		  var grouped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		  var weapp = {
		    VERSION: ("0.2.1")
		  };

		  var methods = (0, _definitions2.default)(grouped);
		  if (grouped) {
		    for (var g in methods) {
		      weapp[g] = {};
		      wrapMethods(weapp[g], x, methods[g]);
		    }
		    (0, _enhancements.shortcutRequest)(weapp.net.request);
		    weapp.auth.requireAuth = (0, _enhancements.requireAuth)(weapp.auth.login, weapp.auth.getUserInfo);
		    weapp.Http = (0, _http2.default)(weapp.net.request);
		  } else {
		    wrapMethods(weapp, x, methods);
		    (0, _enhancements.shortcutRequest)(weapp.request);
		    weapp.requireAuth = (0, _enhancements.requireAuth)(weapp.login, weapp.getUserInfo);
		    weapp.Http = (0, _http2.default)(weapp.request);
		  }

		  return weapp;
		}

		wxWrapper.group = function (x) {
		  return wxWrapper(x, true);
		};

		exports.default = wxWrapper;
		module.exports = exports['default'];

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		exports.default = function (grouped) {
		  if (grouped) {
		    return definitions.reduce(function (mem, _ref) {
		      var group = _ref.group,
		          props = _objectWithoutProperties(_ref, ['group']);

		      mem[group] = mem[group] || [];
		      mem[group].push(_extends({}, props));
		      return mem;
		    }, {});
		  }
		  return definitions.map(function (_ref2) {
		    var name = _ref2.name,
		        wrapper = _ref2.wrapper;
		    return { name: name, wrapper: wrapper };
		  });
		};

		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

		var definitions = [{ name: 'request', wrapper: 'promisify', group: 'net' }, { name: 'uploadFile', wrapper: 'promisify', group: 'file' }, { name: 'downloadFile', wrapper: 'promisify', group: 'file' }, { name: 'connectSocket', wrapper: 'promisify', group: 'net' }, { name: 'onSocketOpen', wrapper: 'delegate', group: 'net' }, { name: 'onSocketError', wrapper: 'delegate', group: 'net' }, { name: 'sendSocketMessage', wrapper: 'promisify', group: 'net' }, { name: 'onSocketMessage', wrapper: 'delegate', group: 'net' }, { name: 'closeSocket', wrapper: 'delegate', group: 'net' }, { name: 'onSocketClose', wrapper: 'delegate', group: 'net' }, { name: 'chooseImage', wrapper: 'promisify', group: 'media' }, { name: 'previewImage', wrapper: 'promisify', group: 'media' }, { name: 'getImageInfo', wrapper: 'promisify', group: 'media' }, { name: 'startRecord', wrapper: 'promisify', group: 'media' }, { name: 'stopRecord', wrapper: 'delegate', group: 'media' }, { name: 'playVoice', wrapper: 'promisify', group: 'media' }, { name: 'pauseVoice', wrapper: 'delegate', group: 'media' }, { name: 'stopVoice', wrapper: 'delegate', group: 'media' }, { name: 'getBackgroundAudioPlayerState', wrapper: 'promisify', group: 'media' }, { name: 'playBackgroundAudio', wrapper: 'promisify', group: 'media' }, { name: 'pauseBackgroundAudio', wrapper: 'delegate', group: 'media' }, { name: 'seekBackgroundAudio', wrapper: 'promisify', group: 'media' }, { name: 'stopBackgroundAudio', wrapper: 'delegate', group: 'media' }, { name: 'onBackgroundAudioPlay', wrapper: 'delegate', group: 'media' }, { name: 'onBackgroundAudioPause', wrapper: 'delegate', group: 'media' }, { name: 'onBackgroundAudioStop', wrapper: 'delegate', group: 'media' }, { name: 'createAudioContext', wrapper: 'delegate', group: 'media' }, { name: 'chooseVideo', wrapper: 'promisify', group: 'media' }, { name: 'createVideoContext', wrapper: 'delegate', group: 'media' }, { name: 'saveFile', wrapper: 'promisify', group: 'file' }, { name: 'getSavedFileList', wrapper: 'promisify', group: 'file' }, { name: 'getSavedFileInfo', wrapper: 'promisify', group: 'file' }, { name: 'removeSavedFile', wrapper: 'promisify', group: 'file' }, { name: 'openDocument', wrapper: 'promisify', group: 'file' }, { name: 'setStorage', wrapper: 'promisify', group: 'storage' }, { name: 'getStorage', wrapper: 'promisify', group: 'storage' }, { name: 'getStorageInfo', wrapper: 'promisify', group: 'storage' }, { name: 'removeStorage', wrapper: 'promisify', group: 'storage' }, { name: 'clearStorage', wrapper: 'promisify', group: 'storage' }, { name: 'setStorageSync', wrapper: 'delegate', group: 'storage' }, { name: 'getStorageSync', wrapper: 'delegate', group: 'storage' }, { name: 'getStorageInfoSync', wrapper: 'delegate', group: 'storage' }, { name: 'removeStorageSync', wrapper: 'delegate', group: 'storage' }, { name: 'clearStorageSync', wrapper: 'delegate', group: 'storage' }, { name: 'getLocation', wrapper: 'promisify', group: 'geo' }, { name: 'chooseLocation', wrapper: 'promisify', group: 'geo' }, { name: 'openLocation', wrapper: 'promisify', group: 'geo' }, { name: 'createMapContext', wrapper: 'delegate', group: 'geo' }, { name: 'getSystemInfo', wrapper: 'promisify', group: 'device' }, { name: 'getSystemInfoSync', wrapper: 'delegate', group: 'device' }, { name: 'getNetworkType', wrapper: 'promisify', group: 'device' }, { name: 'onAccelerometerChange', wrapper: 'delegate', group: 'device' }, { name: 'onCompassChange', wrapper: 'delegate', group: 'device' }, { name: 'makePhoneCall', wrapper: 'promisify', group: 'device' }, { name: 'scanCode', wrapper: 'promisify', group: 'device' }, { name: 'showToast', wrapper: 'promisify', group: 'ui' }, { name: 'hideToast', wrapper: 'delegate', group: 'ui' }, { name: 'showModal', wrapper: 'promisify', group: 'ui' }, { name: 'showActionSheet', wrapper: 'promisify', group: 'ui' }, { name: 'setNavigationBarTitle', wrapper: 'promisify', group: 'ui' }, { name: 'showNavigationBarLoading', wrapper: 'delegate', group: 'ui' }, { name: 'hideNavigationBarLoading', wrapper: 'delegate', group: 'ui' }, { name: 'navigateTo', wrapper: 'promisify', group: 'ui' }, { name: 'redirectTo', wrapper: 'promisify', group: 'ui' }, { name: 'switchTab', wrapper: 'promisify', group: 'ui' }, { name: 'navigateBack', wrapper: 'delegate', group: 'ui' }, { name: 'createAnimation', wrapper: 'delegate', group: 'ui' }, { name: 'createCanvasContext', wrapper: 'delegate', group: 'ui' }, { name: 'createContext', wrapper: 'delegate', group: 'ui' }, { name: 'drawCanvas', wrapper: 'delegate', group: 'ui' }, { name: 'canvasToTempFilePath', wrapper: 'delegate', group: 'ui' }, { name: 'stopPullDownRefresh', wrapper: 'delegate', group: 'ui' }, { name: 'login', wrapper: 'promisify', group: 'auth' }, { name: 'checkSession', wrapper: 'promisify', group: 'auth' }, { name: 'getUserInfo', wrapper: 'promisify', group: 'auth' }, { name: 'requestPayment', wrapper: 'promisify', group: 'payment' }];

		module.exports = exports['default'];

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _promise = __webpack_require__(4);

		var _promise2 = _interopRequireDefault(_promise);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var resolveResponse = function resolveResponse() {
		  var response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		  return new _promise2.default(function (resolve, reject) {
		    if (response.statusCode >= 200 && response.statusCode < 300) {
		      resolve(response);
		    } else {
		      reject(response);
		    }
		  });
		};

		var promisify = function promisify(x, method) {
		  return function (argObj) {
		    var promise = new _promise2.default(function (resolve, reject) {
		      var options = Object.assign({}, argObj, {
		        success: resolve,
		        fail: reject,
		        complete: null
		      });
		      x[method](options);
		    });

		    return method === 'request' ? promise.then(resolveResponse) : promise;
		  };
		};

		var delegate = function delegate(x, method) {
		  return function () {
		    return x[method].apply(x, arguments);
		  };
		};

		exports.default = {
		  promisify: promisify,
		  delegate: delegate
		};
		module.exports = exports['default'];

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var Promise = __webpack_require__(5);

		// flag for inspector
		Promise.__polyfill__ = 'core-js';

		exports.default = Promise;
		module.exports = exports['default'];

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(6);
		__webpack_require__(7);
		__webpack_require__(51);
		__webpack_require__(55);
		module.exports = __webpack_require__(15).Promise;

	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $at  = __webpack_require__(8)(true);

		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(11)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(9)
		  , defined   = __webpack_require__(10);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};

	/***/ },
	/* 10 */
	/***/ function(module, exports) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var LIBRARY        = __webpack_require__(12)
		  , $export        = __webpack_require__(13)
		  , redefine       = __webpack_require__(28)
		  , hide           = __webpack_require__(18)
		  , has            = __webpack_require__(29)
		  , Iterators      = __webpack_require__(30)
		  , $iterCreate    = __webpack_require__(31)
		  , setToStringTag = __webpack_require__(47)
		  , getPrototypeOf = __webpack_require__(49)
		  , ITERATOR       = __webpack_require__(48)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';

		var returnThis = function(){ return this; };

		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
		    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
		    , methods, key, IteratorPrototype;
		  // Fix native
		  if($anyNative){
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
		    if(IteratorPrototype !== Object.prototype){
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if(DEF_VALUES && $native && $native.name !== VALUES){
		    VALUES_BUG = true;
		    $default = function values(){ return $native.call(this); };
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES ? $default : getMethod(VALUES),
		      keys:    IS_SET     ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};

	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		module.exports = true;

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(14)
		  , core      = __webpack_require__(15)
		  , ctx       = __webpack_require__(16)
		  , hide      = __webpack_require__(18)
		  , PROTOTYPE = 'prototype';

		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ },
	/* 15 */
	/***/ function(module, exports) {

		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(17);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var dP         = __webpack_require__(19)
		  , createDesc = __webpack_require__(27);
		module.exports = __webpack_require__(23) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var anObject       = __webpack_require__(20)
		  , IE8_DOM_DEFINE = __webpack_require__(22)
		  , toPrimitive    = __webpack_require__(26)
		  , dP             = Object.defineProperty;

		exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(21);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ },
	/* 21 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
		  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(24)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(21)
		  , document = __webpack_require__(14).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(21);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};

	/***/ },
	/* 27 */
	/***/ function(module, exports) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(18);

	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};

	/***/ },
	/* 30 */
	/***/ function(module, exports) {

		module.exports = {};

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var create         = __webpack_require__(32)
		  , descriptor     = __webpack_require__(27)
		  , setToStringTag = __webpack_require__(47)
		  , IteratorPrototype = {};

		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(18)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });

		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(20)
		  , dPs         = __webpack_require__(33)
		  , enumBugKeys = __webpack_require__(45)
		  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';

		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(25)('iframe')
		    , i      = enumBugKeys.length
		    , lt     = '<'
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(46).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};

		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};


	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var dP       = __webpack_require__(19)
		  , anObject = __webpack_require__(20)
		  , getKeys  = __webpack_require__(34);

		module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(35)
		  , enumBugKeys = __webpack_require__(45);

		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		var has          = __webpack_require__(29)
		  , toIObject    = __webpack_require__(36)
		  , arrayIndexOf = __webpack_require__(39)(false)
		  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(37)
		  , defined = __webpack_require__(10);
		module.exports = function(it){
		  return IObject(defined(it));
		};

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(38);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};

	/***/ },
	/* 38 */
	/***/ function(module, exports) {

		var toString = {}.toString;

		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(36)
		  , toLength  = __webpack_require__(40)
		  , toIndex   = __webpack_require__(41);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.15 ToLength
		var toInteger = __webpack_require__(9)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(9)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var shared = __webpack_require__(43)('keys')
		  , uid    = __webpack_require__(44);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var global = __webpack_require__(14)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ },
	/* 44 */
	/***/ function(module, exports) {

		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};

	/***/ },
	/* 45 */
	/***/ function(module, exports) {

		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');

	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(14).document && document.documentElement;

	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		var def = __webpack_require__(19).f
		  , has = __webpack_require__(29)
		  , TAG = __webpack_require__(48)('toStringTag');

		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		var store      = __webpack_require__(43)('wks')
		  , uid        = __webpack_require__(44)
		  , Symbol     = __webpack_require__(14).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';

		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};

		$exports.store = store;

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has         = __webpack_require__(29)
		  , toObject    = __webpack_require__(50)
		  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
		  , ObjectProto = Object.prototype;

		module.exports = Object.getPrototypeOf || function(O){
		  O = toObject(O);
		  if(has(O, IE_PROTO))return O[IE_PROTO];
		  if(typeof O.constructor == 'function' && O instanceof O.constructor){
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(10);
		module.exports = function(it){
		  return Object(defined(it));
		};

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(52);
		var global        = __webpack_require__(14)
		  , hide          = __webpack_require__(18)
		  , Iterators     = __webpack_require__(30)
		  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');

		for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
		  var NAME       = collections[i]
		    , Collection = global[NAME]
		    , proto      = Collection && Collection.prototype;
		  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
		  Iterators[NAME] = Iterators.Array;
		}

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var addToUnscopables = __webpack_require__(53)
		  , step             = __webpack_require__(54)
		  , Iterators        = __webpack_require__(30)
		  , toIObject        = __webpack_require__(36);

		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(11)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');

		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;

		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');

	/***/ },
	/* 53 */
	/***/ function(module, exports) {

		module.exports = function(){ /* empty */ };

	/***/ },
	/* 54 */
	/***/ function(module, exports) {

		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var LIBRARY            = __webpack_require__(12)
		  , global             = __webpack_require__(14)
		  , ctx                = __webpack_require__(16)
		  , classof            = __webpack_require__(56)
		  , $export            = __webpack_require__(13)
		  , isObject           = __webpack_require__(21)
		  , aFunction          = __webpack_require__(17)
		  , anInstance         = __webpack_require__(57)
		  , forOf              = __webpack_require__(58)
		  , speciesConstructor = __webpack_require__(62)
		  , task               = __webpack_require__(63).set
		  , microtask          = __webpack_require__(65)()
		  , PROMISE            = 'Promise'
		  , TypeError          = global.TypeError
		  , process            = global.process
		  , $Promise           = global[PROMISE]
		  , process            = global.process
		  , isNode             = classof(process) == 'process'
		  , empty              = function(){ /* empty */ }
		  , Internal, GenericPromiseCapability, Wrapper;

		var USE_NATIVE = !!function(){
		  try {
		    // correct subclassing with @@species support
		    var promise     = $Promise.resolve(1)
		      , FakePromise = (promise.constructor = {})[__webpack_require__(48)('species')] = function(exec){ exec(empty, empty); };
		    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
		    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
		  } catch(e){ /* empty */ }
		}();

		// helpers
		var sameConstructor = function(a, b){
		  // with library wrapper special case
		  return a === b || a === $Promise && b === Wrapper;
		};
		var isThenable = function(it){
		  var then;
		  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
		};
		var newPromiseCapability = function(C){
		  return sameConstructor($Promise, C)
		    ? new PromiseCapability(C)
		    : new GenericPromiseCapability(C);
		};
		var PromiseCapability = GenericPromiseCapability = function(C){
		  var resolve, reject;
		  this.promise = new C(function($$resolve, $$reject){
		    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
		    resolve = $$resolve;
		    reject  = $$reject;
		  });
		  this.resolve = aFunction(resolve);
		  this.reject  = aFunction(reject);
		};
		var perform = function(exec){
		  try {
		    exec();
		  } catch(e){
		    return {error: e};
		  }
		};
		var notify = function(promise, isReject){
		  if(promise._n)return;
		  promise._n = true;
		  var chain = promise._c;
		  microtask(function(){
		    var value = promise._v
		      , ok    = promise._s == 1
		      , i     = 0;
		    var run = function(reaction){
		      var handler = ok ? reaction.ok : reaction.fail
		        , resolve = reaction.resolve
		        , reject  = reaction.reject
		        , domain  = reaction.domain
		        , result, then;
		      try {
		        if(handler){
		          if(!ok){
		            if(promise._h == 2)onHandleUnhandled(promise);
		            promise._h = 1;
		          }
		          if(handler === true)result = value;
		          else {
		            if(domain)domain.enter();
		            result = handler(value);
		            if(domain)domain.exit();
		          }
		          if(result === reaction.promise){
		            reject(TypeError('Promise-chain cycle'));
		          } else if(then = isThenable(result)){
		            then.call(result, resolve, reject);
		          } else resolve(result);
		        } else reject(value);
		      } catch(e){
		        reject(e);
		      }
		    };
		    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
		    promise._c = [];
		    promise._n = false;
		    if(isReject && !promise._h)onUnhandled(promise);
		  });
		};
		var onUnhandled = function(promise){
		  task.call(global, function(){
		    var value = promise._v
		      , abrupt, handler, console;
		    if(isUnhandled(promise)){
		      abrupt = perform(function(){
		        if(isNode){
		          process.emit('unhandledRejection', value, promise);
		        } else if(handler = global.onunhandledrejection){
		          handler({promise: promise, reason: value});
		        } else if((console = global.console) && console.error){
		          console.error('Unhandled promise rejection', value);
		        }
		      });
		      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
		      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
		    } promise._a = undefined;
		    if(abrupt)throw abrupt.error;
		  });
		};
		var isUnhandled = function(promise){
		  if(promise._h == 1)return false;
		  var chain = promise._a || promise._c
		    , i     = 0
		    , reaction;
		  while(chain.length > i){
		    reaction = chain[i++];
		    if(reaction.fail || !isUnhandled(reaction.promise))return false;
		  } return true;
		};
		var onHandleUnhandled = function(promise){
		  task.call(global, function(){
		    var handler;
		    if(isNode){
		      process.emit('rejectionHandled', promise);
		    } else if(handler = global.onrejectionhandled){
		      handler({promise: promise, reason: promise._v});
		    }
		  });
		};
		var $reject = function(value){
		  var promise = this;
		  if(promise._d)return;
		  promise._d = true;
		  promise = promise._w || promise; // unwrap
		  promise._v = value;
		  promise._s = 2;
		  if(!promise._a)promise._a = promise._c.slice();
		  notify(promise, true);
		};
		var $resolve = function(value){
		  var promise = this
		    , then;
		  if(promise._d)return;
		  promise._d = true;
		  promise = promise._w || promise; // unwrap
		  try {
		    if(promise === value)throw TypeError("Promise can't be resolved itself");
		    if(then = isThenable(value)){
		      microtask(function(){
		        var wrapper = {_w: promise, _d: false}; // wrap
		        try {
		          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
		        } catch(e){
		          $reject.call(wrapper, e);
		        }
		      });
		    } else {
		      promise._v = value;
		      promise._s = 1;
		      notify(promise, false);
		    }
		  } catch(e){
		    $reject.call({_w: promise, _d: false}, e); // wrap
		  }
		};

		// constructor polyfill
		if(!USE_NATIVE){
		  // 25.4.3.1 Promise(executor)
		  $Promise = function Promise(executor){
		    anInstance(this, $Promise, PROMISE, '_h');
		    aFunction(executor);
		    Internal.call(this);
		    try {
		      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
		    } catch(err){
		      $reject.call(this, err);
		    }
		  };
		  Internal = function Promise(executor){
		    this._c = [];             // <- awaiting reactions
		    this._a = undefined;      // <- checked in isUnhandled reactions
		    this._s = 0;              // <- state
		    this._d = false;          // <- done
		    this._v = undefined;      // <- value
		    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
		    this._n = false;          // <- notify
		  };
		  Internal.prototype = __webpack_require__(66)($Promise.prototype, {
		    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
		    then: function then(onFulfilled, onRejected){
		      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
		      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
		      reaction.fail   = typeof onRejected == 'function' && onRejected;
		      reaction.domain = isNode ? process.domain : undefined;
		      this._c.push(reaction);
		      if(this._a)this._a.push(reaction);
		      if(this._s)notify(this, false);
		      return reaction.promise;
		    },
		    // 25.4.5.1 Promise.prototype.catch(onRejected)
		    'catch': function(onRejected){
		      return this.then(undefined, onRejected);
		    }
		  });
		  PromiseCapability = function(){
		    var promise  = new Internal;
		    this.promise = promise;
		    this.resolve = ctx($resolve, promise, 1);
		    this.reject  = ctx($reject, promise, 1);
		  };
		}

		$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
		__webpack_require__(47)($Promise, PROMISE);
		__webpack_require__(67)(PROMISE);
		Wrapper = __webpack_require__(15)[PROMISE];

		// statics
		$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
		  // 25.4.4.5 Promise.reject(r)
		  reject: function reject(r){
		    var capability = newPromiseCapability(this)
		      , $$reject   = capability.reject;
		    $$reject(r);
		    return capability.promise;
		  }
		});
		$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
		  // 25.4.4.6 Promise.resolve(x)
		  resolve: function resolve(x){
		    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
		    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
		    var capability = newPromiseCapability(this)
		      , $$resolve  = capability.resolve;
		    $$resolve(x);
		    return capability.promise;
		  }
		});
		$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(68)(function(iter){
		  $Promise.all(iter)['catch'](empty);
		})), PROMISE, {
		  // 25.4.4.1 Promise.all(iterable)
		  all: function all(iterable){
		    var C          = this
		      , capability = newPromiseCapability(C)
		      , resolve    = capability.resolve
		      , reject     = capability.reject;
		    var abrupt = perform(function(){
		      var values    = []
		        , index     = 0
		        , remaining = 1;
		      forOf(iterable, false, function(promise){
		        var $index        = index++
		          , alreadyCalled = false;
		        values.push(undefined);
		        remaining++;
		        C.resolve(promise).then(function(value){
		          if(alreadyCalled)return;
		          alreadyCalled  = true;
		          values[$index] = value;
		          --remaining || resolve(values);
		        }, reject);
		      });
		      --remaining || resolve(values);
		    });
		    if(abrupt)reject(abrupt.error);
		    return capability.promise;
		  },
		  // 25.4.4.4 Promise.race(iterable)
		  race: function race(iterable){
		    var C          = this
		      , capability = newPromiseCapability(C)
		      , reject     = capability.reject;
		    var abrupt = perform(function(){
		      forOf(iterable, false, function(promise){
		        C.resolve(promise).then(capability.resolve, reject);
		      });
		    });
		    if(abrupt)reject(abrupt.error);
		    return capability.promise;
		  }
		});

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(38)
		  , TAG = __webpack_require__(48)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

		// fallback for IE11 Script Access Denied error
		var tryGet = function(it, key){
		  try {
		    return it[key];
		  } catch(e){ /* empty */ }
		};

		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};

	/***/ },
	/* 57 */
	/***/ function(module, exports) {

		module.exports = function(it, Constructor, name, forbiddenField){
		  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
		    throw TypeError(name + ': incorrect invocation!');
		  } return it;
		};

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var ctx         = __webpack_require__(16)
		  , call        = __webpack_require__(59)
		  , isArrayIter = __webpack_require__(60)
		  , anObject    = __webpack_require__(20)
		  , toLength    = __webpack_require__(40)
		  , getIterFn   = __webpack_require__(61)
		  , BREAK       = {}
		  , RETURN      = {};
		var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
		  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
		    , f      = ctx(fn, that, entries ? 2 : 1)
		    , index  = 0
		    , length, step, iterator, result;
		  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
		  // fast case for arrays with default iterator
		  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
		    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
		    if(result === BREAK || result === RETURN)return result;
		  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
		    result = call(iterator, f, step.value, entries);
		    if(result === BREAK || result === RETURN)return result;
		  }
		};
		exports.BREAK  = BREAK;
		exports.RETURN = RETURN;

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		// call something on iterator step with safe closing on error
		var anObject = __webpack_require__(20);
		module.exports = function(iterator, fn, value, entries){
		  try {
		    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
		  // 7.4.6 IteratorClose(iterator, completion)
		  } catch(e){
		    var ret = iterator['return'];
		    if(ret !== undefined)anObject(ret.call(iterator));
		    throw e;
		  }
		};

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		// check on default Array iterator
		var Iterators  = __webpack_require__(30)
		  , ITERATOR   = __webpack_require__(48)('iterator')
		  , ArrayProto = Array.prototype;

		module.exports = function(it){
		  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
		};

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var classof   = __webpack_require__(56)
		  , ITERATOR  = __webpack_require__(48)('iterator')
		  , Iterators = __webpack_require__(30);
		module.exports = __webpack_require__(15).getIteratorMethod = function(it){
		  if(it != undefined)return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};

	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.3.20 SpeciesConstructor(O, defaultConstructor)
		var anObject  = __webpack_require__(20)
		  , aFunction = __webpack_require__(17)
		  , SPECIES   = __webpack_require__(48)('species');
		module.exports = function(O, D){
		  var C = anObject(O).constructor, S;
		  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
		};

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		var ctx                = __webpack_require__(16)
		  , invoke             = __webpack_require__(64)
		  , html               = __webpack_require__(46)
		  , cel                = __webpack_require__(25)
		  , global             = __webpack_require__(14)
		  , process            = global.process
		  , setTask            = global.setImmediate
		  , clearTask          = global.clearImmediate
		  , MessageChannel     = global.MessageChannel
		  , counter            = 0
		  , queue              = {}
		  , ONREADYSTATECHANGE = 'onreadystatechange'
		  , defer, channel, port;
		var run = function(){
		  var id = +this;
		  if(queue.hasOwnProperty(id)){
		    var fn = queue[id];
		    delete queue[id];
		    fn();
		  }
		};
		var listener = function(event){
		  run.call(event.data);
		};
		// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
		if(!setTask || !clearTask){
		  setTask = function setImmediate(fn){
		    var args = [], i = 1;
		    while(arguments.length > i)args.push(arguments[i++]);
		    queue[++counter] = function(){
		      invoke(typeof fn == 'function' ? fn : Function(fn), args);
		    };
		    defer(counter);
		    return counter;
		  };
		  clearTask = function clearImmediate(id){
		    delete queue[id];
		  };
		  // Node.js 0.8-
		  if(__webpack_require__(38)(process) == 'process'){
		    defer = function(id){
		      process.nextTick(ctx(run, id, 1));
		    };
		  // Browsers with MessageChannel, includes WebWorkers
		  } else if(MessageChannel){
		    channel = new MessageChannel;
		    port    = channel.port2;
		    channel.port1.onmessage = listener;
		    defer = ctx(port.postMessage, port, 1);
		  // Browsers with postMessage, skip WebWorkers
		  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
		  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
		    defer = function(id){
		      global.postMessage(id + '', '*');
		    };
		    global.addEventListener('message', listener, false);
		  // IE8-
		  } else if(ONREADYSTATECHANGE in cel('script')){
		    defer = function(id){
		      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
		        html.removeChild(this);
		        run.call(id);
		      };
		    };
		  // Rest old browsers
		  } else {
		    defer = function(id){
		      setTimeout(ctx(run, id, 1), 0);
		    };
		  }
		}
		module.exports = {
		  set:   setTask,
		  clear: clearTask
		};

	/***/ },
	/* 64 */
	/***/ function(module, exports) {

		// fast apply, http://jsperf.lnkit.com/fast-apply/5
		module.exports = function(fn, args, that){
		  var un = that === undefined;
		  switch(args.length){
		    case 0: return un ? fn()
		                      : fn.call(that);
		    case 1: return un ? fn(args[0])
		                      : fn.call(that, args[0]);
		    case 2: return un ? fn(args[0], args[1])
		                      : fn.call(that, args[0], args[1]);
		    case 3: return un ? fn(args[0], args[1], args[2])
		                      : fn.call(that, args[0], args[1], args[2]);
		    case 4: return un ? fn(args[0], args[1], args[2], args[3])
		                      : fn.call(that, args[0], args[1], args[2], args[3]);
		  } return              fn.apply(that, args);
		};

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(14)
		  , macrotask = __webpack_require__(63).set
		  , Observer  = global.MutationObserver || global.WebKitMutationObserver
		  , process   = global.process
		  , Promise   = global.Promise
		  , isNode    = __webpack_require__(38)(process) == 'process';

		module.exports = function(){
		  var head, last, notify;

		  var flush = function(){
		    var parent, fn;
		    if(isNode && (parent = process.domain))parent.exit();
		    while(head){
		      fn   = head.fn;
		      head = head.next;
		      try {
		        fn();
		      } catch(e){
		        if(head)notify();
		        else last = undefined;
		        throw e;
		      }
		    } last = undefined;
		    if(parent)parent.enter();
		  };

		  // Node.js
		  if(isNode){
		    notify = function(){
		      process.nextTick(flush);
		    };
		  // browsers with MutationObserver
		  } else if(Observer){
		    var toggle = true
		      , node   = document.createTextNode('');
		    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
		    notify = function(){
		      node.data = toggle = !toggle;
		    };
		  // environments with maybe non-completely correct, but existent Promise
		  } else if(Promise && Promise.resolve){
		    var promise = Promise.resolve();
		    notify = function(){
		      promise.then(flush);
		    };
		  // for other environments - macrotask based on:
		  // - setImmediate
		  // - MessageChannel
		  // - window.postMessag
		  // - onreadystatechange
		  // - setTimeout
		  } else {
		    notify = function(){
		      // strange IE + webpack dev server bug - use .call(global)
		      macrotask.call(global, flush);
		    };
		  }

		  return function(fn){
		    var task = {fn: fn, next: undefined};
		    if(last)last.next = task;
		    if(!head){
		      head = task;
		      notify();
		    } last = task;
		  };
		};

	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var hide = __webpack_require__(18);
		module.exports = function(target, src, safe){
		  for(var key in src){
		    if(safe && target[key])target[key] = src[key];
		    else hide(target, key, src[key]);
		  } return target;
		};

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var global      = __webpack_require__(14)
		  , core        = __webpack_require__(15)
		  , dP          = __webpack_require__(19)
		  , DESCRIPTORS = __webpack_require__(23)
		  , SPECIES     = __webpack_require__(48)('species');

		module.exports = function(KEY){
		  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
		  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
		    configurable: true,
		    get: function(){ return this; }
		  });
		};

	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {

		var ITERATOR     = __webpack_require__(48)('iterator')
		  , SAFE_CLOSING = false;

		try {
		  var riter = [7][ITERATOR]();
		  riter['return'] = function(){ SAFE_CLOSING = true; };
		  Array.from(riter, function(){ throw 2; });
		} catch(e){ /* empty */ }

		module.exports = function(exec, skipClosing){
		  if(!skipClosing && !SAFE_CLOSING)return false;
		  var safe = false;
		  try {
		    var arr  = [7]
		      , iter = arr[ITERATOR]();
		    iter.next = function(){ return {done: safe = true}; };
		    arr[ITERATOR] = function(){ return iter; };
		    exec(arr);
		  } catch(e){ /* empty */ }
		  return safe;
		};

	/***/ },
	/* 69 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		// req: wrapped wx.request
		var Http = function Http(req) {
		  return function (base) {
		    var baseUrl = (base + '/').replace(/\/+$/, '/');

		    var isObject = function isObject(obj) {
		      if (Object.prototype.toString.call(obj) !== '[object Object]') {
		        return false;
		      }
		      return Object.keys(obj).length > 0;
		    };

		    //TODO: nested object to query string
		    var toQueryString = function toQueryString(params) {
		      return Object.keys(params).reduce(function (mem, key) {
		        if (params[key]) {
		          mem.push(key + '=' + encodeURIComponent(params[key]));
		        }
		        return mem;
		      }, []).join('&');
		    };

		    var buildUrl = function buildUrl() {
		      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		      var url = '' + baseUrl + path.replace(/^\/+/, '');
		      if (isObject(params)) {
		        return url + '?' + toQueryString(params);
		      }
		      return url;
		    };

		    var requestWithParams = function requestWithParams(method) {
		      return function (path, params) {
		        var url = buildUrl(path, params);
		        return req[method](url);
		      };
		    };

		    var requestWithBody = function requestWithBody(method) {
		      return function (path, body) {
		        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		        var url = buildUrl(path, params);
		        return req[method](url, body);
		      };
		    };

		    return {
		      get: requestWithParams('get'),
		      post: requestWithBody('post'),
		      put: requestWithBody('put'),
		      patch: requestWithBody('patch'),
		      'delete': requestWithParams('delete'),
		      head: requestWithParams('head')
		    };
		  };
		};

		exports.default = Http;
		module.exports = exports['default'];

	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.requireAuth = exports.shortcutRequest = undefined;

		var _promise = __webpack_require__(4);

		var _promise2 = _interopRequireDefault(_promise);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var shortcut = function shortcut(request, method) {
		  return function (url, body, init) {
		    var config = {};
		    if (typeof body === 'function') {
		      init = body;
		      body = undefined;
		    }

		    if (['GET', 'HEAD', 'DELETE', 'TRACE', 'CONNECT'].indexOf(method) !== -1) {
		      body = undefined;
		    }

		    if (typeof init === 'function') {
		      Object.assign(config, init());
		    }

		    if (body !== undefined) {
		      Object.assign(config, { body: body });
		    }

		    var header = config.header;
		    var VERSION = ("0.2.1");

		    config.header = Object.assign({}, header, { 'X-Wrapped-With': 'v' + VERSION });
		    return request(Object.assign(config, { url: url, method: method }));
		  };
		};

		// to decorate promisified request function
		function shortcutRequest(req) {
		  req.get = shortcut(req, 'GET');
		  req.post = shortcut(req, 'POST');
		  req.put = shortcut(req, 'PUT');
		  req.patch = shortcut(req, 'PATCH');
		  req['delete'] = shortcut(req, 'DELETE');
		  req.options = shortcut(req, 'OPTIONS');
		  req.head = shortcut(req, 'HEAD');
		  req.trace = shortcut(req, 'TRACE');
		  req.connect = shortcut(req, 'CONNECT');
		  return req;
		}

		function requireAuth(login, getUserInfo) {
		  return function () {
		    return _promise2.default.all([login(), getUserInfo()]);
		  };
		}

		exports.shortcutRequest = shortcutRequest;
		exports.requireAuth = requireAuth;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else {
			var a = factory();
			for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
		}
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = undefined;

		var _connect = __webpack_require__(1);

		var _connect2 = _interopRequireDefault(_connect);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = _connect2.default;
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _utils = __webpack_require__(2);

		var subscription = null;
		var listeners = [];

		var createListener = function createListener(context, mapState, store) {
		  var prevState = void 0;
		  var listener = function listener(state) {
		    var nextState = mapState(state);
		    if (!prevState || !(0, _utils.shallowEqual)(nextState, prevState)) {
		      prevState = Object.assign({}, nextState);
		      context.onStateChange.call(context, nextState);
		    }
		  };

		  listener(store.getState()); // to sync init state
		  listener.isActive = true;
		  return listener;
		};

		var defaultMergeConfig = function defaultMergeConfig(config, overrides) {
		  return _extends({}, config, overrides);
		};

		var setupSubscription = function setupSubscription(store) {
		  if ((0, _utils.isFn)(subscription)) {
		    return subscription;
		  }
		  var callback = function callback() {
		    listeners.filter(function (fn) {
		      return fn.isActive;
		    }).forEach(function (fn) {
		      return fn(store.getState());
		    });
		  };
		  return subscription = store.subscribe(callback);
		};

		var injectChangeListenerStatus = function injectChangeListenerStatus(store, handler, listener, isActive) {
		  return function () {
		    if (listener) {
		      var prev = listener.isActive;
		      listener.isActive = isActive;
		      if (!prev && isActive) {
		        listener(store.getState());
		      }
		    }
		    return (0, _utils.callInContext)(handler, this, arguments);
		  };
		};

		var injectOnStateChange = function injectOnStateChange(handler) {
		  return function () {
		    return (0, _utils.callInContext)(handler, this, arguments);
		  };
		};

		var connect = function connect(store, mapState, mapDispatch) {
		  var resolveMapDispatch = function resolveMapDispatch() {
		    return (0, _utils.isFn)(mapDispatch) ? mapDispatch(store.dispatch) : {};
		  };

		  return function (injectLifeCycle, config) {
		    var mergedConfig = defaultMergeConfig(config, resolveMapDispatch());
		    if (!(0, _utils.isFn)(mapState)) {
		      return mergedConfig;
		    }

		    setupSubscription(store);
		    return _extends({}, mergedConfig, injectLifeCycle(mergedConfig, mapState));
		  };
		};

		var connectApp = function connectApp(store, mapState, mapDispatch) {
		  var factory = connect(store, mapState, mapDispatch);

		  var injectAppLifeCycle = function injectAppLifeCycle(config) {
		    var _onLaunch = config.onLaunch,
		        onShow = config.onShow,
		        onHide = config.onHide,
		        onStateChange = config.onStateChange;


		    return {
		      onLaunch: function onLaunch() {
		        var listener = createListener(this, mapState, store);
		        listener.index = listeners.push(listener) - 1;

		        this.onShow = injectChangeListenerStatus(store, onShow, listener, true);
		        this.onHide = injectChangeListenerStatus(store, onHide, listener, false);
		        return (0, _utils.callInContext)(_onLaunch, this, arguments);
		      },
		      onShow: (0, _utils.isFn)(onShow) ? onShow : _utils.noop,
		      onHide: (0, _utils.isFn)(onHide) ? onHide : _utils.noop,
		      onStateChange: injectOnStateChange(onStateChange)
		    };
		  };

		  return function (config) {
		    return factory(injectAppLifeCycle, config);
		  };
		};

		var connectPage = function connectPage(store, mapState, mapDispatch) {
		  var factory = connect(store, mapState, mapDispatch);

		  var injectPageLifeCycle = function injectPageLifeCycle(config) {
		    var _onLoad = config.onLoad,
		        onUnload = config.onUnload,
		        onShow = config.onShow,
		        onHide = config.onHide,
		        onStateChange = config.onStateChange;


		    return {
		      onLoad: function onLoad() {
		        var listener = createListener(this, mapState, store);
		        listener.index = listeners.push(listener) - 1;

		        this.onUnload = function () {
		          listeners.splice(listener.index, 1);
		          return (0, _utils.callInContext)(onUnload, this, arguments);
		        };

		        this.onShow = injectChangeListenerStatus(store, onShow, listener, true);
		        this.onHide = injectChangeListenerStatus(store, onHide, listener, false);
		        return (0, _utils.callInContext)(_onLoad, this, arguments);
		      },

		      onUnload: (0, _utils.isFn)(onUnload) ? onUnload : _utils.noop,
		      onShow: (0, _utils.isFn)(onShow) ? onShow : _utils.noop,
		      onHide: (0, _utils.isFn)(onHide) ? onHide : _utils.noop,
		      onStateChange: injectOnStateChange(onStateChange)
		    };
		  };

		  return function (config) {
		    return factory(injectPageLifeCycle, config);
		  };
		};

		exports.default = {
		  App: connectApp,
		  Page: connectPage
		};
		module.exports = exports['default'];

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

		var proto = Object.prototype;
		var hasOwnProp = proto.hasOwnProperty;

		var noop = function noop() {};

		var isFn = function isFn(fn) {
		  return 'function' === typeof fn;
		};

		var shallowEqual = function shallowEqual(a, b) {
		  if (a === b) {
		    return true;
		  }

		  var na = 0,
		      nb = 0;

		  for (var k in a) {
		    if (hasOwnProp.call(a, k) && a[k] !== b[k]) {
		      return false;
		    }
		    na++;
		  }

		  for (var _k in b) {
		    if (hasOwnProp.call(b, _k)) {
		      nb++;
		    }
		  }

		  return na === nb;
		};

		var callInContext = function callInContext(fn, context) {
		  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		    args[_key - 2] = arguments[_key];
		  }

		  if (!isFn(fn)) return;
		  if (Object.prototype.toString.call(args[0]) === '[object Arguments]') {
		    return fn.call.apply(fn, [context].concat(_toConsumableArray([].slice.call(args[0]))));
		  }
		  return fn.call.apply(fn, [context].concat(args));
		};

		exports.isFn = isFn;
		exports.noop = noop;
		exports.shallowEqual = shallowEqual;
		exports.callInContext = callInContext;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return (0, _redux.createStore)(_reducers2.default, initState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	};

	var _redux = __webpack_require__(1);

	var _reduxThunk = __webpack_require__(25);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(26);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(1);

	// 处理projects逻辑
	var projects = function projects() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case "PROJECTS_LOADED":
	      // state.concat[action.payload]
	      return state.concat(action.payload);
	    //other cases
	  }
	  return state;
	};

	// 将多个reducer合并起来
	// 这里就可以看出store的结构了, 是不是很 predictable ?
	exports.default = (0, _redux.combineReducers)({
	  projects: projects
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _weappNext = __webpack_require__(22);

	var _weappNext2 = _interopRequireDefault(_weappNext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _weapp = (0, _weappNext2.default)(wx),
	    Http = _weapp.Http;
	// 更好的方法是定义一个api module, 来处理网络请求


	var http = Http('https://api.github.com');

	// 这是一个异步action, redux-thunk会处理返回值为Function的action(可以编入绕口令大全了~~)
	var loadProjects = function loadProjects(org) {
	  return function (dispatch) {

	    http.get('/orgs/' + org + '/repos').then(function (response) {
	      // 让store去广播'PROJECTS_LOADED'这件事情发生了
	      dispatch({
	        type: 'PROJECTS_LOADED',
	        payload: response.data
	      });
	    });
	  };
	};
	exports.default = { loadProjects: loadProjects };

/***/ }
/******/ ])
});
;