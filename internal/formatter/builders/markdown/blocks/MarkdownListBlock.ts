import {MarkdownListBlock} from "@internal/ast";
import {Builder, Token, concat, space} from "@internal/formatter";

export default function MarkdownListBlock(
	builder: Builder,
	node: MarkdownListBlock,
): Token {
	const tokens: Token[] = node.children.reduce(
		(tokens, child, index) => {
			if (node.ordered) {
				tokens.push(`${index + 1}.`);
				tokens.push(space);
			} else {
				if (child.value) {
					tokens.push(`${child.value}`);
					tokens.push(space);
				}
			}
			tokens.push(builder.tokenize(child, node));

			return tokens;
		},
		[] as Token[],
	);
	return concat(tokens);
}
