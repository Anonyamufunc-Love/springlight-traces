# 类: ShapeLayer()

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2439

The ShapeLayer object represents a shape layer within a composition. Create it using the LayerCollection object’s addShape() method.

## 继承

- [`AVLayer`](AVLayer.md)

## 调用签名

> **ShapeLayer**(`index`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2439

The ShapeLayer object represents a shape layer within a composition. Create it using the LayerCollection object’s addShape() method.

### 参数

#### index

`number`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 调用签名

> **ShapeLayer**(`name`): [`_PropertyClasses`](../type-aliases/PropertyClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2439

The ShapeLayer object represents a shape layer within a composition. Create it using the LayerCollection object’s addShape() method.

### 参数

#### name

`string`

### 返回

[`_PropertyClasses`](../type-aliases/PropertyClasses.md)

## 构造函数

### 构造函数

> **new ShapeLayer**(): `ShapeLayer`

#### 返回

`ShapeLayer`

#### 继承自

[`AVLayer`](AVLayer.md).[`constructor`](AVLayer.md#constructor)

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1405

When true, the layer is active at the current time.

#### 继承自

[`AVLayer`](AVLayer.md).[`active`](AVLayer.md#active)

***

### adjustmentLayer

> **adjustmentLayer**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:982

When true, this is an adjustment layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`adjustmentLayer`](AVLayer.md#adjustmentlayer)

***

### anchorPoint

> `readonly` **anchorPoint**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1490

Transform shortcuts

#### 继承自

[`AVLayer`](AVLayer.md).[`anchorPoint`](AVLayer.md#anchorpoint)

***

### audio

> `readonly` **audio**: [`_AudioGroup`](../interfaces/AudioGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1064

#### 继承自

[`AVLayer`](AVLayer.md).[`audio`](AVLayer.md#audio)

***

### audioActive

> `readonly` **audioActive**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:964

When true, the layer's audio is active at the current time.

#### 继承自

[`AVLayer`](AVLayer.md).[`audioActive`](AVLayer.md#audioactive)

***

### audioEnabled

> **audioEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:973

When true, the layer's audio is enabled.

#### 继承自

[`AVLayer`](AVLayer.md).[`audioEnabled`](AVLayer.md#audioenabled)

***

### autoOrient

> **autoOrient**: [`AutoOrientType`](../enumerations/AutoOrientType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1456

The type of automatic orientation for the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`autoOrient`](AVLayer.md#autoorient)

***

### blendingMode

> **blendingMode**: [`BlendingMode`](../enumerations/BlendingMode.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1006

The blending mode of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`blendingMode`](AVLayer.md#blendingmode)

***

### canSetCollapseTransformation

> `readonly` **canSetCollapseTransformation**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:952

When true, it is legal to change the value of collapseTransformation.

#### 继承自

[`AVLayer`](AVLayer.md).[`canSetCollapseTransformation`](AVLayer.md#cansetcollapsetransformation)

***

### canSetEnabled

> `readonly` **canSetEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2219

When true, the user interface displays an eyeball icon for this property.

#### 继承自

[`AVLayer`](AVLayer.md).[`canSetEnabled`](AVLayer.md#cansetenabled)

***

### canSetTimeRemapEnabled

> `readonly` **canSetTimeRemapEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:958

When true, it is legal to change the value of timeRemapEnabled.

#### 继承自

[`AVLayer`](AVLayer.md).[`canSetTimeRemapEnabled`](AVLayer.md#cansettimeremapenabled)

***

### collapseTransformation

> **collapseTransformation**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:997

When true, collapse transformation is on.

#### 继承自

[`AVLayer`](AVLayer.md).[`collapseTransformation`](AVLayer.md#collapsetransformation)

***

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1450

A descriptive comment for the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`comment`](AVLayer.md#comment)

***

### containingComp

> `readonly` **containingComp**: [`CompItem`](CompItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1414

The composition that contains this layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`containingComp`](AVLayer.md#containingcomp)

***

### effect

> `readonly` **effect**: [`PropertyGroup`](PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1060

#### 继承自

[`AVLayer`](AVLayer.md).[`effect`](AVLayer.md#effect)

***

### effectsActive

> **effectsActive**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:979

When true, the layer's effects are active.

#### 继承自

[`AVLayer`](AVLayer.md).[`effectsActive`](AVLayer.md#effectsactive)

***

### elided

> `readonly` **elided**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2225

When true, this property is not displayed in the user interface.

#### 继承自

[`AVLayer`](AVLayer.md).[`elided`](AVLayer.md#elided)

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1438

When true, the layer is enabled.

#### 继承自

[`AVLayer`](AVLayer.md).[`enabled`](AVLayer.md#enabled)

***

### environmentLayer

> **environmentLayer**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:985

When true, this is an environment layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`environmentLayer`](AVLayer.md#environmentlayer)

***

### frameBlending

> `readonly` **frameBlending**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:955

When true, frame blending is enabled.

#### 继承自

[`AVLayer`](AVLayer.md).[`frameBlending`](AVLayer.md#frameblending)

***

### frameBlendingType

> **frameBlendingType**: [`FrameBlendingType`](../enumerations/FrameBlendingType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1000

The type of frame blending for the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`frameBlendingType`](AVLayer.md#frameblendingtype)

***

### geometryOption

> `readonly` **geometryOption**: [`_GeometryOptionsGroup`](../interfaces/GeometryOptionsGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1062

#### 继承自

[`AVLayer`](AVLayer.md).[`geometryOption`](AVLayer.md#geometryoption)

***

### guideLayer

> **guideLayer**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:988

When true, this is a guide layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`guideLayer`](AVLayer.md#guidelayer)

***

### hasAudio

> `readonly` **hasAudio**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:961

When true, the layer contains an audio component.

#### 继承自

[`AVLayer`](AVLayer.md).[`hasAudio`](AVLayer.md#hasaudio)

***

### hasTrackMatte

> `readonly` **hasTrackMatte**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:970

When true, the layer above is being used as a track matte on this layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`hasTrackMatte`](AVLayer.md#hastrackmatte)

***

### hasVideo

> `readonly` **hasVideo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1402

When true, the layer contains a video component.

#### 继承自

[`AVLayer`](AVLayer.md).[`hasVideo`](AVLayer.md#hasvideo)

***

### height

> `readonly` **height**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:946

The height of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`height`](AVLayer.md#height)

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1393

The unique and persistent identification number.

#### 继承自

[`AVLayer`](AVLayer.md).[`id`](AVLayer.md#id)

***

### index

> `readonly` **index**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1396

The index position of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`index`](AVLayer.md#index)

***

### inPoint

> **inPoint**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1432

The “in” point of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`inPoint`](AVLayer.md#inpoint)

***

### isEffect

> `readonly` **isEffect**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2228

When true, this property is an effect.

#### 继承自

[`AVLayer`](AVLayer.md).[`isEffect`](AVLayer.md#iseffect)

***

### isMask

> `readonly` **isMask**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2231

When true, this property is a mask.

#### 继承自

[`AVLayer`](AVLayer.md).[`isMask`](AVLayer.md#ismask)

***

### isModified

> `readonly` **isModified**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2216

When true, the property has been changed since its creation.

#### 继承自

[`AVLayer`](AVLayer.md).[`isModified`](AVLayer.md#ismodified)

***

### isNameFromSource

> `readonly` **isNameFromSource**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:943

When true, the layer has no expressly set name, but contains a named source.

#### 继承自

[`AVLayer`](AVLayer.md).[`isNameFromSource`](AVLayer.md#isnamefromsource)

***

### isNameSet

> `readonly` **isNameSet**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1417

When true, the layer’s name has been explicitly set.

#### 继承自

[`AVLayer`](AVLayer.md).[`isNameSet`](AVLayer.md#isnameset)

***

### isTrackMatte

> `readonly` **isTrackMatte**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:967

When true, this layer is being used as a track matte for the layer below it.

#### 继承自

[`AVLayer`](AVLayer.md).[`isTrackMatte`](AVLayer.md#istrackmatte)

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1453

The label color for the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`label`](AVLayer.md#label)

***

### layerStyle

> `readonly` **layerStyle**: [`_LayerStyles`](../interfaces/LayerStyles.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1061

#### 继承自

[`AVLayer`](AVLayer.md).[`layerStyle`](AVLayer.md#layerstyle)

***

### locked

> **locked**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1447

When true, the layer is locked.

#### 继承自

[`AVLayer`](AVLayer.md).[`locked`](AVLayer.md#locked)

***

### marker

> `readonly` **marker**: [`MarkerValueProperty`](../type-aliases/MarkerValueProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1486

Shortcuts

#### 继承自

[`AVLayer`](AVLayer.md).[`marker`](AVLayer.md#marker)

***

### mask

> `readonly` **mask**: [`MaskPropertyGroup`](MaskPropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1059

#### 继承自

[`AVLayer`](AVLayer.md).[`mask`](AVLayer.md#mask)

***

### matchName

> `readonly` **matchName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2201

A special name for the property used to build unique naming paths.

#### 继承自

[`AVLayer`](AVLayer.md).[`matchName`](AVLayer.md#matchname)

***

### materialOption

> `readonly` **materialOption**: [`_MaterialOptionsGroup`](../interfaces/MaterialOptionsGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1063

#### 继承自

[`AVLayer`](AVLayer.md).[`materialOption`](AVLayer.md#materialoption)

***

### motionBlur

> **motionBlur**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:976

When true, the layer's motion blur is enabled.

#### 继承自

[`AVLayer`](AVLayer.md).[`motionBlur`](AVLayer.md#motionblur)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1420

The name of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`name`](AVLayer.md#name)

***

### nullLayer

> `readonly` **nullLayer**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1408

When true, this is a null layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`nullLayer`](AVLayer.md#nulllayer)

***

### numProperties

> `readonly` **numProperties**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2268

The number of indexed properties in the group.

#### 继承自

[`AVLayer`](AVLayer.md).[`numProperties`](AVLayer.md#numproperties)

***

### opacity

> `readonly` **opacity**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1501

#### 继承自

[`AVLayer`](AVLayer.md).[`opacity`](AVLayer.md#opacity)

***

### orientation

> `readonly` **orientation**: [`ThreeDProperty`](../type-aliases/ThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1496

#### 继承自

[`AVLayer`](AVLayer.md).[`orientation`](AVLayer.md#orientation)

***

### outPoint

> **outPoint**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1435

The “out” point of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`outPoint`](AVLayer.md#outpoint)

***

### parent

> **parent**: `null` \| [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1423

The parent of this layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`parent`](AVLayer.md#parent)

***

### parentProperty

> `readonly` **parentProperty**: [`PropertyGroup`](PropertyGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2213

The immediate parent group of this property.

#### 继承自

[`AVLayer`](AVLayer.md).[`parentProperty`](AVLayer.md#parentproperty)

***

### pointOfInterest

> `readonly` **pointOfInterest**: [`ThreeDProperty`](../type-aliases/ThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1502

#### 继承自

[`AVLayer`](AVLayer.md).[`pointOfInterest`](AVLayer.md#pointofinterest)

***

### position

> `readonly` **position**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1491

#### 继承自

[`AVLayer`](AVLayer.md).[`position`](AVLayer.md#position)

***

### preserveTransparency

> **preserveTransparency**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1009

When true, preserve transparency is enabled.

#### 继承自

[`AVLayer`](AVLayer.md).[`preserveTransparency`](AVLayer.md#preservetransparency)

***

### propertyDepth

> `readonly` **propertyDepth**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2207

The number of levels of parent groups between this property and the containing layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`propertyDepth`](AVLayer.md#propertydepth)

***

### propertyIndex

> `readonly` **propertyIndex**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2204

Index of this property within its parent group.

#### 继承自

[`AVLayer`](AVLayer.md).[`propertyIndex`](AVLayer.md#propertyindex)

***

### propertyType

> `readonly` **propertyType**: [`PropertyType`](../enumerations/PropertyType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2210

The property type.

#### 继承自

[`AVLayer`](AVLayer.md).[`propertyType`](AVLayer.md#propertytype)

***

### quality

> **quality**: [`LayerQuality`](../enumerations/LayerQuality.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1018

The layer quality setting.

#### 继承自

[`AVLayer`](AVLayer.md).[`quality`](AVLayer.md#quality)

***

### rotation

> `readonly` **rotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1497

#### 继承自

[`AVLayer`](AVLayer.md).[`rotation`](AVLayer.md#rotation)

***

### samplingQuality

> **samplingQuality**: [`LayerSamplingQuality`](../enumerations/LayerSamplingQuality.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1012

The layer sampling quality setting.

#### 继承自

[`AVLayer`](AVLayer.md).[`samplingQuality`](AVLayer.md#samplingquality)

***

### scale

> `readonly` **scale**: [`TwoDOrThreeDProperty`](../type-aliases/TwoDOrThreeDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1495

#### 继承自

[`AVLayer`](AVLayer.md).[`scale`](AVLayer.md#scale)

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2240

When true, this property is selected.

#### 继承自

[`AVLayer`](AVLayer.md).[`selected`](AVLayer.md#selected)

***

### selectedProperties

> `readonly` **selectedProperties**: [`_PropertyClasses`](../type-aliases/PropertyClasses.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1411

All selected AE properties in the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`selectedProperties`](AVLayer.md#selectedproperties)

***

### shy

> **shy**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1444

When true, the layer is shy.

#### 继承自

[`AVLayer`](AVLayer.md).[`shy`](AVLayer.md#shy)

***

### solo

> **solo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1441

When true, the layer is soloed.

#### 继承自

[`AVLayer`](AVLayer.md).[`solo`](AVLayer.md#solo)

***

### source

> `readonly` **source**: `any`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:940

The source item for this layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`source`](AVLayer.md#source)

***

### startTime

> **startTime**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1426

The start time of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`startTime`](AVLayer.md#starttime)

***

### stretch

> **stretch**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1429

The time stretch percentage of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`stretch`](AVLayer.md#stretch)

***

### threeDLayer

> **threeDLayer**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:991

When true, this is a 3D layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`threeDLayer`](AVLayer.md#threedlayer)

***

### threeDPerChar

> **threeDPerChar**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:994

When true, 3D is set on a per-character basis in this text layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`threeDPerChar`](AVLayer.md#threedperchar)

***

### time

> `readonly` **time**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1399

The current time of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`time`](AVLayer.md#time)

***

### timeRemap

> `readonly` **timeRemap**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1058

Shortcuts

#### 继承自

[`AVLayer`](AVLayer.md).[`timeRemap`](AVLayer.md#timeremap)

***

### timeRemapEnabled

> **timeRemapEnabled**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1003

When true, time remapping is enabled on this layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`timeRemapEnabled`](AVLayer.md#timeremapenabled)

***

### trackMatteType

> **trackMatteType**: [`TrackMatteType`](../enumerations/TrackMatteType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1015

if layer has a track matte, specifies the way it is applied.

#### 继承自

[`AVLayer`](AVLayer.md).[`trackMatteType`](AVLayer.md#trackmattetype)

***

### transform

> `readonly` **transform**: [`_TransformGroup`](../interfaces/TransformGroup.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1487

#### 继承自

[`AVLayer`](AVLayer.md).[`transform`](AVLayer.md#transform)

***

### width

> `readonly` **width**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:949

The width of the layer.

#### 继承自

[`AVLayer`](AVLayer.md).[`width`](AVLayer.md#width)

***

### xPosition

> `readonly` **xPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1492

#### 继承自

[`AVLayer`](AVLayer.md).[`xPosition`](AVLayer.md#xposition)

***

### xRotation

> `readonly` **xRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1498

#### 继承自

[`AVLayer`](AVLayer.md).[`xRotation`](AVLayer.md#xrotation)

***

### yPosition

> `readonly` **yPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1493

#### 继承自

[`AVLayer`](AVLayer.md).[`yPosition`](AVLayer.md#yposition)

***

### yRotation

> `readonly` **yRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1499

#### 继承自

[`AVLayer`](AVLayer.md).[`yRotation`](AVLayer.md#yrotation)

***

### zPosition

> `readonly` **zPosition**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1494

#### 继承自

[`AVLayer`](AVLayer.md).[`zPosition`](AVLayer.md#zposition)

***

### zRotation

> `readonly` **zRotation**: [`OneDProperty`](../type-aliases/OneDProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1500

#### 继承自

[`AVLayer`](AVLayer.md).[`zRotation`](AVLayer.md#zrotation)

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

[`AVLayer`](AVLayer.md).[`activeAtTime`](AVLayer.md#activeattime)

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

[`AVLayer`](AVLayer.md).[`addProperty`](AVLayer.md#addproperty)

***

### addToMotionGraphicsTemplate()

> **addToMotionGraphicsTemplate**(`comp`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1049

Adds the layer to the Essential Graphics Panel for the specified composition.

#### 参数

##### comp

[`CompItem`](CompItem.md)

#### 返回

`boolean`

#### 继承自

[`AVLayer`](AVLayer.md).[`addToMotionGraphicsTemplate`](AVLayer.md#addtomotiongraphicstemplate)

***

### addToMotionGraphicsTemplateAs()

> **addToMotionGraphicsTemplateAs**(`comp`, `name`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1052

Adds the layer to the Essential Graphics Panel for the specified composition.

#### 参数

##### comp

[`CompItem`](CompItem.md)

##### name

`string`

#### 返回

`boolean`

#### 继承自

[`AVLayer`](AVLayer.md).[`addToMotionGraphicsTemplateAs`](AVLayer.md#addtomotiongraphicstemplateas)

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

[`AVLayer`](AVLayer.md).[`applyPreset`](AVLayer.md#applypreset)

***

### audioActiveAtTime()

> **audioActiveAtTime**(`time`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1021

Reports whether this layer's audio is active at a given time.

#### 参数

##### time

`number`

#### 返回

`boolean`

#### 继承自

[`AVLayer`](AVLayer.md).[`audioActiveAtTime`](AVLayer.md#audioactiveattime)

***

### calculateTransformFromPoints()

> **calculateTransformFromPoints**(`pointTopLeft`, `pointTopRight`, `pointBottomRight`): `object`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1024

Calculates a transformation from a set of points in this layer.

#### 参数

##### pointTopLeft

\[`number`, `number`, `number`\]

##### pointTopRight

\[`number`, `number`, `number`\]

##### pointBottomRight

\[`number`, `number`, `number`\]

#### 返回

`object`

#### 继承自

[`AVLayer`](AVLayer.md).[`calculateTransformFromPoints`](AVLayer.md#calculatetransformfrompoints)

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

[`AVLayer`](AVLayer.md).[`canAddProperty`](AVLayer.md#canaddproperty)

***

### canAddToMotionGraphicsTemplate()

> **canAddToMotionGraphicsTemplate**(`comp`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1055

True if the layer can be added to the EGP for the specified composition

#### 参数

##### comp

[`CompItem`](CompItem.md)

#### 返回

`boolean`

#### 继承自

[`AVLayer`](AVLayer.md).[`canAddToMotionGraphicsTemplate`](AVLayer.md#canaddtomotiongraphicstemplate)

***

### compPointToSource()

> **compPointToSource**(`point`): \[`number`, `number`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1034

Converts composition coordinates, such as sourcePointToComp, to layer coordinates.

#### 参数

##### point

\[`number`, `number`\]

#### 返回

\[`number`, `number`\]

#### 继承自

[`AVLayer`](AVLayer.md).[`compPointToSource`](AVLayer.md#comppointtosource)

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

[`AVLayer`](AVLayer.md).[`copyToComp`](AVLayer.md#copytocomp)

***

### duplicate()

> **duplicate**(): [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1471

Duplicates the layer.

#### 返回

[`Layer`](Layer.md)

#### 继承自

[`AVLayer`](AVLayer.md).[`duplicate`](AVLayer.md#duplicate)

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

[`AVLayer`](AVLayer.md).[`moveAfter`](AVLayer.md#moveafter)

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

[`AVLayer`](AVLayer.md).[`moveBefore`](AVLayer.md#movebefore)

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

[`AVLayer`](AVLayer.md).[`moveTo`](AVLayer.md#moveto)

***

### moveToBeginning()

> **moveToBeginning**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1459

Moves the layer to the top of the composition (makes it the first layer).

#### 返回

`void`

#### 继承自

[`AVLayer`](AVLayer.md).[`moveToBeginning`](AVLayer.md#movetobeginning)

***

### moveToEnd()

> **moveToEnd**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1462

Moves the layer to the bottom of the composition (makes it the last layer).

#### 返回

`void`

#### 继承自

[`AVLayer`](AVLayer.md).[`moveToEnd`](AVLayer.md#movetoend)

***

### openInViewer()

> **openInViewer**(): `null` \| [`Viewer`](Viewer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1037

Opens the layer in a Layer panel.

#### 返回

`null` \| [`Viewer`](Viewer.md)

#### 继承自

[`AVLayer`](AVLayer.md).[`openInViewer`](AVLayer.md#openinviewer)

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

[`AVLayer`](AVLayer.md).[`property`](AVLayer.md#property)

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

[`AVLayer`](AVLayer.md).[`property`](AVLayer.md#property)

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

[`AVLayer`](AVLayer.md).[`propertyGroup`](AVLayer.md#propertygroup)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2246

Removes this from the project.

#### 返回

`void`

#### 继承自

[`AVLayer`](AVLayer.md).[`remove`](AVLayer.md#remove)

***

### replaceSource()

> **replaceSource**(`newSource`, `fixExpressions`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1040

Changes the source item for this layer.

#### 参数

##### newSource

[`AVItem`](AVItem.md)

##### fixExpressions

`boolean`

#### 返回

`void`

#### 继承自

[`AVLayer`](AVLayer.md).[`replaceSource`](AVLayer.md#replacesource)

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

[`AVLayer`](AVLayer.md).[`setParentWithJump`](AVLayer.md#setparentwithjump)

***

### sourcePointToComp()

> **sourcePointToComp**(`point`): \[`number`, `number`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1031

Converts composition coordinates, such as sourcePointToComp, to layer coordinates.

#### 参数

##### point

\[`number`, `number`\]

#### 返回

\[`number`, `number`\]

#### 继承自

[`AVLayer`](AVLayer.md).[`sourcePointToComp`](AVLayer.md#sourcepointtocomp)

***

### sourceRectAtTime()

> **sourceRectAtTime**(`timeT`, `extents`): `object`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1043

Retrieves the source rectangle of a layer.

#### 参数

##### timeT

`number`

##### extents

`boolean`

#### 返回

`object`

##### height

> **height**: `number`

##### left

> **left**: `number`

##### top

> **top**: `number`

##### width

> **width**: `number`

#### 继承自

[`AVLayer`](AVLayer.md).[`sourceRectAtTime`](AVLayer.md#sourcerectattime)
