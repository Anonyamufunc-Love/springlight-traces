# 接口: Folder

定义于: types-for-adobe/shared/JavaScript.d.ts:1908

Represents a file-system folder or directory in a platform-independent manner.

## 属性

### absoluteURI

> `readonly` **absoluteURI**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1917

The full path name for the referenced folder in URI notation.

***

### alias

> `readonly` **alias**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1922

When true, the object refers to a file system alias or shortcut.

***

### created

> `readonly` **created**: [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1927

The creation date of the referenced folder, or null if the object does not refer to a folder on disk.

***

### displayName

> `readonly` **displayName**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1932

The localized name portion of the absolute URI for the referenced folder, without the path specification.

***

### error

> **error**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1938

A message describing the most recent file system error.
Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.

***

### exists

> `readonly` **exists**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1943

When true, this object refers to a folder that currently exists in the file system.

***

### fsName

> `readonly` **fsName**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1948

The platform-specific name of the referenced folder as a full path name.

***

### fullName

> `readonly` **fullName**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1953

The full path name for the referenced folder in URI notation. .

***

### modified

> `readonly` **modified**: [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1958

The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk.

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1963

The folder name portion of the absolute URI for the referenced file, without the path specification.

***

### parent

> `readonly` **parent**: `Folder`

定义于: types-for-adobe/shared/JavaScript.d.ts:1968

TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume.

***

### path

> `readonly` **path**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1973

The path portion of the object absolute URI for the referenced file, without the folder name.

***

### relativeURI

> `readonly` **relativeURI**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1978

The path name for the referenced folder in URI notation, relative to the current folder.

## 方法

### changePath()

> **changePath**(`path`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1984

Changes the path specification of the referenced folder.

#### 参数

##### path

`string`

A string containing the new path, absolute or relative to the current folder.

#### 返回

`boolean`

***

### create()

> **create**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1990

Creates a folder at the location given by this object's path property.
Returns true if the folder was created.

#### 返回

`boolean`

***

### execute()

> **execute**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1996

Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
Returns true immediately if the folder was opened successfully.

#### 返回

`boolean`

***

### getFiles()

> **getFiles**(`mask?`): ([`File`](File.md) \| `Folder`)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2003

Retrieves the contents of this folder, filtered by the supplied mask.
Returns an array of File and Folder objects, or null if this object's referenced folder does not exist.

#### 参数

##### mask?

`any`

A search mask for file names, specified as a string or a function. A mask string can contain question mark (?) and asterisk (*) wild cards. Default is "*", which matches all file names. Can also be the name of a function that takes a File or Folder object as its argument. It is called for each file or folder found in the search; if it returns true, the object is added to the return array. NOTE: In Windows, all aliases end with the extension .lnk. ExtendScript strips this from the file name when found, in order to preserve compatibility with other operating systems. You can search for all aliases by supplying the search mask "*.lnk", but note that such code is not portable.

#### 返回

([`File`](File.md) \| `Folder`)[]

***

### getRelativeURI()

> **getRelativeURI**(`basePath?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2010

Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.

#### 参数

##### basePath?

`string`

A base path in URI notation.

#### 返回

`string`

***

### remove()

> **remove**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2017

Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
Folders must be empty before they can be deleted. Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.

#### 返回

`boolean`

***

### rename()

> **rename**(`newName`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2024

Renames the associated folder.
Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the folder was successfully renamed.

#### 参数

##### newName

`string`

The new folder name, with no path information.

#### 返回

`boolean`

***

### resolve()

> **resolve**(): `Folder`

定义于: types-for-adobe/shared/JavaScript.d.ts:2030

Attempts to resolve the file-system alias or shortcut that this object refers to.
If successful, creates and returns a new Folder object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.

#### 返回

`Folder`

***

### selectDlg()

> **selectDlg**(`prompt?`): `Folder`

定义于: types-for-adobe/shared/JavaScript.d.ts:2039

Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
Differs from the class method selectDialog() in that it preselects this folder.
If the user clicks OK, returns a File or Folder object for the selected file or folder.
If the user cancels, returns null.

#### 参数

##### prompt?

`string`

The prompt text, if the dialog allows a prompt.

#### 返回

`Folder`

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2045

Creates and returns a serialized string representation of this object.
Pass the resulting string to eval() to recreate the object.

#### 返回

`string`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2050

Converts this object to a string.

#### 返回

`string`
