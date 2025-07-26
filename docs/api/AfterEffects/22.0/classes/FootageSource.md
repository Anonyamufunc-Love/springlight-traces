# 类: FootageSource

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1258

The FootageSource object holds information describing the source of some footage. It is used as the mainSource of a FootageItem, or the proxySource of a CompItem or FootageItem.

## 继承于

- [`FileSource`](FileSource.md)
- [`PlaceholderSource`](PlaceholderSource.md)
- [`SolidSource`](SolidSource.md)

## 构造函数

### 构造函数

> **new FootageSource**(): `FootageSource`

#### 返回

`FootageSource`

## 属性

### alphaMode

> **alphaMode**: [`AlphaMode`](../enumerations/AlphaMode.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1272

The mode of an alpha channel.

***

### conformFrameRate

> **conformFrameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1296

The rate to which footage should conform.

***

### displayFrameRate

> `readonly` **displayFrameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1266

The effective frame rate as displayed and rendered in compositions by After Effects.

***

### fieldSeparationType

> **fieldSeparationType**: [`FieldSeparationType`](../enumerations/FieldSeparationType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1281

The field separation type.

***

### file

> `readonly` **file**: `null` \| [`File`](../../../shared/JavaScript/interfaces/File.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1260

The footage source file.

***

### hasAlpha

> **hasAlpha**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1269

When true, a footage clip or proxy includes an alpha channel.

***

### highQualityFieldSeparation

> **highQualityFieldSeparation**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1284

How the fields are to be separated in non-still footage.

***

### invertAlpha

> **invertAlpha**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1278

When true, an alpha channel in a footage clip or proxy should be inverted.

***

### isStill

> `readonly` **isStill**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1263

When true, footage is a still image.

***

### loop

> **loop**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1290

How many times an image sequence is set to loop.

***

### nativeFrameRate

> **nativeFrameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1293

The native frame rate of the footage.

***

### premulColor

> **premulColor**: [`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1275

The color to be premultiplied.

***

### removePulldown

> **removePulldown**: [`PulldownPhase`](../enumerations/PulldownPhase.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1287

The pulldown type for the footage.

## 方法

### guessAlphaMode()

> **guessAlphaMode**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1299

Estimates the alphaMode setting.

#### 返回

`void`

***

### guessPulldown()

> **guessPulldown**(`method`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1302

Estimates the pulldownType setting.

#### 参数

##### method

[`PulldownMethod`](../enumerations/PulldownMethod.md)

#### 返回

`void`
