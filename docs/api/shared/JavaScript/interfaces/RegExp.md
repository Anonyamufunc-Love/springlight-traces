# 接口: RegExp

定义于: types-for-adobe/shared/JavaScript.d.ts:1384

Wraps a regular expression.

## 方法

### compile()

> **compile**(`pattern`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1394

Compiles a string to a regular expression. Returns true if the compilation was successful.

#### 参数

##### pattern

`string`

The pattern to compile.

#### 返回

`boolean`

***

### exec()

> **exec**(`text`): `null` \| [`RegExpExecArray`](RegExpExecArray.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1401

Execute a regular expression.
The return value is an array of matches, with the first element containing the match, and successive elements containing the results of any matching subexpression in their order of appearance. If there is no match, the result is null.

#### 参数

##### text

`string`

The string to match.

#### 返回

`null` \| [`RegExpExecArray`](RegExpExecArray.md)

***

### test()

> **test**(`text`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1407

Execute a regular expression, and return true if there is a match.

#### 参数

##### text

`string`

The string to match.

#### 返回

`boolean`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1412

Converts this RegExp object to a string.

#### 返回

`string`
