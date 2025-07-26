# 接口: String

定义于: types-for-adobe/shared/JavaScript.d.ts:957

A character string. Each character is adressable by index.

## 继承

- `RelativeIndexable`\<`string`\>

## 可索引

\[`index`: `number`\]: `string`

Get character at index.

## 属性

### length

> `readonly` **length**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:966

The length of the string.

## 方法

### anchor()

> **anchor**(`name`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:977

Returns a string consisting of this string enclosed in a <a> tag.

#### 参数

##### name

`string`

The text to be stored in the anchors' name attribute.

#### 返回

`string`

***

### at()

> **at**(`index`): `undefined` \| `string`

定义于: @types/node/compatibility/indexable.d.ts:7

#### 参数

##### index

`number`

#### 返回

`undefined` \| `string`

***

### big()

> **big**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:982

Returns a string consisting of this string enclosed in a <big> tag.

#### 返回

`string`

***

### blink()

> **blink**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:987

Returns a string consisting of this string enclosed in a <blink> tag.

#### 返回

`string`

***

### bold()

> **bold**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:992

Returns a string consisting of this string enclosed in a <b> tag.

#### 返回

`string`

***

### charAt()

> **charAt**(`index`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:998

Returns the character at the specified index.

#### 参数

##### index

`number`

An integer between 0 and string.length -1, specifying the character to return.

#### 返回

`string`

***

### charCodeAt()

> **charCodeAt**(`index`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1004

Returns the Unicode value of the character at the given index.

#### 参数

##### index

`number`

An integer between 0 and string.length -1, specifying the character.

#### 返回

`number`

***

### concat()

> **concat**(`value`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1011

If necessary, converts the one or more given values to strings.
Those values are concatenated with the original string, the result is returned. The original string is not effected.Returns the concatenated string.

#### 参数

##### value

`string`

The values to be concatenated with the given string.

#### 返回

`string`

***

### fixed()

> **fixed**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1016

Returns a string consisting of this string enclosed in a <tt> tag.

#### 返回

`string`

***

### fontcolor()

> **fontcolor**(`color`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1022

Returns a string consisting of this string enclosed in a <font> tag.

#### 参数

##### color

`string`

The value to be stored in the tag's color attribute.

#### 返回

`string`

***

### fontsize()

> **fontsize**(`size`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1028

Returns a string consisting of this string enclosed in a <font> tag.

#### 参数

##### size

`number`

The value to be stored in the tag's size attribute.

#### 返回

`string`

***

### indexOf()

> **indexOf**(`searchValue`, `offset?`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1035

Returns the index within the string of the first occurrence of the specified string, starting the search at fromIndex if provided.

#### 参数

##### searchValue

`string`

The string for which to search.

##### offset?

`number`

The starting offset of the search.

#### 返回

`number`

***

### italics()

> **italics**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1040

Returns a string consisting of this string enclosed in a <i> tag.

#### 返回

`string`

***

### lastIndexOf()

> **lastIndexOf**(`searchValue`, `offset?`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1048

Returns the index within the string of the last occurrence of the specified value.
The string is searched backward, starting at fromIndex.Returns the index within the string where the last occurrence of searchValue was found, or -1 if it was not found.

#### 参数

##### searchValue

`string`

The string for which to search.

##### offset?

`number`

The starting offset of the search.

#### 返回

`number`

***

### link()

> **link**(`href`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1054

Returns a string consisting of this string enclosed in a <a> tag.

#### 参数

##### href

`string`

The value to be stored in the tag's href attribute.

#### 返回

`string`

***

### localeCompare()

> **localeCompare**(`what`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1060

Performs a localized comparison of two strings.

#### 参数

##### what

`string`

The string to compare with.

#### 返回

`number`

***

### match()

> **match**(`regexp`): `null` \| [`RegExpMatchArray`](RegExpMatchArray.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1066

Matches a string against a regular expression.

#### 参数

##### regexp

The regular expression to use.

`string` | [`RegExp`](RegExp.md)

#### 返回

`null` \| [`RegExpMatchArray`](RegExpMatchArray.md)

***

### replace()

> **replace**(`what`, `with_`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1073

#### 参数

##### what

`any`

##### with\_

`string`

#### 返回

`string`

***

### search()

> **search**(`search`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1079

#### 参数

##### search

[`RegExp`](RegExp.md)

#### 返回

`number`

***

### slice()

> **slice**(`startSlice`, `endSlice?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1087

Extracts a substring of the given string and returns it as a new string.
The substring begins at startSlice, and includes all characters up to, but not including the character at the index endSlice. A negative value indexes from the end of the string.For example, a negative value for startSlice is resolved as: string. length + startSlice.The original string is unchanged.Returns a substring of characters from the given string, starting at startSlice and ending with endSlice-1.

#### 参数

##### startSlice

`number`

The index at which to begin extraction.

##### endSlice?

`number`

The index at which to end extraction. If omitted, slice extracts to the end of the string.

#### 返回

`string`

***

### small()

> **small**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1092

Returns a string consisting of this string enclosed in a <small> tag.

#### 返回

`string`

***

### split()

> **split**(`delimiter`, `limit?`): `string`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:1100

Splits a string into a group of substrings, places those strings in an array, and returns the array.
The substrings are created by breaking the original string at places that match delimiter, the delimiter characters are removed.Returns an array whose elements are the substrings.

#### 参数

##### delimiter

`string`

Specifies the string to use for delimiting. If delimiter is omitted, the array returned contains one element, consisting of the entire string.

##### limit?

`number`

#### 返回

`string`[]

***

### strike()

> **strike**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1105

Returns a string consisting of this string enclosed in a <strike> tag.

#### 返回

`string`

***

### sub()

> **sub**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1110

Returns a string consisting of this string enclosed in a <sub> tag.

#### 返回

`string`

***

### substr()

> **substr**(`start`, `length?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1118

Returns a string containing the characters beginning at the specified index, start, through the specified number of characters.
The original string is unchanged.Returns a string containing the extracted characters.

#### 参数

##### start

`number`

Location at which to begin extracting characters.

##### length?

`number`

The number of characters to extract.

#### 返回

`string`

***

### substring()

> **substring**(`indexA`, `indexB?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1126

Returns a substring of the given string by extracting characters from indexA up to but not including indexB.
The original string is unchanged.Returns a substring of characters from the given string, starting at indexA and ending with indexB-1.

#### 参数

##### indexA

`number`

The index to begin extracting.

##### indexB?

`number`

The index at which to end extraction. If omitted, slice extracts to the end of the string.

#### 返回

`string`

***

### sup()

> **sup**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1131

Returns a string consisting of this string enclosed in a <sup> tag.

#### 返回

`string`

***

### toLocaleLowerCase()

> **toLocaleLowerCase**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1137

Returns a new string which contains all the characters of the original string converted to lowercase (localized).
The original string is unchanged.

#### 返回

`string`

***

### toLocaleUpperCase()

> **toLocaleUpperCase**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1143

Returns a new string which contains all the characters of the original string converted to uppercase (localized).
The original string is unchanged.

#### 返回

`string`

***

### toLowerCase()

> **toLowerCase**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1149

Returns a new string which contains all the characters of the original string converted to lowercase.
The original string is unchanged.

#### 返回

`string`

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1154

Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.

#### 返回

`string`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1159

Returns itself.

#### 返回

`string`

***

### toUpperCase()

> **toUpperCase**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1165

Returns a new string which contains all the characters of the original string converted to uppercase.
The original string is unchanged.

#### 返回

`string`

***

### valueOf()

> **valueOf**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1170

The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.

#### 返回

`string`
