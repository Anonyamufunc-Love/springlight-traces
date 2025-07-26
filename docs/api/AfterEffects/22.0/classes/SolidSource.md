# 类: SolidSource

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2442

The SolidSource object represents a solid-color footage source.

## 继承

- [`FootageSource`](FootageSource.md)

## 构造函数

### 构造函数

> **new SolidSource**(): `SolidSource`

#### 返回

`SolidSource`

#### 继承自

[`FootageSource`](FootageSource.md).[`constructor`](FootageSource.md#constructor)

## 属性

### alphaMode

> **alphaMode**: [`AlphaMode`](../enumerations/AlphaMode.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1272

The mode of an alpha channel.

#### 继承自

[`FootageSource`](FootageSource.md).[`alphaMode`](FootageSource.md#alphamode)

***

### color

> **color**: [`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2444

The color of the solid.

***

### conformFrameRate

> **conformFrameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1296

The rate to which footage should conform.

#### 继承自

[`FootageSource`](FootageSource.md).[`conformFrameRate`](FootageSource.md#conformframerate)

***

### displayFrameRate

> `readonly` **displayFrameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1266

The effective frame rate as displayed and rendered in compositions by After Effects.

#### 继承自

[`FootageSource`](FootageSource.md).[`displayFrameRate`](FootageSource.md#displayframerate)

***

### fieldSeparationType

> **fieldSeparationType**: [`FieldSeparationType`](../enumerations/FieldSeparationType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1281

The field separation type.

#### 继承自

[`FootageSource`](FootageSource.md).[`fieldSeparationType`](FootageSource.md#fieldseparationtype)

***

### file

> `readonly` **file**: `null` \| [`File`](../../../shared/JavaScript/interfaces/File.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1260

The footage source file.

#### 继承自

[`FootageSource`](FootageSource.md).[`file`](FootageSource.md#file)

***

### hasAlpha

> **hasAlpha**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1269

When true, a footage clip or proxy includes an alpha channel.

#### 继承自

[`FootageSource`](FootageSource.md).[`hasAlpha`](FootageSource.md#hasalpha)

***

### highQualityFieldSeparation

> **highQualityFieldSeparation**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1284

How the fields are to be separated in non-still footage.

#### 继承自

[`FootageSource`](FootageSource.md).[`highQualityFieldSeparation`](FootageSource.md#highqualityfieldseparation)

***

### invertAlpha

> **invertAlpha**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1278

When true, an alpha channel in a footage clip or proxy should be inverted.

#### 继承自

[`FootageSource`](FootageSource.md).[`invertAlpha`](FootageSource.md#invertalpha)

***

### isStill

> `readonly` **isStill**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1263

When true, footage is a still image.

#### 继承自

[`FootageSource`](FootageSource.md).[`isStill`](FootageSource.md#isstill)

***

### loop

> **loop**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1290

How many times an image sequence is set to loop.

#### 继承自

[`FootageSource`](FootageSource.md).[`loop`](FootageSource.md#loop)

***

### nativeFrameRate

> **nativeFrameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1293

The native frame rate of the footage.

#### 继承自

[`FootageSource`](FootageSource.md).[`nativeFrameRate`](FootageSource.md#nativeframerate)

***

### premulColor

> **premulColor**: [`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1275

The color to be premultiplied.

#### 继承自

[`FootageSource`](FootageSource.md).[`premulColor`](FootageSource.md#premulcolor)

***

### removePulldown

> **removePulldown**: [`PulldownPhase`](../enumerations/PulldownPhase.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1287

The pulldown type for the footage.

#### 继承自

[`FootageSource`](FootageSource.md).[`removePulldown`](FootageSource.md#removepulldown)

## 方法

### guessAlphaMode()

> **guessAlphaMode**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1299

Estimates the alphaMode setting.

#### 返回

`void`

#### 继承自

[`FootageSource`](FootageSource.md).[`guessAlphaMode`](FootageSource.md#guessalphamode)

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

#### 继承自

[`FootageSource`](FootageSource.md).[`guessPulldown`](FootageSource.md#guesspulldown)
