# 函数: localize()

> **localize**(`what`, ...`arguments`): `string`

定义于: types-for-adobe/shared/global.d.ts:108

Localizes a ZString-encoded string and merges additional arguments into the string.

## 参数

### what

`string`

The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.

### arguments

...`any`[]

Optional argument(s) to be merged into the string. There may be more than one argument.

## 返回

`string`
