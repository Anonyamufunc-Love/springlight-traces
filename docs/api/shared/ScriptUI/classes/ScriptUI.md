# 类: ScriptUI

定义于: types-for-adobe/shared/ScriptUI.d.ts:60

A global class containing central information about ScriptUI. Not instantiable.

## 构造函数

### 构造函数

> **new ScriptUI**(): `ScriptUI`

#### 返回

`ScriptUI`

## 属性

### Alignment

> `readonly` `static` **Alignment**: [`_Alignment`](../enumerations/Alignment.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:65

Collects the enumerated values that can be used in the alignment and alignChildren properties of controls and containers.
Predefined alignment values are: TOP, BOTTOM, LEFT, RIGHT, FILL, CENTER

***

### applicationFonts

> `readonly` `static` **applicationFonts**: `object`

定义于: types-for-adobe/shared/ScriptUI.d.ts:76

The font constants defined by the host application.

***

### compatibility

> `readonly` `static` **compatibility**: `object`

定义于: types-for-adobe/shared/ScriptUI.d.ts:82

An object whose properties are the names of compatibility modes supported by the host application.
The presence of ScriptUI.compatibility.su1PanelCoordinates means that the application allows backward compatibility with the coordinate system of Panel elements in ScriptUI version 1.

***

### coreVersion

> `readonly` `static` **coreVersion**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:87

A string containing the internal version number of the ScriptUI module.

***

### environment

> `readonly` `static` **environment**: [`Environment`](Environment.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:92

An object whose properties define attributes of the environment in which ScriptUI operates.

***

### events

> `readonly` `static` **events**: [`Events`](Events.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:98

An object whose properties and methods provide access to objects used in the ScriptUI event system.
It contains one function, createEvent(), which allows you to create event objects in order to simulate user-interaction event

***

### FontStyle

> `readonly` `static` **FontStyle**: [`_FontStyle`](../enumerations/FontStyle.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:71

Collects the enumerated values that can be used as the style argument to the ScriptUI.newFont() method.
Predefined styles are REGULAR, BOLD, ITALIC, BOLDITALIC.

***

### frameworkName

> `readonly` `static` **frameworkName**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:103

A string containing the name of the UI component framework with which this version of ScriptUI is compatible.

***

### version

> `readonly` `static` **version**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:108

A string containing the version number of the ScriptUI component framework

## 方法

### getResourceText()

> `static` **getResourceText**(`text`): `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:115

Finds and returns the resource for a given text string from the host application's resource data.
If no string resource matches the given text, the text itself is returned.

#### 参数

##### text

`string`

The text to match.

#### 返回

`string`

***

### newFont()

> `static` **newFont**(`name`, `style`, `size`): [`ScriptUIFont`](ScriptUIFont.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:123

Creates a new font object for use in text controls and titles.

#### 参数

##### name

`string`

The font name, or the font family name.

##### style

`string`

The font style; can be string, or one of the values of ScriptUI.FontStyle.

##### size

`number`

The font size in points.

#### 返回

[`ScriptUIFont`](ScriptUIFont.md)

***

### newImage()

> `static` **newImage**(`normal`, `disabled?`, `pressed?`, `rollover?`): [`ScriptUIImage`](ScriptUIImage.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:133

Loads a new image from resources or disk files into an image object.
Creates a new global image object for use in controls that can display images, loading the associated images from the specified resources or image files.

#### 参数

##### normal

`string`

The resource name or the disk file path to the image used for the normal state.

##### disabled?

`string`

The resource name, or the disk file path to the image used for the disabled state.

##### pressed?

`string`

The resource name, or the file-system path to the image used for the pressed state.

##### rollover?

`string`

The resource name, or the file-system path to the image used for the rollover state.

#### 返回

[`ScriptUIImage`](ScriptUIImage.md)
