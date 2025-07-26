# 类: Layer()

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1391

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

## 继承

- [`PropertyGroup`](PropertyGroup.md)

## 继承于

- [`AVLayer`](AVLayer.md)
- [`CameraLayer`](CameraLayer.md)
- [`LightLayer`](LightLayer.md)

## 调用签名

> **Layer**(`index`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1391

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

### 参数

#### index

`number`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 调用签名

> **Layer**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1391

The PropertyGroup object represents a group of properties. It can contain Property objects and other PropertyGroup objects. Property groups can be nested to provide a parent-child hierarchy, with a Layer object at the top (root) down to a single Property object, such as the mask feather of the third mask. To traverse the group hierarchy, use PropertyBase methods and attributes.

### 参数

#### name

`string`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 构造函数

### 构造函数

> **new Layer**(): `Layer`

#### 返回

`Layer`

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`constructor`](PropertyGroup.md#constructor)

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1405

When true, the layer is active at the current time.

#### 重写了

[`PropertyGroup`](PropertyGroup.md).[`active`](PropertyGroup.md#active)

***

### anchorPoint

> `readonly` **anchorPoint**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1490

Transform shortcuts

***

### autoOrient

> **autoOrient**: [`AutoOrientType`](../enumerations/AutoOrientType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1456

The type of automatic orientation for the layer.

***

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`canSetEnabled`](PropertyGroup.md#cansetenabled)

***

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1450

A descriptive comment for the layer.

***

### containingComp

> `readonly` **containingComp**: [`CompItem`](CompItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1414

The composition that contains this layer.

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

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1438

When true, the layer is enabled.

#### 重写了

[`PropertyGroup`](PropertyGroup.md).[`enabled`](PropertyGroup.md#enabled)

***

### hasVideo

> `readonly` **hasVideo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1402

When true, the layer contains a video component.

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1393

The unique and persistent identification number.

***

### index

> `readonly` **index**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1396

The index position of the layer.

***

### inPoint

> **inPoint**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1432

The “in” point of the layer.

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

### isNameSet

> `readonly` **isNameSet**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1417

When true, the layer’s name has been explicitly set.

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1453

The label color for the layer.

***

### locked

> **locked**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1447

When true, the layer is locked.

***

### marker

> `readonly` **marker**: [`MarkerValueProperty`](../type-aliases/MarkerValueProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1486

Shortcuts

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

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1420

The name of the layer.

#### 重写了

[`PropertyGroup`](PropertyGroup.md).[`name`](PropertyGroup.md#name)

***

### nullLayer

> `readonly` **nullLayer**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1408

When true, this is a null layer.

***

### numProperties

> `readonly` **numProperties**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2268

The number of indexed properties in the group.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`numProperties`](PropertyGroup.md#numproperties)

***

### opacity

> `readonly` **opacity**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1501

***

### orientation

> `readonly` **orientation**: [`ThreeDProperty`](../type-aliases/ThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1496

***

### outPoint

> **outPoint**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1435

The “out” point of the layer.

***

### parent

> **parent**: `null` \| `Layer`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1423

The parent of this layer.

***

### parentProperty

> `readonly` **parentProperty**: [`PropertyGroup`](PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2213

The immediate parent group of this property.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`parentProperty`](PropertyGroup.md#parentproperty)

***

### pointOfInterest

> `readonly` **pointOfInterest**: [`ThreeDProperty`](../type-aliases/ThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1502

***

### position

> `readonly` **position**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1491

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

### rotation

> `readonly` **rotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1497

***

### scale

> `readonly` **scale**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1495

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

[`PropertyGroup`](PropertyGroup.md).[`selected`](PropertyGroup.md#selected)

***

### selectedProperties

> `readonly` **selectedProperties**: [`_PropertyClasses`](../type-aliases/PropertyClasses.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1411

All selected AE properties in the layer.

***

### shy

> **shy**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1444

When true, the layer is shy.

***

### solo

> **solo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1441

When true, the layer is soloed.

***

### startTime

> **startTime**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1426

The start time of the layer.

***

### stretch

> **stretch**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1429

The time stretch percentage of the layer.

***

### time

> `readonly` **time**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1399

The current time of the layer.

***

### transform

> `readonly` **transform**: [`_TransformGroup`](../interfaces/TransformGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1487

***

### xPosition

> `readonly` **xPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1492

***

### xRotation

> `readonly` **xRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1498

***

### yPosition

> `readonly` **yPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1493

***

### yRotation

> `readonly` **yRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1499

***

### zPosition

> `readonly` **zPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1494

***

### zRotation

> `readonly` **zRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1500

## 方法

### activeAtTime()

> **activeAtTime**(`time`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1477

Reports whether this layer will be active at a specified time.

#### 参数

##### time

`number`

#### 返回

`boolean`

***

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

### applyPreset()

> **applyPreset**(`presetName`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1483

Applies a named collection of animation settings to the layer.

#### 参数

##### presetName

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`void`

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

### copyToComp()

> **copyToComp**(`intoComp`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1474

Copies the layer to the top (beginning) of another composition.

#### 参数

##### intoComp

[`CompItem`](CompItem.md)

#### 返回

`void`

***

### duplicate()

> **duplicate**(): `Layer`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1471

Duplicates the layer.

#### 返回

`Layer`

#### 重写了

[`PropertyGroup`](PropertyGroup.md).[`duplicate`](PropertyGroup.md#duplicate)

***

### moveAfter()

> **moveAfter**(`layer`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1465

Moves the layer below another layer.

#### 参数

##### layer

`Layer`

#### 返回

`void`

***

### moveBefore()

> **moveBefore**(`layer`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1468

Moves the layer above another layer.

#### 参数

##### layer

`Layer`

#### 返回

`void`

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

### moveToBeginning()

> **moveToBeginning**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1459

Moves the layer to the top of the composition (makes it the first layer).

#### 返回

`void`

***

### moveToEnd()

> **moveToEnd**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1462

Moves the layer to the bottom of the composition (makes it the last layer).

#### 返回

`void`

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

***

### setParentWithJump()

> **setParentWithJump**(`newParent?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1480

Sets a new parent for this layer.

#### 参数

##### newParent?

`Layer`

#### 返回

`void`
