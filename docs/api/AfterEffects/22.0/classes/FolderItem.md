# 类: FolderItem

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1208

The FolderItem object corresponds to a folder in your Project panel. It can contain various types of items (footage, compositions, solids) as well as other folders.

## 继承

- [`Item`](Item.md)

## 构造函数

### 构造函数

> **new FolderItem**(): `FolderItem`

#### 返回

`FolderItem`

#### 继承自

[`Item`](Item.md).[`constructor`](Item.md#constructor)

## 属性

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1337

A descriptive string.

#### 继承自

[`Item`](Item.md).[`comment`](Item.md#comment)

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1328

A unique identifier for this item.

#### 继承自

[`Item`](Item.md).[`id`](Item.md#id)

***

### items

> `readonly` **items**: [`ItemCollection`](ItemCollection.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1210

The contents of this folder.

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1346

The label color for the item.

#### 继承自

[`Item`](Item.md).[`label`](Item.md#label)

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1334

The name of the object as shown in the Project panel.

#### 继承自

[`Item`](Item.md).[`name`](Item.md#name)

***

### numItems

> `readonly` **numItems**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1213

The number of items contained in the folder.

***

### parentFolder

> **parentFolder**: `FolderItem`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1340

The parent folder of this item.

#### 继承自

[`Item`](Item.md).[`parentFolder`](Item.md#parentfolder)

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1343

When true, this item is currently selected.

#### 继承自

[`Item`](Item.md).[`selected`](Item.md#selected)

***

### typeName

> `readonly` **typeName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1331

The type of item.

#### 继承自

[`Item`](Item.md).[`typeName`](Item.md#typename)

## 方法

### addGuide()

> **addGuide**(`orientationType`, `position`): `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1349

Creates a new guide and adds it to the guides object of the Item.

#### 参数

##### orientationType

`number`

##### position

`number`

#### 返回

`number`

#### 继承自

[`Item`](Item.md).[`addGuide`](Item.md#addguide)

***

### item()

> **item**(`index`): [`_ItemClasses`](../type-aliases/ItemClasses.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1216

Gets an item from the folder.

#### 参数

##### index

`number`

#### 返回

[`_ItemClasses`](../type-aliases/ItemClasses.md)

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1358

Deletes the item from the project.

#### 返回

`void`

#### 继承自

[`Item`](Item.md).[`remove`](Item.md#remove)

***

### removeGuide()

> **removeGuide**(`guideIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1352

Removes an existing guide.

#### 参数

##### guideIndex

`number`

#### 返回

`void`

#### 继承自

[`Item`](Item.md).[`removeGuide`](Item.md#removeguide)

***

### setGuide()

> **setGuide**(`position`, `guideIndex`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1355

Modifies the position of an existing guide.

#### 参数

##### position

`number`

##### guideIndex

`number`

#### 返回

`void`

#### 继承自

[`Item`](Item.md).[`setGuide`](Item.md#setguide)
