# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-identifier > valid_await`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "var"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "await"
							loc: SourceLocation esprima/es2015-identifier/valid_await/input.js 1:4-1:9 (await)
						}
						loc: SourceLocation esprima/es2015-identifier/valid_await/input.js 1:4-1:9
					}
				]
				loc: SourceLocation esprima/es2015-identifier/valid_await/input.js 1:0-1:10
			}
			loc: SourceLocation esprima/es2015-identifier/valid_await/input.js 1:0-1:10
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "await"
				loc: SourceLocation esprima/es2015-identifier/valid_await/input.js 1:12-1:17 (await)
			}
			loc: SourceLocation esprima/es2015-identifier/valid_await/input.js 1:11-1:19
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-identifier/valid_await/input.js>
	loc: SourceLocation esprima/es2015-identifier/valid_await/input.js 1:0-2:0
}
```

### `diagnostics`

```

```
