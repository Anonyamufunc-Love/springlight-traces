# 类: Project

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1712

The project object represents an After Effects project. Attributes provide access to specific objects within the project, such as imported files or footage and compositions, and also to project settings such as the timecode base. Methods can import footage, create solids, compositions and folders, and save changes.

## 构造函数

### 构造函数

> **new Project**(): `Project`

#### 返回

`Project`

## 属性

### activeItem

> `readonly` **activeItem**: `null` \| [`_ItemClasses`](../type-aliases/ItemClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1723

The currently active item.

***

### bitsPerChannel

> **bitsPerChannel**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1735

The color depth of the current project.

***

### compensateForSceneReferredProfiles

> **compensateForSceneReferredProfiles**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1780

True if Compensate for Scene-referred Profiles should be enabled for this project.

***

### displayStartFrame

> **displayStartFrame**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1741

The frame at which to start numbering when displaying the project.

***

### expressionEngine

> **expressionEngine**: `"extendscript"` \| `"javascript-1.0"`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1783

The Expressions Engine setting in the Project Settings dialog box.

***

### feetFramesFilmType

> **feetFramesFilmType**: [`FeetFramesFilmType`](../enumerations/FeetFramesFilmType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1756

The Use Feet + Frames menu setting in the Project Settings dialog box.

***

### file

> `readonly` **file**: `null` \| [`File`](../../../shared/JavaScript/interfaces/File.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1714

The file for the currently open project.

***

### footageTimecodeDisplayStartType

> **footageTimecodeDisplayStartType**: [`FootageTimecodeDisplayStartType`](../enumerations/FootageTimecodeDisplayStartType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1762

The Footage Start Time setting in the Project Settings dialog box, which is enabled when Timecode is selected as the time display style.

***

### framesCountType

> **framesCountType**: [`FramesCountType`](../enumerations/FramesCountType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1753

The Frame Count menu setting in the Project Settings dialog box.

***

### framesUseFeetFrames

> **framesUseFeetFrames**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1759

The Use Feet + Frames setting in the Project Settings dialog box.

***

### gpuAccelType

> **gpuAccelType**: [`GpuAccelType`](../enumerations/GpuAccelType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1744

Get or set the current projects GPU Acceleration option.

***

### items

> `readonly` **items**: [`ItemCollection`](ItemCollection.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1720

All items in the project.

***

### linearBlending

> **linearBlending**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1747

When true, linear blending is used for the project.

***

### linearizeWorkingSpace

> **linearizeWorkingSpace**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1777

True if Linearize Working Space should be enabled for this project.

***

### numItems

> `readonly` **numItems**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1726

The total number of items contained in the project.

***

### renderQueue

> `readonly` **renderQueue**: [`RenderQueue`](RenderQueue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1732

The project’s render queue.

***

### rootFolder

> `readonly` **rootFolder**: [`FolderItem`](FolderItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1717

The folder containing all the contents of the project; the equivalent of the Project panel

***

### selection

> `readonly` **selection**: [`_ItemClasses`](../type-aliases/ItemClasses.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1729

All items selected in the Project panel.

***

### timeDisplayType

> **timeDisplayType**: [`TimeDisplayType`](../enumerations/TimeDisplayType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1765

The time display style, corresponding to the Time Display Style section in the Project Settings dialog box.

***

### toolType

> **toolType**: [`ToolType`](../enumerations/ToolType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1768

The active tool in the Tools panel.

***

### transparencyGridThumbnails

> **transparencyGridThumbnails**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1738

When true, thumbnail views use the transparency checkerboard pattern.

***

### workingGamma

> **workingGamma**: `2.2` \| `2.4`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1771

The current project’s working gamma value, either 2.2 or 2.4.

***

### workingSpace

> **workingSpace**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1774

A string which is the color profile description for the project’s color working space.

***

### xmpPacket

> **xmpPacket**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1750

The project’s XMP metadata.

## 方法

### autoFixExpressions()

> **autoFixExpressions**(`oldText`, `newText`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1828

Automatically replaces text in all expressions.

#### 参数

##### oldText

`string`

##### newText

`string`

#### 返回

`void`

***

### close()

> **close**(`closeOptions`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1801

Closes the project with normal save options.

#### 参数

##### closeOptions

[`CloseOptions`](../enumerations/CloseOptions.md)

#### 返回

`boolean`

***

### closeTeamProject()

> **closeTeamProject**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1843

Closes a currently open team project.

#### 返回

`boolean`

***

### consolidateFootage()

> **consolidateFootage**(): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1792

Consolidates all footage in the project.

#### 返回

`number`

***

### convertTeamProjectToProject()

> **convertTeamProjectToProject**(`project_file`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1846

Converts a team project to an After Effects project on a local disk.

#### 参数

##### project\_file

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`boolean`

***

### importFile()

> **importFile**(`importOptions`): [`_ItemClasses`](../type-aliases/ItemClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1819

Imports a file into the project.

#### 参数

##### importOptions

[`ImportOptions`](ImportOptions.md)

#### 返回

[`_ItemClasses`](../type-aliases/ItemClasses.md)

***

### importFileWithDialog()

> **importFileWithDialog**(): `null` \| [`_ItemClasses`](../type-aliases/ItemClasses.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1822

Displays an Import File dialog box.

#### 返回

`null` \| [`_ItemClasses`](../type-aliases/ItemClasses.md)[]

***

### importPlaceholder()

> **importPlaceholder**(`name`, `width`, `height`, `frameRate`, `duration`): [`PlaceholderItem`](PlaceholderItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1810

Imports a placeholder into the project.

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

[`PlaceholderItem`](PlaceholderItem.md)

***

### isAnyTeamProjectOpen()

> **isAnyTeamProjectOpen**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1858

Checks whether any team project is currently open.

#### 返回

`boolean`

***

### isLoggedInToTeamProject()

> **isLoggedInToTeamProject**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1864

Checks whether or not the client (After Effects) is currently logged into the team project server.

#### 返回

`boolean`

***

### isResolveCommandEnabled()

> **isResolveCommandEnabled**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1873

Checks whether or not the Resolve command is enabled.

#### 返回

`boolean`

***

### isShareCommandEnabled()

> **isShareCommandEnabled**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1870

Checks whether or not the Share command is enabled.

#### 返回

`boolean`

***

### isSyncCommandEnabled()

> **isSyncCommandEnabled**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1867

Checks whether or not the Sync command is enabled.

#### 返回

`boolean`

***

### isTeamProjectEnabled()

> **isTeamProjectEnabled**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1861

Checks whether or not team projects is enabled for After Effects. (This will almost always return true.)

#### 返回

`boolean`

***

### isTeamProjectOpen()

> **isTeamProjectOpen**(`teamProjectName`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1855

Checks whether specified team project is currently open.

#### 参数

##### teamProjectName

`string`

#### 返回

`boolean`

***

### item()

> **item**(`index`): [`_ItemClasses`](../type-aliases/ItemClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1786

Retrieves an item from the project.

#### 参数

##### index

`number`

#### 返回

[`_ItemClasses`](../type-aliases/ItemClasses.md)

***

### itemByID()

> **itemByID**(`id`): [`_ItemClasses`](../type-aliases/ItemClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1789

Retrieves an item by its Item ID

#### 参数

##### id

`number`

#### 返回

[`_ItemClasses`](../type-aliases/ItemClasses.md)

***

### layerByID()

> **layerByID**(`id`): `null` \| [`Layer`](Layer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1852

Retrieves a layer by its Layer ID

#### 参数

##### id

`number`

#### 返回

`null` \| [`Layer`](Layer.md)

***

### listColorProfiles()

> **listColorProfiles**(): `string`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1879

Returns an array of color profile descriptions that can be set as the project’s color working space.

#### 返回

`string`[]

***

### listTeamProjects()

> **listTeamProjects**(): `string`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1849

Returns an array containing the name strings for all team projects available for the current user. Archived Team Projects are not included.

#### 返回

`string`[]

***

### newTeamProject()

> **newTeamProject**(`teamProjectName`, `description`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1831

Creates a new team project.

#### 参数

##### teamProjectName

`string`

##### description

`string`

#### 返回

`boolean`

***

### openTeamProject()

> **openTeamProject**(`teamProjectName`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1834

Opens a team project.

#### 参数

##### teamProjectName

`string`

#### 返回

`boolean`

***

### reduceProject()

> **reduceProject**(`array_of_items`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1798

Reduces the project to a specified set of items.

#### 参数

##### array\_of\_items

[`_ItemClasses`](../type-aliases/ItemClasses.md)[]

#### 返回

`number`

***

### removeUnusedFootage()

> **removeUnusedFootage**(): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1795

Removes unused footage from the project.

#### 返回

`number`

***

### resolveConflict()

> **resolveConflict**(`ResolveType`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1876

Resolves a conflict between the open team project and the version on the team projects server, using the specified resolution method.

#### 参数

##### ResolveType

[`ResolveType`](../enumerations/ResolveType.md)

#### 返回

`boolean`

***

### save()

> **save**(`file?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1804

Saves the project.

#### 参数

##### file?

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`void`

***

### saveWithDialog()

> **saveWithDialog**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1807

Displays a Save dialog box.

#### 返回

`boolean`

***

### setDefaultImportFolder()

> **setDefaultImportFolder**(`folder`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1882

Sets the folder that will be shown in the file import dialog.

#### 参数

##### folder

[`Folder`](../../../shared/JavaScript/interfaces/Folder.md)

#### 返回

`boolean`

***

### shareTeamProject()

> **shareTeamProject**(`comment`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1837

Shares the currently open team project.

#### 参数

##### comment

`string`

#### 返回

`boolean`

***

### showWindow()

> **showWindow**(`doShow`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1825

Shows or hides the Project panel.

#### 参数

##### doShow

`boolean`

#### 返回

`void`

***

### syncTeamProject()

> **syncTeamProject**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1840

Syncs the currently open team project.

#### 返回

`boolean`
