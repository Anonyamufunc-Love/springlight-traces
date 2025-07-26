# 类: TreeView

定义于: types-for-adobe/shared/ScriptUI.d.ts:1846

A hierarchical list whose items can contain child items.
The ListItem children of this control (in the items array) can be of type node, which means that they can contain child items. An item with child items can expanded, so that the child items are displayed, or collapsed, so that the child items are hidden Individual items can be selected at any level of the tree.

## 继承

- [`_Control`](Control.md)

## 构造函数

### 构造函数

> **new TreeView**(): `TreeView`

#### 返回

`TreeView`

#### 继承自

[`_Control`](Control.md).[`constructor`](Control.md#constructor)

## 属性

### active

> **active**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1851

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

### children

> `readonly` **children**: `object`[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:1856

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

### graphics

> `readonly` **graphics**: [`ScriptUIGraphics`](ScriptUIGraphics.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1861

The graphics object that can be used to customize the element's appearance, in response to the onDraw() event.

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

### items

> `readonly` **items**: [`ListItem`](ListItem.md)[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:1873

The array of top-level items displayed in the list.
Access this array with a 0-based index. To obtain the number of items in the list, use items.length.The objects are created when items are specified on creation of the parent list object, or afterward using the list control’s add() method.

***

### itemSize

> **itemSize**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1867

The width and height in pixels of each item in the list.
Used by auto-layout to determine the preferredSize of the list, if not otherwise specified. If not set explicitly, the size of each item is set to match the largest height and width among all items in the list

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

> **selection**: [`ListItem`](ListItem.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1879

The currently selectedlist item.
Setting this value causes the selected item to be highlighted and to be scrolled into view if necessary. If no items are selected, the value is null. Set to null to deselect all items.You can set the value using the index of an item, rather than an object reference. If set to an index value that is out of range, the operation is ignored. When set with an index value, the property still returns an object reference.

***

### shortcutKey

> **shortcutKey**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1884

The key sequence that invokes the onShortcutKey() callback for this element (in Windows only).

***

### size

> **size**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2663

The current dimensions of this element.
Initially undefined, and unless explicitly set by a script, it is defined by a LayoutManager . A script can explicitly set size before the layout manager is invoked to establish an element size other than the preferredSize or the default size, but this is not recommended. Defined as [bounds.width, bounds.height]. Setting an element's size changes its bounds property, and vice-versa.

#### 继承自

[`_Control`](Control.md).[`size`](Control.md#size)

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

> **add**(`type`, `text?`, `index?`): [`ListItem`](ListItem.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1893

Adds an item to the top-level choices in this list.
Returns the item control object.

#### 参数

##### type

The type of the child element, the string "item" or "node".

`"item"` | `"node"`

##### text?

`string`

The localizable text label for the item.

##### index?

`number`

The index into the current item list after which this item is inserted. If not supplied, or greater than the current list length, the new item is added at the end.

#### 返回

[`ListItem`](ListItem.md)

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

### find()

> **find**(`text`): [`ListItem`](ListItem.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1899

Retrieves an item object from the list that has a given text label.

#### 参数

##### text

`string`

The text string to match.

#### 返回

[`ListItem`](ListItem.md)

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

定义于: types-for-adobe/shared/ScriptUI.d.ts:1905

Sends a notification message, simulating the specified user interaction event.

#### 参数

##### eventName?

`string`

The name of the control event handler to call. One of: onClick, onChange, onChanging. By default, simulates the onChange event for an edittext control, an onClick event for controls that support that event.

#### 返回

`void`

***

### onActivate()

> **onActivate**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1911

An event-handler callback function, called when the element acquires the keyboard focus.
Called when the user gives the control the keyboard focus by clicking it or tabbing into it.

#### 返回

`void`

***

### onChange()

> **onChange**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1916

An event-handler callback function, called when the content of the element has been changed

#### 返回

`void`

***

### onCollapse()

> **onCollapse**(`item`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1922

An event-handler callback function, called when the user collapses (closes) an expanded node in the treeview.

#### 参数

##### item

[`ListItem`](ListItem.md)

The ListItem node that collapsed.

#### 返回

`void`

***

### onDeactivate()

> **onDeactivate**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1928

An event-handler callback function, called when the element loses the keyboard focus.
Called when the user moves the keyboard focus from the previously active control to another control.

#### 返回

`void`

***

### onDraw()

> **onDraw**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1934

An event-handler callback function, called when the window is about to be drawn.
Allows the script to modify or control the appearance, using the control’s associated ScriptUIGraphics object. Handler takes one argument, a DrawState object.

#### 返回

`void`

***

### onExpand()

> **onExpand**(`item`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1940

An event-handler callback function, called when the user expands (opens) a collapsed node in the treeview.

#### 参数

##### item

[`ListItem`](ListItem.md)

The ListItem node that expanded.

#### 返回

`void`

***

### onShortcutKey()

> **onShortcutKey**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1946

An event-handler callback function, called when the element's shortcutKey sequence is typed in the active window.
In Windows only.

#### 返回

`void`

***

### remove()

> **remove**(`what`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1952

Removes a child item from the list.

#### 参数

##### what

`any`

The item or child to remove, specified by 0-based index in the top-level item list, text value, or as a ListItem object.

#### 返回

`void`

***

### removeAll()

> **removeAll**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1957

Removes all child items from the list.

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
