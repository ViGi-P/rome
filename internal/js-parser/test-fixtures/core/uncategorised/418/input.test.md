# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 418`

### `ast`

```javascript
JSRoot {
	body: [
		JSForInStatement {
			body: JSEmptyStatement {
				loc: SourceLocation core/uncategorised/418/input.js 1:14-1:15
			}
			left: JSAssignmentIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation core/uncategorised/418/input.js 1:8-1:7
			}
			right: JSObjectExpression {
				properties: []
				loc: SourceLocation core/uncategorised/418/input.js 1:11-1:13
			}
			loc: SourceLocation core/uncategorised/418/input.js 1:0-1:15
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {advice: [], category: ["parse"], categoryValue: "js", message: [RAW_MARKUP {value: "Invalid left-hand side in "}, "for-in statement"]}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/418/input.js>
				end: Position 1:7
				start: Position 1:5
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/418/input.js>
	loc: SourceLocation core/uncategorised/418/input.js 1:0-1:15
}
```

### `diagnostics`

```

 core/uncategorised/418/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in for-in statement

    for (+i in {});
         ^^


```
