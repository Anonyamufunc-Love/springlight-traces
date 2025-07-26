# 接口: \_AddControlPropertiesWindow

定义于: types-for-adobe/shared/ScriptUI.d.ts:2842

Creation properties of a Window.

## 参数

When true, the window can be resized by the user. Default is false.

## 参数

Photoshop only. When true, the child panels of this window automatically adjust the positions of their children for compatibility with Photoshop CS (in which the vertical coordinate was measured from outside the frame). Default is false. Individual panels can override the parent window’s setting.

## 参数

Bridge only. When true, the title bar includes a button to close the window, if the platform and window type allow it. When false, it does not. Default is true. Not used for dialogs.

## 参数

Bridge only. When true, the title bar includes a button to expand the window to its maximum size (typically, the entire screen), if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Not used for dialogs.

## 参数

Bridge only. When true, the title bar includes a button to minimize or iconify the window, if the platform and window type allow it. When false, it does not. Default is false for type palette, true for type window. Main windows cannot have a minimize button in Mac OS. Not used for dialogs.

## 参数

When true, a window of type window is independent of other application windows, and can be hidden behind them in Windows. In Mac OS, has no effect. Default is false.

## 参数

When true, the window has no title bar or borders. Properties that control those features are ignored.

## 属性

### borderless?

> `optional` **borderless**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2849

***

### closeButton?

> `optional` **closeButton**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2845

***

### independent?

> `optional` **independent**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2848

***

### maximizeButton?

> `optional` **maximizeButton**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2846

***

### minimizeButton?

> `optional` **minimizeButton**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2847

***

### resizeable?

> `optional` **resizeable**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2843

***

### su1PanelCoordinates?

> `optional` **su1PanelCoordinates**: `boolean`

定义于: types-for-adobe/shared/ScriptUI.d.ts:2844
