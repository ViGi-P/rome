# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export`

### `ast`

```javascript
JSRoot {
	body: [
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: [
				JSExportLocalSpecifier {
					exported: JSIdentifier {
						name: "foo"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12 (foo)
					}
					local: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12 (foo)
					}
					loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12
				}
			]
			loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:0-1:15
		}
		JSExportLocalDeclaration {
			exportKind: "value"
			specifiers: [
				JSExportLocalSpecifier {
					exported: JSIdentifier {
						name: "foo"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:16-2:19 (foo)
					}
					local: JSReferenceIdentifier {
						name: "bar"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:9-2:12 (bar)
					}
					loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:9-2:19
				}
			]
			loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:0-2:22
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Defined already here"}
					}
					frame {
						location: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "`"}, "foo", RAW_MARKUP {value: "` has already been exported. Exported identifiers must be unique."}]
			}
			location: {
				language: "js"
				path: UIDPath<es2015/modules/duplicate-named-export/input.js>
				end: Position 2:19
				start: Position 2:9
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "module"
	syntax: []
	path: UIDPath<es2015/modules/duplicate-named-export/input.js>
	loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:0-3:0
}
```

### `diagnostics`

```

 es2015/modules/duplicate-named-export/input.js:2:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ `foo` has already been exported. Exported identifiers must be unique.

    1 │ export { foo };
  > 2 │ export { bar as foo };
      │          ^^^^^^^^^^

  ℹ Defined already here

  > 1 │ export { foo };
      │          ^^^
    2 │ export { bar as foo };


```
