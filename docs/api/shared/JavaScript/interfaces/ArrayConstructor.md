# 接口: ArrayConstructor()

定义于: types-for-adobe/shared/JavaScript.d.ts:283

## 调用签名

> **ArrayConstructor**(`arrayLength?`): `any`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:295

### 参数

#### arrayLength?

`number`

### 返回

`any`[]

## 调用签名

> **ArrayConstructor**\<`T`\>(`arrayLength`): `T`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:296

### 类型参数

#### T

`T`

### 参数

#### arrayLength

`number`

### 返回

`T`[]

## 调用签名

> **ArrayConstructor**\<`T`\>(...`values`): `T`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:297

### 类型参数

#### T

`T`

### 参数

#### values

...`T`[]

### 返回

`T`[]

## 构造函数

### 构造函数

> **new ArrayConstructor**(`arrayLength?`): `any`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:292

Creates and returns a new array.
Takes any number of parameters, which become the elements of the array, or a single value which becomes the length of an empty array. Note that you cannot create a one-element array, as the single parameter value is interpreted as the length. Returns the new array.

#### 参数

##### arrayLength?

`number`

If no other parameters are passed, the initial length of the empty array. Otherwise, the first element.

#### 返回

`any`[]

### 构造函数

> **new ArrayConstructor**\<`T`\>(`arrayLength`): `T`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:293

#### 参数

##### arrayLength

`number`

#### 返回

`T`[]

### 构造函数

> **new ArrayConstructor**\<`T`\>(...`values`): `T`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:294

#### 参数

##### values

...`T`[]

#### 返回

`T`[]

## 属性

### prototype

> `readonly` **prototype**: `any`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:284
