# 接口: RegExpConstructor()

定义于: types-for-adobe/shared/JavaScript.d.ts:1288

> **RegExpConstructor**(`pattern`, `flags?`): [`RegExp`](RegExp.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1297

## 参数

### pattern

`string` | [`RegExp`](RegExp.md)

### flags?

`string`

## 返回

[`RegExp`](RegExp.md)

## 构造函数

### 构造函数

> **new RegExpConstructor**(`pattern`, `flags?`): [`RegExp`](RegExp.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1296

Creates and returns a new RegExp object set to the value of the argument converted to a regular expression.

#### 参数

##### pattern

The pattern to convert.

`string` | [`RegExp`](RegExp.md)

##### flags?

`string`

Flags that control how the conversion is performed. A string containing any combination of the letters i, m, g: "i" -- ignore case in pattern matching "m" -- treat the string as multiple lines "g" -- do global pattern matching

#### 返回

[`RegExp`](RegExp.md)

## 属性

### $1

> `readonly` **$1**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1302

The matched subexpression #1.

***

### $2

> `readonly` **$2**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1307

The matched subexpression #2.

***

### $3

> `readonly` **$3**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1312

The matched subexpression #3.

***

### $4

> `readonly` **$4**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1317

The matched subexpression #4.

***

### $5

> `readonly` **$5**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1322

The matched subexpression #5.

***

### $6

> `readonly` **$6**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1327

The matched subexpression #6.

***

### $7

> `readonly` **$7**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1332

The matched subexpression #7.

***

### $8

> `readonly` **$8**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1337

The matched subexpression #8.

***

### $9

> `readonly` **$9**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1342

The matched subexpression #9.

***

### global

> **global**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1347

Indicates whether the match is a global match.

***

### ignoreCase

> **ignoreCase**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1352

Indicates whether the match is not case sensitive.

***

### input

> **input**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1357

The original input string.

***

### lastMatch

> `readonly` **lastMatch**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1362

The last match.

***

### lastParen

> `readonly` **lastParen**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1367

The value of the last matched subexpression.

***

### leftContext

> `readonly` **leftContext**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1372

The string before the match.

***

### multiline

> **multiline**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1377

Indicates whether the match matches multiple lines.

***

### prototype

> `readonly` **prototype**: [`RegExp`](RegExp.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1289

***

### rightContext

> `readonly` **rightContext**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1382

The string after the match.
