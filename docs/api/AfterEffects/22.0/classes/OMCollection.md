# 类: OMCollection

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1642

The OMCollection contains all of the output modules in a render queue. The collection provides access to the OutputModule objects, but does not provide any additional functionality. The first OutputModule object in the collection is at index position 1.

## 继承

- [`Collection`](Collection.md)

## 可索引

\[`index`: `number`\]: [`OutputModule`](OutputModule.md)

Retrieves a OutputModule object in the collection by its index number. The first object is at index 1.

## 构造函数

### 构造函数

> **new OMCollection**(): `OMCollection`

#### 返回

`OMCollection`

#### 继承自

[`Collection`](Collection.md).[`constructor`](Collection.md#constructor)

## 属性

### length

> `readonly` **length**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1076

The number of objects in the collection.

#### 继承自

[`Collection`](Collection.md).[`length`](Collection.md#length)
