# 类: ListItem

定义于: types-for-adobe/shared/ScriptUI.d.ts:1388

An item in a list box, drop-down list, or tree view.
You can specify initial items in the creation parameters when creating the parent list. Create new items using the add() method (ListBox.add(), DropDownList.add(), TreeView.add()) in the parent list with control type="item", or, for DropDownList controls, type="separator".For a multi-column list box, the object represents one selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.

## 构造函数

### 构造函数

> **new ListItem**(): `ListItem`

#### 返回

`ListItem`

## 属性

### checked

> **checked**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1393

The checked state of an item in a list.
When true, the item is marked with the platform-appropriate checkmark. When false, no checkmark is drawn, but space is reserved for it in the left margin, so that the item lines up with other checkable items. When undefined, no space is reserved for a checkmark.

***

### expanded

> **expanded**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1399

The expansion state of an item of type node that is a child of a TreeView list control.
When true, the item is in the expanded state and its children are shown, when false, it is collapsed and children are hidden.

***

### image

> **image**: [`ScriptUIImage`](ScriptUIImage.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1405

An image object for an icon to display in the item.
When specified, the image appropriate to the selections state is drawn to the left of the text label. If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.

***

### index

> `readonly` **index**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1410

The 0-based index of this item in the items collection of its parent list control.

***

### parent

> `readonly` **parent**: [`_Control`](Control.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:1415

The parent element, a list control.

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1421

The selection state of this item.
When true, the item is part of the selection for its parent list. When false, the item is not selected. Set to true to select this item in a single-selection list, or to add it to the selection array for a multi-selection list.

***

### subItems

> `readonly` **subItems**: `any`[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:1429

When the parent is a multi-column ListBox, this describes the labels for this selectable row in additional columns.
A array of JavaScript objects whose length is one less than the number of columns. The first member describes the label in the second column. Each member object has two properties, of which you can specify one or both:
text: A display string for the corresponding label.
image: An ScriptUIImage object for the corresponding label.

***

### text

> **text**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1435

The label text to display for the item, a localizable string.
If the parent is a multi-column list box, this describes the label in the first column. Labels in additional columns are described by the subitems property.

***

### type

> `readonly` **type**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1441

The element type.
Normally "item", but an item whose parent is a DropDownList control can have type "separator". A separator item is not mouse-sensitive and is drawn as a horizontal line across the drop-down or pop-up menu.

## 方法

### add()

> **add**(`type`, `text?`, `index?`): `ListItem`

定义于: types-for-adobe/shared/ScriptUI.d.ts:1450

Adds an item to the choices in this list.
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

`ListItem`
