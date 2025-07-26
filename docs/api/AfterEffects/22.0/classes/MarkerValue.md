# 类: MarkerValue

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1558

The MarkerValue object represents a layer marker, which associates a comment, and optionally a chapter reference point, Web-page link, or Flash Video cue point with a particular point in a layer.

## 构造函数

### 构造函数

> **new MarkerValue**(`comment`, `chapter?`, `url?`, `frameTarget?`, `cuePointName?`, `params?`): `MarkerValue`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1559

#### 参数

##### comment

`string`

##### chapter?

`string`

##### url?

`string`

##### frameTarget?

`string`

##### cuePointName?

`string`

##### params?

`string`

#### 返回

`MarkerValue`

## 属性

### chapter

> **chapter**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1572

A chapter link reference point for the associated layer.

***

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1569

A comment on the associated layer.

***

### cuePointName

> **cuePointName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1575

The Flash Video cue point name.

***

### duration

> **duration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1578

The amount of time represented by the marker.

***

### eventCuePoint

> **eventCuePoint**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1581

Whether the Flash Video cue point is for an event or navigation.

***

### frameTarget

> **frameTarget**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1587

A specific frame target within the Web page specified by url.

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1590

The label color for a composition or layer marker.

***

### protectedRegion

> **protectedRegion**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1593

State of the Protected Region option in the Composition Marker dialog box.

***

### url

> **url**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1584

A URL for Web page to be associated with the layer.

## 方法

### getParameters()

> **getParameters**(): `object`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1596

Retrieves the key-value pairs associated with the marker value.

#### 返回

`object`

***

### setParameters()

> **setParameters**(`keyValuePairs`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1599

Sets the key-value pairs associated with the marker value.

#### 参数

##### keyValuePairs

`object`

#### 返回

`void`
