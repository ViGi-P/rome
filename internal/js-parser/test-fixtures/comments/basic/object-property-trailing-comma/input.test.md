# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `comments > basic > object-property-trailing-comma`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			trailingComments: ["3"]
			declaration: JSVariableDeclaration {
				kind: "var"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "obj"
							loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 1:4-1:7 (obj)
						}
						init: JSObjectExpression {
							properties: [
								JSObjectProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "a"
											loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 2:2-2:3 (a)
										}
										loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 2:2-2:3
									}
									value: JSStringLiteral {
										value: "1"
										loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 2:5-2:8
									}
									loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 2:2-2:8
								}
								JSObjectProperty {
									leadingComments: ["0"]
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "b"
											loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 3:2-3:3 (b)
										}
										loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 3:2-3:3
									}
									value: JSStringLiteral {
										value: "2"
										loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 3:5-3:8
									}
									loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 3:2-3:8
								}
								JSObjectProperty {
									leadingComments: ["1"]
									trailingComments: ["2"]
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "c"
											loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 4:2-4:3 (c)
										}
										loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 4:2-4:3
									}
									value: JSStringLiteral {
										value: "3"
										loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 4:5-4:8
									}
									loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 4:2-4:8
								}
							]
							loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 1:10-5:1
						}
						loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 1:4-5:1
					}
				]
				loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 1:0-5:2
			}
			loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 1:0-5:2
		}
	]
	comments: [
		CommentLine {
			id: "0"
			value: " comment 1"
			loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 2:10-2:22
		}
		CommentLine {
			id: "1"
			value: " comment 2"
			loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 3:10-3:22
		}
		CommentLine {
			id: "2"
			value: " comment 3"
			loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 4:10-4:22
		}
		CommentLine {
			id: "3"
			value: " comment 4"
			loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 5:3-5:15
		}
	]
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<comments/basic/object-property-trailing-comma/input.js>
	loc: SourceLocation comments/basic/object-property-trailing-comma/input.js 1:0-6:0
}
```

### `diagnostics`

```

```
