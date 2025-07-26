# 接口: XMPMetaInstance

定义于: types-for-adobe/shared/XMPScript.d.ts:40

## 方法

### appendArrayItem()

> **appendArrayItem**(`namespace`, `property`, `arrayOptions`, `valueToAppend`, `valueOptions`): `boolean`

定义于: types-for-adobe/shared/XMPScript.d.ts:47

#### 参数

##### namespace

`string`

##### property

`string`

##### arrayOptions

`string`

##### valueToAppend

`string`

##### valueOptions

`string`

#### 返回

`boolean`

***

### countArrayItems()

> **countArrayItems**(`namespace`, `property`): `number`

定义于: types-for-adobe/shared/XMPScript.d.ts:44

#### 参数

##### namespace

`string`

##### property

`string`

#### 返回

`number`

***

### deleteProperty()

> **deleteProperty**(`namespace`, `property`): `boolean`

定义于: types-for-adobe/shared/XMPScript.d.ts:46

#### 参数

##### namespace

`string`

##### property

`string`

#### 返回

`boolean`

***

### doesPropertyExist()

> **doesPropertyExist**(`namespace`, `value`): `boolean`

定义于: types-for-adobe/shared/XMPScript.d.ts:41

#### 参数

##### namespace

`string`

##### value

`string`

#### 返回

`boolean`

***

### dumpObject()

> **dumpObject**(): `string`

定义于: types-for-adobe/shared/XMPScript.d.ts:54

#### 返回

`string`

***

### getArrayItem()

> **getArrayItem**(`namespace`, `property`, `itemIndex`): [`XMPProperty`](../type-aliases/XMPProperty.md)

定义于: types-for-adobe/shared/XMPScript.d.ts:45

#### 参数

##### namespace

`string`

##### property

`string`

##### itemIndex

`number`

#### 返回

[`XMPProperty`](../type-aliases/XMPProperty.md)

***

### getNamespaceURI()

> **getNamespaceURI**(`ns`): `string`

定义于: types-for-adobe/shared/XMPScript.d.ts:56

#### 参数

##### ns

`string`

#### 返回

`string`

***

### getProperty()

> **getProperty**(`namespace`, `property`): [`XMPProperty`](../type-aliases/XMPProperty.md)

定义于: types-for-adobe/shared/XMPScript.d.ts:42

#### 参数

##### namespace

`string`

##### property

`string`

#### 返回

[`XMPProperty`](../type-aliases/XMPProperty.md)

***

### serialize()

> **serialize**(): `string`

定义于: types-for-adobe/shared/XMPScript.d.ts:55

#### 返回

`string`

***

### setProperty()

> **setProperty**(`namespace`, `property`, `value`): `boolean`

定义于: types-for-adobe/shared/XMPScript.d.ts:43

#### 参数

##### namespace

`string`

##### property

`string`

##### value

`string`

#### 返回

`boolean`
