# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > regression > octal-float-fail`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSNumericLiteral {
				value: 7
				format: "octal"
				loc: SourceLocation core/regression/octal-float-fail/input.js 1:0-1:2
			}
			loc: SourceLocation core/regression/octal-float-fail/input.js 1:0-1:2
		}
		JSExpressionStatement {
			expression: JSNumericLiteral {
				value: 0.5
				loc: SourceLocation core/regression/octal-float-fail/input.js 1:2-1:4
			}
			loc: SourceLocation core/regression/octal-float-fail/input.js 1:2-1:4
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
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: {
				language: "js"
				path: UIDPath<core/regression/octal-float-fail/input.js>
				end: Position 1:2
				start: Position 1:2
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/regression/octal-float-fail/input.js>
	loc: SourceLocation core/regression/octal-float-fail/input.js 1:0-2:0
}
```

### `diagnostics`

```

 core/regression/octal-float-fail/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    07.5
      ^


```
