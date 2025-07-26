# 接口: TwoDSpatialType

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1921

## 继承

- [`PropertyClassMembers`](../type-aliases/PropertyClassMembers.md)

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2222

When true, this property is active.

#### 继承自

`PropertyClassMembers.active`

***

### alternateSource

> `readonly` **alternateSource**: [`AVItem`](../classes/AVItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2032

The alternate render source for Media Replacement

#### 继承自

`PropertyClassMembers.alternateSource`

***

### canSetAlternateSource

> `readonly` **canSetAlternateSource**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2035

True if the property allows Media Replacement

#### 继承自

`PropertyClassMembers.canSetAlternateSource`

***

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

`PropertyClassMembers.canSetEnabled`

***

### canSetExpression

> `readonly` **canSetExpression**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1996

When true, the expression can be set by a script.

#### 继承自

`PropertyClassMembers.canSetExpression`

***

### canVaryOverTime

> `readonly` **canVaryOverTime**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1993

When true, the property can be keyframed.

#### 继承自

`PropertyClassMembers.canVaryOverTime`

***

### dimensionsSeparated

> **dimensionsSeparated**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2049

When true, the property’s dimensions are represented as separate properties.

#### 继承自

`PropertyClassMembers.dimensionsSeparated`

***

### elided

> `readonly` **elided**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2225

When true, this property is not displayed in the user interface.

#### 继承自

`PropertyClassMembers.elided`

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2237

When true, this property is enabled.

#### 继承自

`PropertyClassMembers.enabled`

***

### essentialPropertySource

> `readonly` **essentialPropertySource**: `null` \| [`AVLayer`](../classes/AVLayer.md) \| [`Property`](../classes/Property.md)\<[`UnknownPropertyType`](UnknownPropertyType.md)\>

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2040

Instance property on an Essential Property object which returns the original source Property which was used to create the Essential Property.

#### 继承自

`PropertyClassMembers.essentialPropertySource`

***

### expression

> **expression**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2043

The expression string for this property.

#### 继承自

`PropertyClassMembers.expression`

***

### expressionEnabled

> **expressionEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2046

When true, the expression is used to generate values for the property.

#### 继承自

`PropertyClassMembers.expressionEnabled`

***

### expressionError

> `readonly` **expressionError**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2008

The error, if any, that occurred when the last expression was evaluated.

#### 继承自

`PropertyClassMembers.expressionError`

***

### hasMax

> `readonly` **hasMax**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1981

When true, there is a maximum permitted value.

#### 继承自

`PropertyClassMembers.hasMax`

***

### hasMin

> `readonly` **hasMin**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1978

When true, there is a minimum permitted value.

#### 继承自

`PropertyClassMembers.hasMin`

***

### isDropdownEffect

> `readonly` **isDropdownEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2029

When true, the property is the Menu property of a Dropdown Menu Control effect.

#### 继承自

`PropertyClassMembers.isDropdownEffect`

***

### isEffect

> `readonly` **isEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2228

When true, this property is an effect.

#### 继承自

`PropertyClassMembers.isEffect`

***

### isMask

> `readonly` **isMask**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2231

When true, this property is a mask.

#### 继承自

`PropertyClassMembers.isMask`

***

### isModified

> `readonly` **isModified**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2216

When true, the property has been changed since its creation.

#### 继承自

`PropertyClassMembers.isModified`

***

### isSeparationFollower

> `readonly` **isSeparationFollower**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2017

When true, the property represents one of the separated dimensions for a multidimensional property.

#### 继承自

`PropertyClassMembers.isSeparationFollower`

***

### isSeparationLeader

> `readonly` **isSeparationLeader**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2020

When true, the property is multidimensional and can be separated.

#### 继承自

`PropertyClassMembers.isSeparationLeader`

***

### isSpatial

> `readonly` **isSpatial**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1990

When true, the property defines a spatial value.

#### 继承自

`PropertyClassMembers.isSpatial`

***

### isTimeVarying

> `readonly` **isTimeVarying**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1999

When true, the property has keyframes or an expression enabled that can vary its values.

#### 继承自

`PropertyClassMembers.isTimeVarying`

***

### matchName

> `readonly` **matchName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2201

A special name for the property used to build unique naming paths.

#### 继承自

`PropertyClassMembers.matchName`

***

### maxValue

> `readonly` **maxValue**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1987

The maximum permitted value.

#### 继承自

`PropertyClassMembers.maxValue`

***

### minValue

> `readonly` **minValue**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1984

The minimum permitted value.

#### 继承自

`PropertyClassMembers.minValue`

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2234

Name of the property.

#### 继承自

`PropertyClassMembers.name`

***

### numKeys

> `readonly` **numKeys**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2002

The number of keyframes on this property.

#### 继承自

`PropertyClassMembers.numKeys`

***

### parentProperty

> `readonly` **parentProperty**: [`PropertyGroup`](../classes/PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2213

The immediate parent group of this property.

#### 继承自

`PropertyClassMembers.parentProperty`

***

### propertyDepth

> `readonly` **propertyDepth**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2207

The number of levels of parent groups between this property and the containing layer.

#### 继承自

`PropertyClassMembers.propertyDepth`

***

### propertyIndex

> `readonly` **propertyIndex**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2014

The position index of this property.

#### 继承自

`PropertyClassMembers.propertyIndex`

***

### propertyType

> `readonly` **propertyType**: [`PropertyType`](../enumerations/PropertyType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2210

The property type.

#### 继承自

`PropertyClassMembers.propertyType`

***

### propertyValueType

> **propertyValueType**: [`TwoD_SPATIAL`](../enumerations/PropertyValueType.md#twod_spatial)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1922

Type of value stored in this property.

#### 重写了

`PropertyClassMembers.propertyValueType`

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

`PropertyClassMembers.selected`

***

### selectedKeys

> `readonly` **selectedKeys**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2011

All selected keyframes of the property.

#### 继承自

`PropertyClassMembers.selectedKeys`

***

### separationDimension

> `readonly` **separationDimension**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2023

For a separated follower, the dimension it represents in the multidimensional leader.

#### 继承自

`PropertyClassMembers.separationDimension`

***

### separationLeader

> `readonly` **separationLeader**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2026

The original multidimensional property for this separated follower.

#### 继承自

`PropertyClassMembers.separationLeader`

***

### unitsText

> `readonly` **unitsText**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2005

A text description of the units in which the value is expressed.

#### 继承自

`PropertyClassMembers.unitsText`

***

### value

> **value**: [`TwoDPoint`](../type-aliases/TwoDPoint.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1923

Current value of the property.

#### 重写了

`PropertyClassMembers.value`

## 方法

### addKey()

> **addKey**(`time`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2078

Adds a new keyframe to the property at a given time.

#### 参数

##### time

`number`

#### 返回

`number`

#### 继承自

`PropertyClassMembers.addKey`

***

### addToMotionGraphicsTemplate()

> **addToMotionGraphicsTemplate**(`comp`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2184

Adds the property to the Essential Graphics panel for the specified composition.

#### 参数

##### comp

[`CompItem`](../classes/CompItem.md)

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.addToMotionGraphicsTemplate`

***

### addToMotionGraphicsTemplateAs()

> **addToMotionGraphicsTemplateAs**(`comp`, `name`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2187

Adds the property to the Essential Graphics panel for the specified composition, providing a name.

#### 参数

##### comp

[`CompItem`](../classes/CompItem.md)

##### name

`string`

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.addToMotionGraphicsTemplateAs`

***

### canAddToMotionGraphicsTemplate()

> **canAddToMotionGraphicsTemplate**(`comp`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2190

Test whether or not the property can be added to the Essential Graphics panel for the specified composition.

#### 参数

##### comp

[`CompItem`](../classes/CompItem.md)

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.canAddToMotionGraphicsTemplate`

***

### duplicate()

> **duplicate**(): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2252

Duplicates this property object.

#### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

#### 继承自

`PropertyClassMembers.duplicate`

***

### getSeparationFollower()

> **getSeparationFollower**(`dim`): [`Property`](../classes/Property.md)\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2181

For a separated, multidimensional property, retrieves a specific follower property.

#### 参数

##### dim

`number`

#### 返回

[`Property`](../classes/Property.md)\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

#### 继承自

`PropertyClassMembers.getSeparationFollower`

***

### isInterpolationTypeValid()

> **isInterpolationTypeValid**(`type`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2084

When true, this property can be interpolated.

#### 参数

##### type

[`KeyframeInterpolationType`](../enumerations/KeyframeInterpolationType.md)

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.isInterpolationTypeValid`

***

### keyInInterpolationType()

> **keyInInterpolationType**(`keyIndex`): [`KeyframeInterpolationType`](../enumerations/KeyframeInterpolationType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2094

Gets the 'in' interpolation type for a key.

#### 参数

##### keyIndex

`number`

#### 返回

[`KeyframeInterpolationType`](../enumerations/KeyframeInterpolationType.md)

#### 继承自

`PropertyClassMembers.keyInInterpolationType`

***

### keyInSpatialTangent()

> **keyInSpatialTangent**(`keyIndex`): \[`number`, `number`, `number`\] \| \[`number`, `number`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2112

Gets the “in” spatial tangent for a key.

#### 参数

##### keyIndex

`number`

#### 返回

\[`number`, `number`, `number`\] \| \[`number`, `number`\]

#### 继承自

`PropertyClassMembers.keyInSpatialTangent`

***

### keyInTemporalEase()

> **keyInTemporalEase**(`keyIndex`): \[[`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2135

Gets the “in” temporal ease for a key.

#### 参数

##### keyIndex

`number`

#### 返回

\[[`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

#### 继承自

`PropertyClassMembers.keyInTemporalEase`

***

### keyOutInterpolationType()

> **keyOutInterpolationType**(`keyIndex`): [`KeyframeInterpolationType`](../enumerations/KeyframeInterpolationType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2097

Gets the 'out' interpolation type for a key.

#### 参数

##### keyIndex

`number`

#### 返回

[`KeyframeInterpolationType`](../enumerations/KeyframeInterpolationType.md)

#### 继承自

`PropertyClassMembers.keyOutInterpolationType`

***

### keyOutSpatialTangent()

> **keyOutSpatialTangent**(`keyIndex`): \[`number`, `number`, `number`\] \| \[`number`, `number`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2115

Gets the “out” spatial tangent for a key.

#### 参数

##### keyIndex

`number`

#### 返回

\[`number`, `number`, `number`\] \| \[`number`, `number`\]

#### 继承自

`PropertyClassMembers.keyOutSpatialTangent`

***

### keyOutTemporalEase()

> **keyOutTemporalEase**(`keyIndex`): \[[`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2140

Gets the “out” temporal ease for a key.

#### 参数

##### keyIndex

`number`

#### 返回

\[[`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\] \| \[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

#### 继承自

`PropertyClassMembers.keyOutTemporalEase`

***

### keyRoving()

> **keyRoving**(`keyIndex`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2172

Reports whether a keyframe is roving.

#### 参数

##### keyIndex

`number`

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.keyRoving`

***

### keySelected()

> **keySelected**(`keyIndex`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2178

Reports whether a keyframe is selected.

#### 参数

##### keyIndex

`number`

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.keySelected`

***

### keySpatialAutoBezier()

> **keySpatialAutoBezier**(`keyIndex`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2166

Reports whether a keyframe has spatial auto-Bezier.

#### 参数

##### keyIndex

`number`

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.keySpatialAutoBezier`

***

### keySpatialContinuous()

> **keySpatialContinuous**(`keyIndex`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2160

Reports whether a keyframe has spatial continuity.

#### 参数

##### keyIndex

`number`

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.keySpatialContinuous`

***

### keyTemporalAutoBezier()

> **keyTemporalAutoBezier**(`keyIndex`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2154

Reports whether a keyframe has temporal auto-Bezier.

#### 参数

##### keyIndex

`number`

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.keyTemporalAutoBezier`

***

### keyTemporalContinuous()

> **keyTemporalContinuous**(`keyIndex`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2148

Reports whether a keyframe has temporal continuity.

#### 参数

##### keyIndex

`number`

#### 返回

`boolean`

#### 继承自

`PropertyClassMembers.keyTemporalContinuous`

***

### keyTime()

#### 调用签名

> **keyTime**(`keyIndex`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2070

Gets the time at which a condition occurs.

##### 参数

###### keyIndex

`number`

##### 返回

`number`

##### 继承自

`PropertyClassMembers.keyTime`

#### 调用签名

> **keyTime**(`markerComment`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2071

Gets the time at which a condition occurs.

##### 参数

###### markerComment

`string`

##### 返回

`number`

##### 继承自

`PropertyClassMembers.keyTime`

***

### keyValue()

#### 调用签名

> **keyValue**(`keyIndex`): `any`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2074

Gets the value of a keyframe at the time at which a condition occurs.

##### 参数

###### keyIndex

`number`

##### 返回

`any`

##### 继承自

`PropertyClassMembers.keyValue`

#### 调用签名

> **keyValue**(`markerComment`): [`MarkerValue`](../classes/MarkerValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2075

Gets the value of a keyframe at the time at which a condition occurs.

##### 参数

###### markerComment

`string`

##### 返回

[`MarkerValue`](../classes/MarkerValue.md)

##### 继承自

`PropertyClassMembers.keyValue`

***

### moveTo()

> **moveTo**(`newIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2249

Moves this property to a new position in its parent group.

#### 参数

##### newIndex

`number`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.moveTo`

***

### nearestKeyIndex()

> **nearestKeyIndex**(`time`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2067

Gets the keyframe nearest to a specified time.

#### 参数

##### time

`number`

#### 返回

`number`

#### 继承自

`PropertyClassMembers.nearestKeyIndex`

***

### property()

#### 调用签名

> **property**(`index`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2255

Gets a member property or group. Strictly, this should be PropertyGroup method.

##### 参数

###### index

`number`

##### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

##### 继承自

`PropertyClassMembers.property`

#### 调用签名

> **property**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2256

Gets a member property or group. Strictly, this should be PropertyGroup method.

##### 参数

###### name

`string`

##### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

##### 继承自

`PropertyClassMembers.property`

***

### propertyGroup()

> **propertyGroup**(`countUp?`): [`PropertyGroup`](../classes/PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2243

Gets the parent group for this property.

#### 参数

##### countUp?

`number`

#### 返回

[`PropertyGroup`](../classes/PropertyGroup.md)

#### 继承自

`PropertyClassMembers.propertyGroup`

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2246

Removes this from the project.

#### 返回

`void`

#### 继承自

`PropertyClassMembers.remove`

***

### removeKey()

> **removeKey**(`keyIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2081

Removes a keyframe from the property.

#### 参数

##### keyIndex

`number`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.removeKey`

***

### setAlternateSource()

> **setAlternateSource**(`newSource`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2196

Set the alternate source for this property.

#### 参数

##### newSource

[`AVItem`](../classes/AVItem.md)

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setAlternateSource`

***

### setInterpolationTypeAtKey()

> **setInterpolationTypeAtKey**(`keyIndex`, `inType`, `outType?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2087

Sets the interpolation type for a key.

#### 参数

##### keyIndex

`number`

##### inType

[`KeyframeInterpolationType`](../enumerations/KeyframeInterpolationType.md)

##### outType?

[`KeyframeInterpolationType`](../enumerations/KeyframeInterpolationType.md)

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setInterpolationTypeAtKey`

***

### setPropertyParameters()

> **setPropertyParameters**(`items`): [`Property`](../classes/Property.md)\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2193

Sets parameters for a Dropdown Menu Control’s Menu Property.

#### 参数

##### items

`string`[]

#### 返回

[`Property`](../classes/Property.md)\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

#### 继承自

`PropertyClassMembers.setPropertyParameters`

***

### setRovingAtKey()

> **setRovingAtKey**(`keyIndex`, `newVal`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2169

Sets whether a keyframe is roving.

#### 参数

##### keyIndex

`number`

##### newVal

`boolean`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setRovingAtKey`

***

### setSelectedAtKey()

> **setSelectedAtKey**(`keyIndex`, `onOff`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2175

Sets whether a keyframe is selected.

#### 参数

##### keyIndex

`number`

##### onOff

`boolean`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setSelectedAtKey`

***

### setSpatialAutoBezierAtKey()

> **setSpatialAutoBezierAtKey**(`keyIndex`, `newVal`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2163

Sets whether a keyframe has spatial auto-Bezier.

#### 参数

##### keyIndex

`number`

##### newVal

`boolean`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setSpatialAutoBezierAtKey`

***

### setSpatialContinuousAtKey()

> **setSpatialContinuousAtKey**(`keyIndex`, `newVal`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2157

Sets whether a keyframe has spatial continuity.

#### 参数

##### keyIndex

`number`

##### newVal

`boolean`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setSpatialContinuousAtKey`

***

### setSpatialTangentsAtKey()

#### 调用签名

> **setSpatialTangentsAtKey**(`keyIndex`, `inTangent`, `outTangent`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2100

Sets the “in” and “out” tangent vectors for a key.

##### 参数

###### keyIndex

`number`

###### inTangent

\[`number`, `number`\]

###### outTangent

\[`number`, `number`\]

##### 返回

`void`

##### 继承自

`PropertyClassMembers.setSpatialTangentsAtKey`

#### 调用签名

> **setSpatialTangentsAtKey**(`keyIndex`, `inTangent`, `outTangent`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2105

Sets the “in” and “out” tangent vectors for a key.

##### 参数

###### keyIndex

`number`

###### inTangent

\[`number`, `number`, `number`\]

###### outTangent

\[`number`, `number`, `number`\]

##### 返回

`void`

##### 继承自

`PropertyClassMembers.setSpatialTangentsAtKey`

***

### setTemporalAutoBezierAtKey()

> **setTemporalAutoBezierAtKey**(`keyIndex`, `newVal`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2151

Sets whether a keyframe has temporal auto-Bezier.

#### 参数

##### keyIndex

`number`

##### newVal

`boolean`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setTemporalAutoBezierAtKey`

***

### setTemporalContinuousAtKey()

> **setTemporalContinuousAtKey**(`keyIndex`, `newVal`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2145

Sets whether a keyframe has temporal continuity.

#### 参数

##### keyIndex

`number`

##### newVal

`boolean`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setTemporalContinuousAtKey`

***

### setTemporalEaseAtKey()

#### 调用签名

> **setTemporalEaseAtKey**(`keyIndex`, `inTemporalEase`, `outTemporalEase?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2118

Sets the “in” and “out” temporal ease for a key.

##### 参数

###### keyIndex

`number`

###### inTemporalEase

\[[`KeyframeEase`](../classes/KeyframeEase.md)\]

###### outTemporalEase?

\[[`KeyframeEase`](../classes/KeyframeEase.md)\]

##### 返回

`void`

##### 继承自

`PropertyClassMembers.setTemporalEaseAtKey`

#### 调用签名

> **setTemporalEaseAtKey**(`keyIndex`, `inTemporalEase`, `outTemporalEase?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2123

Sets the “in” and “out” temporal ease for a key.

##### 参数

###### keyIndex

`number`

###### inTemporalEase

\[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

###### outTemporalEase?

\[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

##### 返回

`void`

##### 继承自

`PropertyClassMembers.setTemporalEaseAtKey`

#### 调用签名

> **setTemporalEaseAtKey**(`keyIndex`, `inTemporalEase`, `outTemporalEase?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2128

Sets the “in” and “out” temporal ease for a key.

##### 参数

###### keyIndex

`number`

###### inTemporalEase

\[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

###### outTemporalEase?

\[[`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md), [`KeyframeEase`](../classes/KeyframeEase.md)\]

##### 返回

`void`

##### 继承自

`PropertyClassMembers.setTemporalEaseAtKey`

***

### setValue()

> **setValue**(`newValue`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2055

Sets the static value of the property.

#### 参数

##### newValue

`any`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setValue`

***

### setValueAtKey()

> **setValueAtKey**(`keyIndex`, `newValue`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2064

Finds a keyframe and sets the value of the property at that keyframe.

#### 参数

##### keyIndex

`number`

##### newValue

`any`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setValueAtKey`

***

### setValueAtTime()

> **setValueAtTime**(`time`, `newValue`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2058

Creates a keyframe for the property.

#### 参数

##### time

`number`

##### newValue

`any`

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setValueAtTime`

***

### setValuesAtTimes()

> **setValuesAtTimes**(`times`, `newValues`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2061

Creates a set of keyframes for the property.

#### 参数

##### times

`number`[]

##### newValues

`any`[]

#### 返回

`void`

#### 继承自

`PropertyClassMembers.setValuesAtTimes`

***

### valueAtTime()

> **valueAtTime**(`time`, `preExpression`): `any`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2052

Gets the value of the property evaluated at given time.

#### 参数

##### time

`number`

##### preExpression

`boolean`

#### 返回

`any`

#### 继承自

`PropertyClassMembers.valueAtTime`
