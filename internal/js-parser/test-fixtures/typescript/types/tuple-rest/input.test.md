# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > tuple-rest`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "let"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							meta: JSPatternMeta {
								typeAnnotation: TSTupleType {
									elementTypes: [
										TSTupleElement {
											optional: false
											typeAnnotation: TSStringKeywordTypeAnnotation {
												loc: SourceLocation typescript/types/tuple-rest/input.ts 1:8-1:14
											}
											loc: SourceLocation typescript/types/tuple-rest/input.ts 1:8-1:14
										}
										TSTupleElement {
											optional: false
											typeAnnotation: TSRestType {
												argument: TSArrayType {
													elementType: TSNumberKeywordTypeAnnotation {
														loc: SourceLocation typescript/types/tuple-rest/input.ts 1:19-1:25
													}
													loc: SourceLocation typescript/types/tuple-rest/input.ts 1:19-1:27
												}
												loc: SourceLocation typescript/types/tuple-rest/input.ts 1:16-1:27
											}
											loc: SourceLocation typescript/types/tuple-rest/input.ts 1:16-1:27
										}
									]
									loc: SourceLocation typescript/types/tuple-rest/input.ts 1:7-1:28
								}
								loc: SourceLocation typescript/types/tuple-rest/input.ts 1:4-1:28
							}
							loc: SourceLocation typescript/types/tuple-rest/input.ts 1:4-1:28
						}
						loc: SourceLocation typescript/types/tuple-rest/input.ts 1:4-1:28
					}
				]
				loc: SourceLocation typescript/types/tuple-rest/input.ts 1:0-1:28
			}
			loc: SourceLocation typescript/types/tuple-rest/input.ts 1:0-1:28
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts"]
	path: UIDPath<typescript/types/tuple-rest/input.ts>
	loc: SourceLocation typescript/types/tuple-rest/input.ts 1:0-2:0
}
```

### `diagnostics`

```

```
