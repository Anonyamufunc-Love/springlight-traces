# 类: ScriptUIImage

定义于: types-for-adobe/shared/ScriptUI.d.ts:766

Encapsulates a set of images that can be drawn into a control.
Different images can reflect the current state, such as a dimmed version for a disabled control. Create with the newImage() method. Passed as an argument to drawImage().

## 构造函数

### 构造函数

> **new ScriptUIImage**(): `ScriptUIImage`

#### 返回

`ScriptUIImage`

## 属性

### format

> `readonly` **format**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:770

The image format. One of: resource, JPEG, GIF, TIFF, PNG, or PICT (Macintosh).

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:775

The image name. Either the file name, or the resource name.

***

### pathname

> `readonly` **pathname**: `string`

定义于: types-for-adobe/shared/ScriptUI.d.ts:780

The full path to the file that contains the image.

***

### size

> `readonly` **size**: [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:785

The image size in pixels.
