# 类: ScriptUIBrush

定义于: types-for-adobe/shared/ScriptUI.d.ts:461

A painting brush that encapsulates a color or pattern used to fill paths.
Create with ScriptUIGraphics.newBrush(). Use as a value of  backgroundColor properties, and pass as an argument to the fillPath() method.

## 构造函数

### 构造函数

> **new ScriptUIBrush**(): `ScriptUIBrush`

#### 返回

`ScriptUIBrush`

## 属性

### color

> `readonly` **color**: `number`[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:466

The brush color.
The paint color to use when the type is SOLID_COLOR. An array in the form [R, B, G, A] specifying the red, green, blue values of the color and the opacity (alpha channel) value as numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque.

***

### theme

> `readonly` **theme**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:472

The theme name.
The name of a color theme to use for drawing when the type is THEME_COLOR. Theme colors are defined by the host application.

***

### type

> `readonly` **type**: [`_BrushOrPenType`](../enumerations/BrushOrPenType.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:478

The brush type, solid or theme.
One of these constants: ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR
