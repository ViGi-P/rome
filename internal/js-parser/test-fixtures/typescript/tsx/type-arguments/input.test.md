# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > tsx > type-arguments`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSCallExpression {
				arguments: []
				callee: JSReferenceIdentifier {
					name: "f"
					loc: SourceLocation typescript/tsx/type-arguments/input.tsx 1:0-1:1 (f)
				}
				typeArguments: TSTypeParameterInstantiation {
					params: [
						TSTypeReference {
							typeName: JSReferenceIdentifier {
								name: "T"
								loc: SourceLocation typescript/tsx/type-arguments/input.tsx 1:2-1:3 (T)
							}
							loc: SourceLocation typescript/tsx/type-arguments/input.tsx 1:2-1:3
						}
					]
					loc: SourceLocation typescript/tsx/type-arguments/input.tsx 1:1-1:4
				}
				loc: SourceLocation typescript/tsx/type-arguments/input.tsx 1:0-1:6
			}
			loc: SourceLocation typescript/tsx/type-arguments/input.tsx 1:0-1:7
		}
		JSExpressionStatement {
			expression: JSNewExpression {
				arguments: []
				callee: JSReferenceIdentifier {
					name: "C"
					loc: SourceLocation typescript/tsx/type-arguments/input.tsx 2:4-2:5 (C)
				}
				typeArguments: TSTypeParameterInstantiation {
					params: [
						TSTypeReference {
							typeName: JSReferenceIdentifier {
								name: "T"
								loc: SourceLocation typescript/tsx/type-arguments/input.tsx 2:6-2:7 (T)
							}
							loc: SourceLocation typescript/tsx/type-arguments/input.tsx 2:6-2:7
						}
					]
					loc: SourceLocation typescript/tsx/type-arguments/input.tsx 2:5-2:8
				}
				loc: SourceLocation typescript/tsx/type-arguments/input.tsx 2:0-2:10
			}
			loc: SourceLocation typescript/tsx/type-arguments/input.tsx 2:0-2:11
		}
		TSTypeAlias {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation typescript/tsx/type-arguments/input.tsx 3:5-3:6 (A)
			}
			right: TSTypeReference {
				typeName: JSReferenceIdentifier {
					name: "T"
					loc: SourceLocation typescript/tsx/type-arguments/input.tsx 3:9-3:10 (T)
				}
				typeParameters: TSTypeParameterInstantiation {
					params: [
						TSTypeReference {
							typeName: JSReferenceIdentifier {
								name: "T"
								loc: SourceLocation typescript/tsx/type-arguments/input.tsx 3:11-3:12 (T)
							}
							loc: SourceLocation typescript/tsx/type-arguments/input.tsx 3:11-3:12
						}
					]
					loc: SourceLocation typescript/tsx/type-arguments/input.tsx 3:10-3:13
				}
				loc: SourceLocation typescript/tsx/type-arguments/input.tsx 3:9-3:13
			}
			loc: SourceLocation typescript/tsx/type-arguments/input.tsx 3:0-3:14
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: ["ts", "jsx"]
	path: UIDPath<typescript/tsx/type-arguments/input.tsx>
	loc: SourceLocation typescript/tsx/type-arguments/input.tsx 1:0-3:14
}
```

### `diagnostics`

```

```
