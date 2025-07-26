# 类: MaskPropertyGroup()

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1603

The MaskPropertyGroup object encapsulates mask attributes in a layer.

## 继承

- [`PropertyGroup`](PropertyGroup.md)

## 调用签名

> **MaskPropertyGroup**(`index`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1603

The MaskPropertyGroup object encapsulates mask attributes in a layer.

### 参数

#### index

`number`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 调用签名

> **MaskPropertyGroup**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1603

The MaskPropertyGroup object encapsulates mask attributes in a layer.

### 参数

#### name

`string`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 构造函数

### 构造函数

> **new MaskPropertyGroup**(): `MaskPropertyGroup`

#### 返回

`MaskPropertyGroup`

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`constructor`](PropertyGroup.md#constructor)

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2222

When true, this property is active.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`active`](PropertyGroup.md#active)

***

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`canSetEnabled`](PropertyGroup.md#cansetenabled)

***

### color

> **color**: [`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1620

The color used to draw the mask outline in the user interface.

***

### elided

> `readonly` **elided**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2225

When true, this property is not displayed in the user interface.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`elided`](PropertyGroup.md#elided)

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2237

When true, this property is enabled.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`enabled`](PropertyGroup.md#enabled)

***

### inverted

> **inverted**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1608

When true, the mask is inverted.

***

### isEffect

> `readonly` **isEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2228

When true, this property is an effect.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`isEffect`](PropertyGroup.md#iseffect)

***

### isMask

> `readonly` **isMask**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2231

When true, this property is a mask.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`isMask`](PropertyGroup.md#ismask)

***

### isModified

> `readonly` **isModified**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2216

When true, the property has been changed since its creation.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`isModified`](PropertyGroup.md#ismodified)

***

### locked

> **locked**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1617

When true, the mask is locked.

***

### maskExpansion

> **maskExpansion**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1638

The mask expansion amount.

***

### maskFeather

> **maskFeather**: [`TwoDProperty`](../type-aliases/TwoDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1629

The mask feather amount.

***

### maskFeatherFalloff

> **maskFeatherFalloff**: [`MaskFeatherFalloff`](../enumerations/MaskFeatherFalloff.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1632

The feather falloff mode for the mask.

***

### maskMode

> **maskMode**: [`MaskMode`](../enumerations/MaskMode.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1605

The mask mode.

***

### maskMotionBlur

> **maskMotionBlur**: [`MaskMotionBlur`](../enumerations/MaskMotionBlur.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1614

How motion blur is applied to this mask.

***

### maskOpacity

> **maskOpacity**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1635

The mask opacity.

***

### maskPath

> **maskPath**: [`ShapeProperty`](../type-aliases/ShapeProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1626

The path of the mask.

***

### maskShape

> **maskShape**: [`ShapeProperty`](../type-aliases/ShapeProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1623

The shape of the mask.

***

### matchName

> `readonly` **matchName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2201

A special name for the property used to build unique naming paths.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`matchName`](PropertyGroup.md#matchname)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2234

Name of the property.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`name`](PropertyGroup.md#name)

***

### numProperties

> `readonly` **numProperties**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2268

The number of indexed properties in the group.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`numProperties`](PropertyGroup.md#numproperties)

***

### parentProperty

> `readonly` **parentProperty**: [`PropertyGroup`](PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2213

The immediate parent group of this property.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`parentProperty`](PropertyGroup.md#parentproperty)

***

### propertyDepth

> `readonly` **propertyDepth**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2207

The number of levels of parent groups between this property and the containing layer.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`propertyDepth`](PropertyGroup.md#propertydepth)

***

### propertyIndex

> `readonly` **propertyIndex**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2204

Index of this property within its parent group.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`propertyIndex`](PropertyGroup.md#propertyindex)

***

### propertyType

> `readonly` **propertyType**: [`PropertyType`](../enumerations/PropertyType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2210

The property type.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`propertyType`](PropertyGroup.md#propertytype)

***

### rotoBezier

> **rotoBezier**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1611

When true, the shape of the mask is RotoBezier.

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`selected`](PropertyGroup.md#selected)

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

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`addProperty`](PropertyGroup.md#addproperty)

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

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`canAddProperty`](PropertyGroup.md#canaddproperty)

***

### duplicate()

> **duplicate**(): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2252

Duplicates this property object.

#### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`duplicate`](PropertyGroup.md#duplicate)

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

[`PropertyGroup`](PropertyGroup.md).[`moveTo`](PropertyGroup.md#moveto)

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

[`PropertyGroup`](PropertyGroup.md).[`property`](PropertyGroup.md#property)

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

[`PropertyGroup`](PropertyGroup.md).[`property`](PropertyGroup.md#property)

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

[`PropertyGroup`](PropertyGroup.md).[`propertyGroup`](PropertyGroup.md#propertygroup-2)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2246

Removes this from the project.

#### 返回

`void`

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`remove`](PropertyGroup.md#remove)
