# 类: Events

定义于: types-for-adobe/shared/ScriptUI.d.ts:2528

Provides access to objects used in the ScriptUI event system.
Access through the ScriptUI.events property.

## 构造函数

### 构造函数

> **new Events**(): `Events`

#### 返回

`Events`

## 方法

### createEvent()

> **createEvent**(`eventType`): [`Event`](Event.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2537

Creates an instance of the specified Event subclass.
The Event returned is a UIEvent,
KeyboardEvent or MouseEvent object,
depending on the requested type. This object can be passed as a parameter to an element's dispatchEvent
function in order to simulate a user-interaction event.

#### 参数

##### eventType

`string`

The name of an event type: one of "UIEvent", "KeyboardEvent", or "MouseEvent".

#### 返回

[`Event`](Event.md)
