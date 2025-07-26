# 接口: \_BevelAndEmboss()

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2799

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

## 继承

- [`PropertyGroup`](../classes/PropertyGroup.md)

## 调用签名

> **\_BevelAndEmboss**(`index`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2799

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

### 参数

#### index

`number`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 调用签名

> **\_BevelAndEmboss**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2799

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

### 参数

#### name

`string`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2222

When true, this property is active.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`active`](../classes/PropertyGroup.md#active)

***

### altitude

> `readonly` **altitude**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2808

***

### angle

> `readonly` **angle**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2807

***

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`canSetEnabled`](../classes/PropertyGroup.md#cansetenabled)

***

### depth

> `readonly` **depth**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2802

***

### direction

> `readonly` **direction**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2803

***

### elided

> `readonly` **elided**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2225

When true, this property is not displayed in the user interface.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`elided`](../classes/PropertyGroup.md#elided)

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2237

When true, this property is enabled.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`enabled`](../classes/PropertyGroup.md#enabled)

***

### highlightColor

> `readonly` **highlightColor**: [`ColorProperty`](../type-aliases/ColorProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2810

***

### highlightMode

> `readonly` **highlightMode**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2809

***

### highlightOpacity

> `readonly` **highlightOpacity**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2811

***

### isEffect

> `readonly` **isEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2228

When true, this property is an effect.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`isEffect`](../classes/PropertyGroup.md#iseffect)

***

### isMask

> `readonly` **isMask**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2231

When true, this property is a mask.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`isMask`](../classes/PropertyGroup.md#ismask)

***

### isModified

> `readonly` **isModified**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2216

When true, the property has been changed since its creation.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`isModified`](../classes/PropertyGroup.md#ismodified)

***

### matchName

> `readonly` **matchName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2201

A special name for the property used to build unique naming paths.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`matchName`](../classes/PropertyGroup.md#matchname)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2234

Name of the property.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`name`](../classes/PropertyGroup.md#name)

***

### numProperties

> `readonly` **numProperties**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2268

The number of indexed properties in the group.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`numProperties`](../classes/PropertyGroup.md#numproperties)

***

### parentProperty

> `readonly` **parentProperty**: [`PropertyGroup`](../classes/PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2213

The immediate parent group of this property.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`parentProperty`](../classes/PropertyGroup.md#parentproperty)

***

### propertyDepth

> `readonly` **propertyDepth**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2207

The number of levels of parent groups between this property and the containing layer.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`propertyDepth`](../classes/PropertyGroup.md#propertydepth)

***

### propertyIndex

> `readonly` **propertyIndex**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2204

Index of this property within its parent group.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`propertyIndex`](../classes/PropertyGroup.md#propertyindex)

***

### propertyType

> `readonly` **propertyType**: [`PropertyType`](../enumerations/PropertyType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2210

The property type.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`propertyType`](../classes/PropertyGroup.md#propertytype)

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`selected`](../classes/PropertyGroup.md#selected)

***

### shadowColor

> `readonly` **shadowColor**: [`ColorProperty`](../type-aliases/ColorProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2813

***

### shadowMode

> `readonly` **shadowMode**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2812

***

### shadowOpacity

> `readonly` **shadowOpacity**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2814

***

### size

> `readonly` **size**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2804

***

### soften

> `readonly` **soften**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2805

***

### style

> `readonly` **style**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2800

***

### technique

> `readonly` **technique**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2801

***

### useGlobalLight

> `readonly` **useGlobalLight**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2806

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

[`PropertyGroup`](../classes/PropertyGroup.md).[`addProperty`](../classes/PropertyGroup.md#addproperty)

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

[`PropertyGroup`](../classes/PropertyGroup.md).[`canAddProperty`](../classes/PropertyGroup.md#canaddproperty)

***

### duplicate()

> **duplicate**(): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2252

Duplicates this property object.

#### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`duplicate`](../classes/PropertyGroup.md#duplicate)

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

[`PropertyGroup`](../classes/PropertyGroup.md).[`moveTo`](../classes/PropertyGroup.md#moveto)

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

[`PropertyGroup`](../classes/PropertyGroup.md).[`property`](../classes/PropertyGroup.md#property)

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

[`PropertyGroup`](../classes/PropertyGroup.md).[`property`](../classes/PropertyGroup.md#property)

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

[`PropertyGroup`](../classes/PropertyGroup.md).[`propertyGroup`](../classes/PropertyGroup.md#propertygroup-2)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2246

Removes this from the project.

#### 返回

`void`

#### 继承自

[`PropertyGroup`](../classes/PropertyGroup.md).[`remove`](../classes/PropertyGroup.md#remove)
