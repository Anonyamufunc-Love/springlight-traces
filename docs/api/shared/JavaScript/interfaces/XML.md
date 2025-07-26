# 接口: XML

定义于: types-for-adobe/shared/JavaScript.d.ts:2396

Wraps XML into an object.

## 方法

### addNamespace()

> **addNamespace**(`namespace`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2406

Adds a namespace declaration to the node. Returns the XML object itself.

#### 参数

##### namespace

[`Namespace`](Namespace.md)

The namespace to add.

#### 返回

`XML`

***

### appendChild()

> **appendChild**(`child`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2413

Appends the given XML to this XML as a child. Returns the XML object itself.
If the argument is not XML, creates a new XML element containing the argument as text. The element name of that new XML is the same as the last element in the original XML.

#### 参数

##### child

`XML`

The child XML to add.

#### 返回

`XML`

***

### attribute()

> **attribute**(`name`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2419

Returns a list containing all attribute elements matching the given name.

#### 参数

##### name

`string`

The attribute name to look for.

#### 返回

`XML`

***

### attributes()

> **attributes**(): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2424

Returns a list containing all attribute elements.

#### 返回

`XML`

***

### child()

> **child**(`name`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2431

Returns a list containing all children of this XML matching the given element name.
If the argument is a number, uses the number as index into the array of children.

#### 参数

##### name

`string`

The name or the index of the child element.

#### 返回

`XML`

***

### childIndex()

> **childIndex**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:2436

Returns a number representing the ordinal position of this XML object within the context of its parent.

#### 返回

`number`

***

### children()

> **children**(): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2441

Returns an XML object containing all the properties of this XML object in order.

#### 返回

`XML`

***

### comments()

> **comments**(): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2446

Returns an XML object containing the properties of this XML object that represent XML comments.

#### 返回

`XML`

***

### contains()

> **contains**(`xml`): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2452

Checks if this XML object contains the given XML object.

#### 参数

##### xml

`XML`

The XML to search for.

#### 返回

`boolean`

***

### copy()

> **copy**(): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2457

Creates a copy of this XML object.

#### 返回

`XML`

***

### descendants()

> **descendants**(`name?`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2464

Returns all the XML-valued descendants of this XML object with the given name.
If the name parameter is omitted, returns all descendants of this XML object.

#### 参数

##### name?

`string`

The name of the descendant to find.

#### 返回

`XML`

***

### elements()

> **elements**(`name?`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2470

Returns a list of XML children that are elements with a given name, or all children that are XML elements.

#### 参数

##### name?

`string`

The element name. If not supplied, gets all children that are XML elements.

#### 返回

`XML`

***

### hasComplexContent()

> **hasComplexContent**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2476

Reports whether this XML object contains complex content.
An XML object is considered to contain complex content if it represents an XML element that has child elements. XML objects representing attributes, comments, processing instructions and text nodes do not have complex content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has complex content.

#### 返回

`boolean`

***

### hasSimpleContent()

> **hasSimpleContent**(): `boolean`

定义于: types-for-adobe/shared/JavaScript.d.ts:2482

Reports whether this XML object contains simple content.
An XML object is considered to contain simple content if it represents a text node, represents an attribute node or if it represents an XML element that has no child elements. XML objects representing comments and processing instructions do not have simple content. The existence of attributes, comments, processing instructions and text nodes within an XML object is not significant in determining if it has simple content.

#### 返回

`boolean`

***

### inScopeNamespaces()

> **inScopeNamespaces**(): [`Namespace`](Namespace.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2488

Returns an array of Namespace objects mirroring the current list of valid namespaces at this element.
The last element of thereturned array is the default namespace.

#### 返回

[`Namespace`](Namespace.md)[]

***

### insertChildAfter()

> **insertChildAfter**(`child1`, `child2`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:2496

Inserts the given child2 after the given child1 in this XML object and returns this XML object.
If child1 is null, the method inserts child2 before all children of this XML object (that is, after none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.

#### 参数

##### child1

`XML`

The child to insert the other child after. If null, the method inserts child2 before all children of this XML object.

##### child2

`XML`

The XML to insert.

#### 返回

`void`

***

### insertChildBefore()

> **insertChildBefore**(`child1`, `child2`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:2504

Inserts the given child2 before the given child1 in this XML object and returns this XML object.
If child1 is null, the method inserts child2 after all children of this XML object (that is, before none of them). If child1 does not exist in this XML object, the method returns without modifying this XML object.

#### 参数

##### child1

`XML`

The child to search for. If null, the method inserts child2 after all children of this XML object.

##### child2

`XML`

The XML to insert.

#### 返回

`void`

***

### length()

> **length**(): `number`

定义于: types-for-adobe/shared/JavaScript.d.ts:2509

Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.

#### 返回

`number`

***

### localName()

> **localName**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2515

Returns the local name of this XML object.
This value corresponds to the element name unless the name has a namespace prefix. For example, if the element has the name "ns:tag", the return value is "tag".

#### 返回

`string`

***

### name()

> **name**(): [`QName`](QName.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2520

Returns a QName object containing the URI and the local name of the element.

#### 返回

[`QName`](QName.md)

***

### namespace()

> **namespace**(): [`Namespace`](Namespace.md)

定义于: types-for-adobe/shared/JavaScript.d.ts:2525

Returns a Namespace object containing the namespace URI of the current element.

#### 返回

[`Namespace`](Namespace.md)

***

### namespaceDeclarations()

> **namespaceDeclarations**(): [`Namespace`](Namespace.md)[]

定义于: types-for-adobe/shared/JavaScript.d.ts:2530

Returns an array containing all namespace declarations of this XML object.

#### 返回

[`Namespace`](Namespace.md)[]

***

### nodeKind()

> **nodeKind**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2535

Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".

#### 返回

`string`

***

### normalize()

> **normalize**(): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2540

Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.

#### 返回

`XML`

***

### parent()

> **parent**(): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2546

Returns the parent object of this XML object.
The root object, as returned by the XML constructor, does not have a parent and returns null. Note that the E4X standard does not define what happens if this XML object is a list containing elements with multiple parents.

#### 返回

`XML`

***

### prependChild()

> **prependChild**(`child`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2552

Inserts a given child into this object before its existing XML properties, and returns this XML object.

#### 参数

##### child

`XML`

The XML to insert.

#### 返回

`XML`

***

### processingInstructions()

> **processingInstructions**(`name?`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2559

Returns a list of preprocessing instructions.
Collects processing-instructions with the given name, if supplied. Otherwise, returns an XML list containing all the children of this XML object that are processing-instructions regardless of their name.

#### 参数

##### name?

`string`

The name of the preprocessing instruction to return.

#### 返回

`XML`

***

### removeNamespace()

> **removeNamespace**(`namespace`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2565

Removes the given namespace from this XML, and returns this XML.

#### 参数

##### namespace

[`Namespace`](Namespace.md)

The namespace to remove.

#### 返回

`XML`

***

### replace()

> **replace**(`name`, `value`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2573

Replaces the value of specified XML properties of this XML object returns this XML object.
This method acts like the assignment operator.

#### 参数

##### name

`string`

The property name. Can be a numeric property name, a name for a set of XML elements, or the properties wildcard “*”. If this XML object contains no properties that match the name, the method returns without modifying this XML object.

##### value

`XML`

The XML with which to replace the value of the matching property. Can be an XML object, XML list or any value that can be converted to a String with toString().

#### 返回

`XML`

***

### setChildren()

> **setChildren**(`value`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2579

Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.

#### 参数

##### value

`XML`

The new value, which can be a single XML object or an XML list.

#### 返回

`XML`

***

### setLocalName()

> **setLocalName**(`name`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:2586

Replaces the local name of this XML objectwith a string constructed from the given name
The local name is any part behind a colon character. If there is no colon, it is the entire name.

#### 参数

##### name

`string`

The name to set.

#### 返回

`void`

***

### setName()

> **setName**(`name`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:2592

Replaces the name of this XML object with the given QName object.

#### 参数

##### name

[`QName`](QName.md)

The fully qualified name.

#### 返回

`void`

***

### setNamespace()

> **setNamespace**(`namespace`): `void`

定义于: types-for-adobe/shared/JavaScript.d.ts:2599

Sets the namespace for this XML element.
If the namespace has not been declared in the tree above this element, adds a namespace declaration.

#### 参数

##### namespace

[`Namespace`](Namespace.md)

The namespace to set.

#### 返回

`void`

***

### text()

> **text**(): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2604

Returns an XML list containing all XML properties of this XML object that represent XML text nodes.

#### 返回

`XML`

***

### toString()

> **toString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2610

Returns the string representation of this object.
For text and attribute nodes, this is the textual value of the node; for other elements, this is the result of calling the toXMLString() method. If this XML object is a list, concatenates the result of calling toString() on each element.

#### 返回

`string`

***

### toXMLString()

> **toXMLString**(): `string`

定义于: types-for-adobe/shared/JavaScript.d.ts:2616

Returns an XML-encoded string representation of this XML object.
Always includes the start tag, attributes and end tag of the XML object regardless of its content. It is provided for cases when the default XML to string conversion rules are not desired. Interprets the global settings XML.prettyPrint and XML.prettyIndent.

#### 返回

`string`

***

### xpath()

> **xpath**(`expr`): `XML`

定义于: types-for-adobe/shared/JavaScript.d.ts:2622

Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.

#### 参数

##### expr

`string`

The XPath expression to use.

#### 返回

`XML`
