# 类: KeyboardState

定义于: types-for-adobe/shared/ScriptUI.d.ts:2545

Reports the active state of the keyboard.
Access through the ScriptUI.environment.keyboardState property.
Query the properties of this object at any time to determine the current key that is down and any modifiers that are pressed.

## 构造函数

### 构造函数

> **new KeyboardState**(): `KeyboardState`

#### 返回

`KeyboardState`

## 属性

### altKey

> `readonly` **altKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2549

True if the Alt or Option key is pressed.

***

### ctrlKey

> `readonly` **ctrlKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2554

True if the Ctrl key is pressed.

***

### keyName

> `readonly` **keyName**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2559

A string containing the name of the currently pressed key, such as "a", or an empty string.

***

### metaKey

> `readonly` **metaKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2564

True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.

***

### shiftKey

> `readonly` **shiftKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2569

True if the Shift key is pressed.
