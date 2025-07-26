# 接口: \_AddControlPropertiesStaticText

定义于: types-for-adobe/shared/ScriptUI.d.ts:2815

Creation properties of a StaticText.

## 参数

A unique name for the control.

## 参数

When false (the default), the control displays a single line of text. When true, the control displays multiple lines, in which case the text wraps within the width of the control.

## 参数

When false (the default), the displayed text cannot be scrolled. When true, the displayed text can be vertically scrolled using the Up Arrow and Down Arrow; this case implies multiline=true.

## 参数

If middle or end, defines where to remove characters from the text and replace them with an ellipsis if the specified title does not fit within the space reserved for it. If none, and the text does not fit, characters are removed from the end, without any replacement ellipsis character.

## 属性

### multiline?

> `optional` **multiline**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2817

***

### name?

> `optional` **name**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2816

***

### scrolling?

> `optional` **scrolling**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2818

***

### truncate?

> `optional` **truncate**: [`_Truncate`](../type-aliases/Truncate.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2819
