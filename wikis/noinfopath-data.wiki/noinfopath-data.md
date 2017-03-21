# noinfopath-data
@version 1.2.25

## Overview
NoInfoPath data provides several services to access data from local storage or remote XHR or WebSocket data services.

[![Build Status](http://192.168.254.94:8081/buildStatus/icon?job=noinfopath-data&build=6)](http://192.168.254.94:8081/job/noinfopath-data/6/)

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

NoFilters is an array of NoFilterExpression objects.

### Properties

|Name|Type|Description|
|----|----|------------|
|length|Number|Number of elements in the array.|

### Methods

#### add(column, operator, value[, logic])

Creates and adds a new NoFilterExpression into the underlying array that NoFilters represents.

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
|----|----|-----------|
|total|Number|The total number of items in the array|

### Methods

#### page(options)

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|options|NoPage|A NoPage object that contains the paging instructions|

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|arrayOfThings|Array|(optional) An array of object that is used to populate the object on creation.|

##### Returns
void

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

#### NoFilters()

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

## Class NoSort : Array

NoSort is an array of NoSortExpression objects.

### Properties

|Name|Type|Description|
|----|----|------------|
|length|Number|Number of elements in the array.|
|total|Number|Total number of rows available given the current filters.|
|paged|Array|An array of object sliced on the skip and take parameters passed into the constructor.|

### Methods

#### add(column[, dir])

Creates and adds a new NoSortExpression into the underlying array that NoSort represents.

#### Parameters

|Name|Type|Description|
|----|----|------------|
|column|String|The name of the column filter on.|
|dir|String|(Optional) One of the following values: `asc`, `desc`.|

## @interface INoQueryParser

> INoQueryParser is a conceptual entity, it does not really exist
> the reality. This is because JavaScript does not implement interfaces
> like other languages do. This documentation should be considered a
> guide for creating query parsers compatible with NoInfoPath.

### Overview
INoQueryParser provides a service interface definition for converting a set
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


## noQueryParser

### Overview
The noQueryParser takes the `data` property of the options
parameter passed to the Kendo DataSources transport.read method. The
data object is inspected and its filter, sort, and paging values are
converted to NoInfoPath compatible versions.

### Methods

#### parse(options)
Parses provided filter, sort and paging options into NoInfoPath compatible
  objects. Stores the results internally for future use.

  ##### Returns
Any/all filters, sorts or paging data as an array compatible
with a call to `function.prototype.array`.

### Properties
  None.


##  noQueryParser : INoQueryParser

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

Once the config.json is resolved is it stored on $rootScope as $rootScope.noConfig

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

When 'query' is an object then check to see if it is a
NoFilters object.  If not, add a filter to the intrinsic filters object
based on the query's key property, and the query's value.

When query a number, a filter is created on the instrinsic
filters object using the `rowid`  WebSQL column as the column
to filter on. Query will be the target
value of query.

When the query is a string it is assumed a table is being queried
by it's primary key.

> Passing a string when the entity is
a SQL View is not allowed.

## noDbSchema
The noDbSchema service provides access to the database configuration that
defines how to configure the local IndexedDB data store.


### Properties

|Name|Type|Description|
|----|----|-----------|
|store|Object|A hash table compatible with Dexie::store method that is used to configure the database.|
|tables|Object|A hash table of NoInfoPath database schema definitions|
|isReady|Boolean|Returns true if the size of the tables object is greater than zero|


### Methods

#### \_processDbJson
Converts the schema received from the noinfopath-rest service and converts it to a Dexie compatible object.

##### Parameters
|Name|Type|Descriptions|
|----|----|------------|
|resp|Object|The raw HTTP response received from the noinfopath-rest service|

### load()
Loads and processes the database schema from the noinfopath-rest service.

#### Returns
AngularJS::Promise


### whenReady
whenReady is used to check if this service has completed its load phase. If it has not is calls the internal load method.

#### Returns
AngularJS::Promise

## NoDbSchema : Class
This provides

### Constructors

#### Constructor()

##### Usage
```js
var x = new NoDbSchema();
```

##### Parameters

None

### Methods

#### createSqlTableStmt(tableName, tableConfig)
Returns a SQL query string that creates a table given the provided tableName and tableConfig

##### Usage
```js
var x = createSqlTableStmt(tableName, tableConfig);
```
##### Parameters

|Name|Type|Description|
|----|----|-----------|
|tableName|String|The name of the table to be created|
|tableConfig|Object|The schema of the table to be created|

##### Returns
Returns a SQL query string

### Properties
|Name|Type|Description|
|----|----|-----------|
|queryString|String|Returns a SQL query string that creates a table given the provided tableName and tableConfig|

```json
{
	"dbName": "NoInfoPath_dtc_v1",
	"provider": "noIndexedDB",
	"remoteProvider:": "noHTTP",
	"version": 1,
	"schemaSource": {
		"provider": "inline",
		"schema": {
			"store": {
				"NoInfoPath_Changes": "$$ChangeID"
			},
			"tables": {
				"NoInfoPath_Changes": {
					"primaryKey": "ChangeID"
				}
			}
		}
	}
}
```

### NoDbSchemaFactory

Creates unique instances of NoDbSchema based on noDBSchema configuration data.

> NOTE: noDbSchema property of noConfig is an array of NoInfoPath data provider configuration objects.

## noDbSchema
The noDbSchema service provides access to the database configuration that defines how to configure the local IndexedDB data store.

### Properties


|Name|Type|Description|
|----|----|-----------|
|store|Object|A hash table compatible with Dexie::store method that is used to configure the database.|
|tables|Object|A hash table of NoInfoPath database schema definitions|
|isReady|Boolean|Returns true if the size of the tables object is greater than zero|

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


## @service noSQLQueryBuilder : INoQueryBuilder `Deprecated`

### Overview

Implements a INoQueryBuilder compatible service that converts NoFilters,
NoSort, NoPage into a WebSQL compatible query string.


# @module NoInfoPath WebSql

> noinfopath.data @version 0.0.1 #websql

This module provides full CRUD operations, along with the ability to bulk
bulkload data into the WebSql database, and to perform a lookup for a single item,
and the abilty to perform upserts.

## @constant WEBSQL_IDENTIFIERS

Exposes a set of JavaScript idetentified that map to WebSQL DDL and DML expressions.

## @constant WEBSQL_STATEMENT_BUILDERS

Exposes a setup of helper function that construct safe, WebSQL DDL and DML expressions.

### @class NoWebSqlStatementFactory

This class is an injecton container that uses WEBSQL_IDENTIFIERS, and
WEBSQL_STATEMENT_BUILDERS to construct the various SQL statements
required to create and use a WebSQL database.


### @class NoWebSqlEntity

This class encapulates the CRUD functionality for NoInfoPath's implementation
of WebSQL. It abstracts the fundimental differences between SQL Views and Tables.
Exceptions will be thrown when a method is called that a SQL View connot supported.




### @method configure()

Creates the WebSQL Entity based on the configuration data and the database passed in
during the construction of the NoWebSqlEntity object.

This method returns an Angular Promise.

### noCreate(data, noTransaction)

Inserts a record into the websql database with the data provided.

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|data|Object|Name Value Pairs|
|noTransaction|Object|The noTransaction object that will commit changes to the NoInfoPath changes table for data synchronization|

#### Remarks

When resolving the primary key for the purpose of createing a new record, it is
required that a primary key exist on the given table. Once discovered, if the
value already exists that value will be used as the primary value. If the key

> NOTE: Bug #00001
> There is a bug with current implementation that does not take into account
> the case when the primary key is a compond key. In the current implementation
> this results in the primary key resolving to `Undefined`.


When creating a new record in the WebSQL DB all tables are expected to have
the `tracking columns`: CreatedBy, DateCreated, ModifiedBy, ModifiedDate.
The values for these column are automatically added to the new data being
added to the DB.

### noRead([NoFilters, NoSort, NoPage])

Reads records from the websql database filtering, sorting and paging
as required by the provied parameters.

#### Parameters

> NOTE: All parameters are optional and may be provided in any order, as long as,
> they are of one of the known NoInfoPath query classes: NoFilters,
> NoSort, and NoPage

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

Returns an AngularJS Promise.

When resolving the primary key of the object to update
the id value must exist. If it does not an exception is thrown.

When updating a record in the WebSQL DB all tables are expected to have
the `tracking columns`: ModifiedBy, ModifiedDate.
The values for these column are automatically set on the object
being updated in the DB.

### noDestroy(data, noTransaction)

Deletes a record from the websql database based on the Primary Key of the data provided.

#### Parameters

|Name|Type|Description|
|----|----|-----------|
|data|Object|Name Value Pairs|
|noTransaction|Object|The noTransaction object that will commit changes to the NoInfoPath changes table for data synchronization|

When query a number, a filter is created on the instrinsic
filters object using the `rowid`  WebSQL column as the column
to filter on. Query will be the target
value of query.

When the query is a string it is assumed a table is being queried
by it's primary key.

> Passing a string when the entity is
a SQL View is not allowed.

### @method noOne(data)

Reads exactly one record from the websql database based on the filter derived the data provided.

> NOTE: Returns single object, not an array of objects. When more than one result is found it returns
> the first item in the array of results.  If none are found, returns an single empty object.

#### Parameters

##### @parameter `query`

The `query` parameter can be a Number, String or Object. When it
is as Number the it is a WebSQL `RowId`. When a String the value
is expectd to be the guid that is the primary key for the given
entity.  When an object, and is of the NoFilters class it is treated
as such. When not, then it expected to be a special object.

*Expected Types*
- Number
- String
- Object

#### Remarks

> NOTE: noinfopath-data only support primary keys that are strings. This
> is because we are expecting GUID or UUID as primary key, as the are
> inherently replicatable.


When 'query' is an object then check to see if it is a
NoFilters object.  If not, add a filter to the intrinsic filters object
based on the query's key property, and the query's value.

### @method noUpsert(data)

### @method noClear()

Delete all rows from the current table, without recording each delete transaction.

#### Returns
AngularJS Promise.

### @method noBulkCreate(data)

Inserts object in to the WebSQL database, converting data from
ANSI SQL to WebSQL.  No transactions are recorded during this operation.

### @method bulkload(data, progress)

Returns an AngularJS Promise.  Takes advantage of
Promise.notify to report project of the bulkLoad operation.

## @class NoWebSqlEntityFactory

Creates instances of the NoWebSqlEntity class, providing an Entity
configuration object, name of the entity, and a reference to the database.



### @method create(entityConfig, entityName, database)

Returns a new instance of the NoWebSqlEntity object configured with the
supplied Entity Configuration and Database.


## @class NoWebSqlService


When a field is a string then the value will be the
property on the data object provider to the call
the `basic` preOp

When a field is an object then confgure as if the
value will be coming from a trusted provider like
scope, or $stateParams.

When `scope` is the provider then the directive scope is used.
Otherwise the supplied injecable provider will be used.

When field value is a primative type meaning not
an object. or array. Use the value as is.

Drop each record one at a time so that the operations
are recorded in the current transaction.

Add each record one at a time to ensure that the transaction is recorded.

  #### @property scopeKey

  Use this property allow NoTransaction to store a reference
  to the entity upon which this data operation was performed.
  This is useful when you have tables that rely on a one to one
  relationship.

  It is best practice use this property when ever possible,
  but it not a required configuration property.


 ### joiner-many

 `joiner-many` assumes that it represents a multiple choice question.
 In order to keep the algorithm simple we drop all joiner items
 that match the parent key. (i.e. SelectionID)

### one-one

`one-one` enforces referential integrity between two table in a
transaction that share a one to one relationship.  When the child
data/table as defined in the noTransaction configuration and it's
an update is performed.


@property createOnly

Use this property to `create` new related records in a transaction
member table when a matching item does not exist. So, this also
means that no `update` operations are performed on the designated
member table.


### @method bulkUpsert

Inserts or updates and array of data items. Uses a provided
constructor to create the object that will be added to the
entity. This allows for custom data conversion and business
logic to be implement at the record level, before saving.


## noIndexedDB
The noIndexedDB factory creates and configures a new instance of Dexie.
Dexie is a wrapper around IndexedDB.  noIndexedDB is a Dexie AddOn that
extends the query capabilites of Dexie, and exposes a CRUD interface
on the WriteableTable class.


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


#### \_applyFilters
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


### \_filterByIndex

This method of filtering goes against a predefined index. Basically we are doing a MapReduce techique angaist each indexed filter we come across. Using the `filter` parameter provided the index is reduced by matching against the `value` property of the `INoFilterExpression`.  See the `INoFilterExpression` for more details.

#### Parameters

|Name|Type|Description|
|------|-----|-------------|
|filter|INoFilterExpression|A single indexed filter the contains the column, operator, and value to apply to the index.|

#### Returns
AngularJS::Promise


### \_filterByPrimaryKey  -- Being Deprecated

This method of of filterig goes against the `IDBObjectStore`'s primary key.


\_filterHasIndex uses the iNoFilter parameter to determine
if there is an index available for the give filter. it returns
true if there is, false if not.

To determine if and index exists, we look at the table.schema.primKey,
and table.schema.indexes properties.


### \_recurseIndexedFilters


This method of filtering compares the supplied set of
filters against each object return in the Dexie colletion.
This is a much slower than filtering against an index.


While Dexie supports a put operation which is similar to upsert,
we're going with upsert which decides whether an insert or an
update is required and calls the appropreiate function.


### configure


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


### \_extendDexieTables

### followMetaDataKeys

This feature of NoInfoPath allows for a special type of
data column that can contain heterogenuous data. Meaning on
any given row of data the value of the meta column could be
a string, a number, date or a foreign key reference to a
lookup table.

#### Sample MetaDataDefinition record

```json
{
	"ID": "67c373ac-a003-402a-9689-45c37fc2afa8",
	"MetaDataSchemaID": "16187a97-31d7-40e3-b33f-64b55471ee3f",
	"Title": "Unit",
	"DataType": "string",
	"InputType": "combobox",
	"ListSource": "lu_UOM",
	"TextField": "Description",
	"ValueField": "ID",
	"DateCreated": "2016-05-04T16:43:00.001",
	"CreatedBy": "79689b1e-6627-47c1-baa5-34be228cf06d",
	"ModifiedDate": "2016-05-04T16:43:00.001",
	"ModifiedBy": "79689b1e-6627-47c1-baa5-34be228cf06d"
}
```

### Class noDatum
This is a contructor function used by Dexie when creating and returning data objects.

## noDataSource Service

Provides a generic service that exposes the NoInfoPath data providers'
underlying CRUD interface.

```json

"noDataSource": {
       "dataProvider": "noWebSQL",
       "databaseName": "FCFNv2",
       "entityName": "LU_PercentColor",
       "primaryKey": "PercentColorID",
       "queryParser": "noQueryParser",
       "sort":  [{"field": "Percentage", "dir": "asc"}]
   }

```

@property noDataSource.waitFor

Use this property when you want the data source wait for some other
NoInfoPath component to update the `scope`.

#### create(dsConfigKey)

create a new instance of a NoDataSource object configured
based on the datasource configuration found in noConfig
at the given `dsConfigKey` location.

##### Parameters

|Name|Type|Description|
|----|----|-----------|
|dsConfigKey|String|The location in noConfig where the data source's configuration can be found.  Can be a complex name like the following.  `noForms.myForm1.noComponents.foo.noDataSource`|

##### Returns

An instance of a NoDataSource object.


noDateFunctions Service

```json
"calculatedFields":[{
	"field": "Days",
	"parser": {
		"provider": "noDateFunctions",
		"method": "dateDiff",
		"fields": {
			"date1": "ObservationDate",
			"date2": "HarvestDate"
		}
	}
}]
```

@method normalizeFilterValue

Evaluates the type parameter looking for know types, and converts
converts the value parameter to explicitly be of the type provied.

If the type is not a supported type then value is returned unchanged.

@method configureFilterWatch

If the filterCfg parameter's value property, has a watch property, and
the value's source property is an AngularJS  observable object
a watch is configured on the source. The cb parameter is used
for the watch's callback.

When the source is "scope", the scope parameter is used, otherwise
the source is injected using the $injector service.

> NOTE: Currently $rootScope is the only supported injectable source.

  ### resolveFilterValues(filters)
  #### This is more information

> Note of some kind

|Name|Type|Description|
|----|----|-----------|
|Foo|Number|Does something fun.|

  > TODO: Implement support for delayed (waitFor) filter values.

  > NOTE: If a filter.value is an object and it has a source
  > property set to `scope` then use the directives scope variable.
  > Otherwise assume source is an injectable.

@property noDataSource.filter

An array of NoInfoPath dynamic filters. Each filter defines what
the provider of the filter data is, and what property to filter on.

The filter property has a child property called `value`. When it
is an object then a dynamic filter is assumed. Otherwise it is treated
as the filter value.

When `value` is an object it is expected to have a `source` and a
`property` property. Source is always a string that is either the
string "scope" or the name of an AngularJS injectable service that
is a JavaScript object. Possible services could be $rootScope or $stateParams.

NoInfoPath abstraction of $templateCache. Added the actual $http calls that are
inferred in the documentation or perform by ngInclude.

@method cache(file)

Saves a file to the noDataSource defined in the config object.

> NOTE: This service does not use syncable transations. It is the responsibility of the consumer to sync.  This is because it may not be appropriate to save the files to the upstream data store.


@method removeFromCache(file)

Deletes a file by FileID from the NoInfoPath_FileUploadCache.

@method read(file)

Reads a file from a DOM File object and converts to a binary
string compatible with the local, and upstream file systems.

