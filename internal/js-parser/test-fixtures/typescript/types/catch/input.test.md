# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > catch`

### `ast`

```javascript
JSRoot {
	body: [
		JSTryStatement {
			block: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation typescript/types/catch/input.ts 1:4-1:6
			}
			handler: JSCatchClause {
				body: JSBlockStatement {
					body: []
					directives: []
					loc: SourceLocation typescript/types/catch/input.ts 2:19-2:21
				}
				param: JSBindingIdentifier {
					name: "e"
					meta: JSPatternMeta {
						typeAnnotation: TSUnknownKeywordTypeAnnotation {
							loc: SourceLocation typescript/types/catch/input.ts 2:10-2:17
						}
						loc: SourceLocation typescript/types/catch/input.ts 2:7-2:17
					}
					loc: SourceLocation typescript/types/catch/input.ts 2:7-2:17
				}
				loc: SourceLocation typescript/types/catch/input.ts 2:0-2:21
			}
			loc: SourceLocation typescript/types/catch/input.ts 1:0-2:21
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/types/catch/input.ts>
	loc: SourceLocation typescript/types/catch/input.ts 1:0-3:0
}
```

### `diagnostics`

```

```