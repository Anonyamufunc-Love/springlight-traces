# 接口: XMLConstructor()

定义于: types-for-adobe/shared/JavaScript.d.ts:2345

> **XMLConstructor**(`text`): [`XML`](XML.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2353

## 参数

### text

`string`

## 返回

[`XML`](XML.md)

## 构造函数

### 构造函数

> **new XMLConstructor**(`text`): [`XML`](XML.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2352

Parses an XML string. Throws an error if the XML is incorrect.

#### 参数

##### text

`string`

The text to parse.

#### 返回

[`XML`](XML.md)

## 属性

### ignoreComments

> **ignoreComments**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2358

Controls whether XML comments should be parsed (false) or ignored (true).

***

### ignoreProcessingInstructions

> **ignoreProcessingInstructions**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2363

Controls whether XML preprocessing instructions should be parsed (false) or ignored (true).

***

### ignoreWhitespace

> **ignoreWhitespace**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2368

Controls whether whitespace should be parsed (false) or ignored (true).

***

### prettyIndent

> **prettyIndent**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:2373

The number of spaces used to indent pretty-printed XML.

***

### prettyPrinting

> **prettyPrinting**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2378

When true, XML is pretty-printed when converting to a string.

***

### prototype

> `readonly` **prototype**: [`XML`](XML.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2346

## 方法

### defaultSettings()

> **defaultSettings**(): `object`

定义于: types-for-adobe/shared/JavaScript.d.ts:2383

Returns an object containing the default parsing and print settings for XML.

#### 返回

`object`

***

### setSettings()

> **setSettings**(`obj`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:2389

Sets the parsing and print setting for XML using an object returned by the settings() method.

#### 参数

##### obj

`object`

The object containing the settings to set.

#### 返回

`void`

***

### settings()

> **settings**(): `object`

定义于: types-for-adobe/shared/JavaScript.d.ts:2394

Returns an object containing the current parsing and print settings for XML.

#### 返回

`object`
