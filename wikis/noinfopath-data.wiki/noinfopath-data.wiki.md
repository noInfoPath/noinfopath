# noinfopath-data
@version 0.2.8

## Overview
NoInfoPath data provides several services to access data from local storage or remote XHR or WebSocket data services.

[![Build Status](http://192.168.254.99:8081/job/noinfopath-data/badge/icon)](http://192.168.254.99:8081/job/noinfopath-data)

## Dependencies

- AngularJS
- jQuery
- ngLodash
- Dexie
- Dexie Observable
- Dexie Syncable

## Development Dependencies

> See `package.json` for exact version requirements.

- indexedDB.polyfill
- angular-mocks
- es5-shim
- grunt
- grunt-bumpup
- grunt-version
- grunt-contrib-concat
- grunt-contrib-copy
- grunt-contrib-watch
- grunt-karma
- jasmine-ajax
- jasmine-core
- jshint-stylish
- karma
- karma-chrome-launcher
- karma-coverage
- karma-firefox-launcher
- karma-html-reporter
- karma-ie-launcher
- karma-jasmine
- karma-phantomjs-launcher
- karma-safari-launcher
- karma-verbose-reporter
- noinfopath-helpers
- phantomjs

## Developers' Remarks

|Who|When|What|
|---|----|----|
|Jeff|2015-06-20T22:25:00Z|Whaaat?|

## @interface noInfoPath

### Overview
This interface exposes some useful funtions on the global scope
by attaching it to the `window` object as ```window.noInfoPath```

### Methods

#### getItem

#### setItem

#### bindFilters `deprecated`

#### noFilter `deprecated`

#### noFilterExpression `deprecated`

#### noDataReadRequest `deprecated`

#### noDataSource `deprecated`

#### digest `deprecated`

#### digestError `deprecated`

#### digestTimeout `deprecated`

## @service noDataService `deprecated`


## @class NoFilterExpression : Object

Represents an single filter expression that can be applied to an `IDBObjectStore`.

### Constructor

NoFilterExpression(column, operator, value [, logic])

|Name|Type|Description|
|----|----|-----------|
|column|String|The name of the column filter on.|
|operator|String|One of the following values: `eq`, `ne`, `gt`, `ge`, `lt`, `le`, `contains`, `startswith`|
|value|Any Primative or Array of Primatives or Objects | The vales to filter against.|
|logic|String|(Optional) One of the following values: `and`, `or`.|

### Properties

|Name|Type|Description|
|----|----|------------|
|column|String|The name of the column filter on.|
|operator|String|One of the following values: `eq`, `ne`, `gt`, `ge`, `lt`, `le`, `contains`, `startswith`|
|value|Any Primative or Array of Primatives or Objects | The vales to filter against.|
|logic|String|(Optional) One of the following values: `and`, `or`.|

## Class NoFilters : Array

NoFilters is an array of NoFilter objects.

### Constructors

####NoFilters()

##### Usage

```js
var x = new noInfoPath.data.NoFilters()
```

### Properties

|Name|Type|Description|
|----|----|------------|
|length|Number|Number of elements in the array.|

### Methods

#### add(column, logic, beginning, end, filters)

Creates and adds a new NoFilter into the underlying array that NoFilters represents.

##### Parameters

|Name|Type|Description|
|----|----|------------|
|column|String|The name of the column to filter on.|
|logic|String|One of the following values: 'and', 'or'|
|beginning|Boolean|If the NoFilter is the beginning of the filter expression|
|end|Boolean|If the NoFilter is the end of the filter expression|
|filters|Array|Array of NoFilterExpressions|

#### toSQL()

Converts the NoFilters array to a partial SQL statement. It calls the toSQL() method on every NoFilter object within the NoFilters array.

##### Parameters

None

## Class NoFilter : Object

NoFilter is an object with some properties that has an array of NoFilterExpressions hanging off of it.

### Properties

|Name|Type|Description|
|----|----|------------|
|column|String|The column that will be filtered on|
|logic|String|One of the following values: 'and', 'or'|
|beginning|Boolean|If the NoFilter is the beginning of the filter expression|
|end|Boolean|If the NoFilter is the end of the filter expression|
|filters|Array|Array of NoFilterExpressions|

### Methods

#### toSQL()

Converts the current NoFilter object to a partial SQL statement. It calls the NoFilterExpression toSQL() method for every NoFilterExpression within the filters array.

#### Parameters

|Name|Type|Description|
|----|----|------------|
|column|String|The name of the column filter on.|
|operator|String|One of the following values: `eq`, `ne`, `gt`, `ge`, `lt`, `le`, `contains`, `startswith`|
|value|Any Primative or Array of Primatives or Objects | The vales to filter against.|
|logic|String|(Optional) One of the following values: `and`, `or`.|

## Class NoFilter : Object

NoFilter is an object with some properties that has an array of NoFilterExpressions hanging off of it.

### Properties

|Name|Type|Description|
|----|----|------------|
|length|Number|Number of elements in the array.|

### Methods

#### toSQL()

Converts the current NoFilter object to a partial SQL statement. It calls the NoFilterExpression toSQL() method for every NoFilterExpression

#### Parameters

|Name|Type|Description|
|----|----|------------|
|column|String|The name of the column filter on.|
|operator|String|One of the following values: `eq`, `ne`, `gt`, `ge`, `lt`, `le`, `contains`, `startswith`|
|value|Any Primative or Array of Primatives or Objects | The vales to filter against.|
|logic|String|(Optional) One of the following values: `and`, `or`.|

## Class NoSortExpression : Object

Represents a single sort expression that can be applied to an `IDBObjectStore`.

### Constructor

NoFilterExpression(column[, dir])

### Properties

|Name|Type|Description|
|----|----|------------|
|column|String|The name of the column filter on.|
|dir|String|(Optional) One of the following values: `asc`, `desc`.|

## Class NoSort : Array

NoSort is an array of NoSortExpression objects.

### Properties

|Name|Type|Description|
|----|----|------------|
|length|Number|Number of elements in the array.|

### Methods

#### add(column[, dir])

Creates and adds a new NoSortExpression into the underlying array that NoSort represents.

#### Parameters

|Name|Type|Description|
|----|----|------------|
|column|String|The name of the column filter on.|
|dir|String|(Optional) One of the following values: `asc`, `desc`.|

## Class NoPage : Object

NoPage represent that information required to support paging of a data set.

### Constructor

NoPage(skip, take)

### Properties

|Name|Type|Description|
|-|-|-|
|skip|Number|Number of objects to skip before returning the desired amount specified in `take`.|
|take|Number|Number of objects records to return when paging data.|


## Class NoResults : Object

NoResults is a wrapper around a standard JavaScript Array instance. It inherits all properties and method offered by Array, but adds support for paged queries.

### @constructor NoResults(arrayOfThings)

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|arrayOfThings|Array|(optional) An array of object that is used to populate the object on creation.|

### Properties

> Inherited properties are omitted.

|Name|Type|Description|
|-|-|-|
|total|Number|The total number of items in the array|

### Methods

#### page(options)

##### Parameters

|Name|Type|Description|
|-|-|-|
|options|NoPage|A NoPage object that contains the paging instructions|

##### Parameters

|Name|Type|Description|
|-|-|-|
|arrayOfThings|Array|(optional) An array of object that is used to populate the object on creation.|

##### Returns
void

## @interface INoQueryBuilder

> INoQueryBuilder is a conceptual entity, it does not really exist
> the reality. This is because JavaScript does not implement interfaces
> like other languages do. This documentation should be considered as a
> guide for creating query providers compatible with NoInfoPath.

### Overview
INoQueryBuilder provides a service interface definition for converting a set
of NoInfoPath class related to querying data into a given query protocol.
An example of this is the ODATA 2.0 specification.

### Methods

#### makeQuery(filters, sort, page)

##### Parameters

|Name|Type|Descriptions|
|----|----|------------|
|filters|NoFilters|(Optional) Instance of a NoFilters class|
|sort|NoSort|(Optional) Instance of NoSort class|
|page|NoPage|(Optional) Instance of NoPage class|

##### Returns
Object


## @service noOdataQueryBuilder : INoQueryBuilder

### Overview

Implements a INoQueryBuilder compatible service that converts NoFilters,
NoSort, NoPage into ODATA compatible query object.


### @class MockStorage

### @class NoStorage

## @service noConfig

### Overview
The noConfig service downloads the application's `config.json` and
exposes its contents via the `noConfig.current` property. If the
application's server is offline noConfig will try to load config.json
from `LocalStorage`.

### Properties

|Name|Type|Description|
|----|----|-----------|
|current|object|exposes the entire download `config.json`|

### Methods

#### fromCache()
Loads the configuration from `LocalStorage`.

##### Parameters
none

##### Returns
String

#### load(uri)
Loads the conifiguration data from and HTTP endpoint.

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|uri|string|(optional) A relative or fully qualified location of the configuration file. If not provided the default value is ```/config.json```|

##### Returns
AngularJS::promise

#### whenReady(uri)
Returns a promise to notify when the configuration has been loaded.
If the server is online, whenReady will call load, if not it will try
to load it from `LocalStorage`. If there is no cached version
available then an error is returned.

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|uri|string|(optional)A relative or fully qualified location of the configuration file. If not provided the default value is ```/config.json```|

##### Returns
AngularJS::promise


## @service noHTTP

### Overview
Provides a RESTful compatible HTTP service.

### Methods

#### create(uri, data)

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|uri|string|unique identifier of the table to operate against|
|data|object|the data to use to create the new obejct in the db|

#### read(resourceURI, query)

#### update(resourceURI, formdata)
TODO: Implementation required.

#### destroy(resourceURI, formdata)
TODO: Implementation required.

### @class NoDb

#### Overview

Creates and manages a set of NoTable objects.

#### @constructor NoDb(tables, queryBuilder)

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|tables|object|A hash object that contains a collection of table configuration as provided by noDbScema|
|queryBuilder|function|a reference to a function that compiles supplied NoFilters, NoSort, and NoPage objects into a query object compatible with the upstream provider.|


### @class NoTable

#### Overview

Provides an interface that loosely matches that of the NoTable
class provided by noDexie.  This to ease the integration with
NoInfoPath component that consume data such as noKendo.

#### @constructor NoTable(tableName, queryBuilder)

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|tableName|string|name of the table that this instance will interact with.|
|queryBuilder|function|a reference to a function that compiles supplied NoFilters, NoSort, and NoPage objects into a query object compatible with the upstream provider.|

## noDbSchema
he noDbSchema service provides access to the database configuration that defines how to configure the local IndexedDB data store.

### Properties


|Name|Type|Description|
|----|----|-----------|
|store|Object|A hash table compatible with Dexie::store method that is used to configure the database.|
|tables|Object|A hash table of NoInfoPath database schema definitions|
|isReady|Boolean|Returns true if the size of the tables object is greater than zero|

### Methods


#### _processDbJson
Converts the schema received from the noinfopath-rest service and converts it to a Dexie compatible object.


##### Parameters
|Name|Type|Descriptions|
|resp|Object|The raw HTTP response received from the noinfopath-rest service|

### load()
Loads and processes the database schema from the noinfopath-rest service.


#### Returns
AngularJS::Promise

### whenReady
whenReady is used to check if this service has completed its load phase. If it has not is calls the internal load method.


#### Returns
AngularJS::Promise

## @interface INoQueryBuilder

> INoQueryBuilder is a conceptual entity, it does not really exist
> the reality. This is because JavaScript does not implement interfaces
> like other languages do. This documentation should be considered as a
> guide for creating query providers compatible with NoInfoPath.

### Overview
INoQueryBuilder provides a service interface definition for converting a set
of NoInfoPath class related to querying data into a given query protocol.
An example of this is the ODATA 2.0 specification.

### Methods

#### makeQuery(filters, sort, page)

##### Parameters

|Name|Type|Descriptions|
|----|----|------------|
|filters|NoFilters|(Optional) Instance of a NoFilters class|
|sort|NoSort|(Optional) Instance of NoSort class|
|page|NoPage|(Optional) Instance of NoPage class|

##### Returns
Object


## @service noSQLQueryBuilder : INoQueryBuilder

### Overview

Implements a INoQueryBuilder compatible service that converts NoFilters,
NoSort, NoPage into a WebSQL compatible query string.


<<<<<<< HEAD
## noDb
The noDb factory creates and configures a new instance of Dexie.  Dexie is a wrapper about IndexedDB.  noDb is a Dexie AddOn that extends the query capabilites of Dexie.
=======
### createTable(tableName, table)

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|tableName|String|The table's name|
|table|Object|The table schema|

### _getOne(rowid)

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|rowid|Number or Object| When a number assume that you are filtering on "rowId". When an Object the object will have a key, and value property.|

### _exec(sqlExpressionData)

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|sqlExpressionData|Object|An object with two properties, queryString and valueArray. queryString is the SQL statement that will be executed, and the valueArray is the array of values for the replacement variables within the queryString.|

### webSqlOperation(operation, noTransaction, data)

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|operation|String|Either a "C" "U" or "D"|
|noTransaction|Object|The noTransaction object that will commit changes to the NoInfoPath changes table for data synchronization|
|data|Object|Name Value Pairs|

### noCreate(data, noTransaction)

Inserts a record into the websql database with the data provided.

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|data|Object|Name Value Pairs|
|noTransaction|Object|The noTransaction object that will commit changes to the NoInfoPath changes table for data synchronization|

### noRead([NoFilters, NoSort, NoPage])

Reads records from the websql database.

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|NoFilters|Object|(Optional) A noInfoPath NoFilters Array|
|NoSort|Object|(Optional) A noInfoPath NoSort Object|
|NoPage|Object|(Optional) A noInfoPath NoPage Object|

### noUpdate(data, noTransaction)

Updates a record from the websql database based on the Primary Key of the data provided.

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|data|Object|Name Value Pairs|
|noTransaction|Object|The noTransaction object that will commit changes to the NoInfoPath changes table for data synchronization|

### noDestroy(data, noTransaction)

Deletes a record from the websql database based on the Primary Key of the data provided.

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|data|Object|Name Value Pairs|
|noTransaction|Object|The noTransaction object that will commit changes to the NoInfoPath changes table for data synchronization|

### noOne(data)

Reads a record from the websql database based on the Primary Key of the data provided.

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|data|Object|Name Value Pairs|
>>>>>>> cb46a89fd69da5d4b4385e0374c081e552ba367b

### Class noDatum
This is a contructor function used by Dexie when creating and returning data objects.

### Class noDexie
This is the classed used to construct the Dexie AddOn.

#### noCreate
Adds a new record to the database. If the primary key is provided in that will be used when adding otherwise a new UUID will be created by Dexie.


##### Parameters


|Name|Type|Description|
|data|Object|An object contains the properties that match the schema for the underlying WriteableTable.


##### Returns
AngularJS:Promise

#### noRead


The read operation takes a complex set of parameters that allow
for filtering, sorting and paging of data.


##### Parameters


|Name|Type|Descriptions|
|----|----|------------|
|filters|NoFilters|(Optional) Any `NofilterExpression` objects that need to be applied to the the current table.|
|sort|NoSort|(Optional) Any `NoSortExpression` objects that need to be applied to the result set. The will be applied in the order supplied.|
|page|NoPage|(Optional) Paging information, if paging is reqired by the read operation.|


##### Returns
AngularJS::Promise

#### Internal Values


|Name|Type|Description|
|------|-----|-------------|
|deferred|$q::deferred|An AngularJS deferment object that is used to return a Promise.|
|_resolve|Function|Call to resolve `Dexie::Promise` upon successful completion of `_applyFilters()`. This function is returned while resolving the underlying IDBObjectStore from the `table` parameter.|
|_reject|Function|Call to resolve the `Dexie::Promise` when an unexpected for un recoverable error occurs during processing.|
|_store|IDBObjectStore|This underlying `IDBObjectStore` that the `table` parameter represents.|
|_trans|IDBTransaction|This is the underlying `IDBTransaction` that the current object store is bound to.|

##### nonIndexedOperators
This hash table allows for quick access to the operations that can be applied to a property on a target object and the value(s) being filtered on.


NOTE:  The "a" parameter will always be the value tested, and "b" will always be the value being filter for.

#### _applyFilters
This function develops an array of objects that has had all of the filters provided in the original request applied to them.  The schema matches the schema of the `table` parameter.


##### Parameters


|Name|Type|Description|
|----|----|------|
|iNofilters|[iNoFilterExpression]|An array of filter expressions. Contains both indexed and non-indexed filters|
|table|Dexie::Table|A reference to the `Dexie::Table` being filtered.


##### Internal variables


|Name|Type|Description|
|------|-----|-------------|
|deferred|$q::deferred|An AngularJS deferment object that is used to return a Promise.|
|iNoFilterHash|Collection<iNoFilters>|Used to organize the filters received in the `iNoFilters` in to a set of indexed and non-indexed filter object The collection is created by a call to `_sortOutFilters()`.|
|resultsKeys|Array\<guid\>|This will be use to collect the final set of results. It will be an array of keys that will be used to query the final result set.|


##### Returns
AngularJS::Promise (Maybe)

### _recurseIndexedFilters

### _filterByPrimaryKey  -- Being Deprecated


This method of of filterig goes against the `IDBObjectStore`'s primary key.

### _filterByIndex


This method of filtering goes against a predefined index. Basically we are doing a MapReduce techique angaist each indexed filter we come across. Using the `filter` parameter provided the index is reduced by matching against the `value` property of the `INoFilterExpression`.  See the `INoFilterExpression` for more details.


#### Parameters


|Name|Type|Description|
|------|-----|-------------|
|filter|INoFilterExpression|A single indexed filter the contains the column, operator, and value to apply to the index.|


#### Returns
AngularJS::Promise

This method of filtering compares the supplied set of
filters against each object return in the Dexie colletion.
This is a much slower than filtering against an index.

_filterHasIndex uses the iNoFilter parameter to determine
if there is an index available for the give filter. it returns
true if there is, false if not.


To determine if and index exists, we look at the table.schema.primKey,
and table.schema.indexes properties.

This function splits up the filters by indexed verses not. The
return value is a INoFilterHash.


interface INoFilterHash {
indexedFilters: [INoFilterExpression]
nonIndexedFilters: [INoFilterExpression]
}

This function applies the provided sort items to the supplied
Dexie:Collection. It should always sort on indexed columns and
return a DexieCollection.


NOTE: Need to research how to apply multi-column sorting.

Applies the specified skip and take values to the final
Dexie::Collection, if supplied.


Note that this is the function returns the final Array of items
based on all of the properties applied prior to this call.

The promise should resolve to a Dexie::Collection that will result in
a set of data that matches the supplied filters, reject errors.

The update function expects the key to be within the update object.

Maps to the Dexie.Table.get method.

While Dexie supports a put operation which is similar to upsert,
we're going with upsert which decides whether an insert or an
update is required and calls the appropreiate function.

### _extendDexieTables

### configure

## noDb
The noDb factory creates and configures a new instance of Dexie.  Dexie is a wrapper about IndexedDB.  noDb is a Dexie AddOn that extends the query capabilites of Dexie.

