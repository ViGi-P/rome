# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `comments > basic > array-pattern-trailing-comma`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "const"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingArrayPattern {
							elements: [
								JSBindingIdentifier {
									name: "x"
									leadingComments: ["0"]
									trailingComments: ["1", "2"]
									meta: JSPatternMeta {
										loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 3:2-3:3
									}
									loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 3:2-3:3 (x)
								}
							]
							trailingComments: ["3"]
							loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 1:6-6:1
						}
						init: JSArrayExpression {
							elements: []
							loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 6:15-6:17
						}
						loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 1:6-6:17
					}
				]
				loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 1:0-6:18
			}
			loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 1:0-6:18
		}
	]
	comments: [
		CommentBlock {
			id: "0"
			value: " One "
			loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 2:2-2:11
		}
		CommentBlock {
			id: "1"
			value: " Two "
			loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 4:2-4:11
		}
		CommentBlock {
			id: "2"
			value: " Three "
			loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 5:2-5:13
		}
		CommentBlock {
			id: "3"
			value: " Four "
			loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 6:2-6:12
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<comments/basic/array-pattern-trailing-comma/input.js>
	loc: SourceLocation comments/basic/array-pattern-trailing-comma/input.js 1:0-7:0
}
```

### `diagnostics`

```

```
