# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > namespace-tag`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSXElement {
				attributes: []
				children: []
				selfClosing: true
				name: JSXNamespacedName {
					name: JSXIdentifier {
						name: "Bar"
						loc: SourceLocation jsx/basic/namespace-tag/input.jsx 1:5-1:8
					}
					namespace: JSXIdentifier {
						name: "Foo"
						loc: SourceLocation jsx/basic/namespace-tag/input.jsx 1:1-1:4
					}
					loc: SourceLocation jsx/basic/namespace-tag/input.jsx 1:1-1:8
				}
				loc: SourceLocation jsx/basic/namespace-tag/input.jsx 1:0-1:11
			}
			loc: SourceLocation jsx/basic/namespace-tag/input.jsx 1:0-1:12
		}
		JSExpressionStatement {
			expression: JSXElement {
				attributes: []
				children: []
				selfClosing: false
				name: JSXNamespacedName {
					name: JSXIdentifier {
						name: "Bar"
						loc: SourceLocation jsx/basic/namespace-tag/input.jsx 2:5-2:8
					}
					namespace: JSXIdentifier {
						name: "Foo"
						loc: SourceLocation jsx/basic/namespace-tag/input.jsx 2:1-2:4
					}
					loc: SourceLocation jsx/basic/namespace-tag/input.jsx 2:1-2:8
				}
				loc: SourceLocation jsx/basic/namespace-tag/input.jsx 2:0-2:19
			}
			loc: SourceLocation jsx/basic/namespace-tag/input.jsx 2:0-2:19
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: ["jsx"]
	path: UIDPath<jsx/basic/namespace-tag/input.jsx>
	loc: SourceLocation jsx/basic/namespace-tag/input.jsx 1:0-3:0
}
```

### `diagnostics`

```

```
