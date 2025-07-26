# 类: Shape

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2403

The Shape object encapsulates information describing a shape in a shape layer, or the outline shape of a Mask.

## 构造函数

### 构造函数

> **new Shape**(): `Shape`

#### 返回

`Shape`

## 属性

### closed

> **closed**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2405

When true, the shape is a closed curve.

***

### featherInterps

> **featherInterps**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2426

The feather radius interpolation type for each feather point.

***

### featherRadii

> **featherRadii**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2423

The feather amount (radius) for each feather point.

***

### featherRelCornerAngles

> **featherRelCornerAngles**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2435

The relative angle between the two normals on either side of a curved outer feather boundary at a corner on a mask path.

***

### featherRelSegLocs

> **featherRelSegLocs**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2420

The relative position of each feather point on its mask path segment.

***

### featherSegLocs

> **featherSegLocs**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2417

The mask path segment (sections of a mask path between vertices) containing each feather point.

***

### featherTensions

> **featherTensions**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2429

The feather tension at each feather point.

***

### featherTypes

> **featherTypes**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2432

The direction (inner or outer) of each feather point.

***

### inTangents

> **inTangents**: \[`number`, `number`\][]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2411

The tangent vectors coming into the shape vertices.

***

### outTangents

> **outTangents**: \[`number`, `number`\][]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2414

The tangent vectors coming out of the shape vertices.

***

### vertices

> **vertices**: \[`number`, `number`\][]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2408

The anchor points of the shape.
