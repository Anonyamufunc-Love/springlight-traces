# 函数: escape()

> **escape**(`aString`): `string`

定义于: types-for-adobe/shared/global.d.ts:74

Creates a URL-encoded string from aString.
In the new string, characters of aString that require URL encoding are replaced with the format %xx, where xx is the hexadecimal value of the character code in the Unicode character set.This format is used to transmit information appended to a URL during, for example, execution of the GET method.Use the unescape() global function to translate the string back into its original format. Returns a string which is aString URL-encoded.

## 参数

### aString

`string`

The string to be encoded.

## 返回

`string`
