# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 362`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "x\\"
				loc: SourceLocation core/uncategorised/362/input.js 1:0-1:7 (x\\)
			}
			loc: SourceLocation core/uncategorised/362/input.js 1:0-1:7
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "Invalid Unicode escape"}
			}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/362/input.js>
				end: Position 1:7
				start: Position 1:7
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/362/input.js>
	loc: SourceLocation core/uncategorised/362/input.js 1:0-1:7
}
```

### `diagnostics`

```

 core/uncategorised/362/input.js:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid Unicode escape

    x\u005c
           ^


```
