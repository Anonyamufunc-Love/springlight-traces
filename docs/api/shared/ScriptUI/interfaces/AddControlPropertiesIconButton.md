# 接口: \_AddControlPropertiesIconButton

定义于: types-for-adobe/shared/ScriptUI.d.ts:2768

Creation properties of an IconButton.

## 参数

A unique name for the control.

## 参数

A string for the visual style, either "button", which has a visible border with a raised or 3D appearance, or "toolbutton", which has a flat appearance, appropriate for inclusion in a toolbar.

## 参数

For a button-style control, a value of true causes it to get a button-pressed appearance the first time it is clicked, and alternate with the unpressed appearance each time it is clicked. The toggle state is reflected in the control’s value property.

## 属性

### name?

> `optional` **name**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2769

***

### style?

> `optional` **style**: `"button"` \| `"toolbutton"`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2770

***

### toggle?

> `optional` **toggle**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2771
