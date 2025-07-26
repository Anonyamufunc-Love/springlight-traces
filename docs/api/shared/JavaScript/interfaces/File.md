# 接口: File

定义于: types-for-adobe/shared/JavaScript.d.ts:1520

Represents a file in the local file system in a platform-independent manner.

## 属性

### absoluteURI

> `readonly` **absoluteURI**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1529

The full path name for the referenced file in URI notation.

***

### alias

> `readonly` **alias**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1534

If true, the object refers to a file system alias or shortcut.

***

### created

> `readonly` **created**: [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1539

The creation date of the referenced file, or null if the object does not refer to a file on disk.

***

### creator

> `readonly` **creator**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1544

In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????".

***

### displayName

> `readonly` **displayName**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1549

The localized name of the referenced file, without the path specification.

***

### encoding

> **encoding**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1555

Gets or sets the encoding for subsequent read/write operations.
One of the encoding constants listed in the JavaScript Tools Guide. If the value is not recognized, uses the system default encoding.A special encoder, BINARY, is used to read binary files. It stores each byte of the file as one Unicode character regardless of any encoding. When writing, the lower byte of each Unicode character is treated as a single byte to write.

***

### eof

> `readonly` **eof**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1560

When true, a read attempt caused the current position to be at the end of the file, or the file is not open.

***

### error

> **error**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1566

A string containing a message describing the most recent file system error.
Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error.

***

### exists

> `readonly` **exists**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1571

If true, this object refers to a file or file-system alias that actually exists in the file system.

***

### fsName

> `readonly` **fsName**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1576

The platform-specific full path name for the referenced file.

***

### fullName

> `readonly` **fullName**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1581

The full path name for the referenced file in URI notation.

***

### hidden

> **hidden**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1587

When true, the file is not shown in the platform-specific file browser.
If the object references a file-system alias or shortcut, the flag is altered on the alias, not on the original file.

***

### length

> **length**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1593

The size of the file in bytes.
Can be set only for a file that is not open, in which case it truncates or pads the file with 0-bytes to the new length.

***

### lineFeed

> **lineFeed**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1599

How line feed characters are written in the file system.
One of the values "Windows", "Macintosh", or "Unix".

***

### modified

> `readonly` **modified**: [`Date`](Date.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1604

The date of the referenced file's last modification, or null if the object does not refer to a file on the disk.

***

### name

> `readonly` **name**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1609

The file name portion of the absolute URI for the referenced file, without the path specification.

***

### parent

> `readonly` **parent**: [`Folder`](Folder.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:1614

The Folder object for the folder that contains this file.

***

### path

> `readonly` **path**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1619

The path portion of the absolute URI for the referenced file, without the file name.

***

### readonly

> **readonly**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1625

When true, prevents the file from being altered or deleted.
If the referenced file is a file-system alias or shortcut, the flag is altered on the alias, not on the original file.

***

### relativeURI

> `readonly` **relativeURI**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1630

The path name for the object in URI notation, relative to the current folder.

***

### type

> `readonly` **type**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1637

The file type as a four-character string.
In Mac OS, the Mac OS file type.
In Windows, "appl" for .EXE files, "shlb" for .DLL files and "TEXT" for any other file.

## 方法

### changePath()

> **changePath**(`path`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1643

Changes the path specification of the referenced file.

#### 参数

##### path

`string`

A string containing the new path, absolute or relative to the current folder.

#### 返回

`boolean`

***

### close()

> **close**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1649

Closes this open file.
Returns true if the file was closed successfully, false if an I/O error occurred.

#### 返回

`boolean`

***

### copy()

> **copy**(`target`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1657

Copies this object’s referenced file to the specified target location.
Resolves any aliases to find the source file. If a file exists at the target location, it is overwritten.
Returns true if the copy was successful.

#### 参数

##### target

`string`

A string with the URI path to the target location, or a File object that references the target location.

#### 返回

`boolean`

***

### createAlias()

> **createAlias**(`path`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:1664

Makes this file a file-system alias or shortcut to the specified file.
The referenced file for this object must not yet exist on disk. Returns true if the operation was successful.

#### 参数

##### path

`string`

A string containing the path of the target file.

#### 返回

`void`

***

### execute()

> **execute**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1670

Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
You can use this method to run scripts, launch applications, and so on.Returns true immediately if the application launch was successful.

#### 返回

`boolean`

***

### getRelativeURI()

> **getRelativeURI**(`basePath`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1677

Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
If no base path is supplied, the URI is relative to the path of the current folder.Returns a string containing the relative URI.

#### 参数

##### basePath

`string`

A base path in URI notation.

#### 返回

`string`

***

### open()

> **open**(`mode`, `type?`, `creator?`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1687

Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
Returns true if the file was opened successfully.The method attempts to detect the encoding of the open file. It reads a few bytes at the current location and tries to detect the Byte Order Mark character 0xFFFE. If found, the current position is advanced behind the detected character and the encoding property is set to one of the strings UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If the marker character is not found, it checks for zero bytes at the current location and makes an assumption about one of the above formats (except UTF-8). If everything fails, the encoding property is set to the system encoding.
IMPORTANT: Be careful about opening a file more than once. The operating system usually permits you to do so, but if you start writing to the file using two different File objects, you can destroy your data.

#### 参数

##### mode

`string`

The read-write mode, a single-character string. One of these characters: r (read) Opens for reading. If the file does not exist or cannot be found, the call fails. w (write) Opens a file for writing. If the file exists, its contents are destroyed. If the file does not exist, creates a new, empty file. e (edit) Opens an existing file for reading and writing. a (append) Opens an existing file for reading and writing, and moves the current position to the end of the file.

##### type?

`string`

In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.

##### creator?

`string`

In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.

#### 返回

`boolean`

***

### openDlg()

#### 调用签名

> **openDlg**(`prompt?`, `filter?`, `multiSelect?`): `File` \| `File`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:1698

Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
Differs from the class method openDialog() in that it presets the current folder to this File object’s parent folder and the current file to this object’s associated file.
If the user clicks OK, returns a File or Folder object for the selected file or folder, or an array of objects.
If the user cancels, returns null.

##### 参数

###### prompt?

`string`

A string containing the prompt text, if the dialog allows a prompt.

###### filter?

A filter that limits the types of files displayed in the dialog. In Windows,a filter expression such as "Javascript files:*.jsx;All files:*.*". In Mac OS, a filter function that takes a File instance and returns true if the file should be included in the display, false if it should not.

`string` | [`Function`](Function.md)

###### multiSelect?

`boolean`

When true, the user can select multiple files and the return value is an array.

##### 返回

`File` \| `File`[]

#### 调用签名

> **openDlg**(`prompt`, `filter`, `multiSelect`): `File`

定义于: types-for-adobe/shared/JavaScript.d.ts:1699

##### 参数

###### prompt

`string`

###### filter

`string` | [`Function`](Function.md)

###### multiSelect

`false`

##### 返回

`File`

#### 调用签名

> **openDlg**(`prompt`, `filter`, `multiSelect`): `File`[]

定义于: types-for-adobe/shared/JavaScript.d.ts:1700

##### 参数

###### prompt

`string`

###### filter

`string` | [`Function`](Function.md)

###### multiSelect

`true`

##### 返回

`File`[]

***

### read()

> **read**(`chars?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1707

Reads the contents of the file, starting at the current position.
Returns a string that contains up to the specified number of characters. If a number of characters is not supplied, reads from the current position to the end of the file. If the file is encoded, multiple bytes might be read to create single Unicode characters.

#### 参数

##### chars?

`number`

An integer specifying the number of characters to read.

#### 返回

`string`

***

### readch()

> **readch**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1713

Reads a single text character from the file at the current position.
Line feeds are recognized as CR, LF, CRLF or LFCR pairs.If the file is encoded, multiple bytes might be read to create a single Unicode character. Returns a string that contains the character.

#### 返回

`string`

***

### readln()

> **readln**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1719

Reads a single line of text from the file at the current position.
Line feeds are recognized as CR, LF, CRLF or LFCR pairs.. If the file is encoded, multiple bytes might be read to create single Unicode characters. Returns a string that contains the text.

#### 返回

`string`

***

### remove()

> **remove**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1726

Deletes the file associated with this object from disk immediately, without moving it to the system trash.
Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself. Returns true if the file was successfully removed.
IMPORTANT: Cannot be undone. It is recommended that you prompt the user for permission before deleting.

#### 返回

`boolean`

***

### rename()

> **rename**(`newName`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1733

Renames the associated file.
Does not resolve aliases, but renames the referenced alias or shortcut file itself. Returns true if the file was successfully renamed.

#### 参数

##### newName

`string`

The new file name, with no path information.

#### 返回

`boolean`

***

### resolve()

> **resolve**(): `File`

定义于: types-for-adobe/shared/JavaScript.d.ts:1739

Attempts to resolve the file-system alias or shortcut that this object refers to.
If successful, creates and returns a new File object that points to the resolved file system element. Returns null if this object does not refer to an alias, or if the alias could not be resolved.

#### 返回

`File`

***

### saveDlg()

> **saveDlg**(`prompt?`, `filter?`): `File`

定义于: types-for-adobe/shared/JavaScript.d.ts:1749

Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
Differs from the class method saveDialog() in that it presets the current folder to this File object’s parent folder and the file to this object’s associated file.
If the user clicks OK, returns a File object for the selected file.
If the user cancels, returns null.

#### 参数

##### prompt?

`string`

A string containing the prompt text, if the dialog allows a prompt.

##### filter?

`any`

In Windows only, a filter that limits the types of files displayed in the dialog. In Windows only,a filter expression such as "Javascript files:*.jsx;All files:*.*". Not used In Mac OS.

#### 返回

`File`

***

### seek()

> **seek**(`pos`, `mode?`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1757

Seeks to a given position in the file.
The new position cannot be less than 0 or greater than the current file size. Returns true if the position was changed.

#### 参数

##### pos

`number`

The new current position in the file as an offset in bytes from the start, current position, or end, depending on the mode.

##### mode?

`number`

The seek mode. One of: 0: Seek to absolute position, where pos=0 is the first byte of the file. This is the default. 1: Seek relative to the current position. 2. Seek backward from the end of the file.

#### 返回

`boolean`

***

### tell()

> **tell**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:1763

Retrieves the current position as a byte offset from the start of the file.
Returns a number, the position index.

#### 返回

`number`

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1769

Creates and returns a serialized string representation of this object.
Pass the resulting string to eval() to recreate the object.

#### 返回

`string`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:1774

Converts this object to a string.

#### 返回

`string`

***

### write()

> **write**(`text`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1781

Writes the specified text to the file at the current position.
You can supply multiple text values; the strings are concatenated to form a single string.For encoded files, writing a single Unicode character may write multiple bytes. Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.

#### 参数

##### text

`string`

A text string to be written.

#### 返回

`boolean`

***

### writeln()

> **writeln**(`text`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:1788

Writes a string to the file at the current position and appends a line-feed sequence.
You can supply multiple text values. The strings are concatenated into a single string, which is written in the file followed by one line-feed sequence, of the style specified by this object's linefeed property.For encoded files, writing a single Unicode character may write multiple bytes.Returns true if the write was successful.IMPORTANT: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.

#### 参数

##### text

`string`

A text string to be written.

#### 返回

`boolean`
