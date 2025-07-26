# 类: Window

定义于: types-for-adobe/shared/ScriptUI.d.ts:145

The instance represents a top-level window or dialog box, which contains user-interface elements.
The globally available Window object provides access to predefined and script-defined windows.

## 继承

- [`_Control`](Control.md)

## 构造函数

### 构造函数

> **new Window**(`type`, `title?`, `bounds?`, `properties?`): `Window`

定义于: types-for-adobe/shared/ScriptUI.d.ts:279

Creates a new window.

#### 参数

##### type

The window type. One of: window: Creates a simple window that can be used as a main window for an application. (Not supported by Photoshop CS3.) palette: Creates a modeless dialog, also called a floating palette. (Not supported by Photoshop CS3.) dialog: Creates a modal dialog. This argument can also be a ScriptUI resource specification; in that case, all other arguments are ignored.

`"dialog"` | `"palette"` | `"window"`

##### title?

`string`

The window title, a localizable string.

##### bounds?

[`Bounds`](Bounds.md)

The window's position and size.

##### properties?

[`_AddControlPropertiesWindow`](../interfaces/AddControlPropertiesWindow.md)

An object containing creation-only properties.

#### 返回

`Window`

#### 重写了

[`_Control`](Control.md).[`constructor`](Control.md#constructor)

## 属性

### active

> **active**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:152

Set to true to make this window active.
A modal dialog that is visible is by definition the active dialog.
An active palette is the front-most window.
An active control is the one with focus—that is, the one that accepts keystrokes, or in the case of a Button, be selected when the user typesReturn or Enter.

***

### add

> **add**: [`_AddControl`](../interfaces/AddControl.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:293

Creates and returns a new control or container object and adds it to the children of this window.

#### 参数

The type of the child element, as specified for the type property. Control types are listed in the JavaScript Tools Guide.

#### 参数

A bounds specification that describes the size and position of the new control or container, relative to its parent. If supplied, this value creates a new Bounds object which is assigned to the new object’s bounds property.

#### 参数

The text or label, a localizable string. Initial text to be displayed in the control as the title, label, or contents, depending on the control type. If supplied, this value is assigned to the new object’s text property.

#### 参数

An object that contains one or more creation properties of the new child (properties used only when the element is created). The creation properties depend on the element type. See properties property of each control type.

***

### alignChildren

> **alignChildren**: [`_AlignmentProperty`](../type-aliases/AlignmentProperty.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:158

Tells the layout manager how unlike-sized children of this container should be aligned within a column or row.
Order of creation determines which children are at the top of a column or the left of a row; the earlier a child is created, the closer it is to the top or left of its column or row. If defined, alignment for a child element overrides the alignChildren setting for the parent container. See alignment property for values.

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

### cancelElement

> **cancelElement**: `object`

定义于: types-for-adobe/shared/ScriptUI.d.ts:164

For windows of type dialog, the UI element to notify when the user presses a cancellation key combination.
The cancellation key is the Esc key. By default, looks for a button whose name or text is "cancel" (case disregarded).

***

### characters

> **characters**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:169

A number of characters for which to reserve space when calculating the preferred size of the window.

***

### children

> `readonly` **children**: [`_Control`](Control.md)[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:175

The collection of UI elements that have been added to this container.
An array indexed by number or by a string containing an element's name. The length property of this array is the number of child elements for container elements, and is zero for controls.

***

### defaultElement

> **defaultElement**: `object`

定义于: types-for-adobe/shared/ScriptUI.d.ts:181

For windows of type dialog, the UI element to notify when the user presses a Enter key.
By default, looks for a button whose name or text is "ok" (case disregarded).

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2618

True if this element is enabled.
An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.

#### 继承自

[`_Control`](Control.md).[`enabled`](Control.md#enabled)

***

### frameBounds

> `readonly` **frameBounds**: [`Bounds`](Bounds.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:187

The bounds of the window frame in screen coordinates.
The frame consists of the title bar and borders that enclose the content region of a window, depending on the windowing system.

***

### frameLocation

> **frameLocation**: [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:193

The top left corner of the window frame in screen coordinates.
The same as [frameBounds.x, frameBounds.y]. Set this value to move the window frame to the specified location on the screen. The frameBounds value changes accordingly.

***

### frameSize

> `readonly` **frameSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:198

The size and location of the window's frame in screen coordinates.

***

### graphics

> `readonly` **graphics**: [`ScriptUIGraphics`](ScriptUIGraphics.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:208

The graphics object that can be used to customize the window’s appearance, in response to the onDraw event.

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

### justify

> **justify**: [`_Justify`](../type-aliases/Justify.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:214

The default text justification style for child text elements.
One of left, center, or right. Justification only works if this value is set on creation of the element.

***

### layout

> **layout**: [`AutoLayoutManager`](AutoLayoutManager.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:220

The layout manager for this container.
The first time a container object is made visible, ScriptUI invokes this layout manager by calling its layout() function. Default is an instance of the LayoutManager class that is automatically created when the container element is created.

***

### location

> **location**: [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2635

The upper left corner of this element relative to its parent.
The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.

#### 继承自

[`_Control`](Control.md).[`location`](Control.md#location)

***

### margins

> **margins**: [`_Margins`](../type-aliases/Margins.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:226

The number of pixels between the edges of a container and the outermost child elements.
You can specify different margins for each edge of the container. The default value is based on the type of container, and is chosen to match the standard Adobe UI guidelines.

***

### maximized

> **maximized**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:231

True if the window is expanded.

***

### maximumSize

> **maximumSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2640

The maximum height and width to which the element can be resized.

#### 继承自

[`_Control`](Control.md).[`maximumSize`](Control.md#maximumsize)

***

### minimized

> **minimized**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:236

True if the window is minimized or iconified.

***

### minimumSize

> **minimumSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2645

The minimum height and width to which the element can be resized.

#### 继承自

[`_Control`](Control.md).[`minimumSize`](Control.md#minimumsize)

***

### opacity

> **opacity**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:242

The opacity of the window, in the range [0..1].
A value of 1.0 (the default) makes the window completely opaque, a value of 0 makes it completely transparent. Intermediate values make it partially transparent to any degree.

***

### orientation

> **orientation**: [`_Orientation`](../type-aliases/Orientation.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:248

The layout orientation of children in a container.
Interpreted by the layout manager for the container. The default LayoutManager  Object accepts the (case-insensitive) values row, column, or stack.For window and panel, the default is column, and for group the default is row. The allowed values for the container’s alignChildren and its children’s alignment properties depend on the orientation.

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

### shortcutKey

> **shortcutKey**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:253

The keypress combination that invokes this element's onShortcutKey() callback.

***

### size

> **size**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2663

The current dimensions of this element.
Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.

#### 继承自

[`_Control`](Control.md).[`size`](Control.md#size)

***

### spacing

> **spacing**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:259

The number of pixels separating one child element from its adjacent sibling element.
Because each container holds only a single row or column of children, only a single spacing value is needed for a container. The default value is based on the type of container, and is chosen to match standard Adobe UI guidelines.

***

### text

> **text**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:265

The title, label, or displayed text, a localizable string.
Does not apply to containers of type group.

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

> `readonly` **window**: `Window`

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

***

### frameworkName

> `readonly` `static` **frameworkName**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:203

Deprecated. Use ScriptUI.frameworkName instead.

***

### version

> `readonly` `static` **version**: `any`

定义于: types-for-adobe/shared/ScriptUI.d.ts:270

Deprecated. Use ScriptUI.version instead.

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

### center()

> **center**(`window?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:307

Centers this window on screen or with respect to another window.

#### 参数

##### window?

`Window`

The relative window. If not specified, centers on the screen.

#### 返回

`void`

***

### close()

> **close**(`return_?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:314

Closes this window.
. If an onClose() callback is defined for the window, calls that function before closing the window.

#### 参数

##### return\_?

`any`

A number to be returned from the show() method that invoked this window as a modal dialog.

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

### notify()

> **notify**(`eventName?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:337

Sends a notification message to all listeners, simulating the specified user interaction event.

#### 参数

##### eventName?

`string`

The event name; if omitted, the default event is sent. One of: onClose, onMove, onMoving, onResize, onResizing, onShow

#### 返回

`void`

***

### onActivate()

> **onActivate**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:343

An event-handler callback function, called when the window acquires the keyboard focus.
Called when the user gives the window the keyboard focus by clicking it or otherwise making it the active window.

#### 返回

`void`

***

### onClose()

> **onClose**(): `boolean` \| `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:349

An event-handler callback function, called when the window is about to be closed.
Called when a request is made to close the window, either by an explicit call to the close() function or by a user action (clicking the OS-specific close icon in the title bar). The function is called before the window actually closes; it can return false to cancel the close operation.

#### 返回

`boolean` \| `void`

***

### onDeactivate()

> **onDeactivate**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:355

An event-handler callback function, called when the window loses the keyboard focus.
Called when the user moves the keyboard focus from the previously active window to another window.

#### 返回

`void`

***

### onMove()

> **onMove**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:360

An event-handler callback function, called when the window has been moved

#### 返回

`void`

***

### onMoving()

> **onMoving**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:366

An event-handler callback function, called when the window is being moved
Called while a window in being moved, each time the position changes. A handler can monitor the move operation.

#### 返回

`void`

***

### onResize()

> **onResize**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:371

An event-handler callback function, called after the window has been resized

#### 返回

`void`

***

### onResizing()

> **onResizing**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:377

An event-handler callback function, called while a window is being resized
Called while a window is being resized, each time the height or width changes. A handler can monitor the resize operation.

#### 返回

`void`

***

### onShortcutKey()

> **onShortcutKey**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:382

In Windows only, an event-handler callback function, called a shortcut-key sequence is typed that matches the shortcutKey value for this window.

#### 返回

`void`

***

### onShow()

> **onShow**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:388

An event-handler callback function, called just before the window is displayed
Called when a request is made to open the window using the show() method, before the window is made visible, but after automatic layout is complete. A handler can modify the results of the automatic layout.

#### 返回

`void`

***

### remove()

> **remove**(`what`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:404

Removes the specified child control from this window’s children array.
No error results if the child does not exist.

#### 参数

##### what

`any`

The child control to remove, specified by 0-based index, text property value, or as a control object.

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

### alert()

> `static` **alert**(`message`, `title?`, `errorIcon?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:301

Displays a platform-standard dialog containing a short message and an OK button.

#### 参数

##### message

`string`

TThe string for the displayed message.

##### title?

`string`

A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".

##### errorIcon?

`boolean`

When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Ignored in Mac OS, which does not support icons for alert dialogs.

#### 返回

`void`

***

### confirm()

> `static` **confirm**(`message`, `noAsDefault`, `title?`): `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:323

Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
Returns true if the user clicked Yes, false if the user clicked No.

#### 参数

##### message

`string`

The string for the displayed message.

##### noAsDefault

`boolean`

When true, the No button is the default choice, selected when the user types Enter. Default is false, meaning that Yes is the default choice.

##### title?

`string`

A string to appear as the title of the dialog, if the platform supports a title. Ignored in Mac OS, which does not support titles for alert dialogs. The default title string is "Script Alert".

#### 返回

`boolean`

***

### find()

> `static` **find**(`type`, `title`): `Window`

定义于: types-for-adobe/shared/ScriptUI.d.ts:331

Use this method to find an existing window.
This includes windows defined by ScriptUI resource strings, windows already created by a script, and windows created by the application (if the application supports this case). This function is not supported by all applications. Returns a Window object found or generated from the resource, or null if no such window or resource exists.

#### 参数

##### type

`string`

The name of a predefined resource available to JavaScript in the current application; or the window type. If a title is specified, the type is used if more than one window with that title is found. Can be null or the empty string.

##### title

`string`

The window title.

#### 返回

`Window`

***

### prompt()

> `static` **prompt**(`prompt`, `default_?`, `title?`): `null` \| `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:397

Displays a modal dialog that returns the user’s text input.
Returns the value of the text edit field if the user clicked OK, null if the user clicked Cancel.

#### 参数

##### prompt

`string`

The string for the displayed message.

##### default\_?

`string`

The initial value to be displayed in the text edit field.

##### title?

`string`

A string to appear as the title of the dialog. In Windows, this appears in the window’s frame; in Mac OS it appears above the message. The default title string is "Script Prompt".

#### 返回

`null` \| `string`
