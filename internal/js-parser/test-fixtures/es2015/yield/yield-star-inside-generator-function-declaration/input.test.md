# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > yield-star-inside-generator-function-declaration`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "test"
				loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:10-1:14 (test)
			}
			body: JSBlockStatement {
				body: [
					JSExpressionStatement {
						expression: JSYieldExpression {
							delegate: true
							argument: JSReferenceIdentifier {
								name: "v"
								loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:27-1:28 (v)
							}
							loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:20-1:28
						}
						loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:20-1:28
					}
				]
				directives: []
				loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:18-1:30
			}
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: []
				loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:15-1:17
			}
			loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:0-1:30
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/yield/yield-star-inside-generator-function-declaration/input.js>
	loc: SourceLocation es2015/yield/yield-star-inside-generator-function-declaration/input.js 1:0-1:30
}
```

### `diagnostics`

```

```
