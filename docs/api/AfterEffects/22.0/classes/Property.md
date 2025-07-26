# 类: Property\<T\>

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1970

The Property object contains value, keyframe, and expression information about a particular AE property of a layer.

## 继承

- [`PropertyBase`](PropertyBase.md)

## 类型参数

### T

`T` *extends* [`UnknownPropertyType`](../interfaces/UnknownPropertyType.md) = [`UnknownPropertyType`](../interfaces/UnknownPropertyType.md)

## 构造函数

### 构造函数

> **new Property**\<`T`\>(): `Property`\<`T`\>

#### 返回

`Property`\<`T`\>

#### 继承自

[`PropertyBase`](PropertyBase.md).[`constructor`](PropertyBase.md#constructor)

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2222

When true, this property is active.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`active`](PropertyBase.md#active)

***

### alternateSource

> `readonly` **alternateSource**: [`AVItem`](AVItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2032

The alternate render source for Media Replacement

***

### canSetAlternateSource

> `readonly` **canSetAlternateSource**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2035

True if the property allows Media Replacement

***

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`canSetEnabled`](PropertyBase.md#cansetenabled)

***

### canSetExpression

> `readonly` **canSetExpression**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1996

When true, the expression can be set by a script.

***

### canVaryOverTime

> `readonly` **canVaryOverTime**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1993

When true, the property can be keyframed.

***

### dimensionsSeparated

> **dimensionsSeparated**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2049

When true, the property’s dimensions are represented as separate properties.

***

### elided

> `readonly` **elided**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2225

When true, this property is not displayed in the user interface.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`elided`](PropertyBase.md#elided)

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2237

When true, this property is enabled.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`enabled`](PropertyBase.md#enabled)

***

### essentialPropertySource

> `readonly` **essentialPropertySource**: `null` \| `Property`\<`T`\> \| [`AVLayer`](AVLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2040

Instance property on an Essential Property object which returns the original source Property which was used to create the Essential Property.

***

### expression

> **expression**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2043

The expression string for this property.

***

### expressionEnabled

> **expressionEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2046

When true, the expression is used to generate values for the property.

***

### expressionError

> `readonly` **expressionError**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2008

The error, if any, that occurred when the last expression was evaluated.

***

### hasMax

> `readonly` **hasMax**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1981

When true, there is a maximum permitted value.

***

### hasMin

> `readonly` **hasMin**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1978

When true, there is a minimum permitted value.

***

### isDropdownEffect

> `readonly` **isDropdownEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2029

When true, the property is the Menu property of a Dropdown Menu Control effect.

***

### isEffect

> `readonly` **isEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2228

When true, this property is an effect.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`isEffect`](PropertyBase.md#iseffect)

***

### isMask

> `readonly` **isMask**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2231

When true, this property is a mask.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`isMask`](PropertyBase.md#ismask)

***

### isModified

> `readonly` **isModified**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2216

When true, the property has been changed since its creation.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`isModified`](PropertyBase.md#ismodified)

***

### isSeparationFollower

> `readonly` **isSeparationFollower**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2017

When true, the property represents one of the separated dimensions for a multidimensional property.

***

### isSeparationLeader

> `readonly` **isSeparationLeader**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2020

When true, the property is multidimensional and can be separated.

***

### isSpatial

> `readonly` **isSpatial**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1990

When true, the property defines a spatial value.

***

### isTimeVarying

> `readonly` **isTimeVarying**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1999

When true, the property has keyframes or an expression enabled that can vary its values.

***

### matchName

> `readonly` **matchName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2201

A special name for the property used to build unique naming paths.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`matchName`](PropertyBase.md#matchname)

***

### maxValue

> `readonly` **maxValue**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1987

The maximum permitted value.

***

### minValue

> `readonly` **minValue**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1984

The minimum permitted value.

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2234

Name of the property.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`name`](PropertyBase.md#name)

***

### numKeys

> `readonly` **numKeys**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2002

The number of keyframes on this property.

***

### parentProperty

> `readonly` **parentProperty**: [`PropertyGroup`](PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2213

The immediate parent group of this property.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`parentProperty`](PropertyBase.md#parentproperty)

***

### propertyDepth

> `readonly` **propertyDepth**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2207

The number of levels of parent groups between this property and the containing layer.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`propertyDepth`](PropertyBase.md#propertydepth)

***

### propertyIndex

> `readonly` **propertyIndex**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2014

The position index of this property.

#### 重写了

[`PropertyBase`](PropertyBase.md).[`propertyIndex`](PropertyBase.md#propertyindex)

***

### propertyType

> `readonly` **propertyType**: [`PropertyType`](../enumerations/PropertyType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2210

The property type.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`propertyType`](PropertyBase.md#propertytype)

***

### propertyValueType

> `readonly` **propertyValueType**: `T`\[`"propertyValueType"`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1972

Type of value stored in this property.

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`selected`](PropertyBase.md#selected)

***

### selectedKeys

> `readonly` **selectedKeys**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2011

All selected keyframes of the property.

***

### separationDimension

> `readonly` **separationDimension**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2023

For a separated follower, the dimension it represents in the multidimensional leader.

***

### separationLeader

> `readonly` **separationLeader**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2026

The original multidimensional property for this separated follower.

***

### unitsText

> `readonly` **unitsText**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2005

A text description of the units in which the value is expressed.

***

### value

> `readonly` **value**: `T`\[`"value"`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1975

Current value of the property.

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

***

### addToMotionGraphicsTemplate()

> **addToMotionGraphicsTemplate**(`comp`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2184

Adds the property to the Essential Graphics panel for the specified composition.

#### 参数

##### comp

[`CompItem`](CompItem.md)

#### 返回

`boolean`

***

### addToMotionGraphicsTemplateAs()

> **addToMotionGraphicsTemplateAs**(`comp`, `name`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2187

Adds the property to the Essential Graphics panel for the specified composition, providing a name.

#### 参数

##### comp

[`CompItem`](CompItem.md)

##### name

`string`

#### 返回

`boolean`

***

### canAddToMotionGraphicsTemplate()

> **canAddToMotionGraphicsTemplate**(`comp`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2190

Test whether or not the property can be added to the Essential Graphics panel for the specified composition.

#### 参数

##### comp

[`CompItem`](CompItem.md)

#### 返回

`boolean`

***

### duplicate()

> **duplicate**(): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2252

Duplicates this property object.

#### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

#### 继承自

[`PropertyBase`](PropertyBase.md).[`duplicate`](PropertyBase.md#duplicate)

***

### getSeparationFollower()

> **getSeparationFollower**(`dim`): `Property`\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2181

For a separated, multidimensional property, retrieves a specific follower property.

#### 参数

##### dim

`number`

#### 返回

`Property`\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

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

***

### keyInTemporalEase()

> **keyInTemporalEase**(`keyIndex`): \[[`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2135

Gets the “in” temporal ease for a key.

#### 参数

##### keyIndex

`number`

#### 返回

\[[`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

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

***

### keyOutTemporalEase()

> **keyOutTemporalEase**(`keyIndex`): \[[`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2140

Gets the “out” temporal ease for a key.

#### 参数

##### keyIndex

`number`

#### 返回

\[[`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\] \| \[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

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

#### 调用签名

> **keyTime**(`markerComment`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2071

Gets the time at which a condition occurs.

##### 参数

###### markerComment

`string`

##### 返回

`number`

***

### keyValue()

#### 调用签名

> **keyValue**(`keyIndex`): `T`\[`"value"`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2074

Gets the value of a keyframe at the time at which a condition occurs.

##### 参数

###### keyIndex

`number`

##### 返回

`T`\[`"value"`\]

#### 调用签名

> **keyValue**(`markerComment`): [`MarkerValue`](MarkerValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2075

Gets the value of a keyframe at the time at which a condition occurs.

##### 参数

###### markerComment

`string`

##### 返回

[`MarkerValue`](MarkerValue.md)

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

[`PropertyBase`](PropertyBase.md).[`moveTo`](PropertyBase.md#moveto)

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

[`PropertyBase`](PropertyBase.md).[`property`](PropertyBase.md#property)

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

[`PropertyBase`](PropertyBase.md).[`property`](PropertyBase.md#property)

***

### propertyGroup()

> **propertyGroup**(`countUp?`): [`PropertyGroup`](PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2243

Gets the parent group for this property.

#### 参数

##### countUp?

`number`

#### 返回

[`PropertyGroup`](PropertyGroup.md)

#### 继承自

[`PropertyBase`](PropertyBase.md).[`propertyGroup`](PropertyBase.md#propertygroup)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2246

Removes this from the project.

#### 返回

`void`

#### 继承自

[`PropertyBase`](PropertyBase.md).[`remove`](PropertyBase.md#remove)

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

***

### setAlternateSource()

> **setAlternateSource**(`newSource`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2196

Set the alternate source for this property.

#### 参数

##### newSource

[`AVItem`](AVItem.md)

#### 返回

`void`

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

***

### setPropertyParameters()

> **setPropertyParameters**(`items`): `Property`\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2193

Sets parameters for a Dropdown Menu Control’s Menu Property.

#### 参数

##### items

`string`[]

#### 返回

`Property`\<[`OneDProperty`](../type-aliases/OneDProperty.md)\>

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

\[[`KeyframeEase`](KeyframeEase.md)\]

###### outTemporalEase?

\[[`KeyframeEase`](KeyframeEase.md)\]

##### 返回

`void`

#### 调用签名

> **setTemporalEaseAtKey**(`keyIndex`, `inTemporalEase`, `outTemporalEase?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2123

Sets the “in” and “out” temporal ease for a key.

##### 参数

###### keyIndex

`number`

###### inTemporalEase

\[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

###### outTemporalEase?

\[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

##### 返回

`void`

#### 调用签名

> **setTemporalEaseAtKey**(`keyIndex`, `inTemporalEase`, `outTemporalEase?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2128

Sets the “in” and “out” temporal ease for a key.

##### 参数

###### keyIndex

`number`

###### inTemporalEase

\[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

###### outTemporalEase?

\[[`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md), [`KeyframeEase`](KeyframeEase.md)\]

##### 返回

`void`

***

### setValue()

> **setValue**(`newValue`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2055

Sets the static value of the property.

#### 参数

##### newValue

`T`\[`"value"`\]

#### 返回

`void`

***

### setValueAtKey()

> **setValueAtKey**(`keyIndex`, `newValue`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2064

Finds a keyframe and sets the value of the property at that keyframe.

#### 参数

##### keyIndex

`number`

##### newValue

`T`\[`"value"`\]

#### 返回

`void`

***

### setValueAtTime()

> **setValueAtTime**(`time`, `newValue`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2058

Creates a keyframe for the property.

#### 参数

##### time

`number`

##### newValue

`T`\[`"value"`\]

#### 返回

`void`

***

### setValuesAtTimes()

> **setValuesAtTimes**(`times`, `newValues`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2061

Creates a set of keyframes for the property.

#### 参数

##### times

`number`[]

##### newValues

`T`\[`"value"`\][]

#### 返回

`void`

***

### valueAtTime()

> **valueAtTime**(`time`, `preExpression`): `T`\[`"value"`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2052

Gets the value of the property evaluated at given time.

#### 参数

##### time

`number`

##### preExpression

`boolean`

#### 返回

`T`\[`"value"`\]
