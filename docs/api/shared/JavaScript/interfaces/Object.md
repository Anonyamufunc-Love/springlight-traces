# 接口: Object

定义于: types-for-adobe/shared/JavaScript.d.ts:203

The base class of all JavaScript objects.

## 属性

### constructor

> `readonly` **constructor**: [`Function`](Function.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:213

Points to the constructor function that created this object.
Note that this property is treated as an XML element in the XML class.

***

### prototype

> `readonly` **prototype**: `Object`

定义于: types-for-adobe/shared/JavaScript.d.ts:219

Points to the prototype object for this object.
Note that this property is treated as an XML element in the XML class.

***

### reflect

> `readonly` **reflect**: [`Reflection`](Reflection.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:225

Retrieves and returns the Reflection object associated with this method or a property.
Note that this property is treated as an XML element in the XML class.

## 方法

### hasOwnProperty()

> **hasOwnProperty**(`name`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:231

Reports whether a given property is defined with an instance or within the prototype chain.

#### 参数

##### name

`string`

The name of the property to check.

#### 返回

`boolean`

***

### isPrototypeOf()

> **isPrototypeOf**(`what`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:237

Checks whether the given object is a prototype of this object.

#### 参数

##### what

`Object`

The object to check.

#### 返回

`boolean`

***

### propertyIsEnumerable()

> **propertyIsEnumerable**(`name`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:243

Reports whether a given property is enumerable.

#### 参数

##### name

`string`

The name of the property to check.

#### 返回

`boolean`

***

### toLocaleString()

> **toLocaleString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:248

Creates and returns a string representing this object, localized for the current locale. See toString().

#### 返回

`string`

***

### toSource()

> **toSource**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:254

Creates and returns a string representation of this object.
This function serializes the object, so that it can, for example, be passed between engines. Pass the returned string back to eval() to recreate the object. Works only with built-in classes.

#### 返回

`string`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:260

Creates and returns a string representing this object.
Many objects (such as Date) override this method in favor of their own implementation. If an object has no string value and no user-defined toString() method, the default method returns [object type], where type is the object type or the name of the constructor function that created the object.

#### 返回

`string`

***

### unwatch()

> **unwatch**(`name`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:266

Removes the watch function of a property.

#### 参数

##### name

`string`

The name of the property to unwatch.

#### 返回

`void`

***

### valueOf()

> **valueOf**(): `Object`

定义于: types-for-adobe/shared/JavaScript.d.ts:272

Retrieves and returns the primitive value of this object.
If the object has no primitive value, returns the object itself.Note that you rarely need to call this method yourself.The JavaScript interpreter automatically invokes it when encountering an object where a primitive value is expected.

#### 返回

`Object`

***

### watch()

> **watch**(`name`, `func`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:280

Adds a watch function to a property, which is called when the value changes.
This function can accept, modify, or reject a new value that the user, application, or a script has attempted to place in a property.

#### 参数

##### name

`string`

The name of the property to watch.

##### func

[`Function`](Function.md)

The function to be called when the value of this property changes. This function must three arguments, and return as its result the value to be stored in the property. The arguments are: name: the name of the property that changes. oldValue: The old property value. newValue: The new property value that was specified.

#### 返回

`void`
