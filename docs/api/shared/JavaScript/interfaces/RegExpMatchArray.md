# 接口: RegExpMatchArray

定义于: types-for-adobe/shared/JavaScript.d.ts:1415

An array with integer indexing and a length property.

## 继承

- [`Array`](Array.md)\<`string`\>

## 可索引

\[`n`: `number`\]: `string`

## 属性

### index?

> `optional` **index**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1416

***

### input?

> `optional` **input**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1417

***

### length

> **length**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:310

The length of the array

#### 继承自

[`Array`](Array.md).[`length`](Array.md#length)

## 方法

### at()

> **at**(`index`): `undefined` \| `string`

定义于: @types/node/compatibility/indexable.d.ts:7

#### 参数

##### index

`number`

#### 返回

`undefined` \| `string`

#### 继承自

[`Array`](Array.md).[`at`](Array.md#at)

***

### concat()

> **concat**(...`values`): `string`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:317

Returns a new array created by concatenating the given values to the end of the original array.
The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.

#### 参数

##### values

...`string`[][]

Any number of values to be added to the end of the array. Can also be arrays.

#### 返回

`string`[]

#### 继承自

[`Array`](Array.md).[`concat`](Array.md#concat)

***

### join()

> **join**(`delimiter?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:324

Joins all elements of the array into a string; optionally, each element is separated by delimiter.
Returns the string containing the joined elements and delimiters.

#### 参数

##### delimiter?

`string`

A string used to separate each element of the array. If omitted, the array elements are separated with a comma.

#### 返回

`string`

#### 继承自

[`Array`](Array.md).[`join`](Array.md#join)

***

### pop()

> **pop**(): `undefined` \| `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:330

Removes the last element from the array, decreases the length by 1, and returns the value of the element.
Returns the value of the deleted array element.

#### 返回

`undefined` \| `string`

#### 继承自

[`Array`](Array.md).[`pop`](Array.md#pop)

***

### push()

> **push**(...`values`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:337

Places one or more values onto the end of the array and increases length by n.
Returns the new length of the array.

#### 参数

##### values

...`string`[]

Any number of values to be pushed onto the end of the array.

#### 返回

`number`

#### 继承自

[`Array`](Array.md).[`push`](Array.md#push)

***

### reverse()

> **reverse**(): `string`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:343

Reverses the order of the elements in the array.
Returns the reversed array.

#### 返回

`string`[]

#### 继承自

[`Array`](Array.md).[`reverse`](Array.md#reverse)

***

### shift()

> **shift**(): `undefined` \| `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:349

Removes the first element from the array, decreases the length by 1, and returns the value of the element.
Returns the value of the deleted array element.

#### 返回

`undefined` \| `string`

#### 继承自

[`Array`](Array.md).[`shift`](Array.md#shift)

***

### slice()

> **slice**(`start?`, `end?`): `string`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:355

Creates a new array, which contains a subset of the original array's elements.
The slice begins with the index start, and continues up to, but not including the index, end.If start or end is a negative number, the indexed is resolved counting backwards from the end of the array resulting in the element array[array. length + negativeIndex]. Returns a new array containing elements array[start] through array[end-1].

#### 参数

##### start?

`number`

##### end?

`number`

#### 返回

`string`[]

#### 继承自

[`Array`](Array.md).[`slice`](Array.md#slice)

***

### sort()

> **sort**(`userFunction?`): `this`

定义于: types-for-adobe/shared/JavaScript.d.ts:362

Sorts the elements of the array in place, using the given function to compare to elements.
If no function is provided, the elements are sorted alphabetically.Returns no return value.

#### 参数

##### userFunction?

(`a`, `b`) => `number`

A user-supplied function of the form userFunction(a, b) which returns less than 0 if a is greater than b, 0 if a and b are equal, and greater than 0 if b is greater than a.

#### 返回

`this`

#### 继承自

[`Array`](Array.md).[`sort`](Array.md#sort)

***

### splice()

> **splice**(`start`, `deleteCount?`, ...`values?`): `string`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:371

Removes num elements from the array beginning with index, start.
Optionally insert new elements beginning at index start.To ensure contiguity, elements are moved up to fill in any gaps.Returns a new array containing any elements deleted from the original array.

#### 参数

##### start

`number`

The index of the first element to remove. Negative values are relative to the end of the array.

##### deleteCount?

`number`

The number of array elements to remove, including start. If omitted, all elements from array index start to the end of the array are removed.

##### values?

...`string`[]

A list of one or more values to be added to the array starting at index start. Must specify a value for num, to use this argument.

#### 返回

`string`[]

#### 继承自

[`Array`](Array.md).[`splice`](Array.md#splice)

***

### toLocaleString()

> **toLocaleString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:376

Converts an array to a string and returns the string (localized).

#### 返回

`string`

#### 继承自

[`Array`](Array.md).[`toLocaleString`](Array.md#tolocalestring)

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:381

Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.

#### 返回

`string`

#### 继承自

[`Array`](Array.md).[`toSource`](Array.md#tosource)

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:387

Converts an array to a string and returns the string.
Yields the same result as array. join() when called without a parameter.Returns a comma-separated list of all the elements of the array.

#### 返回

`string`

#### 继承自

[`Array`](Array.md).[`toString`](Array.md#tostring)

***

### unshift()

> **unshift**(...`values`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:394

Adds one or more elements to the beginning of the array.
Returns the new array length.

#### 参数

##### values

...`string`[]

The values of one or more elements to be added to the beginning of the array.

#### 返回

`number`

#### 继承自

[`Array`](Array.md).[`unshift`](Array.md#unshift)
