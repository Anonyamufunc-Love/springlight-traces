# 接口: NamespaceConstructor()

定义于: types-for-adobe/shared/JavaScript.d.ts:2317

> **NamespaceConstructor**(`prefix`, `uri?`): [`Namespace`](Namespace.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2326

## 参数

### prefix

`any`

### uri?

`string`

## 返回

[`Namespace`](Namespace.md)

## 构造函数

### 构造函数

> **new NamespaceConstructor**(`prefix`, `uri?`): [`Namespace`](Namespace.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2325

Creates a Namespace object.

#### 参数

##### prefix

`any`

The URIprefix, specified as an existing Namespace object, QName object, or string. If this is a Namespace or a QName object, the URI and prefix are set to that of the object. If this is a string, the prefix is set to that string, and the URI must be specified.

##### uri?

`string`

The URI if the prefix is specified as a string.

#### 返回

[`Namespace`](Namespace.md)

## 属性

### prototype

> `readonly` **prototype**: [`Namespace`](Namespace.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2318
