# 类: KeyboardEvent

定义于: types-for-adobe/shared/ScriptUI.d.ts:2572

Reports the active state of the keyboard.
Access through the ScriptUI.environment.keyboardState property.
Query the properties of this object at any time to determine the current key that is down and any modifiers that are pressed.

## 继承

- [`UIEvent`](UIEvent.md).[`Event`](Event.md)

## 实现

- [`KeyboardState`](KeyboardState.md)

## 构造函数

### 构造函数

> **new KeyboardEvent**(`type`, `captures`, `bubbles`, `view?`, `detail?`): `KeyboardEvent`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2397

Creates an event.
The UIEvent object is normally created by ScriptUI and passed to your event handler. However, you can simulate a user action by constructing an event object and sending it to a target object’s dispatchEvent() function.

#### 参数

##### type

`string`

The event type. See UIEvent.type property.

##### captures

`boolean`

Set to true if this event can be captured.

##### bubbles

`boolean`

Set to true if the event bubbles.

##### view?

`object`

The ScriptUI element that this event relates to.

##### detail?

`number`

The click count for a mouse-click event.

#### 返回

`KeyboardEvent`

#### 继承自

[`Event`](Event.md).[`constructor`](Event.md#constructor)

## 属性

### altKey

> **altKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2573

True if the Alt or Option key is pressed.

#### 实现了

[`KeyboardState`](KeyboardState.md).[`altKey`](KeyboardState.md#altkey)

***

### bubbles

> `readonly` **bubbles**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2340

True if the event is of a type that bubbles.

#### 继承自

[`Event`](Event.md).[`bubbles`](Event.md#bubbles)

***

### cancelable

> `readonly` **cancelable**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2345

True if the default action associated with the event can be canceled with preventDefault().

#### 继承自

[`Event`](Event.md).[`cancelable`](Event.md#cancelable)

***

### captures

> `readonly` **captures**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2350

True if this event can be captured.

#### 继承自

[`Event`](Event.md).[`captures`](Event.md#captures)

***

### ctrlKey

> **ctrlKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2574

True if the Ctrl key is pressed.

#### 实现了

[`KeyboardState`](KeyboardState.md).[`ctrlKey`](KeyboardState.md#ctrlkey)

***

### currentTarget

> `readonly` **currentTarget**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2355

The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.

#### 继承自

[`Event`](Event.md).[`currentTarget`](Event.md#currenttarget)

***

### detail

> `readonly` **detail**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2360

The click count for a mouse-click event.

#### 继承自

[`UIEvent`](UIEvent.md).[`detail`](UIEvent.md#detail)

***

### eventPhase

> `readonly` **eventPhase**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2365

The current phase of event propagation; one of none, target, capture, bubble.

#### 继承自

[`Event`](Event.md).[`eventPhase`](Event.md#eventphase)

***

### keyIdentifier

> **keyIdentifier**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2577

***

### keyLocation

> **keyLocation**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2578

***

### keyName

> **keyName**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2579

A string containing the name of the currently pressed key, such as "a", or an empty string.

#### 实现了

[`KeyboardState`](KeyboardState.md).[`keyName`](KeyboardState.md#keyname)

***

### metaKey

> **metaKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2575

True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed.

#### 实现了

[`KeyboardState`](KeyboardState.md).[`metaKey`](KeyboardState.md#metakey)

***

### shiftKey

> **shiftKey**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2576

True if the Shift key is pressed.

#### 实现了

[`KeyboardState`](KeyboardState.md).[`shiftKey`](KeyboardState.md#shiftkey)

***

### target

> `readonly` **target**: `object`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2370

The event target object for this event.

#### 继承自

[`Event`](Event.md).[`target`](Event.md#target)

***

### timeStamp

> `readonly` **timeStamp**: [`Date`](../../JavaScript/interfaces/Date.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2375

The date and time at which the event occurred.

#### 继承自

[`Event`](Event.md).[`timeStamp`](Event.md#timestamp)

***

### type

> **type**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2580

The name of the event that thisobject represents.
Event types are listed in the JavaScript Tools Guide.

#### 重写了

[`Event`](Event.md).[`type`](Event.md#type)

***

### view

> `readonly` **view**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2386

The ScriptUI element that this event relates to.

#### 继承自

[`UIEvent`](UIEvent.md).[`view`](UIEvent.md#view)

## 方法

### getModifierState()

> **getModifierState**(`keyIdentifier`): `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2581

#### 参数

##### keyIdentifier

`"Alt"` | `"CapsLock"` | `"Control"` | `"Meta"` | `"NumLock"` | `"Scroll"` | `"Shift"`

#### 返回

`boolean`

***

### initEvent()

> **initEvent**(`type`, `captures`, `bubbles`, `cancelable`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2406

Initializes a UI event as a core W3C event.

#### 参数

##### type

`string`

The event type.

##### captures

`boolean`

Set to true if this event can be captured.

##### bubbles

`boolean`

Set to true if the event bubbles.

##### cancelable

`boolean`

Set to true if the default action is cancelable.

#### 返回

`void`

#### 继承自

[`UIEvent`](UIEvent.md).[`initEvent`](UIEvent.md#initevent)

***

### initKeyboardEvent()

> **initKeyboardEvent**(`eventName`, `bubble`, `isCancelable`, `view`, `keyID`, `keyLocation`, `modifiersList`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2584

#### 参数

##### eventName

`string`

##### bubble

`boolean`

##### isCancelable

`boolean`

##### view

[`_Control`](Control.md)

##### keyID

`string`

##### keyLocation

`number`

##### modifiersList

`string`

#### 返回

`void`

***

### initUIEvent()

> **initUIEvent**(`type`, `captures`, `bubbles`, `view?`, `detail?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2416

Initializes an event.

#### 参数

##### type

`string`

The event type.

##### captures

`boolean`

Set to true if this event can be captured.

##### bubbles

`boolean`

Set to true if the event bubbles.

##### view?

`object`

The ScriptUI element that this event relates to.

##### detail?

`number`

The click count for a mouse-click event.

#### 返回

`void`

#### 继承自

[`UIEvent`](UIEvent.md).[`initUIEvent`](UIEvent.md#inituievent)

***

### preventDefault()

> **preventDefault**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2427

Prevents the default action associated with this event from being called.

#### 返回

`void`

#### 继承自

[`Event`](Event.md).[`preventDefault`](Event.md#preventdefault)

***

### stopPropagation()

> **stopPropagation**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2432

Stops the propagation of this event.

#### 返回

`void`

#### 继承自

[`Event`](Event.md).[`stopPropagation`](Event.md#stoppropagation)
