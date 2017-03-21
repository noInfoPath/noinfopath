[NoInfoPath Home](http://gitlab.imginconline.com/noinfopath/noinfopath/wikis/home)

NoInfoPath Data (noinfopath-data)
=============================================

*@version 2.0.41* [![Build Status](http://gitlab.imginconline.com:8081/buildStatus/icon?job=noinfopath-data&build=6)](http://gitlab.imginconline.com/job/noinfopath-data/6/)

Copyright (c) 2017 The NoInfoPath Group, LLC.

Licensed under the MIT License. (MIT)
___

Overview
--------

NoInfoPath Data provides serveral service that all an application to
interact with the various local storage systems found in HTML5 compliant
Web browsers.

### Installation

> npm install @noinfopath/noinfopath-data

### Services

|Name|Description|
|----|-----------|
|[noDataSource](noDataSource)|Provides a abstracted CRUD interface that sits in front of actual NoInfoPath CRUD provider services.|
|[noFileStoreageCRUD](noFileStoreageCRUD)|Establishes a CRUD interface in front of `noLocalFileStorage`.|
|[noHTTP](noHTTP)|Establishes a CRUD interface in front of the AngularJS `$http` service|
|[noIndexedDb](noIndexedDb)|Prodvides a CRUD interface for the Browser's native IndexedDB database. (Not fully supported by all browsers.)|
|[noLocalFileStorage](noFileStoreageCRUD)|Reads a File object retrieved from a standard `input:file` element and saves the data to an IndexedDB object store called NoInfoPath_FileUploadCache. The file blob is stored as `binary string`|
|[noLocalFileSystem](noLocalFileSystem)|Stores files within the Brower's Temporary Local File System.|
|[noLocalStorage](noLocalStorage)|Provides access to the Browser's localStorage service.|
|[noMimeTypes](noLocalFileSystem)|Helper service that returns a mime type given a file extention and vice versa.|
|[noSessionStorage](noLocalStorage)|Provides access to the Browser's sessionStorage service.|
|[noTemplateCache](noTemplateCache)|Sits in front of Angular Template cache, but allows files to be retrieve directly without using `ngInclude` or a directives `templateUrl` property.|
|[noTransactionCache](noTransactionCache)|Manages data transaction by tracking changes made by a CRUD provider service, and stores the changes in the NoInfoPath_Changes object store.|
|[noWebSQL](noWebSQL)|Provides a CRUD interface for the Browser's native WebSQL database. (Not supported by all Browsers.)|

### [Helper Functions](functions)

NoInfoPath Data exposes several helper function on the global noInfoPath object
that is placed on the browser's instrinsic `window` object.

|Name|Description|
|----|-----------|
|digest|Deprecated; will be removed in a future release.|
|digestError|Deprecated; will be removed in a future release.|
|digestTimeout|Deprecated; will be removed in a future release.|
|fromScopeSafeGuid|Convertes a "Scope Safe GUID" to a standard GUID.|
|getItem(store, key)|Using the parameters provided, retrieves a value from the `store` using the `key`.|
|isCompoundFilter|Checks the provided `indexName` for a string that match the compound key format.|
|setItem(store, key, value)|Sets the `value`, on the `store` using the `key`.|
|toDbDate(date)|Converts a JavaScript Date to a database compliant date String.|
|toDisplayDate|Converts a JavaScript Date to a human readable date string.|
|toScopeSafeGuid|Converts standards GUID to one that is safe to use as a property name in a JavaScript Object.|
|resolveID|Creates and returns a NoFilters object.|

### [Classes](classes)

|Name|Description|
|----|-----------|
|NoDataModel|TODO|
|NoFilter|TODO|
|NoFilters|TODO|
|NoFilterExpression|TODO|
|NoPage|TODO|
|NoReadOptions|TODO|
|NoResults|TODO|
|NoSort|TODO|
|NoSortExpression|TODO|

