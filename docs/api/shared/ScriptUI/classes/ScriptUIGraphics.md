# 类: ScriptUIGraphics

定义于: types-for-adobe/shared/ScriptUI.d.ts:491

An object used to draw custom graphics, found in the graphics property of window, container, and control objects.
Allows a script to customize aspects of the element’s appearance, such as the color and font. Use an onDraw callback function to set these properties or call the functions.All measurements are in pixels.

## 构造函数

### 构造函数

> **new ScriptUIGraphics**(): `ScriptUIGraphics`

#### 返回

`ScriptUIGraphics`

## 属性

### backgroundColor

> **backgroundColor**: [`ScriptUIBrush`](ScriptUIBrush.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:508

The background color for containers; for non-containers, the parent background color.
The paint color and style is defined in this brush object.This property is only supported for controls like dropdownlist, edittext, and listbox.

***

### currentPath

> `readonly` **currentPath**: [`ScriptUIPath`](ScriptUIPath.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:513

The current drawing path, encapsulated in a path object.

***

### currentPoint

> `readonly` **currentPoint**: [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:518

The current position in the current drawing path.

***

### disabledBackgroundColor

> **disabledBackgroundColor**: [`ScriptUIBrush`](ScriptUIBrush.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:524

The background color for containers when disabled or inactive; for non-containers, the parent background color.
The paint color and style is defined in this brush object.This property is only supported for controls like dropdownlist, edittext, and listbox.

***

### disabledForegroundColor

> **disabledForegroundColor**: [`ScriptUIPen`](ScriptUIPen.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:530

The text color when the element is disabled or inactive.
The paint color and style is defined in this pen object.

***

### font

> **font**: [`ScriptUIFont`](ScriptUIFont.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:535

The default font to use for displaying text.

***

### foregroundColor

> **foregroundColor**: [`ScriptUIPen`](ScriptUIPen.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:541

The text color.
The paint color and style is defined in this pen object.

***

### BrushType

> `readonly` `static` **BrushType**: [`_BrushOrPenType`](../enumerations/BrushOrPenType.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:496

Contains the enumerated constants for the type argument of newBrush().
Type constants are: SOLID_COLOR, THEME_COLOR.

***

### PenType

> `readonly` `static` **PenType**: [`_BrushOrPenType`](../enumerations/BrushOrPenType.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:502

Contains the enumerated constants for the type argument of newPen().
Type constants are: SOLID_COLOR, THEME_COLOR.

## 方法

### closePath()

> **closePath**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:547

Closes the current path.
Defines a line from the current position (currentPoint) to the start point of the current path (the value of currentPath).

#### 返回

`void`

***

### drawFocusRing()

> **drawFocusRing**(`left`, `top`, `width`, `height`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:556

Draws a focus ring within a region of this element.

#### 参数

##### left

`number`

The left coordinate of the region. Value is relative to the origin of this element.

##### top

`number`

The top coordinate of the region. Value is relative to the origin of this element.

##### width

`number`

The width of the region in pixels.

##### height

`number`

The height of the region in pixels.

#### 返回

`void`

***

### drawImage()

> **drawImage**(`image`, `left`, `top`, `width?`, `height?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:567

Draws an image within a given region of the element.
Uses the version of the image that is appropriate to the element's current state.

#### 参数

##### image

[`ScriptUIImage`](ScriptUIImage.md)

The image to draw. This object contains different versions of an image appropriate to various element states, such as a dimmed version for the disabled state.

##### left

`number`

The left coordinate of the region, relative to the origin of this element.

##### top

`number`

The top coordinate of the region, relative to the origin of this element.

##### width?

`number`

The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.

##### height?

`number`

The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.

#### 返回

`void`

***

### drawOSControl()

> **drawOSControl**(): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:572

Draw the platform-specific control associated with this element.

#### 返回

`void`

***

### drawString()

> **drawString**(`text`, `pen`, `x`, `y`, `font?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:582

Draw a string of text starting at a given point in this element, using a given drawing pen and font.

#### 参数

##### text

`string`

The text string.

##### pen

[`ScriptUIPen`](ScriptUIPen.md)

The drawing pen to use.

##### x

`number`

The left coordinate, relative to the origin of this element.

##### y

`number`

The top coordinate, relative to the origin of this element.

##### font?

[`ScriptUIFont`](ScriptUIFont.md)

The font to use. Default is the  font value in this object.

#### 返回

`void`

***

### ellipsePath()

> **ellipsePath**(`left`, `top`, `width`, `height`): [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:592

Defines an elliptical path within a given rectangular area in the currentPath object, which can be filled using fillPath() or stroked using strokePath().
Returns a Point object for the upper left corner of the area, which is the new currentPoint.

#### 参数

##### left

`number`

The left coordinate of the region, relative to the origin of this element.

##### top

`number`

The top coordinate of the region, relative to the origin of this element.

##### width

`number`

The width of the region in pixels.

##### height

`number`

The height of the region in pixels.

#### 返回

[`Point`](Point.md)

***

### fillPath()

> **fillPath**(`brush`, `path?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:599

Fills a path using a given painting brush.

#### 参数

##### brush

[`ScriptUIBrush`](ScriptUIBrush.md)

The brush object that defines the fill color.

##### path?

[`ScriptUIPath`](ScriptUIPath.md)

The path object. Default is the currentPath.

#### 返回

`void`

***

### lineTo()

> **lineTo**(`x`, `y`): [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:607

Adds a path segment to the currentPath.
The line is defined from the currentPoint to the specified destination point. Returns the Point object for the destination point, which becomes the new value of currentPoint.

#### 参数

##### x

`number`

The X coordinate for the destination point, relative to the origin of this element.

##### y

`number`

The Y coordinate for the destination point, relative to the origin of this element.

#### 返回

[`Point`](Point.md)

***

### measureString()

> **measureString**(`text`, `font?`, `boundingWidth?`): [`Dimension`](Dimension.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:616

Calculates the size needed to display a string using the given font.
Returns a Dimension object that contains the height and width of the string in pixels.

#### 参数

##### text

`string`

The text string to measure.

##### font?

[`ScriptUIFont`](ScriptUIFont.md)

The font to use. Default is the font value in this object.

##### boundingWidth?

`number`

The bounding width.

#### 返回

[`Dimension`](Dimension.md)

***

### moveTo()

> **moveTo**(`x`, `y`): [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:624

Adds a given point to the currentPath, and makes it the current drawing position.
Returns the Point object which is the new value of currentPoint.

#### 参数

##### x

`number`

The X coordinate for the new point, relative to the origin of this element.

##### y

`number`

The Y coordinate for the new point, relative to the origin of this element.

#### 返回

[`Point`](Point.md)

***

### newBrush()

> **newBrush**(`type`, `color`): [`ScriptUIBrush`](ScriptUIBrush.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:631

Creates a new painting brush object.

#### 参数

##### type

[`_BrushOrPenType`](../enumerations/BrushOrPenType.md)

The brush type, solid or theme. One of the constants ScriptUIGraphics.BrushType.SOLID_COLOR or ScriptUIGraphics.BrushType.THEME_COLOR.

##### color

`number`[]

The brush color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.

#### 返回

[`ScriptUIBrush`](ScriptUIBrush.md)

***

### newPath()

> **newPath**(): [`ScriptUIPath`](ScriptUIPath.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:637

Creates a new, empty path object.
Replaces any existing path in currentPath.

#### 返回

[`ScriptUIPath`](ScriptUIPath.md)

***

### newPen()

> **newPen**(`type`, `color`, `width`): [`ScriptUIPen`](ScriptUIPen.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:645

Creates a new drawing pen object.

#### 参数

##### type

[`_BrushOrPenType`](../enumerations/BrushOrPenType.md)

The pen type, solid or theme. One of the constants ScriptUIGraphics.PenType.SOLID_COLOR or ScriptUIGraphics.PenType.THEME_COLOR.

##### color

`number`[]

The pen color. If type is SOLID_COLOR, the color expressed as an array of three or four values, in the form [R, B, G, A] specifying the red, green, and blue values of the color and, optionally, the opacity (alpha channel). All values are numbers in the range [0.0..1.0]. An opacity of 0 is fully transparent, and an opacity of 1 is fully opaque. If the type is THEME_COLOR, the name string of the theme. Theme colors are defined by the host application.

##### width

`number`

The width of the pen line in pixels. The line is centered around the current point. For example, if the value is 2, drawing a line from (0, 10) to (5, 10) paints the two rows of pixels directly above and below y-position 10.

#### 返回

[`ScriptUIPen`](ScriptUIPen.md)

***

### rectPath()

> **rectPath**(`left`, `top`, `width`, `height`): [`Point`](Point.md)

定义于: types-for-adobe/shared/ScriptUI.d.ts:655

Defines a rectangular path in the currentPath object.
The rectangle can be filled using fillPath() or stroked using strokePath().Returns the Point object for the upper left corner of the rectangle, which becomes the new value of currentPoint.

#### 参数

##### left

`number`

The left coordinate relative to the origin of this element.

##### top

`number`

The top coordinate relative to the origin of this element.

##### width

`number`

The width in pixels.

##### height

`number`

The height in pixels.

#### 返回

[`Point`](Point.md)

***

### strokePath()

> **strokePath**(`pen`, `path?`): `void`

定义于: types-for-adobe/shared/ScriptUI.d.ts:662

Strokes the path segments of a path with a given drawing pen.

#### 参数

##### pen

[`ScriptUIPen`](ScriptUIPen.md)

The drawing pen that defines the color and line width.

##### path?

[`ScriptUIPath`](ScriptUIPath.md)

The path object. Default is the currentPath.

#### 返回

`void`
