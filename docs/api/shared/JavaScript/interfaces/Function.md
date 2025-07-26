# 接口: Function

定义于: types-for-adobe/shared/JavaScript.d.ts:886

Wraps a built-in or JavaScript function.

## 继承于

- [`CallableFunction`](CallableFunction.md)
- [`NewableFunction`](NewableFunction.md)

## 属性

### arguments

> **arguments**: `object`

定义于: types-for-adobe/shared/JavaScript.d.ts:896

The function arguments, packed into an array.
This property is deprecated; use the arguments property within the function body.

***

### arity

> `readonly` **arity**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:902

The number of formal arguments.
This property is deprecated; use the length property instead.

***

### length

> `readonly` **length**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:907

The number of formal arguments.

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:912

The function name.

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

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:933

Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with JavaScript functions.

#### 返回

`string`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:938

Returns the function definition as a string.

#### 返回

`string`
