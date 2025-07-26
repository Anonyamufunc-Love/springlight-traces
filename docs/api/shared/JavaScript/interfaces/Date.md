# 接口: Date

定义于: types-for-adobe/shared/JavaScript.d.ts:609

A date/time object.

## 方法

### getDate()

> **getDate**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:618

Returns the day of the month of the specified Date object in local time.

#### 返回

`number`

***

### getDay()

> **getDay**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:624

Returns the day of the week for the specified Date object in local time.
This is an integer from 0 (Sunday) to 6 (Saturday).Returns the day of the week for date.

#### 返回

`number`

***

### getFullYear()

> **getFullYear**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:629

Returns the four digit year of the specified Date object in local time.

#### 返回

`number`

***

### getHours()

> **getHours**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:634

Returns the hour of the specified Date object in local time.

#### 返回

`number`

***

### getMilliseconds()

> **getMilliseconds**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:639

Returns the milliseconds of the specified Date object in local time.

#### 返回

`number`

***

### getMinutes()

> **getMinutes**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:644

Returns the minutes of the specified Date object in local time.

#### 返回

`number`

***

### getMonth()

> **getMonth**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:649

Returns the month of the specified Date object in local time.

#### 返回

`number`

***

### getSeconds()

> **getSeconds**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:654

Returns the seconds of the specified Date object in local time.

#### 返回

`number`

***

### getTime()

> **getTime**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:659

Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.

#### 返回

`number`

***

### getTimezoneOffset()

> **getTimezoneOffset**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:664

Returns the difference in minutes between the computer's local time and UTC.

#### 返回

`number`

***

### getUTCDate()

> **getUTCDate**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:669

Returns the day of the month of the specified Date object according to UTC.

#### 返回

`number`

***

### getUTCDay()

> **getUTCDay**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:674

Returns the day of the week for the specified Date object according to UTC.

#### 返回

`number`

***

### getUTCFullYear()

> **getUTCFullYear**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:679

Returns the four digit year of the specified Date object according to UTC.

#### 返回

`number`

***

### getUTCHours()

> **getUTCHours**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:684

Returns the hour of the specified Date object according to UTC.

#### 返回

`number`

***

### getUTCMilliseconds()

> **getUTCMilliseconds**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:689

Returns the milliseconds of the specified Date object according to UTC.

#### 返回

`number`

***

### getUTCMinutes()

> **getUTCMinutes**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:694

Returns the minutes of the specified Date object according to UTC.

#### 返回

`number`

***

### getUTCMonth()

> **getUTCMonth**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:699

Returns the month of the specified Date object according to UTC.

#### 返回

`number`

***

### getUTCSeconds()

> **getUTCSeconds**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:704

Returns the seconds of the specified Date object according to UTC.

#### 返回

`number`

***

### getYear()

> **getYear**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:709

Returns the year of the specified Date object, as a difference from 1900, in local time.

#### 返回

`number`

***

### setDate()

