# 类: CameraLayer()

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1068

The CameraLayer object represents a camera layer within a composition. Create it using the LayerCollection object’s addCamera method

## 继承

- [`Layer`](Layer.md)

## 调用签名

> **CameraLayer**(`index`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1068

The CameraLayer object represents a camera layer within a composition. Create it using the LayerCollection object’s addCamera method

### 参数

#### index

`number`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 调用签名

> **CameraLayer**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1068

The CameraLayer object represents a camera layer within a composition. Create it using the LayerCollection object’s addCamera method

### 参数

#### name

`string`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 构造函数

### 构造函数

> **new CameraLayer**(): `CameraLayer`

#### 返回

`CameraLayer`

#### 继承自

[`Layer`](Layer.md).[`constructor`](Layer.md#constructor)

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1405

When true, the layer is active at the current time.

#### 继承自

[`Layer`](Layer.md).[`active`](Layer.md#active)

***

### anchorPoint

> `readonly` **anchorPoint**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1490

Transform shortcuts

#### 继承自

[`Layer`](Layer.md).[`anchorPoint`](Layer.md#anchorpoint)

***

### autoOrient

> **autoOrient**: [`AutoOrientType`](../enumerations/AutoOrientType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1456

The type of automatic orientation for the layer.

#### 继承自

[`Layer`](Layer.md).[`autoOrient`](Layer.md#autoorient)

***

### cameraOption

> `readonly` **cameraOption**: [`_CameraOptionsGroup`](../interfaces/CameraOptionsGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1070

Shortcuts

***

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

[`Layer`](Layer.md).[`canSetEnabled`](Layer.md#cansetenabled)

***

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1450

A descriptive comment for the layer.

#### 继承自

[`Layer`](Layer.md).[`comment`](Layer.md#comment)

***

### containingComp

> `readonly` **containingComp**: [`CompItem`](CompItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1414

The composition that contains this layer.

#### 继承自

[`Layer`](Layer.md).[`containingComp`](Layer.md#containingcomp)

***

### elided

> `readonly` **elided**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2225

When true, this property is not displayed in the user interface.

#### 继承自

[`Layer`](Layer.md).[`elided`](Layer.md#elided)

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1438

When true, the layer is enabled.

#### 继承自

[`Layer`](Layer.md).[`enabled`](Layer.md#enabled)

***

### hasVideo

> `readonly` **hasVideo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1402

When true, the layer contains a video component.

#### 继承自

[`Layer`](Layer.md).[`hasVideo`](Layer.md#hasvideo)

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1393

The unique and persistent identification number.

#### 继承自

[`Layer`](Layer.md).[`id`](Layer.md#id)

***

### index

> `readonly` **index**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1396

The index position of the layer.

#### 继承自

[`Layer`](Layer.md).[`index`](Layer.md#index)

***

### inPoint

> **inPoint**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1432

The “in” point of the layer.

#### 继承自

[`Layer`](Layer.md).[`inPoint`](Layer.md#inpoint)

***

### isEffect

> `readonly` **isEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2228

When true, this property is an effect.

#### 继承自

[`Layer`](Layer.md).[`isEffect`](Layer.md#iseffect)

***

### isMask

> `readonly` **isMask**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2231

When true, this property is a mask.

#### 继承自

[`Layer`](Layer.md).[`isMask`](Layer.md#ismask)

***

### isModified

> `readonly` **isModified**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2216

When true, the property has been changed since its creation.

#### 继承自

[`Layer`](Layer.md).[`isModified`](Layer.md#ismodified)

***

### isNameSet

> `readonly` **isNameSet**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1417

When true, the layer’s name has been explicitly set.

#### 继承自

[`Layer`](Layer.md).[`isNameSet`](Layer.md#isnameset)

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1453

The label color for the layer.

#### 继承自

[`Layer`](Layer.md).[`label`](Layer.md#label)

***

### locked

> **locked**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1447

When true, the layer is locked.

#### 继承自

[`Layer`](Layer.md).[`locked`](Layer.md#locked)

***

### marker

> `readonly` **marker**: [`MarkerValueProperty`](../type-aliases/MarkerValueProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1486

Shortcuts

#### 继承自

[`Layer`](Layer.md).[`marker`](Layer.md#marker)

***

### matchName

> `readonly` **matchName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2201

A special name for the property used to build unique naming paths.

#### 继承自

[`Layer`](Layer.md).[`matchName`](Layer.md#matchname)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1420

The name of the layer.

#### 继承自

[`Layer`](Layer.md).[`name`](Layer.md#name)

***

### nullLayer

> `readonly` **nullLayer**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1408

When true, this is a null layer.

#### 继承自

[`Layer`](Layer.md).[`nullLayer`](Layer.md#nulllayer)

***

### numProperties

> `readonly` **numProperties**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2268

The number of indexed properties in the group.

#### 继承自

[`Layer`](Layer.md).[`numProperties`](Layer.md#numproperties)

***

### opacity

> `readonly` **opacity**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1501

#### 继承自

[`Layer`](Layer.md).[`opacity`](Layer.md#opacity)

***

### orientation

> `readonly` **orientation**: [`ThreeDProperty`](../type-aliases/ThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1496

#### 继承自

[`Layer`](Layer.md).[`orientation`](Layer.md#orientation)

***

### outPoint

> **outPoint**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1435

The “out” point of the layer.

#### 继承自

[`Layer`](Layer.md).[`outPoint`](Layer.md#outpoint)

***

### parent

> **parent**: `null` \| [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1423

The parent of this layer.

#### 继承自

[`Layer`](Layer.md).[`parent`](Layer.md#parent)

***

### parentProperty

> `readonly` **parentProperty**: [`PropertyGroup`](PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2213

The immediate parent group of this property.

#### 继承自

[`Layer`](Layer.md).[`parentProperty`](Layer.md#parentproperty)

***

### pointOfInterest

> `readonly` **pointOfInterest**: [`ThreeDProperty`](../type-aliases/ThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1502

#### 继承自

[`Layer`](Layer.md).[`pointOfInterest`](Layer.md#pointofinterest)

***

### position

> `readonly` **position**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1491

#### 继承自

[`Layer`](Layer.md).[`position`](Layer.md#position)

***

### propertyDepth

> `readonly` **propertyDepth**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2207

The number of levels of parent groups between this property and the containing layer.

#### 继承自

[`Layer`](Layer.md).[`propertyDepth`](Layer.md#propertydepth)

***

### propertyIndex

> `readonly` **propertyIndex**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2204

Index of this property within its parent group.

#### 继承自

[`Layer`](Layer.md).[`propertyIndex`](Layer.md#propertyindex)

***

### propertyType

> `readonly` **propertyType**: [`PropertyType`](../enumerations/PropertyType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2210

The property type.

#### 继承自

[`Layer`](Layer.md).[`propertyType`](Layer.md#propertytype)

***

### rotation

> `readonly` **rotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1497

#### 继承自

[`Layer`](Layer.md).[`rotation`](Layer.md#rotation)

***

### scale

> `readonly` **scale**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1495

#### 继承自

[`Layer`](Layer.md).[`scale`](Layer.md#scale)

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

[`Layer`](Layer.md).[`selected`](Layer.md#selected)

***

### selectedProperties

> `readonly` **selectedProperties**: [`_PropertyClasses`](../type-aliases/PropertyClasses.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1411

All selected AE properties in the layer.

#### 继承自

[`Layer`](Layer.md).[`selectedProperties`](Layer.md#selectedproperties)

***

### shy

> **shy**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1444

When true, the layer is shy.

#### 继承自

[`Layer`](Layer.md).[`shy`](Layer.md#shy)

***

### solo

> **solo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1441

When true, the layer is soloed.

#### 继承自

[`Layer`](Layer.md).[`solo`](Layer.md#solo)

***

### startTime

> **startTime**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1426

The start time of the layer.

#### 继承自

[`Layer`](Layer.md).[`startTime`](Layer.md#starttime)

***

### stretch

> **stretch**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1429

The time stretch percentage of the layer.

#### 继承自

[`Layer`](Layer.md).[`stretch`](Layer.md#stretch)

***

### time

> `readonly` **time**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1399

The current time of the layer.

#### 继承自

[`Layer`](Layer.md).[`time`](Layer.md#time)

***

### transform

> `readonly` **transform**: [`_TransformGroup`](../interfaces/TransformGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1487

#### 继承自

[`Layer`](Layer.md).[`transform`](Layer.md#transform)

***

### xPosition

> `readonly` **xPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1492

#### 继承自

[`Layer`](Layer.md).[`xPosition`](Layer.md#xposition)

***

### xRotation

> `readonly` **xRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1498

#### 继承自

[`Layer`](Layer.md).[`xRotation`](Layer.md#xrotation)

***

### yPosition

> `readonly` **yPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1493

#### 继承自

[`Layer`](Layer.md).[`yPosition`](Layer.md#yposition)

***

### yRotation

> `readonly` **yRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1499

#### 继承自

[`Layer`](Layer.md).[`yRotation`](Layer.md#yrotation)

***

### zPosition

> `readonly` **zPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1494

#### 继承自

[`Layer`](Layer.md).[`zPosition`](Layer.md#zposition)

***

### zRotation

> `readonly` **zRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1500

#### 继承自

[`Layer`](Layer.md).[`zRotation`](Layer.md#zrotation)

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

#### 继承自

[`Layer`](Layer.md).[`activeAtTime`](Layer.md#activeattime)

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

[`Layer`](Layer.md).[`addProperty`](Layer.md#addproperty)

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

#### 继承自

[`Layer`](Layer.md).[`applyPreset`](Layer.md#applypreset)

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

[`Layer`](Layer.md).[`canAddProperty`](Layer.md#canaddproperty)

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

#### 继承自

[`Layer`](Layer.md).[`copyToComp`](Layer.md#copytocomp)

***

### duplicate()

> **duplicate**(): [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1471

Duplicates the layer.

#### 返回

[`Layer`](Layer.md)

#### 继承自

[`Layer`](Layer.md).[`duplicate`](Layer.md#duplicate)

***

### moveAfter()

> **moveAfter**(`layer`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1465

Moves the layer below another layer.

#### 参数

##### layer

[`Layer`](Layer.md)

#### 返回

`void`

#### 继承自

[`Layer`](Layer.md).[`moveAfter`](Layer.md#moveafter)

***

### moveBefore()

> **moveBefore**(`layer`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1468

Moves the layer above another layer.

#### 参数

##### layer

[`Layer`](Layer.md)

#### 返回

`void`

#### 继承自

[`Layer`](Layer.md).[`moveBefore`](Layer.md#movebefore)

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

[`Layer`](Layer.md).[`moveTo`](Layer.md#moveto)

***

### moveToBeginning()

> **moveToBeginning**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1459

Moves the layer to the top of the composition (makes it the first layer).

#### 返回

`void`

#### 继承自

[`Layer`](Layer.md).[`moveToBeginning`](Layer.md#movetobeginning)

***

### moveToEnd()

> **moveToEnd**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1462

Moves the layer to the bottom of the composition (makes it the last layer).

#### 返回

`void`

#### 继承自

[`Layer`](Layer.md).[`moveToEnd`](Layer.md#movetoend)

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

[`Layer`](Layer.md).[`property`](Layer.md#property)

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

[`Layer`](Layer.md).[`property`](Layer.md#property)

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

[`Layer`](Layer.md).[`propertyGroup`](Layer.md#propertygroup)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2246

Removes this from the project.

#### 返回

`void`

#### 继承自

[`Layer`](Layer.md).[`remove`](Layer.md#remove)

***

### setParentWithJump()

> **setParentWithJump**(`newParent?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1480

Sets a new parent for this layer.

#### 参数

##### newParent?

[`Layer`](Layer.md)

#### 返回

`void`

#### 继承自

[`Layer`](Layer.md).[`setParentWithJump`](Layer.md#setparentwithjump)
