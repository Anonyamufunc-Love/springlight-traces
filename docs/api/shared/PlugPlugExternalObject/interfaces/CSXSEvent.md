# 接口: CSXSEvent

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:59

## 属性

### appId

> `readonly` **appId**: `string`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:65

Retrieves the unique identifier of the application from which this event was dispatched.

***

### data

> **data**: `string`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:70

Retrieves or sets the payload of this event.

***

### extensionId

> `readonly` **extensionId**: `string`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:75

Retrieves the unique identifier of the extension from which this event was dispatched.

***

### scope

> **scope**: `string`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:80

Retrieves the scope of this event.

***

### type

> **type**: `string`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:85

Retrieves the type of this event.

## 方法

### dispatch()

> **dispatch**(): `void`

定义于: types-for-adobe/shared/PlugPlugExternalObject.d.ts:90

Dispatch the event

#### 返回

`void`