> **setDate**(`date`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:716

Sets the day of the month of a specified Date object according to local time.
Returns the number of milliseconds between the new date and midnight, January 1, 1970.

#### 参数

##### date

`number`

An integer from 1 to 31 indicating the day of the month.

#### 返回

`number`

***

### setFullYear()

> **setFullYear**(`year`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:723

Sets the year of a specified Date object according to local time.
This method can also set month and date if those arguments are specified. Returns the number of milliseconds between the new date and midnight, January 1, 1970.

#### 参数

##### year

`number`

A four-digit integer value indicating the year to set.

#### 返回

`number`

***

### setHours()

> **setHours**(`hour`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:730

Sets the hours of a specified Date object according to local time.
Returns the number of milliseconds between the new date and midnight, January 1, 1970.

#### 参数

##### hour

`number`

An integer value from 0 (midnight) to 23 (11 PM).

#### 返回

`number`

***

### setMilliseconds()

> **setMilliseconds**(`ms`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:737

Sets the milliseconds of a specified Date object according to local time.
Returns the number of milliseconds between the new date and midnight, January 1, 1970.

#### 参数

##### ms

`number`

An integer value from 0 to 999.

#### 返回

`number`

***

### setMinutes()

> **setMinutes**(`minutes`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:744

Sets the minutes of a specified Date object according to local time.
Returns the number of milliseconds between the new date and midnight, January 1, 1970.

#### 参数

##### minutes

`number`

An integer value from 0 to 59.

#### 返回

`number`

***

### setMonth()

> **setMonth**(`month`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:751

Sets the month of a specified Date object according to local time.
Returns the number of milliseconds between the new date and midnight, January 1, 1970.

#### 参数

##### month

`number`

An integer value from 0 (Jan) to 11 (Dec).

#### 返回

`number`

***

### setSeconds()

> **setSeconds**(`seconds`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:758

Sets the seconds of a specified Date object according to local time.
Returns the number of milliseconds between the new date and midnight, January 1, 1970.

#### 参数

##### seconds

`number`

An integer value from 0 to 59.

#### 返回

`number`

***

### setTime()

> **setTime**(`ms`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:765

Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
Returns the value of ms.

#### 参数

##### ms

`number`

An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.

#### 返回

`number`

***

### setUTCDate()

> **setUTCDate**(`date`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:772

Sets the date of a specified Date object according to universal time.
Returns the number of milliseconds between the new date and midnight, January 1, 1970 in UTC time.

#### 参数

##### date

`number`

An integer from 1 to 31 indicating the day of the month.

#### 返回

`number`

***

### setUTCFullYear()

> **setUTCFullYear**(`year`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:779

Sets the year of a specified Date object according to UTC, can also set the month and date.
Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.

#### 参数

##### year

`number`

The year expressed in four digits.

#### 返回

`number`

***

### setUTCHours()

> **setUTCHours**(`hours`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:786

Sets the hours of a specified Date object according to UTC.
Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.

#### 参数

##### hours

`number`

An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.

#### 返回

`number`

***

### setUTCMilliseconds()

> **setUTCMilliseconds**(`ms`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:793

Sets the milliseconds of a specified Date object according to UTC.
Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.

#### 参数

##### ms

`number`

An integer value in the range of 0 to 999 indicating the number of milliseconds to set.

#### 返回

`number`

***

### setUTCMinutes()

> **setUTCMinutes**(`min`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:800

Sets the minutes of a specified Date object according to UTC.
Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.

#### 参数

##### min

`number`

An integer value in the range 0 to 59 indicating the number of minutes to be set.

#### 返回

`number`

***

### setUTCMonth()

> **setUTCMonth**(`month`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:807

Sets the month of a specified Date object according to UTC.
Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.

#### 参数

##### month

`number`

An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.

#### 返回

`number`

***

### setUTCSeconds()

> **setUTCSeconds**(`sec`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:814

Sets the seconds of a specified Date object according to UTC.
Returns the number of milliseconds between the date set and midnight, January 1, 1970, in UTC.

#### 参数

##### sec

`number`

An integer value in the range 0 to 59 indicating the number of seconds to set.

#### 返回

`number`

***

### setYear()

> **setYear**(`year`): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:821

Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
Returns the number of milliseconds between the date set and midnight, January 1, 1970.

#### 参数

##### year

`number`

An integer value indicating the year to set. The method interprets a 1- or 2- digit value to mean the 1900s; for example, 13 is interpreted to mean 1913.

#### 返回

`number`

***

### toDateString()

> **toDateString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:826

Returns the date as a string.

#### 返回

`string`

***

### toGMTString()

> **toGMTString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:831

Returns the date and time adjusted to GMT (UTC) as a string.

#### 返回

`string`

***

### toLocaleDateString()

> **toLocaleDateString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:836

Returns the date as a localized string.

#### 返回

`string`

***

### toLocaleString()

> **toLocaleString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:841

Returns a string value representing the date and time stored in the Date object in human readable format (localized).

#### 返回

`string`

***

### toLocaleTimeString()

> **toLocaleTimeString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:846

Returns the time as a localized string.

#### 返回

`string`

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:851

Creates a string representation of this object that can be fed back to eval() to re-create an object. Works only with built-in classes.

#### 返回

`string`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:857

Returns a string value representing the date and time stored in the Date object in human readable format.
Returns the following string is an example of the format returned by this method: Mon Aug 13, 10:54:21 GMT-0700 2001.

#### 返回

`string`

***

### toTimeString()

> **toTimeString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:862

Returns the time as a string.

#### 返回

`string`

***

### toUTCString()

> **toUTCString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:867

Returns the date and time adjusted to UTC as a string.

#### 返回

`string`

***

### valueOf()

> **valueOf**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:872

The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.

#### 返回

`number`
