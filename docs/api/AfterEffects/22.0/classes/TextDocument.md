# 类: TextDocument

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2504

The TextDocument object stores a value for a TextLayer's Source Text property. Create it with the constructor, passing the string to be encapsulated.

## 构造函数

### 构造函数

> **new TextDocument**(`docText`): `TextDocument`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2505

#### 参数

##### docText

`string`

#### 返回

`TextDocument`

## 属性

### allCaps

> `readonly` **allCaps**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2529

True if a text layer has allcaps enabled

***

### applyFill

> **applyFill**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2562

When true, the text layer shows a fill.

***

### applyStroke

> **applyStroke**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2565

When true, the text layer shows a stroke.

***

### baselineLocs

> `readonly` **baselineLocs**: `number`[]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2556

The baseline (x,y) locations for a text layer.

***

### baselineShift

> `readonly` **baselineShift**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2547

This text layer’s baseline shift in pixels.

***

### boxText

> `readonly` **boxText**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2511

When true, the text layer is paragraph (bounded) text.

***

### boxTextPos

> `readonly` **boxTextPos**: \[`number`, `number`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2553

The layer coordinates from a paragraph (box) text layer’s anchor point as a [width, height] array of pixel dimensions.

***

### boxTextSize

> **boxTextSize**: \[`number`, `number`\]

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2595

For box text, the pixel dimensions for the text bounds.

***

### fauxBold

> `readonly` **fauxBold**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2523

True if a text layer has faux bold enabled

***

### fauxItalic

> `readonly` **fauxItalic**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2526

True if a text layer has faux italic enabled

***

### fillColor

> **fillColor**: [`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2568

The text layer’s fill color.

***

### font

> **font**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2571

The text layer’s font specified by its PostScript name.

***

### fontFamily

> `readonly` **fontFamily**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2520

The name of the font family

***

### fontLocation

> `readonly` **fontLocation**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2514

Path of font file, providing its location on disk (not guaranteed to be returned for all font types; return value may be empty string for some kinds of fonts)

***

### fontSize

> **fontSize**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2574

The text layer’s font size in pixels.

***

### fontStyle

> `readonly` **fontStyle**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2517

Style information — e.g., “bold”, “italic”

***

### horizontalScale

> `readonly` **horizontalScale**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2544

This text layer’s horizontal scale in pixels.

***

### justification

> **justification**: [`ParagraphJustification`](../enumerations/ParagraphJustification.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2577

The paragraph justification for the text layer.

***

### leading

> **leading**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2580

The text layer’s spacing between lines.

***

### pointText

> `readonly` **pointText**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2508

When true, the text layer is point (unbounded) text.

***

### smallCaps

> `readonly` **smallCaps**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2532

True if a text layer has smallcaps enabled

***

### strokeColor

> **strokeColor**: [`ThreeDColorValue`](../type-aliases/ThreeDColorValue.md)

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2583

The text layer’s stroke color.

***

### strokeOverFill

> **strokeOverFill**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2586

Indicates the rendering order for the fill and stroke of a text layer.

***

### strokeWidth

> **strokeWidth**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2589

The text layer’s stroke thickness.

***

### subscript

> `readonly` **subscript**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2538

True if a text layer has subscript enabled-

***

### superscript

> `readonly` **superscript**: `boolean`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2535

True if a text layer has superscript enabled-

***

### text

> **text**: `string`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2559

The text layer’s Source Text value.

***

### tracking

> **tracking**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2592

The text layer’s spacing between characters.

***

### tsume

> `readonly` **tsume**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2550

This text layer’s tsume value.

***

### verticalScale

> `readonly` **verticalScale**: `number`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2541

This text layer’s vertical scale in pixels.

## 方法

### resetCharStyle()

> **resetCharStyle**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2598

Restores the default character settings in the Character panel.

#### 返回

`void`

***

### resetParagraphStyle()

> **resetParagraphStyle**(): `void`

定义于: types-for-adobe/AfterEffects/22.0/index.d.ts:2601

Restores the default paragraph settings in the Paragraph panel.

#### 返回

`void`
