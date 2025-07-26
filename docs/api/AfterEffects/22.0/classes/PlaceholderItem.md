# 类: PlaceholderItem

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1255

The FootageItem object represents a footage item imported into a project, which appears in the Project panel. These are accessed by position index number in a project’s item collection.

## 继承

- [`FootageItem`](FootageItem.md)

## 构造函数

### 构造函数

> **new PlaceholderItem**(): `PlaceholderItem`

#### 返回

`PlaceholderItem`

#### 继承自

[`FootageItem`](FootageItem.md).[`constructor`](FootageItem.md#constructor)

## 属性

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1337

A descriptive string.

#### 继承自

[`FootageItem`](FootageItem.md).[`comment`](FootageItem.md#comment)

***

### duration

> **duration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:901

The total duration of the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`duration`](FootageItem.md#duration)

***

### file

> `readonly` **file**: `null` \| [`File`](../../../shared/JavaScript/interfaces/File.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1222

The footage source file.

#### 继承自

[`FootageItem`](FootageItem.md).[`file`](FootageItem.md#file)

***

### footageMissing

> `readonly` **footageMissing**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:880

When true, the item cannot be found or is a placeholder.

#### 继承自

[`FootageItem`](FootageItem.md).[`footageMissing`](FootageItem.md#footagemissing)

***

### frameDuration

> **frameDuration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:898

The frame duration for the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`frameDuration`](FootageItem.md#frameduration)

***

### frameRate

> **frameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:895

The frame rate of the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`frameRate`](FootageItem.md#framerate)

***

### hasAudio

> `readonly` **hasAudio**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:877

When true, the item has an audio component.

#### 继承自

[`FootageItem`](FootageItem.md).[`hasAudio`](FootageItem.md#hasaudio)

***

### hasVideo

> `readonly` **hasVideo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:874

When true, the item has a video component.

#### 继承自

[`FootageItem`](FootageItem.md).[`hasVideo`](FootageItem.md#hasvideo)

***

### height

> **height**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:889

The height of the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`height`](FootageItem.md#height)

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1328

A unique identifier for this item.

#### 继承自

[`FootageItem`](FootageItem.md).[`id`](FootageItem.md#id)

***

### isMediaReplacementCompatible

> `readonly` **isMediaReplacementCompatible**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:883

True if the AVItem can be used as an alternate source when calling Property.setAlternateSource

#### 继承自

[`FootageItem`](FootageItem.md).[`isMediaReplacementCompatible`](FootageItem.md#ismediareplacementcompatible)

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1346

The label color for the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`label`](FootageItem.md#label)

***

### mainSource

> `readonly` **mainSource**: [`FootageSource`](FootageSource.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1225

All settings related to the footage item.

#### 继承自

[`FootageItem`](FootageItem.md).[`mainSource`](FootageItem.md#mainsource)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1334

The name of the object as shown in the Project panel.

#### 继承自

[`FootageItem`](FootageItem.md).[`name`](FootageItem.md#name)

***

### parentFolder

> **parentFolder**: [`FolderItem`](FolderItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1340

The parent folder of this item.

#### 继承自

[`FootageItem`](FootageItem.md).[`parentFolder`](FootageItem.md#parentfolder)

***

### pixelAspect

> **pixelAspect**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:892

The pixel aspect ratio of the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`pixelAspect`](FootageItem.md#pixelaspect)

***

### proxySource

> `readonly` **proxySource**: [`FootageSource`](FootageSource.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:868

The FootageItem object used as proxy for the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`proxySource`](FootageItem.md#proxysource)

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1343

When true, this item is currently selected.

#### 继承自

[`FootageItem`](FootageItem.md).[`selected`](FootageItem.md#selected)

***

### time

> **time**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:907

Current time of the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`time`](FootageItem.md#time)

***

### typeName

> `readonly` **typeName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1331

The type of item.

#### 继承自

[`FootageItem`](FootageItem.md).[`typeName`](FootageItem.md#typename)

***

### usedIn

> `readonly` **usedIn**: [`CompItem`](CompItem.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:871

The CompItem objects that use this item.

#### 继承自

[`FootageItem`](FootageItem.md).[`usedIn`](FootageItem.md#usedin)

***

### useProxy

> **useProxy**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:904

When true, a proxy source is used for this item.

#### 继承自

[`FootageItem`](FootageItem.md).[`useProxy`](FootageItem.md#useproxy)

***

### width

> **width**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:886

The width of the item.

#### 继承自

[`FootageItem`](FootageItem.md).[`width`](FootageItem.md#width)

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

[`FootageItem`](FootageItem.md).[`addGuide`](FootageItem.md#addguide)

***

### openInViewer()

> **openInViewer**(): `null` \| [`Viewer`](Viewer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1228

Opens the footage in a Footage panel.

#### 返回

`null` \| [`Viewer`](Viewer.md)

#### 继承自

[`FootageItem`](FootageItem.md).[`openInViewer`](FootageItem.md#openinviewer)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1358

Deletes the item from the project.

#### 返回

`void`

#### 继承自

[`FootageItem`](FootageItem.md).[`remove`](FootageItem.md#remove)

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

[`FootageItem`](FootageItem.md).[`removeGuide`](FootageItem.md#removeguide)

***

### replace()

> **replace**(`file`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1231

Replaces a footage file with another footage file.

#### 参数

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`void`

#### 继承自

[`FootageItem`](FootageItem.md).[`replace`](FootageItem.md#replace)

***

### replaceWithPlaceholder()

> **replaceWithPlaceholder**(`name`, `width`, `height`, `frameRate`, `duration`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1234

Replaces a footage file with a placeholder object.

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

#### 继承自

[`FootageItem`](FootageItem.md).[`replaceWithPlaceholder`](FootageItem.md#replacewithplaceholder)

***

### replaceWithSequence()

> **replaceWithSequence**(`file`, `forceAlphabetical`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1243

Replaces a footage file with an image sequence.

#### 参数

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

##### forceAlphabetical

`boolean`

#### 返回

`void`

#### 继承自

[`FootageItem`](FootageItem.md).[`replaceWithSequence`](FootageItem.md#replacewithsequence)

***

### replaceWithSolid()

> **replaceWithSolid**(`color`, `name`, `width`, `height`, `pixelAspect`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1246

Replaces a footage file with a solid.

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

#### 继承自

[`FootageItem`](FootageItem.md).[`replaceWithSolid`](FootageItem.md#replacewithsolid)

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

[`FootageItem`](FootageItem.md).[`setGuide`](FootageItem.md#setguide)

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

#### 继承自

[`FootageItem`](FootageItem.md).[`setProxy`](FootageItem.md#setproxy)

***

### setProxyToNone()

> **setProxyToNone**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:934

Removes the proxy for the item.

#### 返回

`void`

#### 继承自

[`FootageItem`](FootageItem.md).[`setProxyToNone`](FootageItem.md#setproxytonone)

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

#### 继承自

[`FootageItem`](FootageItem.md).[`setProxyWithPlaceholder`](FootageItem.md#setproxywithplaceholder)

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

#### 继承自

[`FootageItem`](FootageItem.md).[`setProxyWithSequence`](FootageItem.md#setproxywithsequence)

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

#### 继承自

[`FootageItem`](FootageItem.md).[`setProxyWithSolid`](FootageItem.md#setproxywithsolid)
