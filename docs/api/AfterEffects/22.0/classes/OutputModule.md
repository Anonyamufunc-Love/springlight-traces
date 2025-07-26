# 类: OutputModule

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1648

An OutputModule object of a RenderQueueItem generates a single file or sequence via a render operation, and contains attributes and methods relating to the file to be rendered.

## 构造函数

### 构造函数

> **new OutputModule**(): `OutputModule`

#### 返回

`OutputModule`

## 属性

### file

> **file**: [`File`](../../../shared/JavaScript/interfaces/File.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1656

The path and name of the file to be rendered.

***

### includeSourceXMP

> **includeSourceXMP**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1662

When true, writes all source footage XMP metadata to the output file.

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1650

The user-interface name of the output module.

***

### postRenderAction

> **postRenderAction**: [`PostRenderAction`](../enumerations/PostRenderAction.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1659

An action to be taken after rendering.

***

### templates

> `readonly` **templates**: `string`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1653

All templates for the output module

## 方法

### applyTemplate()

> **applyTemplate**(`templateName`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1671

Applies an output-module template.

#### 参数

##### templateName

`string`

#### 返回

`void`

***

### getSetting()

> **getSetting**(`key`): `string` \| `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1673

#### 参数

##### key

`string`

#### 返回

`string` \| `number`

***

### getSettings()

> **getSettings**(`format?`): `object`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1675

#### 参数

##### format?

[`GetSettingsFormat`](../enumerations/GetSettingsFormat.md)

#### 返回

`object`

##### Audio Bit Depth

> **Audio Bit Depth**: `string`

##### Audio Channels

> **Audio Channels**: `string`

##### Audio Sample Rate

> **Audio Sample Rate**: `string`

##### Channels

> **Channels**: `string`

##### Color

> **Color**: `string`

##### Crop

> **Crop**: `string`

##### Crop Bottom

> **Crop Bottom**: `string`

##### Crop Left

> **Crop Left**: `string`

##### Crop Right

> **Crop Right**: `string`

##### Crop Top

> **Crop Top**: `string`

##### Depth

> **Depth**: `string`

##### Format

> **Format**: `string`

##### Include Project Link

> **Include Project Link**: `string`

##### Include Source XMP Metadata

> **Include Source XMP Metadata**: `string`

##### Lock Aspect Ratio

> **Lock Aspect Ratio**: `string`

##### Output Audio

> **Output Audio**: `string`

##### Output File Info

> **Output File Info**: `string`

##### Post-Render Action

> **Post-Render Action**: `string`

##### Resize

> **Resize**: `string`

##### Resize Quality

> **Resize Quality**: `string`

##### Resize to

> **Resize to**: `object`

##### Starting #

> **Starting #**: `string`

##### Use Comp Frame Number

> **Use Comp Frame Number**: `string`

##### Use Region of Interest

> **Use Region of Interest**: `string`

##### Video Output

> **Video Output**: `string`

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1665

Removes this output module from the render-queue item’s list.

#### 返回

`void`

***

### saveAsTemplate()

> **saveAsTemplate**(`name`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1668

Saves a new output-module template.

#### 参数

##### name

`string`

#### 返回

`void`

***

### setSetting()

> **setSetting**(`key`, `value`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1703

#### 参数

##### key

`string`

##### value

`string` | `number`

#### 返回

`void`

***

### setSettings()

> **setSettings**(`settings`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1705

#### 参数

##### settings

`object`

#### 返回

`void`
