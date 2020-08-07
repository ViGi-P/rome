# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 123`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/123/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/123/input.js"
		end: Object {
			column: 20
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "core/uncategorised/123/input.js"
				end: Object {
					column: 20
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "core/uncategorised/123/input.js"
					end: Object {
						column: 20
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				object: JSReferenceIdentifier {
					name: "universe"
					loc: Object {
						filename: "core/uncategorised/123/input.js"
						identifierName: "universe"
						end: Object {
							column: 8
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				property: JSComputedMemberProperty {
					value: JSReferenceIdentifier {
						name: "galaxyName"
						loc: Object {
							filename: "core/uncategorised/123/input.js"
							identifierName: "galaxyName"
							end: Object {
								column: 19
								line: 1
							}
							start: Object {
								column: 9
								line: 1
							}
						}
					}
					loc: Object {
						filename: "core/uncategorised/123/input.js"
						end: Object {
							column: 20
							line: 1
						}
						start: Object {
							column: 8
							line: 1
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```