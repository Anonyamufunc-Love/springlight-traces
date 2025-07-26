# 接口: NewableFunction

定义于: types-for-adobe/shared/JavaScript.d.ts:2735

Wraps a built-in or JavaScript function.

## 继承

- [`Function`](Function.md)

## 属性

### arguments

> **arguments**: `object`

定义于: types-for-adobe/shared/JavaScript.d.ts:896

The function arguments, packed into an array.
This property is deprecated; use the arguments property within the function body.

#### 继承自

[`Function`](Function.md).[`arguments`](Function.md#arguments)

***

### arity

> `readonly` **arity**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:902

The number of formal arguments.
This property is deprecated; use the length property instead.

#### 继承自

[`Function`](Function.md).[`arity`](Function.md#arity)

***

### length

> `readonly` **length**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:907

The number of formal arguments.

#### 继承自

[`Function`](Function.md).[`length`](Function.md#length)

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:912

The function name.

#### 继承自

[`Function`](Function.md).[`name`](Function.md#name)

## 方法

### apply()

> **apply**(`thisObj`, `args`): `any`

定义于: types-for-adobe/shared/JavaScript.d.ts:920

Apply a this object and an argument list to a function.
This function is different from call(); here, the arguments are suppliedas an Array object.

#### 参数

##### thisObj

`object`

The object to be used as this.

##### args

`any`

An array of arguments.

#### 返回

`any`

#### 继承自

[`Function`](Function.md).[`apply`](Function.md#apply)

***

### call()

> **call**(`thisObj`, ...`arguments`): `any`

定义于: types-for-adobe/shared/JavaScript.d.ts:928

Apply a this object and arguments to a function.
This function is different from apply(); here, the arguments are supplied one by one.

#### 参数

##### thisObj

`object`

The object to be used as this.

##### arguments

...`any`[]

The first agument to the function. Add as many as needed.

#### 返回

`any`

#### 继承自

[`Function`](Function.md).[`call`](Function.md#call)

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:933

Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with JavaScript functions.

#### 返回

`string`

#### 继承自

[`Function`](Function.md).[`toSource`](Function.md#tosource)

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:938

Returns the function definition as a string.

#### 返回

`string`

#### 继承自

[`Function`](Function.md).[`toString`](Function.md#tostring)
