# 类: RenderQueueItem

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2314

The RenderQueueItem object represents an individual item in the render queue. It provides access to the specific settings for an item to be rendered. Create the object by adding a composition to the Render Queue with the RQItemCollection object;

## 构造函数

### 构造函数

> **new RenderQueueItem**(): `RenderQueueItem`

#### 返回

`RenderQueueItem`

## 属性

### comp

> `readonly` **comp**: [`CompItem`](CompItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2325

The composition to be rendered by this item.

***

### elapsedSeconds

> `readonly` **elapsedSeconds**: `null` \| `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2322

The time elapsed in the current rendering of this item.

***

### logType

> **logType**: [`LogType`](../enumerations/LogType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2355

A log type for this item.

***

### numOutputModules

> `readonly` **numOutputModules**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2316

The total number of Output Modules assigned to the item.

***

### onStatus

> **onStatus**: `null` \| `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2352

A callback function that is called during the rendering process when the status of the item changes.

***

### outputModules

> `readonly` **outputModules**: [`OMCollection`](OMCollection.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2328

The collection of Output Modules for this item.

***

### queueItemNotify

> **queueItemNotify**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2337

Sets the Notify checkbox for each individual item in the Render Queue

***

### render

> **render**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2340

When true, this item is rendered when the queue is started.

***

### skipFrames

> **skipFrames**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2349

The number of frames to skip when rendering this item.

***

### startTime

> `readonly` **startTime**: `null` \| [`Date`](../../../shared/JavaScript/interfaces/Date.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2319

The time when rendering began for the item.

***

### status

> `readonly` **status**: [`RQItemStatus`](../enumerations/RQItemStatus.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2334

The current rendering status of the item.

***

### templates

> `readonly` **templates**: `string`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2331

A set of Render Settings templates.

***

### timeSpanDuration

> **timeSpanDuration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2346

The duration of the composition to be rendered.

***

### timeSpanStart

> **timeSpanStart**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2343

The start time in the composition to be rendered.

## 方法

### applyTemplate()

> **applyTemplate**(`templateName`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2375

Applies a Render Settings template.

#### 参数

##### templateName

`string`

#### 返回

`void`

***

### duplicate()

> **duplicate**(): `RenderQueueItem`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2378

Duplicates this item.

#### 返回

`RenderQueueItem`

***

### getSetting()

> **getSetting**(`key`): `string` \| `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2357

#### 参数

##### key

`string`

#### 返回

`string` \| `number`

***

### getSettings()

> **getSettings**(`format`): `object`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2359

#### 参数

##### format

[`GetSettingsFormat`](../enumerations/GetSettingsFormat.md)

#### 返回

`object`

***

### outputModule()

> **outputModule**(`index`): [`OutputModule`](OutputModule.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2366

Gets an Output Module for the item.

#### 参数

##### index

`number`

#### 返回

[`OutputModule`](OutputModule.md)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2369

Removes the item from the render queue.

#### 返回

`void`

***

### saveAsTemplate()

> **saveAsTemplate**(`name`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2372

Saves a new Render Settings template.

#### 参数

##### name

`string`

#### 返回

`void`

***

### setSetting()

> **setSetting**(`key`, `value`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2361

#### 参数

##### key

`string`

##### value

`string` | `number`

#### 返回

`void`

***

### setSettings()

> **setSettings**(`settings`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2363

#### 参数

##### settings

`object`

#### 返回

`void`
