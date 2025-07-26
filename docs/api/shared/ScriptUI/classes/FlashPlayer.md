# 类: FlashPlayer

定义于: types-for-adobe/shared/ScriptUI.d.ts:1964

A control that contains a Flash Player, which can load and play Flash movies stored in SWF files.
The ScriptUI FlashPlayer element runs the Flash application within an Adobe application. The Flash application runs ActionScript, a different implementation of JavaScript from the ExtendScript version of JavaScript that Adobe applications run. A control object of this type contains functions that allow your script to load SWF files, control movie playback, and communicate with the ActionScript environment.

## 继承

- [`_Control`](Control.md)

## 构造函数

### 构造函数

> **new FlashPlayer**(): `FlashPlayer`

#### 返回

`FlashPlayer`

#### 继承自

[`_Control`](Control.md).[`constructor`](Control.md#constructor)

## 属性

### active

> **active**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1969

True if this element is active.
An active control is the one with keyboard focus—that is, the one that accepts keystrokes, or in the case of a Button, is selected when the user types Return or Enter in Windows, or the space bar in Mac OS.

***

### alignment

> **alignment**: [`_AlignmentProperty`](../type-aliases/AlignmentProperty.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2606

The alignment style for child elements of a container. If defined, this value overrides the alignChildren setting for the parent container.
This can be a single string, which indicates the alignment for the orientation specified in the parent container, or an array of two strings, indicating both the horizontal and vertical alignment (in that order). Allowed values depend on the orientation value of the parent container. They are not case sensitive.
For orientation = row: top, bottom, fill
For orientation = column: left, right, fill
For orientation = stack: top, bottom, left, right, fill

#### 继承自

[`_Control`](Control.md).[`alignment`](Control.md#alignment)

***

### bounds

> **bounds**: [`Bounds`](Bounds.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2612

The boundaries of the element, in parent-relative coordinates.
Setting an element's size or location changes its bounds property, and vice-versa.

#### 继承自

[`_Control`](Control.md).[`bounds`](Control.md#bounds)

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2618

True if this element is enabled.
An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.

#### 继承自

[`_Control`](Control.md).[`enabled`](Control.md#enabled)

***

### helpTip

> **helpTip**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2623

The help text that is displayed when the mouse hovers over the element.

#### 继承自

[`_Control`](Control.md).[`helpTip`](Control.md#helptip)

***

### indent

> **indent**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2629

The number of pixels to indent the element during automatic layout.
Applies for column orientation and left alignment, or row orientation and top alignment.

#### 继承自

[`_Control`](Control.md).[`indent`](Control.md#indent)

***

### location

> **location**: [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2635

The upper left corner of this element relative to its parent.
The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.

#### 继承自

[`_Control`](Control.md).[`location`](Control.md#location)

***

### maximumSize

> **maximumSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2640

The maximum height and width to which the element can be resized.

#### 继承自

[`_Control`](Control.md).[`maximumSize`](Control.md#maximumsize)

***

### minimumSize

> **minimumSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2645

The minimum height and width to which the element can be resized.

#### 继承自

[`_Control`](Control.md).[`minimumSize`](Control.md#minimumsize)

***

### parent

> `readonly` **parent**: [`_Control`](Control.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2650

The parent element.

#### 继承自

[`_Control`](Control.md).[`parent`](Control.md#parent)

***

### preferredSize

> **preferredSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2657

The preferred size, used by layout managers to determine the best size for each element.
If not explicitly set by a script, value is established by the UI framework in which ScriptUI is employed, and is based on such attributes of the element as its text, font, font size, icon size, and other UI framework-specific attributes. A script can explicitly set this value before the layout manager is invoked in order to establish an element size other than the default.
To set a specific value for only one dimension, specify the other dimension as -1.

#### 继承自

[`_Control`](Control.md).[`preferredSize`](Control.md#preferredsize)

***

### size

> **size**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2663

The current dimensions of this element.
Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.

#### 继承自

[`_Control`](Control.md).[`size`](Control.md#size)

***

### title

> **title**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1971

***

### titleLayout

> **titleLayout**: [`_TitleLayout`](../interfaces/TitleLayout.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1972

***

### type

> `readonly` **type**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2668

The element type.

#### 继承自

[`_Control`](Control.md).[`type`](Control.md#type)

***

### visible

> **visible**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2674

True if this element is shown, false if it is hidden.
When a container is hidden, its children are also hidden, but they retain their own visibility values, and are shown or hidden accordingly when the parent is next shown.

#### 继承自

[`_Control`](Control.md).[`visible`](Control.md#visible)

***

### window

> `readonly` **window**: [`Window`](Window.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2679

The window that this element belongs to.

#### 继承自

[`_Control`](Control.md).[`window`](Control.md#window)

***

### windowBounds

> `readonly` **windowBounds**: [`Bounds`](Bounds.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2684

The bounds of this element relative to the top-level parent window.

#### 继承自

[`_Control`](Control.md).[`windowBounds`](Control.md#windowbounds)

## 方法

### addEventListener()

> **addEventListener**(`eventName`, `handler`, `capturePhase?`): `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2692

Registers an event handler for a particular type of event occurring in this element.

#### 参数

##### eventName

`string`

The name of the event. Event names are listed in the JavaScript Tools Guide.

##### handler

[`Function`](../../JavaScript/interfaces/Function.md)

The function that handles the event. This can be the name of a function defined in the extension, or a locally defined handler function to be executed when the event occurs. A handler function takes one argument, the UIEvent object.

##### capturePhase?

`boolean`

When true, the handler is called only in the capturing phase of the event propagation. Default is false, meaning that the handler is called in the bubbling phase if this object is an ancestor of the target, or in the at-target phase if this object is itself the target.

#### 返回

`boolean`

#### 继承自

[`_Control`](Control.md).[`addEventListener`](Control.md#addeventlistener)

***

### callback()

> **callback**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1978

A function definition for a callback from the Flash ActionScript environment.
The Flash ActionScript code can call any callback function defined on the ExtendScript side of the FlashPlayer object, invoking it by name as a property of the control object. The function can take any arguments of a supported data types, and can return any value of a supported data type. data types:Number, String, Boolean, null, undefined, Object, Array.

#### 返回

`void`

***

### dispatchEvent()

> **dispatchEvent**(): [`Event`](Event.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2698

Simulates the occurrence of an event in this target.
A script can create a UIEvent object for a specific event and pass it to this method to start the event propagation for the event.

#### 返回

[`Event`](Event.md)

#### 继承自

[`_Control`](Control.md).[`dispatchEvent`](Control.md#dispatchevent)

***

### hide()

> **hide**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2703

Hides this element.

#### 返回

`void`

#### 继承自

[`_Control`](Control.md).[`hide`](Control.md#hide)

***

### invokePlayerFunction()

> **invokePlayerFunction**(`name`, `argument?`): `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1986

Invokes an ActionScript function defined in the Flash application.
Returns the result of the invoked function, which must be one of the allowed types. The ActionScript class and date objects are not supported as return values.

#### 参数

##### name

`string`

The name of a Flash ActionScript function that has been registered with the ExternalInterface object by the currently loaded SWF file.

##### argument?

`any`

An argument to pass through to the function. There can be any number of arguments. An argument must be one of these data types:Number, String, Boolean, null, undefined, Object, Array. No other data types are supported.

#### 返回

`any`

***

### loadMovie()

> **loadMovie**(`file`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1992

Loads a movie into the Flash Player, and begins playing it.

#### 参数

##### file

[`File`](../../JavaScript/interfaces/File.md)

The File object for the SWF file to load.

#### 返回

`void`

***

### notify()

> **notify**(`eventName?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1998

Sends a notification message, simulating the specified user interaction event.

#### 参数

##### eventName?

`string`

The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.

#### 返回

`void`

***

### playMovie()

> **playMovie**(`rewind`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2005

Restarts a movie that has been stopped.
Do not use on a movie that is currently playing.The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).

#### 参数

##### rewind

`boolean`

When true, restarts the movie from the beginning; otherwise, starts playing from the	point where it was stopped.

#### 返回

`void`

***

### removeEventListener()

> **removeEventListener**(`eventName`, `handler`, `capturePhase?`): `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2712

Unregisters an event handler for a particular type of event occurring in this element.
All arguments must be identical to those that were used to register the event handler.

#### 参数

##### eventName

`string`

The name of the event.

##### handler

[`Function`](../../JavaScript/interfaces/Function.md)

The function that handles the event.

##### capturePhase?

`boolean`

Whether to call the handler only in the capturing phase of the event propagation.

#### 返回

`boolean`

#### 继承自

[`_Control`](Control.md).[`removeEventListener`](Control.md#removeeventlistener)

***

### show()

> **show**(): `undefined` \| `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2719

Shows this element.
When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
If an onShow() callback is defined for a window, calls that function before showing the window.When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states. For a modal dialog, opens the dialog and does not return until the dialog is dismissed. If it is dismissed via the close() method, this method returns any result value passed to that method. Otherwise, returns 0.

#### 返回

`undefined` \| `number`

#### 继承自

[`_Control`](Control.md).[`show`](Control.md#show)

***

### stopMovie()

> **stopMovie**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2011

Halts playback of the current movie.
The stopMovie()-playMovie() sequence does not work for SWF files produced by Flex, or for some files produced by Flash Authoring (depending on how they were implemented).Using stopMovie() from the player's hosting environment has no effect on an SWF file playing in a ScriptUI Flash Player element. It is, however, possible to produce an SWF using Flash Authoring that can stop itself in response to user interaction.

#### 返回

`void`
