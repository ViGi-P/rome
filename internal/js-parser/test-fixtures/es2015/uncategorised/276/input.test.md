# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 276`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentObjectPattern {
					properties: []
					loc: SourceLocation es2015/uncategorised/276/input.js 1:1-1:7
				}
				right: JSReferenceIdentifier {
					name: "obj"
					loc: SourceLocation es2015/uncategorised/276/input.js 1:11-1:14 (obj)
				}
				loc: SourceLocation es2015/uncategorised/276/input.js 1:0-1:14
			}
			loc: SourceLocation es2015/uncategorised/276/input.js 1:0-1:14
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
				message: [RAW_MARKUP {value: "Unexpected character <emphasis>"}, "}", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<es2015/uncategorised/276/input.js>
				end: Position 1:7
				start: Position 1:6
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/276/input.js>
	loc: SourceLocation es2015/uncategorised/276/input.js 1:0-1:14
}
```

### `diagnostics`

```

 es2015/uncategorised/276/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character }

    ({ 42 }) = obj
          ^


```
