# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0080`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSObjectExpression {
				properties: [
					JSObjectProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "b"
								loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:5-1:6 (b)
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:5-1:6
						}
						value: JSReferenceIdentifier {
							name: "b"
							loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:5-1:6 (b)
						}
						loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:5-1:6
					}
				]
				loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:1-1:6
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:0-1:6
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:6-1:7
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:6-1:7
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:7-1:8
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:7-1:8
		}
		JSExpressionStatement {
			expression: JSNumericLiteral {
				value: 0
				loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:8-1:9
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:8-1:9
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:9-1:10
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:9-1:10
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:10-1:11
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:10-1:11
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: [RAW_MARKUP {value: "We expected to find the closing character <emphasis>"}, "]", RAW_MARKUP {value: "</emphasis> here"}]
					}
					frame {
						location: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:4-1:4
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Unclosed <emphasis>"}, "property name", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0080/input.js>
				end: Position 1:2
				start: Position 1:2
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0080/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0080/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0080/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed property name

    ({[a,b]:0})
      ^

  ℹ We expected to find the closing character ] here

    ({[a,b]:0})
        ^


```
