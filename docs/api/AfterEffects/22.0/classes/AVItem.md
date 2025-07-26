# 类: AVItem

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:866

The AVItem object provides access to attributes and methods of audio/visual files imported into After Effects.

## 继承

- [`Item`](Item.md)

## 继承于

- [`CompItem`](CompItem.md)
- [`FootageItem`](FootageItem.md)

## 构造函数

### 构造函数

> **new AVItem**(): `AVItem`

#### 返回

`AVItem`

#### 继承自

[`Item`](Item.md).[`constructor`](Item.md#constructor)

## 属性

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1337

A descriptive string.

#### 继承自

[`Item`](Item.md).[`comment`](Item.md#comment)

***

### duration

> **duration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:901

The total duration of the item.

***

### footageMissing

> `readonly` **footageMissing**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:880

When true, the item cannot be found or is a placeholder.

***

### frameDuration

> **frameDuration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:898

The frame duration for the item.

***

### frameRate

> **frameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:895

The frame rate of the item.

***

### hasAudio

> `readonly` **hasAudio**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:877

When true, the item has an audio component.

***

### hasVideo

> `readonly` **hasVideo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:874

When true, the item has a video component.

***

### height

> **height**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:889

The height of the item.

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1328

A unique identifier for this item.

#### 继承自

[`Item`](Item.md).[`id`](Item.md#id)

***

### isMediaReplacementCompatible

> `readonly` **isMediaReplacementCompatible**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:883

True if the AVItem can be used as an alternate source when calling Property.setAlternateSource

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1346

The label color for the item.

#### 继承自

[`Item`](Item.md).[`label`](Item.md#label)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1334

The name of the object as shown in the Project panel.

#### 继承自

[`Item`](Item.md).[`name`](Item.md#name)

***

### parentFolder

> **parentFolder**: [`FolderItem`](FolderItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1340

The parent folder of this item.

#### 继承自

[`Item`](Item.md).[`parentFolder`](Item.md#parentfolder)

***

### pixelAspect

> **pixelAspect**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:892

The pixel aspect ratio of the item.

***

### proxySource

> `readonly` **proxySource**: [`FootageSource`](FootageSource.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:868

The FootageItem object used as proxy for the item.

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1343

When true, this item is currently selected.

#### 继承自

[`Item`](Item.md).[`selected`](Item.md#selected)

***

### time

> **time**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:907

Current time of the item.

***

### typeName

> `readonly` **typeName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1331

The type of item.

#### 继承自

[`Item`](Item.md).[`typeName`](Item.md#typename)

***

### usedIn

> `readonly` **usedIn**: [`CompItem`](CompItem.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:871

The CompItem objects that use this item.

***

### useProxy

> **useProxy**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:904

When true, a proxy source is used for this item.

***

### width

> **width**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:886

The width of the item.

## 方法

### addGuide()

> **addGuide**(`orientationType`, `position`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1349

Creates a new guide and adds it to the guides object of the Item.

#### 参数

##### orientationType

`number`

##### position

`number`

#### 返回

`number`

#### 继承自

[`Item`](Item.md).[`addGuide`](Item.md#addguide)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1358

Deletes the item from the project.

#### 返回

`void`

#### 继承自

[`Item`](Item.md).[`remove`](Item.md#remove)

***

### removeGuide()

> **removeGuide**(`guideIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1352

Removes an existing guide.

#### 参数

##### guideIndex

`number`

#### 返回

`void`

#### 继承自

[`Item`](Item.md).[`removeGuide`](Item.md#removeguide)

***

### setGuide()

> **setGuide**(`position`, `guideIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1355

Modifies the position of an existing guide.

#### 参数

##### position

`number`

##### guideIndex

`number`

#### 返回

`void`

#### 继承自

[`Item`](Item.md).[`setGuide`](Item.md#setguide)

***

### setProxy()

> **setProxy**(`file`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:910

Sets a proxy for the item.

#### 参数

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`void`

***

### setProxyToNone()

> **setProxyToNone**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:934

Removes the proxy for the item.

#### 返回

`void`

***

### setProxyWithPlaceholder()

> **setProxyWithPlaceholder**(`name`, `width`, `height`, `frameRate`, `duration`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:925

Sets a placeholder as a proxy for the item.

#### 参数

##### name

`string`

##### width

`number`

##### height

`number`

##### frameRate

`number`

##### duration

`number`

#### 返回

`void`

***

### setProxyWithSequence()

> **setProxyWithSequence**(`file`, `forceAlphabetical`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:913

Sets a sequence as a proxy for the item.

#### 参数

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

##### forceAlphabetical

`boolean`

#### 返回

`void`

***

### setProxyWithSolid()

> **setProxyWithSolid**(`color`, `name`, `width`, `height`, `pixelAspect`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:916

Sets a solid as a proxy for the item.

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

#### 返回

`void`
