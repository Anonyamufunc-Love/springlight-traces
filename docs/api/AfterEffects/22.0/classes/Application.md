# 类: Application

定义于: types-for-adobe/shared/global.d.ts:23

Provides access to objects and application settings within the After Effects application. The single global object is always available by its name, app.

## 构造函数

### 构造函数

> **new Application**(): `Application`

#### 返回

`Application`

## 属性

### activeViewer

> `readonly` **activeViewer**: `null` \| [`Viewer`](Viewer.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:754

The currently focused or last-focused viewer panel.

***

### availableGPUAccelTypes

> **availableGPUAccelTypes**: [`GpuAccelType`](../enumerations/GpuAccelType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:760

The Viewer object for the currently focused or active-focused viewer panel.

***

### buildName

> `readonly` **buildName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:727

The name of this build of the application.

***

### buildNumber

> `readonly` **buildNumber**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:730

The number of this build of the application.

***

### disableRendering

> **disableRendering**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:763

Set to true to disable rendering as if Caps Lock were turned on.

***

### effects

> `readonly` **effects**: `object`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:757

The effects available in the application.

#### category

> **category**: `string`

#### displayName

> **displayName**: `string`

#### matchName

> **matchName**: `string`

#### version

> **version**: `string`

***

### exitAfterLaunchAndEval

> **exitAfterLaunchAndEval**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:776

When true, the application remains open after running a script from the command line on Windows.

***

### exitCode

> **exitCode**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:773

A numeric status code used when executing a script
externally (that is, from a command line or AppleScript).
0 if no error occurred. A positive number indicates an
error that occurred while running the script.

***

### isoLanguage

> `readonly` **isoLanguage**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:745

The locale (language and region) in which the application is running.

***

### isRenderEngine

> `readonly` **isRenderEngine**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:736

When true, the local After Effects application is running as a render engine.

***

### isWatchFolder

> `readonly` **isWatchFolder**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:733

When true, the local application is running in Watch Folder mode.

***

### language

> `readonly` **language**: [`Language`](../enumerations/Language.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:739

The language After Effects is running.

***

### memoryInUse

> `readonly` **memoryInUse**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:748

Memory in use by this application.

***

### onError

> **onError**: `null` \| `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:766

A callback function that is called when an error occurs in the application.

***

### preferences

> `readonly` **preferences**: [`Preferences`](Preferences.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:751

Preferences

***

### project

> `readonly` **project**: [`Project`](Project.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:721

The current After Effects project.

***

### saveProjectOnCrash

> **saveProjectOnCrash**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:779

When true, the project is saved if the application closes unexpectedly.

***

### settings

> `readonly` **settings**: [`Settings`](Settings.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:742

Application settings that can be set via scripting.

***

### version

> `readonly` **version**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:724

The version number of the After Effects application.

## 方法

### activate()

> **activate**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:829

Brings the After Effects main window to the front of the screen.

#### 返回

`void`

***

### beginSuppressDialogs()

> **beginSuppressDialogs**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:809

Begins suppression of dialogs in the user interface.

#### 返回

`void`

***

### beginUndoGroup()

> **beginUndoGroup**(`undoString`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:803

Groups the actions that follow it into a single undoable step.

#### 参数

##### undoString

`string`

#### 返回

`void`

***

### cancelTask()

> **cancelTask**(`taskID`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:835

Cancels a scheduled task.

#### 参数

##### taskID

`number`

#### 返回

`void`

***

### cancelTimeout()

> **cancelTimeout**(`id`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:847

#### 参数

##### id

`number`

#### 返回

`void`

***

### endSuppressDialogs()

> **endSuppressDialogs**(`alert`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:812

Ends suppression of dialogs in the user interface.

#### 参数

##### alert

`boolean`

#### 返回

`void`

***

### endUndoGroup()

> **endUndoGroup**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:806

Ends an undo group; needed only when a script contains more than one undo group.

#### 返回

`void`

***

### endWatchFolder()

> **endWatchFolder**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:797

Ends a current watch-folder process.

#### 返回

`void`

***

### executeCommand()

> **executeCommand**(`id`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:842

#### 参数

##### id

`number`

#### 返回

`void`

***

### findMenuCommandId()

> **findMenuCommandId**(`str`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:840

#### 参数

##### str

`string`

#### 返回

`number`

***

### getenv()

> **getenv**(`name`): `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:845

CC2015-

#### 参数

##### name

`string`

#### 返回

`string`

***

### newProject()

> **newProject**(): `null` \| [`Project`](Project.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:782

Creates a new project in After Effects.

#### 返回

`null` \| [`Project`](Project.md)

***

### open()

> **open**(`file?`): `null` \| [`Project`](Project.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:785

Opens a project or an Open Project dialog box.

#### 参数

##### file?

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`null` \| [`Project`](Project.md)

***

### parseSwatchFile()

> **parseSwatchFile**(`file`): [`_Swatch`](../interfaces/Swatch.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:838

Loads a color swatch from an Adobe Swatch Exchange (ASE) file.

#### 参数

##### file

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

[`_Swatch`](../interfaces/Swatch.md)

***

### pauseWatchFolder()

> **pauseWatchFolder**(`pause`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:794

Pauses a current watch-folder process.

#### 参数

##### pause

`boolean`

#### 返回

`void`

***

### purge()

> **purge**(`target`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:800

Purges a targeted type of cached information(replicates Purge options in the Edit menu).

#### 参数

##### target

[`PurgeTarget`](../enumerations/PurgeTarget.md)

#### 返回

`void`

***

### quit()

> **quit**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:788

Quits the application.

#### 返回

`void`

***

### scheduleTask()

> **scheduleTask**(`stringToExecute`, `delay`, `repeat`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:832

Schedules a JavaScript script for delayed execution.

#### 参数

##### stringToExecute

`string`

##### delay

`number`

##### repeat

`boolean`

#### 返回

`number`

***

### setMemoryUsageLimits()

> **setMemoryUsageLimits**(`imageCachePercentage`, `maximumMemoryPercentage`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:815

Sets memory usage limits as in the Memory & Cache preferences area.

#### 参数

##### imageCachePercentage

`number`

##### maximumMemoryPercentage

`number`

#### 返回

`void`

***

### setMultiFrameRenderingConfig()

> **setMultiFrameRenderingConfig**(`use_mfr`, `max_cpu_percent`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:823

Set the Multi-Frame Rendering configuration for the next render

#### 参数

##### use\_mfr

`boolean`

Set to `true` to enable Multi-Frame Rendering.

##### max\_cpu\_percent

`number`

#### 返回

`void`

***

### setSavePreferencesOnQuit()

> **setSavePreferencesOnQuit**(`doSave`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:826

Sets whether preferences are saved when the application is quit.

#### 参数

##### doSave

`boolean`

#### 返回

`void`

***

### setTimeout()

> **setTimeout**(`func`, `delay?`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:846

#### 参数

##### func

() => `void`

##### delay?

`number`

#### 返回

`number`

***

### watchFolder()

> **watchFolder**(`folder_object_to_watch`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:791

Starts Watch Folder mode; does not return until Watch Folder mode is turned off.

#### 参数

##### folder\_object\_to\_watch

[`Folder`](../../../shared/JavaScript/interfaces/Folder.md)

#### 返回

`void`
