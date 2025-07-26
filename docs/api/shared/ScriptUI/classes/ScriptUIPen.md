# 类: ScriptUIPen

定义于: types-for-adobe/shared/ScriptUI.d.ts:432

A drawing pen that defines a color and line width used to stroke paths.
Create with ScriptUIGraphics.newPen(). Use as a value of  foregroundColor properties, and pass as an argument to drawString() and strokePath() methods.

## 构造函数

### 构造函数

> **new ScriptUIPen**(): `ScriptUIPen`

#### 返回

`ScriptUIPen`

## 属性

### color

> `readonly` **color**: `number`[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:437

The pen color.
The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.

***

### lineWidth

> **lineWidth**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:442

The pixel width of the drawing line.

***

### theme

> `readonly` **theme**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:448

The theme name.
The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.

***

### type

> `readonly` **type**: [`_BrushOrPenType`](../enumerations/BrushOrPenType.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:454

The pen type, solid or theme.
One of these constants: ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR
