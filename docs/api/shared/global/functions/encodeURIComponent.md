# 函数: encodeURIComponent()

> **encodeURIComponent**(`text`): `string`

定义于: types-for-adobe/shared/global.d.ts:67

Encodes a string after RFC2396.
Create an UTF-8 ASCII encoded version of this string. The string is converted into UTF-8. Every non-alphanumeric character is encoded as a percent escape
character of the form %xx, where xx is the hex value of the character. After the conversion to UTF-8 encoding and escaping, it is guaranteed that the string does not contain characters codes greater than 127. The list of characters not to be encoded is -_.!~*'(). The method returns false on errors.

## 参数

### text

`string`

The text to encode.

## 返回

`string`
