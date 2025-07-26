# 接口: Reflection

定义于: types-for-adobe/shared/JavaScript.d.ts:2230

Provides information about a class.

## 属性

### description

> `readonly` **description**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2234

The long description text.

***

### help

> `readonly` **help**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2239

The short description text.

***

### methods

> `readonly` **methods**: [`ReflectionInfo`](ReflectionInfo.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2244

An array of method descriptions.

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2249

The class name.

***

### properties

> `readonly` **properties**: [`ReflectionInfo`](ReflectionInfo.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2254

An array of property descriptions.

***

### sampleCode

> `readonly` **sampleCode**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2259

Sample code, if present.

***

### sampleFile

> `readonly` **sampleFile**: [`File`](File.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2264

A file containing sample code. May be null.

***

### staticMethods

> `readonly` **staticMethods**: [`ReflectionInfo`](ReflectionInfo.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2269

An array of class method descriptions.

***

### staticProperties

> `readonly` **staticProperties**: [`ReflectionInfo`](ReflectionInfo.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2274

An array of class property descriptions.

## 方法

### find()

> **find**(`name`): [`ReflectionInfo`](ReflectionInfo.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2280

Finds an element description by name.

#### 参数

##### name

`string`

The name of the element to find.

#### 返回

[`ReflectionInfo`](ReflectionInfo.md)

***

### toXML()

> **toXML**(): [`XML`](XML.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2285

Returns this class information as XML in OMV format.

#### 返回

[`XML`](XML.md)
