# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > array-pattern-multi-element`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "multiElement"
				loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:9-1:21 (multiElement)
			}
			body: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:36-1:38
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: []
				rest: JSBindingArrayPattern {
					elements: [
						JSBindingIdentifier {
							name: "a"
							meta: JSPatternMeta {
								loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:26-1:27
							}
							loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:26-1:27 (a)
						}
						JSBindingIdentifier {
							name: "b"
							meta: JSPatternMeta {
								loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:29-1:30
							}
							loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:29-1:30 (b)
						}
						JSBindingIdentifier {
							name: "c"
							meta: JSPatternMeta {
								loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:32-1:33
							}
							loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:32-1:33 (c)
						}
					]
					meta: JSPatternMeta {
						loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:25-1:34
					}
					loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:25-1:34
				}
				loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:21-1:35
			}
			loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:0-1:38
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<test262/rest-parameter/array-pattern-multi-element/input.js>
	loc: SourceLocation test262/rest-parameter/array-pattern-multi-element/input.js 1:0-2:0
}
```

### `diagnostics`

```

```
