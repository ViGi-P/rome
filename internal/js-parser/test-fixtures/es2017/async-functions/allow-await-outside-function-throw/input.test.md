# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > allow-await-outside-function-throw`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 1:9-1:10 (a)
			}
			body: JSBlockStatement {
				body: [
					JSReturnStatement {
						argument: JSReferenceIdentifier {
							name: "await"
							loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 2:9-2:14 (await)
						}
						loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 2:2-2:14
					}
					JSExpressionStatement {
						expression: JSNumericLiteral {
							value: 1
							loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 2:15-2:16
						}
						loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 2:15-2:16
					}
				]
				directives: []
				loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 1:13-3:1
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: []
				loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 1:10-1:12
			}
			loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: {
				language: "js"
				path: UIDPath<es2017/async-functions/allow-await-outside-function-throw/input.js>
				end: Position 2:14
				start: Position 2:15
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2017/async-functions/allow-await-outside-function-throw/input.js>
	loc: SourceLocation es2017/async-functions/allow-await-outside-function-throw/input.js 1:0-4:0
}
```

### `diagnostics`

```

 es2017/async-functions/allow-await-outside-function-throw/input.js:2:15 parse(js) ━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    1 │ function a() {
  > 2 │   return await 1
      │                ^
    3 │ }


```
