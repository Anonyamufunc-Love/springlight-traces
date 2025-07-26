# 类: CompItem

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1080

The CompItem object represents a composition, and allows you to manipulate and get information about it. Access the objects by position index number in a project’s item collection.

## 继承

- [`AVItem`](AVItem.md)

## 构造函数

### 构造函数

> **new CompItem**(): `CompItem`

#### 返回

`CompItem`

#### 继承自

[`AVItem`](AVItem.md).[`constructor`](AVItem.md#constructor)

## 属性

### activeCamera

> `readonly` **activeCamera**: `null` \| [`CameraLayer`](CameraLayer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1085

The current active camera layer.

***

### bgColor

> **bgColor**: [`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1133

The background color of the composition.

***

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1337

A descriptive string.

#### 继承自

[`AVItem`](AVItem.md).[`comment`](AVItem.md#comment)

***

### displayStartFrame

> **displayStartFrame**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1163

The frame value of the beginning of the composition.

***

### displayStartTime

> **displayStartTime**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1136

Changes the display of the start time in the Timeline panel.

***

### draft3d

> **draft3d**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1121

When true, Draft 3D mode is enabled for the Composition panel.

***

### dropFrame

> **dropFrame**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1160

When true, indicates that the composition uses drop-frame timecode.

***

### duration

> **duration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:901

The total duration of the item.

#### 继承自

[`AVItem`](AVItem.md).[`duration`](AVItem.md#duration)

***

### footageMissing

> `readonly` **footageMissing**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:880

When true, the item cannot be found or is a placeholder.

#### 继承自

[`AVItem`](AVItem.md).[`footageMissing`](AVItem.md#footagemissing)

***

### frameBlending

> **frameBlending**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1124

When true, time filtering is enabled for this composition.

***

### frameDuration

> **frameDuration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1106

The duration of a single frame.

#### 重写了

[`AVItem`](AVItem.md).[`frameDuration`](AVItem.md#frameduration)

***

### frameRate

> **frameRate**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:895

The frame rate of the item.

#### 继承自

[`AVItem`](AVItem.md).[`frameRate`](AVItem.md#framerate)

***

### hasAudio

> `readonly` **hasAudio**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:877

When true, the item has an audio component.

#### 继承自

[`AVItem`](AVItem.md).[`hasAudio`](AVItem.md#hasaudio)

***

### hasVideo

> `readonly` **hasVideo**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:874

When true, the item has a video component.

#### 继承自

[`AVItem`](AVItem.md).[`hasVideo`](AVItem.md#hasvideo)

***

### height

> **height**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:889

The height of the item.

#### 继承自

[`AVItem`](AVItem.md).[`height`](AVItem.md#height)

***

### hideShyLayers

> **hideShyLayers**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1115

When true, shy layers are visible in the Timeline panel.

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1328

A unique identifier for this item.

#### 继承自

[`AVItem`](AVItem.md).[`id`](AVItem.md#id)

***

### isMediaReplacementCompatible

> `readonly` **isMediaReplacementCompatible**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:883

True if the AVItem can be used as an alternate source when calling Property.setAlternateSource

#### 继承自

[`AVItem`](AVItem.md).[`isMediaReplacementCompatible`](AVItem.md#ismediareplacementcompatible)

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1346

The label color for the item.

#### 继承自

[`AVItem`](AVItem.md).[`label`](AVItem.md#label)

***

### layers

> `readonly` **layers**: [`LayerCollection`](LayerCollection.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1088

The layers of the composition.

***

### markerProperty

> `readonly` **markerProperty**: [`MarkerValueProperty`](../type-aliases/MarkerValueProperty.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1091

The markers of the composition.

***

### motionBlur

> **motionBlur**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1118

When true, motion blur is enabled for this composition.

***

### motionBlurAdaptiveSampleLimit

> **motionBlurAdaptiveSampleLimit**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1151

The maximum number of motion blur samples of 2D layer motion.

***

### motionBlurSamplesPerFrame

> **motionBlurSamplesPerFrame**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1148

The minimum number of motion blur samples per frame for Classic 3D layers, shape layers, and certain effects.

***

### motionGraphicsTemplateControllerCount

> `readonly` **motionGraphicsTemplateControllerCount**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1103

The number of properties in the Essential Graphics panel for the composition.

***

### motionGraphicsTemplateName

> **motionGraphicsTemplateName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1154

Read or write the name property in the Essential Graphics panel for the composition.

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1334

The name of the object as shown in the Project panel.

#### 继承自

[`AVItem`](AVItem.md).[`name`](AVItem.md#name)

***

### numLayers

> `readonly` **numLayers**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1082

The number of layers in the composition.

***

### parentFolder

> **parentFolder**: [`FolderItem`](FolderItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1340

The parent folder of this item.

#### 继承自

[`AVItem`](AVItem.md).[`parentFolder`](AVItem.md#parentfolder)

***

### pixelAspect

> **pixelAspect**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:892

The pixel aspect ratio of the item.

#### 继承自

[`AVItem`](AVItem.md).[`pixelAspect`](AVItem.md#pixelaspect)

***

### preserveNestedFrameRate

> **preserveNestedFrameRate**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1127

When true, the frame rate of nested compositions is preserved.

***

### preserveNestedResolution

> **preserveNestedResolution**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1130

When true, the resolution of nested compositions is preserved.

***

### proxySource

> `readonly` **proxySource**: [`FootageSource`](FootageSource.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:868

The FootageItem object used as proxy for the item.

#### 继承自

[`AVItem`](AVItem.md).[`proxySource`](AVItem.md#proxysource)

***

### renderer

> **renderer**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1157

The rendering plug-in module to be used to render this composition.

***

### renderers

> `readonly` **renderers**: `string`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1100

The set of available rendering plug-in modules.

***

### resolutionFactor

> **resolutionFactor**: \[`number`, `number`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1139

The factor by which the x and y resolution of the Composition panel is downsampled.

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1343

When true, this item is currently selected.

#### 继承自

[`AVItem`](AVItem.md).[`selected`](AVItem.md#selected)

***

### selectedLayers

> `readonly` **selectedLayers**: [`Layer`](Layer.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1094

The selected layers of the composition.

***

### selectedProperties

> `readonly` **selectedProperties**: [`_PropertyClasses`](../type-aliases/PropertyClasses.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1097

The selected properties of the composition.

***

### shutterAngle

> **shutterAngle**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1142

The camera shutter angle.

***

### shutterPhase

> **shutterPhase**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1145

The camera shutter phase.

***

### time

> **time**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:907

Current time of the item.

#### 继承自

[`AVItem`](AVItem.md).[`time`](AVItem.md#time)

***

### typeName

> `readonly` **typeName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1331

The type of item.

#### 继承自

[`AVItem`](AVItem.md).[`typeName`](AVItem.md#typename)

***

### usedIn

> `readonly` **usedIn**: `CompItem`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:871

The CompItem objects that use this item.

#### 继承自

[`AVItem`](AVItem.md).[`usedIn`](AVItem.md#usedin)

***

### useProxy

> **useProxy**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:904

When true, a proxy source is used for this item.

#### 继承自

[`AVItem`](AVItem.md).[`useProxy`](AVItem.md#useproxy)

***

### width

> **width**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:886

The width of the item.

#### 继承自

[`AVItem`](AVItem.md).[`width`](AVItem.md#width)

***

### workAreaDuration

> **workAreaDuration**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1112

The work area duration.

***

### workAreaStart

> **workAreaStart**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1109

The work area start time.

## 方法

### addGuide()

> **addGuide**(`orientationType`, `position`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1349

Creates a new guide and adds it to the guides object of the Item.

#### 参数

##### orientationType

`number`

##### position

`number`

#### 返回

`number`

#### 继承自

[`AVItem`](AVItem.md).[`addGuide`](AVItem.md#addguide)

***

### duplicate()

> **duplicate**(): `CompItem`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1166

Creates and returns a duplicate of this composition.

#### 返回

`CompItem`

***

### exportAsMotionGraphicsTemplate()

> **exportAsMotionGraphicsTemplate**(`doOverWriteFileIfExisting`, `file_path?`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1183

Exports the composition as a Motion Graphics template.

#### 参数

##### doOverWriteFileIfExisting

`boolean`

##### file\_path?

`string`

#### 返回

`boolean`

***

### getMotionGraphicsTemplateControllerName()

> **getMotionGraphicsTemplateControllerName**(`index`): `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1189

Gets the name of a single property in the Essential Graphics panel.

#### 参数

##### index

`number`

#### 返回

`string`

***

### layer()

#### 调用签名

> **layer**(`index`): [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1169

Gets a layer from this composition.

##### 参数

###### index

`number`

##### 返回

[`Layer`](Layer.md)

#### 调用签名

> **layer**(`otherLayer`, `relIndex`): [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1170

Gets a layer from this composition.

##### 参数

###### otherLayer

[`Layer`](Layer.md)

###### relIndex

`number`

##### 返回

[`Layer`](Layer.md)

#### 调用签名

> **layer**(`name`): [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1171

Gets a layer from this composition.

##### 参数

###### name

`string`

##### 返回

[`Layer`](Layer.md)

***

### openInEssentialGraphics()

> **openInEssentialGraphics**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1186

Opens the composition in the Essential Graphics panel.

#### 返回

`void`

***

### openInViewer()

> **openInViewer**(): `null` \| [`Viewer`](Viewer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1174

Opens the composition in a Composition panel.

#### 返回

`null` \| [`Viewer`](Viewer.md)

***

### ramPreviewTest()

> **ramPreviewTest**(`unknown`, `zoom`, `exposure`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1180

Open this Composition in the Preview panel, and change the zoom and exposure settings.

#### 参数

##### unknown

`any`

##### zoom

`number`

##### exposure

`number`

#### 返回

`void`

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1358

Deletes the item from the project.

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`remove`](AVItem.md#remove)

***

### removeGuide()

> **removeGuide**(`guideIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1352

Removes an existing guide.

#### 参数

##### guideIndex

`number`

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`removeGuide`](AVItem.md#removeguide)

***

### saveFrameToPng()

> **saveFrameToPng**(`time`, `file`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1177

Save the specific frame to a png file

#### 参数

##### time

`number`

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`void`

***

### setGuide()

> **setGuide**(`position`, `guideIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1355

Modifies the position of an existing guide.

#### 参数

##### position

`number`

##### guideIndex

`number`

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`setGuide`](AVItem.md#setguide)

***

### setMotionGraphicsControllerName()

> **setMotionGraphicsControllerName**(`index`, `newName`): `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1192

Sets the name of a single property in the Essential Graphics panel.

#### 参数

##### index

`number`

##### newName

`string`

#### 返回

`string`

***

### setProxy()

> **setProxy**(`file`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:910

Sets a proxy for the item.

#### 参数

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`setProxy`](AVItem.md#setproxy)

***

### setProxyToNone()

> **setProxyToNone**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:934

Removes the proxy for the item.

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`setProxyToNone`](AVItem.md#setproxytonone)

***

### setProxyWithPlaceholder()

> **setProxyWithPlaceholder**(`name`, `width`, `height`, `frameRate`, `duration`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:925

Sets a placeholder as a proxy for the item.

#### 参数

##### name

`string`

##### width

`number`

##### height

`number`

##### frameRate

`number`

##### duration

`number`

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`setProxyWithPlaceholder`](AVItem.md#setproxywithplaceholder)

***

### setProxyWithSequence()

> **setProxyWithSequence**(`file`, `forceAlphabetical`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:913

Sets a sequence as a proxy for the item.

#### 参数

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

##### forceAlphabetical

`boolean`

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`setProxyWithSequence`](AVItem.md#setproxywithsequence)

***

### setProxyWithSolid()

> **setProxyWithSolid**(`color`, `name`, `width`, `height`, `pixelAspect`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:916

Sets a solid as a proxy for the item.

#### 参数

##### color

[`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

##### name

`string`

##### width

`number`

##### height

`number`

##### pixelAspect

`number`

#### 返回

`void`

#### 继承自

[`AVItem`](AVItem.md).[`setProxyWithSolid`](AVItem.md#setproxywithsolid)
