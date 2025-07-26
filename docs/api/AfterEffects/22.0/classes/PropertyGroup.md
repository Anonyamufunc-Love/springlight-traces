# 类: PropertyGroup()

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2260

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

## 继承

- [`PropertyBase`](PropertyBase.md)

## 继承于

- [`Layer`](Layer.md)
- [`MaskPropertyGroup`](MaskPropertyGroup.md)
- [`_TransformGroup`](../interfaces/TransformGroup.md)
- [`_LightOptionsGroup`](../interfaces/LightOptionsGroup.md)
- [`_CameraOptionsGroup`](../interfaces/CameraOptionsGroup.md)
- [`_LayerStyles`](../interfaces/LayerStyles.md)
- [`_BlendOptionsGroup`](../interfaces/BlendOptionsGroup.md)
- [`_AdvBlendGroup`](../interfaces/AdvBlendGroup.md)
- [`_DropShadow`](../interfaces/DropShadow.md)
- [`_InnerShadow`](../interfaces/InnerShadow.md)
- [`_OuterGlow`](../interfaces/OuterGlow.md)
- [`_InnerGlow`](../interfaces/InnerGlow.md)
- [`_BevelAndEmboss`](../interfaces/BevelAndEmboss.md)
- [`_Satin`](../interfaces/Satin.md)
- [`_ColorOverlay`](../interfaces/ColorOverlay.md)
- [`_GradientOverlay`](../interfaces/GradientOverlay.md)
- [`_Stroke`](../interfaces/Stroke.md)
- [`_GeometryOptionsGroup`](../interfaces/GeometryOptionsGroup.md)
- [`_MaterialOptionsGroup`](../interfaces/MaterialOptionsGroup.md)
- [`_AudioGroup`](../interfaces/AudioGroup.md)
- [`_TextProperties`](../interfaces/TextProperties.md)
- [`_TextPathOptions`](../interfaces/TextPathOptions.md)
- [`_TextMoreOptions`](../interfaces/TextMoreOptions.md)

## 调用签名

> **PropertyGroup**(`index`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2261

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

### 参数

#### index

`number`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 调用签名

> **PropertyGroup**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2262

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

### 参数

#### name

`string`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 构造函数

### 构造函数

> **new PropertyGroup**(): `PropertyGroup`

#### 返回

`PropertyGroup`

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

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`canSetEnabled`](PropertyBase.md#cansetenabled)

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

### matchName

> `readonly` **matchName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2201

A special name for the property used to build unique naming paths.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`matchName`](PropertyBase.md#matchname)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2234

Name of the property.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`name`](PropertyBase.md#name)

***

### numProperties

> `readonly` **numProperties**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2268

The number of indexed properties in the group.

***

### parentProperty

> `readonly` **parentProperty**: `PropertyGroup`

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

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2204

Index of this property within its parent group.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`propertyIndex`](PropertyBase.md#propertyindex)

***

### propertyType

> `readonly` **propertyType**: [`PropertyType`](../enumerations/PropertyType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2210

The property type.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`propertyType`](PropertyBase.md#propertytype)

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

[`PropertyBase`](PropertyBase.md).[`selected`](PropertyBase.md#selected)

## 方法

### addProperty()

> **addProperty**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2274

Adds a property to the group.

#### 参数

##### name

`string`

#### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

***

### canAddProperty()

> **canAddProperty**(`name`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2271

Reports whether a property can be added to the group.

#### 参数

##### name

`string`

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

> **propertyGroup**(`countUp?`): `PropertyGroup`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2243

Gets the parent group for this property.

#### 参数

##### countUp?

`number`

#### 返回

`PropertyGroup`

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
