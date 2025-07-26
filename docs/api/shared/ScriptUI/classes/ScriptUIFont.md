# 类: ScriptUIFont

定义于: types-for-adobe/shared/ScriptUI.d.ts:735

Encapsulates the qualities of a font used to draw text into a control.
Create with the newFont() method.Used as a value of font. Passed as an argument to drawString() and measureString().

## 构造函数

### 构造函数

> **new ScriptUIFont**(): `ScriptUIFont`

#### 返回

`ScriptUIFont`

## 属性

### family

> `readonly` **family**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:739

The font family name.

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:744

The complete font name, consisting of the family and style, if specified.

***

### size

> `readonly` **size**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:749

The font point size.

***

### style

> `readonly` **style**: [`_FontStyle`](../enumerations/FontStyle.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:754

The font style. One of the constants in ScriptUI.FontStyle.

***

### substitute

> `readonly` **substitute**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:759

The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available.
