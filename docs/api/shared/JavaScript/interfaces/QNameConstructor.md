# 接口: QNameConstructor()

定义于: types-for-adobe/shared/JavaScript.d.ts:2289

> **QNameConstructor**(`uri`, `name?`): [`QName`](QName.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2298

## 参数

### uri

`any`

### name?

`string`

## 返回

[`QName`](QName.md)

## 构造函数

### 构造函数

> **new QNameConstructor**(`uri`, `name?`): [`QName`](QName.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2297

Creates a QName object.

#### 参数

##### uri

`any`

The URI, specified as a Namespace object, an existing QName object, or string. If this is a Namespace object, the URI is set to the namespace URI, and there is no local name. If this is a QName object, the URI and localName is set to those of that object. If this is a string, the URI is set to that string.

##### name?

`string`

The local name. Used only if URI is given as a string.

#### 返回

[`QName`](QName.md)

## 属性

### prototype

> `readonly` **prototype**: [`QName`](QName.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2290
