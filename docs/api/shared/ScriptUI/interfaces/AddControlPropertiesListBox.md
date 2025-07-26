# 接口: \_AddControlPropertiesListBox

定义于: types-for-adobe/shared/ScriptUI.d.ts:2785

Creation properties of a ListBox.

## 参数

A unique name for the control.

## 参数

When false (the default), only one item can be selected. When true, multiple items can be selected.

## 参数

When true, multiple items can be selected.

## 参数

An array of strings for the text of each list item. An item object is created for each item. An item with the text string "-" creates a separator item. Supply this property, or the items argument to the add() method, not both. This form is most useful for elements defined using Resource Specifications.

## 参数

A number of columns in which to display the items; default is 1. When there are multiple columns, each ListItem object represents a selectable row. Its text and image values specify the label in the first column, and the subitems property specifies the labels in the additional columns.

## 参数

True to display column titles.

## 参数

An array of numbers for the preferred width in pixels of each column.

## 参数

A corresponding array of strings for the title of each column, to be shown if showHeaders is true.

## 属性

### columnTitles?

> `optional` **columnTitles**: `string`[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:2793

***

### columnWidths?

> `optional` **columnWidths**: `number`[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:2792

***

### items?

> `optional` **items**: `string`[]

定义于: types-for-adobe/shared/ScriptUI.d.ts:2789

***

### multiselect?

> `optional` **multiselect**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2787

***

### name?

> `optional` **name**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2786

***

### numberOfColumns?

> `optional` **numberOfColumns**: `number`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2790

***

### selected?

> `optional` **selected**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2788

***

### showHeaders?

> `optional` **showHeaders**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2791
