# 类: System

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2486

The System object provides access to attributes found on the user’s system, such as the user name and the name and version of the operating system. It is available through the system global variable.

## 构造函数

### 构造函数

> **new System**(): `System`

#### 返回

`System`

## 属性

### machineName

> `readonly` **machineName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2491

The name of the host computer.

***

### osName

> `readonly` **osName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2494

The name of the operating system.

***

### osVersion

> `readonly` **osVersion**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2497

The version of the operating system.

***

### userName

> `readonly` **userName**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2488

The current user name.

## 方法

### callSystem()

> **callSystem**(`cmdLineToExecute`): `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2500

Execute’s a command on the system’s command line.

#### 参数

##### cmdLineToExecute

`string`

#### 返回

`string`
