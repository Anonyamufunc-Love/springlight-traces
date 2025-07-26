# 接口: ReflectionInfo

定义于: types-for-adobe/shared/JavaScript.d.ts:2158

Provides information about a method, a property or a method parameters.

## 属性

### arguments

> `readonly` **arguments**: `ReflectionInfo`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2162

The description of method or function arguments.

***

### dataType

> `readonly` **dataType**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2167

The data type.

***

### defaultValue

> `readonly` **defaultValue**: `any`

定义于: types-for-adobe/shared/JavaScript.d.ts:2172

The default value.

***

### description

> `readonly` **description**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2177

The long description text.

***

### help

> `readonly` **help**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2182

The short description text.

***

### isCollection

> `readonly` **isCollection**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2187

Contains true if the class describes a collection class.

***

### max

> `readonly` **max**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:2192

The maximum value.

***

### min

> `readonly` **min**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:2197

The minimum value.

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2202

The element name.

***

### parent

> `readonly` **parent**: [`Reflection`](Reflection.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2207

The class object that this element belongs to.

***

### sampleCode

> `readonly` **sampleCode**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2212

Sample code, if present.

***

### sampleFile

> `readonly` **sampleFile**: [`File`](File.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2217

A file containing sample code. May be null.

***

### type

> `readonly` **type**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2223

The element type.
One of unknown, readonly, readwrite, createonly, method or parameter.
