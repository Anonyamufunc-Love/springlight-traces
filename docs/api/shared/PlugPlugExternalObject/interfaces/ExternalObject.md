# 接口: ExternalObject

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:12

## 属性

### log

> **log**: `boolean`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:20

Set to true to write status information to standard output (the
JavaScript Console in the ExtendScript Toolkit). Set to false to turn
logging off. Default is false.

***

### searchFolders

> **searchFolders**: `string`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:27

A set of alternate paths in which to search for the shared library files, a
single string with multiple path specifications delimited by semicolons
(;). Paths can be absolute or relative to the Folder.startup location.

***

### version

> **version**: `number`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:32

The version of the library, as returned by ESGetVersion()

## 方法

### search()

> **search**(`spec`): `boolean`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:40

Reports whether a compiled C/C++ library can be found, but does not load it. If logging is on, the
paths searched are reported to the JavaScript Console in the ExtendScript Toolkit.
Returns true if the library is found, false otherwise.

#### 参数

##### spec

`string`

The file specification for the compiled library, with or without path information.

#### 返回

`boolean`

***

### terminate()

> **terminate**(): `undefined`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:47

Explicitly shuts down the ExternalObject dynamic library wrapped by this instance.
It can be helpful to force a shutdown of the external library if termination of external libraries during
the shutdown of the hosting application does not occur in the correct order.

#### 返回

`undefined`
