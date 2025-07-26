# 函数: parseInt()

> **parseInt**(`text`, `base?`): `number`

定义于: types-for-adobe/shared/global.d.ts:123

Extracts an integer from a string.
Parses a string to find the first set of characters, in a specified base, that can be converted to an integer, and returns that integer, or NaN if it does not encounter characters that it can convert to a number.

## 参数

### text

`string`

The string from which to extract an integer.

### base?

`number`

The base of the string to parse (from base 2 to base 36). If not supplied, base is determined by the format of string.

## 返回

`number`
