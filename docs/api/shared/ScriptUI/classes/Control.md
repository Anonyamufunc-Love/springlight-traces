# 类: \_Control

定义于: types-for-adobe/shared/ScriptUI.d.ts:2598

A Control class.

## 继承于

- [`Window`](Window.md)
- [`StaticText`](StaticText.md)
- [`Button`](Button.md)
- [`IconButton`](IconButton.md)
- [`Image`](Image.md)
- [`EditText`](EditText.md)
- [`ListBox`](ListBox.md)
- [`DropDownList`](DropDownList.md)
- [`Checkbox`](Checkbox.md)
- [`Scrollbar`](Scrollbar.md)
- [`RadioButton`](RadioButton.md)
- [`Slider`](Slider.md)
- [`Progressbar`](Progressbar.md)
- [`TreeView`](TreeView.md)
- [`FlashPlayer`](FlashPlayer.md)
- [`Group`](Group.md)
- [`Panel`](Panel.md)
- [`TabbedPanel`](TabbedPanel.md)

## 构造函数

### 构造函数

> **new \_Control**(): `_Control`

#### 返回

`_Control`

## 属性

### alignment

> **alignment**: [`_AlignmentProperty`](../type-aliases/AlignmentProperty.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2606

The alignment style for child elements of a container. If defined, this value overrides the alignChildren setting for the parent container.
This can be a single string, which indicates the alignment for the orientation specified in the parent container, or an array of two strings, indicating both the horizontal and vertical alignment (in that order). Allowed values depend on the orientation value of the parent container. They are not case sensitive.
For orientation = row: top, bottom, fill
For orientation = column: left, right, fill
For orientation = stack: top, bottom, left, right, fill

***

### bounds

> **bounds**: [`Bounds`](Bounds.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2612

The boundaries of the element, in parent-relative coordinates.
Setting an element's size or location changes its bounds property, and vice-versa.

***

### enabled

> **enabled**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2618

True if this element is enabled.
An enabled element can accept input, according to its type. When false, control elements do not accept input, and all types of elements have a dimmed appearance.

***

### helpTip

> **helpTip**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2623

The help text that is displayed when the mouse hovers over the element.

***

### indent

> **indent**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2629

The number of pixels to indent the element during automatic layout.
Applies for column orientation and left alignment, or row orientation and top alignment.

***

### location

> **location**: [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2635

The upper left corner of this element relative to its parent.
The location is defined as [bounds.x, bounds.y]. Setting an element's location changes its bounds property, and vice-versa.

***

### maximumSize

> **maximumSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2640

The maximum height and width to which the element can be resized.

***

### minimumSize

> **minimumSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2645

The minimum height and width to which the element can be resized.

***

### parent

> `readonly` **parent**: `_Control`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2650

The parent element.

***

### preferredSize

> **preferredSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2657

The preferred size, used by layout managers to determine the best size for each element.
If not explicitly set by a script, value is established by the UI framework in which ScriptUI is employed, and is based on such attributes of the element as its text, font, font size, icon size, and other UI framework-specific attributes. A script can explicitly set this value before the layout manager is invoked in order to establish an element size other than the default.
To set a specific value for only one dimension, specify the other dimension as -1.

***

### size

> **size**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2663

The current dimensions of this element.
Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.

***

### type

> `readonly` **type**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2668

The element type.

***

### visible

> **visible**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2674

True if this element is shown, false if it is hidden.
When a container is hidden, its children are also hidden, but they retain their own visibility values, and are shown or hidden accordingly when the parent is next shown.

***

### window

> `readonly` **window**: [`Window`](Window.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2679

The window that this element belongs to.

***

### windowBounds

> `readonly` **windowBounds**: [`Bounds`](Bounds.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2684

The bounds of this element relative to the top-level parent window.

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

***

### dispatchEvent()

> **dispatchEvent**(): [`Event`](Event.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2698

Simulates the occurrence of an event in this target.
A script can create a UIEvent object for a specific event and pass it to this method to start the event propagation for the event.

#### 返回

[`Event`](Event.md)

***

### hide()

> **hide**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2703

Hides this element.

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

***

### show()

> **show**(): `undefined` \| `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2719

Shows this element.
When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states.
If an onShow() callback is defined for a window, calls that function before showing the window.When a window or container is hidden, its children are also hidden, but when it is shown again, the children retain their own visibility states. For a modal dialog, opens the dialog and does not return until the dialog is dismissed. If it is dismissed via the close() method, this method returns any result value passed to that method. Otherwise, returns 0.

#### 返回

`undefined` \| `number`
