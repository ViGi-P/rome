# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 550`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "const"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "a"
							loc: SourceLocation core/uncategorised/550/input.js 2:6-2:7 (a)
						}
						init: JSNumericLiteral {
							value: 7
							format: "octal"
							loc: SourceLocation core/uncategorised/550/input.js 2:10-2:12
						}
						loc: SourceLocation core/uncategorised/550/input.js 2:6-2:12
					}
				]
				loc: SourceLocation core/uncategorised/550/input.js 2:0-2:13
			}
			loc: SourceLocation core/uncategorised/550/input.js 2:0-2:13
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
				message: RAW_MARKUP {value: "Legacy octal literals are not allowed in strict mode"}
			}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/550/input.js>
				end: Position 2:12
				start: Position 2:12
			}
		}
	]
	directives: [
		JSDirective {
			value: "use strict"
			loc: SourceLocation core/uncategorised/550/input.js 1:0-1:13
		}
	]
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/550/input.js>
	loc: SourceLocation core/uncategorised/550/input.js 1:0-3:0
}
```

### `diagnostics`

```

 core/uncategorised/550/input.js:2:12 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Legacy octal literals are not allowed in strict mode

    1 │ 'use strict';
  > 2 │ const a = 07;
      │             ^


```
