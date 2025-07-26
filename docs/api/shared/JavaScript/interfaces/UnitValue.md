# 接口: UnitValue

定义于: types-for-adobe/shared/JavaScript.d.ts:2695

Represents a measurement as a combination of values and unit.
Note that this object is not available in all applications.

## 属性

### baseUnit

> **baseUnit**: `UnitValue`

定义于: types-for-adobe/shared/JavaScript.d.ts:2705

The base unit.

***

### type

> `readonly` **type**: [`UnitNameAbbrev`](../type-aliases/UnitNameAbbrev.md) \| `"?"`

定义于: types-for-adobe/shared/JavaScript.d.ts:2710

The unit name.

***

### value

> **value**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:2715

The numeric value.

## 方法

### as()

> **as**(`unitName`): `UnitValue`

定义于: types-for-adobe/shared/JavaScript.d.ts:2721

Returns this instance as a different unit.

#### 参数

##### unitName

[`UnitNameAbbrev`](../type-aliases/UnitNameAbbrev.md)

The unit name.

#### 返回

`UnitValue`

***

### convert()

> **convert**(`unitName`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2727

Converts this instance to a different unit.

#### 参数

##### unitName

[`UnitNameAbbrev`](../type-aliases/UnitNameAbbrev.md)

The unit name.

#### 返回

`boolean`
