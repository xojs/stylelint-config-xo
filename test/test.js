import test from 'ava';
import stylelint from 'stylelint';
import config from '..';

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

	t.is(results[0].warnings[1].rule, 'number-leading-zero');
});
