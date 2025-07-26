# 类: Event

定义于: types-for-adobe/shared/ScriptUI.d.ts:2439

Base class for UIEvent.
Encapsulates input event information for an event that propagates through a container and control hierarchy.Implements W3C standard event handling.

## 继承于

- [`UIEvent`](UIEvent.md)
- [`KeyboardEvent`](KeyboardEvent.md)

## 构造函数

### 构造函数

> **new Event**(): `Event`

#### 返回

`Event`

## 属性

### bubbles

> `readonly` **bubbles**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2463

True if the event is of a type that bubbles.

***

### cancelable

> `readonly` **cancelable**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2468

True if the default action associated with the event can be canceled with preventDefault().

***

### captures

> `readonly` **captures**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2473

True if this event can be captured.

***

### currentTarget

> `readonly` **currentTarget**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2478

The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target.

***

### eventPhase

> `readonly` **eventPhase**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2483

The current phase of event propagation; one of none, target, capture, bubble.

***

### target

> `readonly` **target**: `object`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2488

The event target object for this event.

***

### timeStamp

> `readonly` **timeStamp**: [`Date`](../../JavaScript/interfaces/Date.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2493

The date and time at which the event occurred.

***

### type

> `readonly` **type**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2499

The name of the event that this object represents.
Event types are listed in the JavaScript Tools Guide.

***

### AT\_TARGET

> `readonly` `static` **AT\_TARGET**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2443

***

### BUBBLING\_PHASE

> `readonly` `static` **BUBBLING\_PHASE**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2448

***

### CAPTURING\_PHASE

> `readonly` `static` **CAPTURING\_PHASE**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2453

***

### NOT\_DISPATCHING

> `readonly` `static` **NOT\_DISPATCHING**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2458

## 方法

### preventDefault()

> **preventDefault**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2504

Prevents the default action associated with this event from being called.

#### 返回

`void`

***

### stopPropagation()

> **stopPropagation**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2509

Stops the propagation of this event.

#### 返回

`void`
