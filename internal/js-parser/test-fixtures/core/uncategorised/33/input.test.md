# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 33`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/33/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/33/input.js"
		end: Object {
			column: 22
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
				filename: "core/uncategorised/33/input.js"
				end: Object {
					column: 22
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "core/uncategorised/33/input.js"
					end: Object {
						column: 22
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				left: JSAssignmentIdentifier {
					name: "x"
					loc: Object {
						filename: "core/uncategorised/33/input.js"
						identifierName: "x"
						end: Object {
							column: 1
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				right: JSObjectExpression {
					loc: Object {
						filename: "core/uncategorised/33/input.js"
						end: Object {
							column: 22
							line: 1
						}
						start: Object {
							column: 4
							line: 1
						}
					}
					properties: Array [
						JSObjectMethod {
							kind: "get"
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "false"
									loc: Object {
										filename: "core/uncategorised/33/input.js"
										identifierName: "false"
										end: Object {
											column: 15
											line: 1
										}
										start: Object {
											column: 10
											line: 1
										}
									}
								}
								loc: Object {
									filename: "core/uncategorised/33/input.js"
									end: Object {
										column: 15
										line: 1
									}
									start: Object {
										column: 10
										line: 1
									}
								}
							}
							loc: Object {
								filename: "core/uncategorised/33/input.js"
								end: Object {
									column: 20
									line: 1
								}
								start: Object {
									column: 6
									line: 1
								}
							}
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: Object {
									filename: "core/uncategorised/33/input.js"
									end: Object {
										column: 20
										line: 1
									}
									start: Object {
										column: 18
										line: 1
									}
								}
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: Object {
									filename: "core/uncategorised/33/input.js"
									end: Object {
										column: 17
										line: 1
									}
									start: Object {
										column: 15
										line: 1
									}
								}
							}
						}
					]
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