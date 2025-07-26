# 类: Viewer

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2620

The Viewer object represents a Composition, Layer, or Footage panel.

## 构造函数

### 构造函数

> **new Viewer**(): `Viewer`

#### 返回

`Viewer`

## 属性

### active

> `readonly` **active**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2625

When true, the viewer is focused.

***

### activeViewIndex

> **activeViewIndex**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2629

***

### maximized

> **maximized**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2632

When true, the viewer is at its maximized size.

***

### type

> `readonly` **type**: [`ViewerType`](../enumerations/ViewerType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2622

The type of content in the viewer.

***

### views

> `readonly` **views**: [`View`](View.md)[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2627

## 方法

### setActive()

> **setActive**(): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2635

Moves the viewer to front and places focus on it.

#### 返回

`boolean`
