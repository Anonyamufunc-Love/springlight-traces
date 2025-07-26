# 类: AutoLayoutManager

定义于: types-for-adobe/shared/ScriptUI.d.ts:411

Controls the automatic layout behavior for a window or container.
The subclass AutoLayoutManager implements the default automatic layout behavior.

## 构造函数

### 构造函数

> **new AutoLayoutManager**(): `AutoLayoutManager`

#### 返回

`AutoLayoutManager`

## 方法

### layout()

> **layout**(`recalculate?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:419

Invokes the automatic layout behavior for the managed container.
Adjusts sizes and positions of the child elements of this window or container according to the placement and alignment property values in the parent and children.
Invoked automatically the first time the window is displayed. Thereafter, the script must invoke it explicitly to change the layout in case of changes in the size or position of the parent or children.

#### 参数

##### recalculate?

`boolean`

Optional. When true, forces the layout manager to recalculate the container size for this and any child containers. Default is false.

#### 返回

`void`

***

### resize()

> **resize**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:425

Performs a layout after a Window is resized, based on the new size.
Resizes the child elements of the managed container with a given alignment type, after the window has been resized by the user.

#### 返回

`void`
