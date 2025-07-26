# 接口: XMPMetaConstructor

定义于: types-for-adobe/shared/XMPScript.d.ts:9

## 构造函数

### 构造函数

> **new XMPMetaConstructor**(): [`XMPMetaInstance`](XMPMetaInstance.md)

定义于: types-for-adobe/shared/XMPScript.d.ts:11

Creates an empty object.

#### 返回

[`XMPMetaInstance`](XMPMetaInstance.md)

### 构造函数

> **new XMPMetaConstructor**(`packet`): [`XMPMetaInstance`](XMPMetaInstance.md)

定义于: types-for-adobe/shared/XMPScript.d.ts:15

#### 参数

##### packet

`string`

A String containing an XML file or an XMP packet.

#### 返回

[`XMPMetaInstance`](XMPMetaInstance.md)

### 构造函数

> **new XMPMetaConstructor**(`buffer`): [`XMPMetaInstance`](XMPMetaInstance.md)

定义于: types-for-adobe/shared/XMPScript.d.ts:21

#### 参数

##### buffer

`number`[]

The UTF-8 or UTF-16 encoded bytes of an XML file
or an XMP packet. This array is the result of a call to `serializeToArray`
on an `XMPMeta` instance.

#### 返回

[`XMPMetaInstance`](XMPMetaInstance.md)

## 方法

### getNamespacePrefix()

> **getNamespacePrefix**(`uri`): `string`

定义于: types-for-adobe/shared/XMPScript.d.ts:31

#### 参数

##### uri

`string`

The URI of the namespace.

#### 返回

`string`

#### 示例

```ts
XMPMeta.getNamespacePrefix('http://ns.adobe.com/xap/1.0/'); // 'xmp:'
```

***

### getNamespaceURI()

> **getNamespaceURI**(`prefix`): `string`

定义于: types-for-adobe/shared/XMPScript.d.ts:26

#### 参数

##### prefix

`string`

The prefix of the namespace.

#### 返回

`string`

#### 示例

```ts
XMPMeta.getNamespacePrefix('xmp'); // 'http://ns.adobe.com/xap/1.0/'
```
