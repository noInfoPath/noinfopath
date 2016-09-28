/*
 * # NoInfoPath
 * @version 2.0.6
*/

//Establish global namespace
var noInfoPath = {};

(function(angular, undefined){
	angular.module("noinfopath", ["PubSub"]);

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

	function createUUID() {
        // Decent solution from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
        var d = Date.now();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    }

	function createNoid(){
		var noid = createUUID();
		return "NOID" + noid.replace(/-/g, "");
	}

	function isNoid(val) {
		return /^[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}$/.test(val);
	}

	function sanitize(val) {
		return (val+"").replace(/^\d+|\W\d+|[ _.;,!"'/$]/g, '');
	}

	function resolveParams(taskParams, scope) {
		var params = [];

		if(taskParams) {

			for(var p = 0; p < taskParams.length; p++) {
				var param = taskParams[p];

				if(angular.isObject(param)) {
					var prov = param.provider === "scope" ? scope : $injector.get(param.provider),
						meth = param.method ? prov[param.method] : undefined,
						prop = param.property ? noInfoPath.getItem(prov, param.property) : undefined;
					if(prop) {
						params.push(prop);
					} else if(meth) {
						params.push(meth());
					} else {
						params.push(prov);
					}
				} else {
					params.push(param);
				}
			}
		}

		return params;
	}

	noInfoPath.createNoid = createNoid;
	noInfoPath.isNoid = isNoid;
	noInfoPath.isGuid = isGuid;
	noInfoPath.createUUID = createUUID;
	noInfoPath.sanitize = sanitize;
	noInfoPath.resolveParams = resolveParams;
})(angular);

//pubsub.js
//
//	Code borrowed from angular-pubsub.  Using copy pasta method because I want
//	make this code to NoInfoPath without having to require it.
//
//	Original Copyright follows:
//
// The MIT License (MIT)
//
// Copyright (c) 2016 George Raptis
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(function (module) {
	'use strict';

	module('noinfopath')
		.factory('PubSub', ['$timeout', function ($timeout) {
			/**
			 * Alias a method while keeping the context correct,
			 * to allow for overwriting of target method.
			 *
			 * @private
			 * @this {PubSub}
			 * @param {String} fn The name of the target method.
			 * @return {function} The aliased method.
			 */
			function alias(fn) {
				return function closure() {
					return this[fn].apply(this, arguments);
				};
			}

			var PubSub = {
				topics: {}, // Storage for topics that can be broadcast or listened to.
				subUid: -1 // A topic identifier.
			};

			/**
			 * Subscribe to events of interest with a specific topic name and a
			 * callback function, to be executed when the topic/event is observed.
			 *
			 * @this {PubSub}
			 * @param {String} topic The topic name.
			 * @param {function} callback Callback function to execute on event, taking two arguments:
			 *        - {*} data The data passed when publishing an event
			 *        - {Object} topic  The topic's info (name & token)
			 * @param {Boolean} [once=false] Checks if event will be triggered only one time.
			 * @return {Number} The topic's token.
			 */
			PubSub.subscribe = function (topic, callback, once) {
				var token = this.subUid += 1,
					obj = {};

				if(typeof callback !== 'function') {
					throw new TypeError('When subscribing for an event, a callback function must be defined.');
				}

				if(!this.topics[topic]) {
					this.topics[topic] = [];
				}

				obj.token = token;
				obj.callback = callback;
				obj.once = !!once;

				this.topics[topic].push(obj);

				return token;
			};

			/**
			 * Subscribe to events of interest setting a flag
			 * indicating the event will be published only one time.
			 *
			 * @this {PubSub}
			 * @param {String} topic The topic's name.
			 * @param {function} callback Callback function to execute on event, taking two arguments:
			 *        - {*} data The data passed when publishing an event
			 *        - {Object} topic The topic's info (name & token)
			 * @return {Number} The topic's token.
			 */
			PubSub.subscribeOnce = function (topic, callback) {
				return this.subscribe(topic, callback, true);
			};

			/**
			 * Publish or broadcast events of interest with a specific
			 * topic name and arguments such as the data to pass along.
			 *
			 * @this {PubSub}
			 * @param {String} topic The topic's name.
			 * @param {*} [data] The data to be passed.
			 * @return {Boolean} True if topic exists and event is published; otherwise false.
			 */
			PubSub.publish = function (topic, data) {
				var that = this,
					len, subscribers, currentSubscriber, token;

				if(!this.topics[topic]) {
					return false;
				}

				$timeout(function () {
					subscribers = that.topics[topic];
					len = subscribers ? subscribers.length : 0;

					while(len) {
						len -= 1;
						token = subscribers[len].token;
						currentSubscriber = subscribers[len];

						currentSubscriber.callback(data, {
							name: topic,
							token: token
						});

						// Unsubscribe from event based on tokenized reference,
						// if subscriber's property once is set to true.
						if(currentSubscriber.once === true) {
							that.unsubscribe(token);
						}
					}
				}, 0);

				return true;
			};

			/**
			 * Unsubscribe from a specific topic, based on the topic name,
			 * or based on a tokenized reference to the subscription.
			 *
			 * @this {PubSub}
			 * @param {String|Object} topic Topic's name or subscription referenece.
			 * @return {Boolean|String} False if `topic` does not match a subscribed event, else the topic's name.
			 */
			PubSub.unsubscribe = function (topic) {
				var tf = false,
					prop, len;

				for(prop in this.topics) {
					if(Object.hasOwnProperty.call(this.topics, prop)) {
						if(this.topics[prop]) {
							len = this.topics[prop].length;

							while(len) {
								len -= 1;

								// If t is a tokenized reference to the subscription.
								// Removes one subscription from the array.
								if(this.topics[prop][len].token === topic) {
									this.topics[prop].splice(len, 1);
									return topic;
								}

								// If t is the event type.
								// Removes all the subscriptions that match the event type.
								if(prop === topic) {
									this.topics[prop].splice(len, 1);
									tf = true;
								}
							}

							if(tf === true) {
								return topic;
							}
						}
					}
				}

				return false;
			};

			// Alias for public methods.
			PubSub.on = alias('subscribe');
			PubSub.once = alias('subscribeOnce');
			PubSub.trigger = alias('publish');
			PubSub.off = alias('unsubscribe');

			return PubSub;
  }]);
})(angular.module);
