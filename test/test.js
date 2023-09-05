const test = require('ava');
const stylelint = require('stylelint');
const config = require('..');

const hasRule = (errors, ruleId) => errors.some(x => x.rule === ruleId);

const runStylelint = async code => {
	const {results} = await stylelint.lint({
		code,
		config
	});

	for (const result of results) {
		if (result.deprecations.length !== 0) {
			throw new Error(`Deprecations:\n${result.deprecations.join('\n')}`);
		}

		if (result.invalidOptionWarnings.length !== 0) {
			const warnings = result.invalidOptionWarnings.map(x => x.text).join('\n');
			throw new Error(`Invalid options:\n${warnings}`);
		}
	}

	return results;
};

test('main', async t => {
	const results = await runStylelint(
		`div {
			/*nospaces*/
			left: 0.2em;
		}
		`
	);

	t.true(hasRule(results[0].warnings, 'comment-whitespace-inside'));
});
