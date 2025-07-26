# 接口: FolderConstructor()

定义于: types-for-adobe/shared/JavaScript.d.ts:1791

> **FolderConstructor**(`path?`): [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1800

## 参数

### path?

`string`

## 返回

[`Folder`](Folder.md)

## 构造函数

### 构造函数

> **new FolderConstructor**(`path?`): [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1799

Creates and returns a new Folder object referring to a given file-system location.
If the path name refers to an already existing disk file, a File object is returned instead.Returns the new Folder object.

#### 参数

##### path?

`string`

The absolute or relative path to the folder associated with this object, specified in URI format. The value stored in the object is the absolute path.The path need not refer to an existing folder. If the path refers to an existing file, rather than a folder: The Folder() function returns a File object instead of a Folder object. The new operator returns a Folder object for a nonexisting folder with the same name.

#### 返回

[`Folder`](Folder.md)

## 属性

### appData

> `readonly` **appData**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1807

The folder containing the application data for all users.
In Windows, the value of %APPDATA% (by default, C:\\Documents and Settings\\All Users\\Application Data)
In Mac OS, /Library/Application Support

***

### appPackage

> `readonly` **appPackage**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1812

In Mac OS, a Folder object for the folder containing the bundle of the running application.

***

### commonFiles

> `readonly` **commonFiles**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1819

A Folder object for the folder containing common files for all programs installed by the user.
In Windows, the value of %CommonProgramFiles% (by default, C:\\Program Files\\Common Files)
In Mac OS, /Library/Application Support

***

### current

> **current**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1825

A Folder object for the current folder.
Assign a Folder object or a string containing the new path name to set the current folder. This is a class property accessed through the Folder constructor.

***

### desktop

> `readonly` **desktop**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1832

A Folder object for the folder that contains the user’s desktop.
In Windows, C:\\Documents and Settings\\username\\Desktop
In Mac OS, ~/Desktop

***

### fs

> `readonly` **fs**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1838

The name of the current file system.
One of "Windows", "Macintosh", or "Unix".

***

### myDocuments

> `readonly` **myDocuments**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1845

A folder pointing to the user's My Documents folder.
In Windows, C:\\Documents and Settings\\username\\My Documents
In Mac OS,~/Documents

***

### prototype

> `readonly` **prototype**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1792

***

### startup

> `readonly` **startup**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1850

A Folder object for the folder containing the executable image of the running application.

***

### system

> `readonly` **system**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1857

A Folder object for the folder containing the operating system files.
In Windows, the value of %windir% (by default, C:\\Windows)
In Mac OS, /System

***

### temp

> `readonly` **temp**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1862

A Folder object for the default folder for temporary files.

***

### trash

> `readonly` **trash**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1868

A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
folder containing a database; therefore, the property value is null on Windows.

***

### userData

> `readonly` **userData**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1875

A Folder object for the folder containing the user's application data.
In Windows, the value of %USERDATA% (by default, C:\\Documents and Settings\\username\\Application Data)
In Mac OS,~/Library/Application Support.

## 方法

### decode()

> **decode**(`uri`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1882

Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
See also String.decodeURI().

#### 参数

##### uri

`string`

The UTF-8 string to decode.

#### 返回

`string`

***

### encode()

> **encode**(`name`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1891

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

定义于: types-for-adobe/shared/JavaScript.d.ts:1897

Reports whether a given encoding is available.

#### 参数

##### name

`string`

The encoding name. Typical values are "ASCII", "binary", or "UTF-8".For a complete list of supported encodings, see the JavaScript Tools Guide.

#### 返回

`boolean`

***

### selectDialog()

> **selectDialog**(`prompt?`): [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1906

Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
Differs from the object method selectDlg() in that it does not preselect a folder.
If the user clicks OK, returns a File or Folder object for the selected file or folder.
If the user cancels, returns null.

#### 参数

##### prompt?

`string`

The prompt text, if the dialog allows a prompt.

#### 返回

[`Folder`](Folder.md)
