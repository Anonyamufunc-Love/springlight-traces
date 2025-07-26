# 接口: Number

定义于: types-for-adobe/shared/JavaScript.d.ts:1208

Wraps a numeric value.

## 方法

### toExponential()

> **toExponential**(`decimals`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1218

Converts the Number object to a string in scientific notation.

#### 参数

##### decimals

`number`

The number of decimals.

#### 返回

`string`

***

### toFixed()

> **toFixed**(`decimals`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1224

Converts the Number object to a string with fixed decimals.

#### 参数

##### decimals

`number`

The number of decimals.

#### 返回

`string`

***

### toLocaleString()

> **toLocaleString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1229

Returns the value of a Number object converted to a string, using localized conventions.

#### 返回

`string`

***

### toPrecision()

> **toPrecision**(`decimals`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1235

Converts the Number object to a string in either scientific or fixed notation, epending on its value.

#### 参数

##### decimals

`number`

The number of decimals.

#### 返回

`string`

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1240

Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.

#### 返回

`string`

***

### toString()

> **toString**(`radix?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1246

Returns the value of a Number object converted to a string.

#### 参数

##### radix?

`number`

The optional conversion radix.

#### 返回

`string`

***

### valueOf()

> **valueOf**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1251

Returns the value of a Number object as a primitive number.

#### 返回

`number`
