import test from 'ava';
import stylelint from 'stylelint';
import config from '..';

const hasRule = (errors, ruleId) => errors.some(x => x.rule === ruleId);

const runStylelint = async code => {
	const data = await stylelint.lint({
		code,
		config
	});

	return data.results;
};

test('main', async t => {
	const results = await runStylelint(
		`div {
			left: .2em;
		}
		`
	);

	t.true(hasRule(results[0].warnings, 'number-leading-zero'));
});
