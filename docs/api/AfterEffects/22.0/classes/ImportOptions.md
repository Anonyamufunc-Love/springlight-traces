# 类: ImportOptions

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1306

The ImportOptions object encapsulates the options used to import a file with the Project.importFile methods.

## 构造函数

### 构造函数

> **new ImportOptions**(`file?`): `ImportOptions`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1307

#### 参数

##### file?

[`File`](../../../shared/JavaScript/interfaces/File.md)

#### 返回

`ImportOptions`

## 属性

### file

> **file**: [`File`](../../../shared/JavaScript/interfaces/File.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1319

The file to import, or the first file of the sequence to import.

***

### forceAlphabetical

> **forceAlphabetical**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1316

When true, the “Force alphabetical order” option is set.

***

### importAs

> **importAs**: [`ImportAsType`](../enumerations/ImportAsType.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1310

The type of file to be imported.

***

### sequence

> **sequence**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1313

When true, import a sequence of files, rather than an individual file.

## 方法

### canImportAs()

> **canImportAs**(`type`): `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:1322

Restricts input to a particular file type.

#### 参数

##### type

[`ImportAsType`](../enumerations/ImportAsType.md)

#### 返回

`boolean`
