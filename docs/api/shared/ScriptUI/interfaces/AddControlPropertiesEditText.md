# 接口: \_AddControlPropertiesEditText

定义于: types-for-adobe/shared/ScriptUI.d.ts:2751

Creation properties of an EditText.

## 参数

A unique name for the control.

## 参数

When false (the default), the control displays a single line of text. When true, the control displays multiple lines, in which case the text wraps within the width of the control.

## 参数

When true, the control is drawn with no border. Default is false.

## 参数

For multiline elements only. When true (the default), the text field has a vertical scrollbar that is enabled when the element contains more text than fits in the visible area. When false, no vertical scrollbar appears; if the element contains more text than fits in the visible area, the arrow keys can be used to scroll the text up and down.

## 参数

When false (the default), the control accepts text input. When true, the control does not accept input but only displays the contents of the text property.

## 参数

When false (the default), the control displays input text. When true, the control does not display input text (used for password input fields).

## 参数

When false (the default), the control signals an onChange event when the editable text is changed and the control loses the keyboard focus (that is, the user tabs to another control, clicks outside the control, or types Enter). When true, the control only signals an onChange() event when the editable text is changed and the user types Enter; other changes to the keyboard focus do not signal the event.

## 参数

Only applies to multiple line edit controls in ScriptUI Version 6.0 or later. When true the RETURN/ENTER keystroke is considered as text-input advancing the cursor to the next line. The default value is false.

## 属性

### borderless?

> `optional` **borderless**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2754

***

### enterKeySignalsOnChange?

> `optional` **enterKeySignalsOnChange**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2758

***

### multiline?

> `optional` **multiline**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2753

***

### name?

> `optional` **name**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2752

***

### noecho?

> `optional` **noecho**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2757

***

### readonly?

> `optional` **readonly**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2756

***

### scrollable?

> `optional` **scrollable**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2755

***

### wantReturn?

> `optional` **wantReturn**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2759
