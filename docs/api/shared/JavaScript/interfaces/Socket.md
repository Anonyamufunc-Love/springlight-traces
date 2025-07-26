# 接口: Socket

定义于: types-for-adobe/shared/JavaScript.d.ts:2062

Creates a TCP/IP connection, or establishes a TCP/IP server.

## 属性

### connected

> `readonly` **connected**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2071

When true, the connection is active.

***

### encoding

> **encoding**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2077

Sets or retrieves the name of the encoding used to transmit data.
Typical values are "ASCII", "BINARY", or "UTF-8".

***

### eof

> `readonly` **eof**: `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2082

When true, the receive buffer is empty.

***

### error

> **error**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2087

A message describing the most recent error. Setting this value clears any error message.

***

### host

> `readonly` **host**: `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2093

The name of the remote computer when a connection is established.
If the connection is shut down or does not exist, the property contains the empty string.

***

### timeout

> **timeout**: `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:2098

The timeout in seconds to be applied to read or write operations.

## 方法

### close()

> **close**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2105

Terminates the open connection.
Returns true if the connection was closed, false on I/O errors.
Deleting the object also closes the connection, but not until JavaScript garbage-collects the object. The connection might stay open longer than you wish if you do not close it explicitly.

#### 返回

`boolean`

***

### listen()

> **listen**(`port`, `encoding?`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2113

Instructs the object to start listening for an incoming connection.
The call to open() and the call to listen()are mutually exclusive. Call one function or the other, not both.

#### 参数

##### port

`number`

The TCP/IP port number to listen on. Valid port numbers are 1 to 65535. Typical values are 80 for a Web server, 23 for a Telnet server and so on.

##### encoding?

`string`

The encoding to be used for the connection Typical values are "ASCII", "BINARY", or "UTF-8".

#### 返回

`boolean`

***

### open()

> **open**(`host`, `encoding?`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2121

Opens the connection for subsequent read/write operations.
The call to open() and the call to listen() are mutually exclusive. Call one function or the other, not both.

#### 参数

##### host

`string`

The server to connect to. This can be a DNS name, an IPv4 address, or an IPv6 address, followed by a colon and a port number.

##### encoding?

`string`

The encoding to be used for the connection Typical values are "ASCII", "binary", or "UTF-8".

#### 返回

`boolean`

***

### poll()

> **poll**(): `Socket`

定义于: types-for-adobe/shared/JavaScript.d.ts:2127

Checks a listening object for a new incoming connection.
If a connection request was detected, the method returns a new Socket object that wraps the new connection. Use this connection object to communicate with the remote computer. After use, close the connection and delete the JavaScript object. If no new connection request was detected, the method returns null.

#### 返回

`Socket`

***

### read()

> **read**(`count?`): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2134

Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
Returns a string that contains up to the number of characters that were supposed to be read, or the number of characters read before the connection closed or timed out.

#### 参数

##### count?

`number`

The number of characters to read. If not supplied, the connection attempts to read as many characters it can get and returns immediately.

#### 返回

`string`

***

### readln()

> **readln**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2140

Reads one line of text up to the next line feed.
Line feeds are recognized as LF or CRLF pairs. CR characters are ignored. Returns a string containing the characters.

#### 返回

`string`

***

### write()

> **write**(`text`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2146

Concatenates all arguments into a single string and writes that string to the connection.

#### 参数

##### text

`string`

Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".

#### 返回

`boolean`

***

### writeln()

> **writeln**(`text`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2152

Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.

#### 参数

##### text

`string`

Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".

#### 返回

`boolean`
