# 类: RenderQueue

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2278

The RenderQueue object represents the render automation process, the data and functionality that is available through the Render Queue panel of a particular After Effects project. Attributes provide access to items in the render queue and their render status. Methods can start, pause, and stop the rendering process.

## 构造函数

### 构造函数

> **new RenderQueue**(): `RenderQueue`

#### 返回

`RenderQueue`

## 属性

### canQueueInAME

> `readonly` **canQueueInAME**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2286

CC 2017(14.0)-

***

### items

> `readonly` **items**: [`RQItemCollection`](RQItemCollection.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2289

The collection of items in the render queue.

***

### numItems

> `readonly` **numItems**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2283

The total number of items in the render queue.

***

### queueNotify

> **queueNotify**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2292

Read or write the Notify property for the entire Render Queue

***

### rendering

> `readonly` **rendering**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2280

When true, a render is in progress.

## 方法

### item()

> **item**(`index`): [`RenderQueueItem`](RenderQueueItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2310

Gets a render-queue item from the collection.

#### 参数

##### index

`number`

#### 返回

[`RenderQueueItem`](RenderQueueItem.md)

***

### pauseRendering()

> **pauseRendering**(`pause`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2301

Pauses or restarts the rendering process.

#### 参数

##### pause

`boolean`

#### 返回

`void`

***

### queueInAME()

> **queueInAME**(`render_immediately_in_AME`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2304

Calls the Queue In AME command

#### 参数

##### render\_immediately\_in\_AME

`boolean`

#### 返回

`void`

***

### render()

> **render**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2298

Starts the rendering process; does not return until render is complete.

#### 返回

`void`

***

### showWindow()

> **showWindow**(`doShow`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2295

Show or hides the Render Queue panel.

#### 参数

##### doShow

`boolean`

#### 返回

`void`

***

### stopRendering()

> **stopRendering**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2307

Stops the rendering process.

#### 返回

`void`
