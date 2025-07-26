# 类: RQItemCollection

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2382

The RQItemCollection contains all of the render-queue items in a project, as shown in the Render Queue panel of the project. The collection provides access to the RenderQueueItem objects, and allows you to create them from compositions. The first RenderQueueItem object in the collection is at index position 1.

## 继承

- [`Collection`](Collection.md)

## 可索引

\[`index`: `number`\]: [`RenderQueueItem`](RenderQueueItem.md)

Retrieves an RenderQueueItem in the collection by its index number. The first object is at index 1.

## 构造函数

### 构造函数

> **new RQItemCollection**(): `RQItemCollection`

#### 返回

`RQItemCollection`

#### 继承自

[`Collection`](Collection.md).[`constructor`](Collection.md#constructor)

## 属性

### length

> `readonly` **length**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1076

The number of objects in the collection.

#### 继承自

[`Collection`](Collection.md).[`length`](Collection.md#length)

## 方法

### add()

> **add**(`comp`): [`RenderQueueItem`](RenderQueueItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2387

Adds a composition to the Render Queue.

#### 参数

##### comp

[`CompItem`](CompItem.md)

#### 返回

[`RenderQueueItem`](RenderQueueItem.md)
