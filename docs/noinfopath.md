# NoInfoPath
@version 2.0.6

Alias a method while keeping the context correct,
to allow for overwriting of target method.

@private
@this {PubSub}
@param {String} fn The name of the target method.
@return {function} The aliased method.

Subscribe to events of interest with a specific topic name and a
callback function, to be executed when the topic/event is observed.

@this {PubSub}
@param {String} topic The topic name.
@param {function} callback Callback function to execute on event, taking two arguments:
       - {*} data The data passed when publishing an event
       - {Object} topic  The topic's info (name & token)
@param {Boolean} [once=false] Checks if event will be triggered only one time.
@return {Number} The topic's token.

Subscribe to events of interest setting a flag
indicating the event will be published only one time.

@this {PubSub}
@param {String} topic The topic's name.
@param {function} callback Callback function to execute on event, taking two arguments:
       - {*} data The data passed when publishing an event
       - {Object} topic The topic's info (name & token)
@return {Number} The topic's token.

Publish or broadcast events of interest with a specific
topic name and arguments such as the data to pass along.

@this {PubSub}
@param {String} topic The topic's name.
@param {*} [data] The data to be passed.
@return {Boolean} True if topic exists and event is published; otherwise false.

Unsubscribe from a specific topic, based on the topic name,
or based on a tokenized reference to the subscription.

@this {PubSub}
@param {String|Object} topic Topic's name or subscription referenece.
@return {Boolean|String} False if `topic` does not match a subscribed event, else the topic's name.

