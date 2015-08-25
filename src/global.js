/*
 * # NoInfoPath
 * @version 0.2.4
*/

//Establish global namespace
var noInfoPath = {};

(function(angular, undefined){
	angular.module("noinfopath", []);

	/*jslint devel: true, indent: 2 */
	// 15.2.3.2
	if (!Object.setPrototypeOf) {
	  Object.setPrototypeOf = (function(Object, magic) {
	    'use strict';
	    var set;
	    function checkArgs(O, proto) {
	      if (typeof O !== 'object' || O === null) {
	        throw new TypeError('can not set prototype on a non-object');
	      }
	      if (typeof proto !== 'object' && proto !== null) {
	        throw new TypeError('can only set prototype to an object or null');
	      }
	    }
	    function setPrototypeOf(O, proto) {
	      checkArgs(O, proto);
	      set.call(O, proto);
	      return O;
	    }
	    try {
	      // this works already in Firefox and Safari
	      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	      set.call({}, null);
	    } catch (o_O) {
	      if (
	        // IE < 11 cannot be shimmed
	        Object.prototype !== {}[magic] ||
	        // neither can any browser that actually
	        // implemented __proto__ correctly
	        // (all but old V8 will return here)
	        {__proto__:null}.__proto__ === void 0
	        // this case means null objects cannot be passed
	        // through setPrototypeOf in a reliable way
	        // which means here a **Sham** is needed instead
	      ) {
	        return;
	      }
	      // nodejs 0.8 and 0.10 are (buggy and..) fine here
	      // probably Chrome or some old Mobile stock browser
	      set = function(proto) {
	        this[magic] = proto;
	      };
	      // please note that this will **not** work
	      // in those browsers that do not inherit
	      // __proto__ by mistake from Object.prototype
	      // in these cases we should probably throw an error
	      // or at least be informed about the issue
	      setPrototypeOf.polyfill = setPrototypeOf(
	        setPrototypeOf({}, null),
	        Object.prototype
	      ) instanceof Object;
	      // setPrototypeOf.polyfill === true means it works as meant
	      // setPrototypeOf.polyfill === false means it's not 100% reliable
	      // setPrototypeOf.polyfill === undefined
	      // or
	      // setPrototypeOf.polyfill ==  null means it's not a polyfill
	      // which means it works as expected
	      // we can even delete Object.prototype.__proto__;
	    }
	    return setPrototypeOf;
	  }(Object, '__proto__'));
	}
	noInfoPath.setPrototypeOf = Object.setPrototypeOf;

	function isGuid(val){
		return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(val);
	}

	noInfoPath.isGuid = isGuid;
})(angular);
