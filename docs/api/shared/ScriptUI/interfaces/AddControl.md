# 接口: \_AddControl()

定义于: types-for-adobe/shared/ScriptUI.d.ts:2852

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `text?`, `properties?`): [`Button`](../classes/Button.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2858

Creation of a Button.
The third argument can be the initial text value.
Special name "ok" makes the button primary for parent dialog, and the special name "cancel" makes the button default cancel button for parent dialog.

### 参数

#### type

`"button"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### text?

`string`

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`Button`](../classes/Button.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `text?`, `properties?`): [`Checkbox`](../classes/Checkbox.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2864

Creation of a CheckBox.
The third argument is the text to be displayed.

### 参数

#### type

`"checkbox"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### text?

`string`

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`Checkbox`](../classes/Checkbox.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `items?`, `properties?`): [`DropDownList`](../classes/DropDownList.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2868

### 参数

#### type

`"dropdownlist"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### items?

`string`[]

#### properties?

[`_AddControlPropertiesDropDownList`](AddControlPropertiesDropDownList.md)

### 返回

[`DropDownList`](../classes/DropDownList.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `text?`, `properties?`): [`EditText`](../classes/EditText.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2877

### 参数

#### type

`"edittext"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### text?

`string`

#### properties?

[`_AddControlPropertiesEditText`](AddControlPropertiesEditText.md)

### 返回

[`EditText`](../classes/EditText.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `movieToLoad?`, `properties?`): [`FlashPlayer`](../classes/FlashPlayer.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2886

### 参数

#### type

`"flashplayer"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### movieToLoad?

`string` | [`File`](../../JavaScript/interfaces/File.md)

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`FlashPlayer`](../classes/FlashPlayer.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `properties?`): [`Group`](../classes/Group.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2895

### 参数

#### type

`"group"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`Group`](../classes/Group.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `icon?`, `properties?`): [`IconButton`](../classes/IconButton.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2899

### 参数

#### type

`"iconbutton"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### icon?

`string` | [`File`](../../JavaScript/interfaces/File.md)

#### properties?

[`_AddControlPropertiesIconButton`](AddControlPropertiesIconButton.md)

### 返回

[`IconButton`](../classes/IconButton.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `icon?`, `properties?`): [`Image`](../classes/Image.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2908

### 参数

#### type

`"image"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### icon?

`string` | [`File`](../../JavaScript/interfaces/File.md)

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`Image`](../classes/Image.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `items?`, `properties?`): [`ListBox`](../classes/ListBox.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2912

### 参数

#### type

`"listbox"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### items?

`string`[]

#### properties?

[`_AddControlPropertiesListBox`](AddControlPropertiesListBox.md)

### 返回

[`ListBox`](../classes/ListBox.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `text?`, `properties?`): [`Panel`](../classes/Panel.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2921

### 参数

#### type

`"panel"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### text?

`string`

#### properties?

[`_AddControlPropertiesPanel`](AddControlPropertiesPanel.md)

### 返回

[`Panel`](../classes/Panel.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `value?`, `max?`, `properties?`): [`Progressbar`](../classes/Progressbar.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2927

Creation of a ProgressBar.
The third argument is the initial value (default 0), and the fourth argument is the maximum value of the range (default 100).

### 参数

#### type

`"progressbar"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### value?

`number`

#### max?

`number`

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`Progressbar`](../classes/Progressbar.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `text?`, `properties?`): [`RadioButton`](../classes/RadioButton.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2939

Creation of a RadioButton.
The third argument can be the label text.

### 参数

#### type

`"radiobutton"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### text?

`string`

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`RadioButton`](../classes/RadioButton.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `value?`, `min?`, `max?`, `properties?`): [`Scrollbar`](../classes/Scrollbar.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2950

Creation of a Scrollbar.
The third argument is the initial value, and the fourth and fifth arguments are the minimum and maximum values of the range.

### 参数

#### type

`"scrollbar"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### value?

`number`

#### min?

`number`

#### max?

`number`

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`Scrollbar`](../classes/Scrollbar.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `value?`, `min?`, `max?`, `properties?`): [`Slider`](../classes/Slider.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2963

Creation of a Slider.
The third argument is the initial value, and the fourth and fifth arguments are the minimum and maximum values of the range.

### 参数

#### type

`"slider"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### value?

`number`

#### min?

`number`

#### max?

`number`

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`Slider`](../classes/Slider.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `text?`, `properties?`): [`StaticText`](../classes/StaticText.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2974

### 参数

#### type

`"statictext"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### text?

`string`

#### properties?

[`_AddControlPropertiesStaticText`](AddControlPropertiesStaticText.md)

### 返回

[`StaticText`](../classes/StaticText.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `text?`, `properties?`): [`TabbedPanel`](../classes/TabbedPanel.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2983

### 参数

#### type

`"tabbedpanel"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### text?

`string`

#### properties?

[`_AddControlProperties`](AddControlProperties.md)

### 返回

[`TabbedPanel`](../classes/TabbedPanel.md)

## 调用签名

> **\_AddControl**(`type`, `bounds?`, `items?`, `properties?`): [`TreeView`](../classes/TreeView.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:2992

### 参数

#### type

`"treeview"`

#### bounds?

[`Bounds`](../classes/Bounds.md)

#### items?

`string`[]

#### properties?

[`_AddControlPropertiesTreeView`](AddControlPropertiesTreeView.md)

### 返回

[`TreeView`](../classes/TreeView.md)
