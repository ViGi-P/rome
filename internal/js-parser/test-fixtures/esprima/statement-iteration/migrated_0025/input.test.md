# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-iteration > migrated_0025`

### `ast`

```javascript
JSRoot {
	body: [
		JSForInStatement {
			body: JSEmptyStatement {
				loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:23-1:24
			}
			left: JSMemberExpression {
				object: JSCallExpression {
					arguments: [
						JSBinaryExpression {
							operator: "in"
							left: JSReferenceIdentifier {
								name: "b"
								loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:7-1:8 (b)
							}
							right: JSReferenceIdentifier {
								name: "c"
								loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:12-1:13 (c)
							}
							loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:7-1:13
						}
					]
					callee: JSReferenceIdentifier {
						name: "a"
						loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:5-1:6 (a)
					}
					loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:5-1:14
				}
				property: JSComputedMemberProperty {
					value: JSNumericLiteral {
						value: 0
						loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:15-1:16
					}
					loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:14-1:17
				}
				loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:5-1:17
			}
			right: JSReferenceIdentifier {
				name: "d"
				loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:21-1:22 (d)
			}
			loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:0-1:24
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/statement-iteration/migrated_0025/input.js>
	loc: SourceLocation esprima/statement-iteration/migrated_0025/input.js 1:0-2:0
}
```

### `diagnostics`

```

```
