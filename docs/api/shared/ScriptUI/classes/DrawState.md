# 类: DrawState

定义于: types-for-adobe/shared/ScriptUI.d.ts:669

Describes an input state at the time of the triggering  ScriptUIGraphics.onDraw() event.
Contains properties that report whether the current control has the input focus, and the particular mouse button and keypress state. Passed in as argument to ScriptUIGraphics.onDraw().

## 构造函数

### 构造函数

> **new DrawState**(): `DrawState`

#### 返回

`DrawState`

## 属性

### altKeyPressed

> `readonly` **altKeyPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:673

True if the Alt key is being pressed (in Windows only).

***

### capsLockKeyPressed

> `readonly` **capsLockKeyPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:678

True if the Caps Lock key is being pressed.

***

### cmdKeyPressed

> `readonly` **cmdKeyPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:683

True if the Command key is being pressed (in Mac OS only).

***

### ctrlKeyPressed

> `readonly` **ctrlKeyPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:688

True if the Ctrl key is being pressed.

***

### hasFocus

> `readonly` **hasFocus**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:693

True if the element has the input focus.

***

### leftButtonPressed

> `readonly` **leftButtonPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:698

True if the left mouse button is being pressed.

***

### middleButtonPressed

> `readonly` **middleButtonPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:703

True if the middle mouse button is being pressed.

***

### mouseOver

> `readonly` **mouseOver**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:708

True if the cursor is hovering over this element.

***

### numLockKeyPressed

> `readonly` **numLockKeyPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:713

True if the Num Lock key is being pressed.

***

### optKeyPressed

> `readonly` **optKeyPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:718

True if the Option key is being pressed (in Mac OS only).

***

### rightButtonPressed

> `readonly` **rightButtonPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:723

True if the right mouse button is being pressed.

***

### shiftKeyPressed

> `readonly` **shiftKeyPressed**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:728

True if the Shift key is being pressed.
