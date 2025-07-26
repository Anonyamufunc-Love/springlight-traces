# 接口: DateConstructor

定义于: types-for-adobe/shared/JavaScript.d.ts:552

## 构造函数

### 构造函数

> **new DateConstructor**(): [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:566

Returns a new Date object holding the current date and time.
If parameters are supplied, returns a new Date object holding the supplied date and time.

#### 返回

[`Date`](Date.md)

### 构造函数

> **new DateConstructor**(`value`): [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:567

#### 参数

##### value

`number`

#### 返回

[`Date`](Date.md)

### 构造函数

> **new DateConstructor**(`value`): [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:568

#### 参数

##### value

`string`

#### 返回

[`Date`](Date.md)

### 构造函数

> **new DateConstructor**(`year`, `month`, `day?`, `hours?`, `min?`, `sec?`, `ms?`): [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:569

#### 参数

##### year

`number`

##### month

`number`

##### day?

`number`

##### hours?

`number`

##### min?

`number`

##### sec?

`number`

##### ms?

`number`

#### 返回

[`Date`](Date.md)

## 属性

### prototype

> `readonly` **prototype**: [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:553

## 方法

### now()

> **now**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:607

The now() method returns the number of milliseconds that have passed since midnight January 1, 1970 UTC.

#### 返回

`number`

***

### parse()

> **parse**(`text`): [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:583

Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().

#### 参数

##### text

`string`

The string to parse.

#### 返回

[`Date`](Date.md)

***

### UTC()

> **UTC**(`year`, `month?`, `day?`, `hours?`, `min?`, `sec?`, `ms?`): [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:595

Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.

#### 参数

##### year

`number`

The year expressed in four digits, for example, 2001. To indicate for a year from 1900 to 1999, you can specify a value from 0 to 99.

##### month?

`number`

An integer value from 0 (Jan) to 11 (Dec).

##### day?

`number`

An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.

##### hours?

`number`

An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.

##### min?

`number`

An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.

##### sec?

`number`

An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.

##### ms?

`number`

An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.

#### 返回

[`Date`](Date.md)
