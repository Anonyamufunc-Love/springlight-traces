# 接口: FileConstructor()

定义于: types-for-adobe/shared/JavaScript.d.ts:1459

> **FileConstructor**(`path?`): [`File`](File.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1467

## 参数

### path?

`string`

## 返回

[`File`](File.md)

## 构造函数

### 构造函数

> **new FileConstructor**(`path?`): [`File`](File.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1466

Creates and returns a new File object referring to a given file system location.

#### 参数

##### path?

`string`

The full or partial path name of the file,in platform-specific or URI format. The value stored in the object is the absolute path. The file that the path refers to does not need to exist.If the path refers to an existing folder: The File function returns a Folder object instead of a File object. The new operator returns a File object for a nonexisting file with the same name.

#### 返回

[`File`](File.md)

## 属性

### fs

> `readonly` **fs**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1473

The name of the file system.
This is a class property accessed through the File constructor. Valid values are "Windows", "Macintosh", and "Unix".

***

### prototype

> `readonly` **prototype**: [`File`](File.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1460

## 方法

### decode()

> **decode**(`uri`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1480

Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
See also String.decodeURI().

#### 参数

##### uri

`string`

The UTF-8 encoded string to decode.

#### 返回

`string`

***

### encode()

> **encode**(`name`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1489

Encodes a string as required by RFC 2396, and returns the encoded string.
All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string "my file" is encoded as "my%20file".
Special characters are those with a numeric value greater than 127, except the following: / - _ . ! ~ * ' ( )
See also encodeURI().

#### 参数

##### name

`string`

The string to encode.

#### 返回

`string`

***

### isEncodingAvailable()

> **isEncodingAvailable**(`name`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1495

Reports whether a given encoding is available.

#### 参数

##### name

`string`

The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.

#### 返回

`boolean`

***

### openDialog()

#### 调用签名

> **openDialog**(`prompt?`, `filter?`, `multiSelect?`): [`File`](File.md) \| [`File`](File.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:1506

Opens a dialog so the user can select one or more files to open.
Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file or multiple files, and creates new File objects to represent the selected files.
If the user clicks OK, returns a File object for the selected file, or an array of objects if multiple files are selected.
If the user cancels, returns null.

##### 参数

###### prompt?

`string`

The prompt text, displayed if the dialog allows a prompt.

###### filter?

A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.

`string` | [`Function`](Function.md)

###### multiSelect?

`boolean`

When true, the user can select multiple files and the return value is an array.

##### 返回

[`File`](File.md) \| [`File`](File.md)[]

#### 调用签名

> **openDialog**(`prompt`, `filter`, `multiSelect`): [`File`](File.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1507

##### 参数

###### prompt

`string`

###### filter

`string` | [`Function`](Function.md)

###### multiSelect

`false`

##### 返回

[`File`](File.md)

#### 调用签名

> **openDialog**(`prompt`, `filter`, `multiSelect`): [`File`](File.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:1508

##### 参数

###### prompt

`string`

###### filter

`string` | [`Function`](Function.md)

###### multiSelect

`true`

##### 返回

[`File`](File.md)[]

***

### saveDialog()

> **saveDialog**(`prompt?`, `filter?`): [`File`](File.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1518

Opens a dialog so the user can select a file name to save to.
Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file location to which to save information, and creates a new File object to represent the selected file location.
If the user clicks OK, returns a File object for the selected file location.
If the user cancels, returns null.

#### 参数

##### prompt?

`string`

The prompt text, displayed if the dialog allows a prompt.

##### filter?

`any`

In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.

#### 返回

[`File`](File.md)
