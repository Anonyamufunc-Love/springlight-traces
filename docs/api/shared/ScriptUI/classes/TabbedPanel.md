# 类: TabbedPanel

定义于: types-for-adobe/shared/ScriptUI.d.ts:2182

A container for selectable tab containers.
Differs from a panel element in that it can contain only tab elements as direct children.

## 继承

- [`_Control`](Control.md)

## 构造函数

### 构造函数

> **new TabbedPanel**(): `TabbedPanel`

#### 返回

`TabbedPanel`

#### 继承自

[`_Control`](Control.md).[`constructor`](Control.md#constructor)

## 属性

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

### children

> `readonly` **children**: [`Tab`](Tab.md)[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:2186

An array of child elements.

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

### selection

> **selection**: `number` \| [`Tab`](Tab.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2196

The currently selected tab.
Setting this value causes the specified tab to be enabled in the panel.
You can set the value using the index of an item, rather than an object reference.
If set to an index value that is out of range, the operation is ignored.
When set with an index value, the property still returns an object reference.
When the value of the selection property changes, either by a user selecting a different tab, or by a script setting the property, the TabbedPanel receives an onChange notification.

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

定义于: types-for-adobe/shared/ScriptUI.d.ts:2198

***

### titleLayout

> **titleLayout**: [`_TitleLayout`](../interfaces/TitleLayout.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2199

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

### add()

> **add**(`type`, `bounds?`, `text?`, `properties?`): [`Tab`](Tab.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2207

Adds a tab to this tabbed panel.
Returns the created tab control object.

Note: `bounds` is not used; pass `undefined`

#### 参数

##### type

`"tab"`

##### bounds?

`undefined`

##### text?

`string`

##### properties?

[`_AddControlProperties`](../interfaces/AddControlProperties.md)

#### 返回

[`Tab`](Tab.md)

***

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

### onChange()

> **onChange**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2212

An event-handler callback function, called when the selected tab has changed.

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
