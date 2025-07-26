# 类: UIEvent

定义于: types-for-adobe/shared/ScriptUI.d.ts:2336

Encapsulates input event information for an event that propagates through a container and control hierarchy.
Implements W3C standard event handling. This object is passed to a function that you register to respond to events of a certain type that occur in a window or control. Use windowObj.addEventListener() or controlObj.addEventListener() to register a handler function.

## 继承

- [`Event`](Event.md)

## 继承于

- [`KeyboardEvent`](KeyboardEvent.md)

## 构造函数

### 构造函数

> **new UIEvent**(`type`, `captures`, `bubbles`, `view?`, `detail?`): `UIEvent`

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

`UIEvent`

#### 继承自

[`Event`](Event.md).[`constructor`](Event.md#constructor)

## 属性

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

***

### eventPhase

> `readonly` **eventPhase**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2365

The current phase of event propagation; one of none, target, capture, bubble.

#### 继承自

[`Event`](Event.md).[`eventPhase`](Event.md#eventphase)

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

> `readonly` **type**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2381

The name of the event that thisobject represents.
Event types are listed in the JavaScript Tools Guide.

#### 继承自

[`Event`](Event.md).[`type`](Event.md#type)

***

### view

> `readonly` **view**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2386

The ScriptUI element that this event relates to.

## 方法

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
