# 类: LayerCollection

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1506

The LayerCollection object represents a set of layers. The LayerCollection belonging to a CompItem object contains all the layer objects for layers in the composition. The methods of the collection object allow you to manipulate the layer list.

## 继承

- [`Collection`](Collection.md)

## 可索引

\[`index`: `number`\]: [`Layer`](Layer.md)

Retrieves a Layer object in the collection by its index number. The first object is at index 1.

## 构造函数

### 构造函数

> **new LayerCollection**(): `LayerCollection`

#### 返回

`LayerCollection`

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

> **add**(`item`, `duration?`): [`AVLayer`](AVLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1511

Creates a new AVLayer and adds it to this collection.

#### 参数

##### item

[`AVItem`](AVItem.md)

##### duration?

`number`

#### 返回

[`AVLayer`](AVLayer.md)

***

### addBoxText()

> **addBoxText**(`size`, `sourceText?`): [`TextLayer`](TextLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1527

Creates a new paragraph (box) text layer and adds it to this collection.

#### 参数

##### size

\[`number`, `number`\]

##### sourceText?

`string` | [`TextDocument`](TextDocument.md)

#### 返回

[`TextLayer`](TextLayer.md)

***

### addCamera()

> **addCamera**(`name`, `centerPoint`): [`CameraLayer`](CameraLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1533

Creates a new camera layer and adds it to this collection.

#### 参数

##### name

`string`

##### centerPoint

\[`number`, `number`\]

#### 返回

[`CameraLayer`](CameraLayer.md)

***

### addLight()

> **addLight**(`name`, `centerPoint`): [`LightLayer`](LightLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1536

Creates a new light layer and adds it to this collection.

#### 参数

##### name

`string`

##### centerPoint

\[`number`, `number`\]

#### 返回

[`LightLayer`](LightLayer.md)

***

### addNull()

> **addNull**(`duration?`): [`AVLayer`](AVLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1514

Creates a new, null layer and adds it to this collection.

#### 参数

##### duration?

`number`

#### 返回

[`AVLayer`](AVLayer.md)

***

### addShape()

> **addShape**(): [`ShapeLayer`](ShapeLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1539

Creates a new shape layer and adds it to this collection.

#### 返回

[`ShapeLayer`](ShapeLayer.md)

***

### addSolid()

> **addSolid**(`color`, `name`, `width`, `height`, `pixelAspect`, `duration?`): [`AVLayer`](AVLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1517

Creates a new layer, a FootageItem with a SolidSource, and adds it to this collection.

#### 参数

##### color

[`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

##### name

`string`

##### width

`number`

##### height

`number`

##### pixelAspect

`number`

##### duration?

`number`

#### 返回

[`AVLayer`](AVLayer.md)

***

### addText()

> **addText**(`sourceText?`): [`TextLayer`](TextLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1530

Creates a new point text layer and adds it to this collection.

#### 参数

##### sourceText?

`string` | [`TextDocument`](TextDocument.md)

#### 返回

[`TextLayer`](TextLayer.md)

***

### byName()

> **byName**(`name`): `null` \| [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1542

Retrieves the layer object with a specified name.

#### 参数

##### name

`string`

#### 返回

`null` \| [`Layer`](Layer.md)

***

### precompose()

> **precompose**(`layerIndicies`, `name`, `moveAllAttributes?`): [`CompItem`](CompItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1545

Collects specified layers into a new composition.

#### 参数

##### layerIndicies

`number`[]

##### name

`string`

##### moveAllAttributes?

`boolean`

#### 返回

[`CompItem`](CompItem.md)
