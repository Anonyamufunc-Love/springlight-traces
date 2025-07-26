# 类: Settings

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2391

The Settings object provides an easy way to manage settings for scripts. The settings are saved in the After Effects preferences file and are persistent between application sessions. Settings are identified by section and key within the file, and each key name is associated with a value. In the preferences file, section names are enclosed in brackets and quotation marks, and key names are listing in quotation marks below the section name. All values are strings.

## 构造函数

### 构造函数

> **new Settings**(): `Settings`

#### 返回

`Settings`

## 方法

### getSetting()

> **getSetting**(`sectionName`, `keyName`, `type?`): `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2396

Retrieves a setting value.

#### 参数

##### sectionName

`string`

##### keyName

`string`

##### type?

[`PREFType`](../enumerations/PREFType.md)

#### 返回

`string`

***

### haveSetting()

> **haveSetting**(`sectionName`, `keyName`, `type?`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2399

Reports whether a specified setting is assigned.

#### 参数

##### sectionName

`string`

##### keyName

`string`

##### type?

[`PREFType`](../enumerations/PREFType.md)

#### 返回

`boolean`

***

### saveSetting()

> **saveSetting**(`sectionName`, `keyName`, `value`, `type?`): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2393

Saves a default value for a setting.

#### 参数

##### sectionName

`string`

##### keyName

`string`

##### value

`string`

##### type?

[`PREFType`](../enumerations/PREFType.md)

#### 返回

`void`
