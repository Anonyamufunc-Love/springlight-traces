# 类: Item

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1326

The Item object represents an item that can appear in the Project panel.

## 继承于

- [`AVItem`](AVItem.md)
- [`FolderItem`](FolderItem.md)

## 构造函数

### 构造函数

> **new Item**(): `Item`

#### 返回

`Item`

## 属性

### comment

> **comment**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1337

A descriptive string.

***

### id

> `readonly` **id**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1328

A unique identifier for this item.

***

### label

> **label**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1346

The label color for the item.

***

### name

> **name**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1334

The name of the object as shown in the Project panel.

***

### parentFolder

> **parentFolder**: [`FolderItem`](FolderItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1340

The parent folder of this item.

***

### selected

> **selected**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1343

When true, this item is currently selected.

***

### typeName

> `readonly` **typeName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1331

The type of item.

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

***

### remove()

> **remove**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1358

Deletes the item from the project.

#### 返回

`void`

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
