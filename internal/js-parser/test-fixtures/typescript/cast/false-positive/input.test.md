# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > false-positive`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSCallExpression {
				arguments: [
					JSBinaryExpression {
						operator: "<"
						left: JSReferenceIdentifier {
							name: "x"
							loc: SourceLocation typescript/cast/false-positive/input.ts 1:2-1:3 (x)
						}
						right: JSNumericLiteral {
							value: 0
							loc: SourceLocation typescript/cast/false-positive/input.ts 1:6-1:7
						}
						loc: SourceLocation typescript/cast/false-positive/input.ts 1:2-1:7
					}
					JSRegExpLiteral {
						global: false
						insensitive: false
						multiline: false
						noDotNewline: false
						sticky: false
						unicode: false
						expression: JSRegExpSubExpression {
							body: [
								JSRegExpCharacter {
									value: "a"
									loc: SourceLocation typescript/cast/false-positive/input.ts 1:10-1:11
								}
							]
							loc: SourceLocation typescript/cast/false-positive/input.ts 1:10-1:11
						}
						loc: SourceLocation typescript/cast/false-positive/input.ts 1:9-1:12
					}
				]
				callee: JSReferenceIdentifier {
					name: "f"
					loc: SourceLocation typescript/cast/false-positive/input.ts 1:0-1:1 (f)
				}
				loc: SourceLocation typescript/cast/false-positive/input.ts 1:0-1:13
			}
			loc: SourceLocation typescript/cast/false-positive/input.ts 1:0-1:14
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/cast/false-positive/input.ts>
	loc: SourceLocation typescript/cast/false-positive/input.ts 1:0-2:0
}
```

### `diagnostics`

```

```
