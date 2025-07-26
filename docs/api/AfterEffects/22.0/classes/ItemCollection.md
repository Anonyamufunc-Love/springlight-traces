# 类: ItemCollection

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1362

The ItemCollection object represents a collection of items. The ItemCollection belonging to a Project object contains all the Item objects for items in the project. The ItemCollection belonging to a FolderItem object contains all the Item objects for items in that folder.

## 继承

- [`Collection`](Collection.md)

## 可索引

\[`index`: `number`\]: [`_ItemClasses`](../type-aliases/ItemClasses.md)

Retrieves a Item object in the collection by its index number. The first object is at index 1.

## 构造函数

### 构造函数

> **new ItemCollection**(): `ItemCollection`

#### 返回

`ItemCollection`

#### 继承自

[`Collection`](Collection.md).[`constructor`](Collection.md#constructor)

## 属性

### length

> `readonly` **length**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1076

The number of objects in the collection.

#### 继承自

[`Collection`](Collection.md).[`length`](Collection.md#length)

## 方法

### addComp()

> **addComp**(`name`, `width`, `height`, `pixelAspect`, `duration`, `frameRate`): [`CompItem`](CompItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1367

Creates a new CompItem object and adds it to the collection.

#### 参数

##### name

`string`

##### width

`number`

##### height

`number`

##### pixelAspect

`number`

##### duration

`number`

##### frameRate

`number`

#### 返回

[`CompItem`](CompItem.md)

***

### addFolder()

> **addFolder**(`name`): [`FolderItem`](FolderItem.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1377

Creates a new FolderItem object and adds it to the collection.

#### 参数

##### name

`string`

#### 返回

[`FolderItem`](FolderItem.md)
