// - import propertiesOrder from './properties-order.js';

// Allows:
// foo-bar
// FooBar
// foo-bar--foo-bar
// foo-bar__foo-bar
// FooBar--FooBar
// FooBar__FooBar
// FooBar--foo-bar
// foo-bar--FooBar
// Foo-bar
// …
const reLowerCaseFirstUpper = /([A-Z][a-z\d]*(-[a-z\d]+)*)/;
const reLowerCase = /([a-z][a-z\d]*(-[a-z\d]+)*)/;
const rePascalCase = /(([A-Z][a-zA-Z\d]+)*)/;
const reName = new RegExp(`^(${reLowerCaseFirstUpper.source}|${reLowerCase.source}|${rePascalCase.source})((--|__)(${reLowerCase.source}|${rePascalCase.source}))*$`);

const config = {
	plugins: [
		'stylelint-order',
		'stylelint-declaration-block-no-ignored-properties',
	],
	rules: {
		'color-no-invalid-hex': true,
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-no-unknown': true,
		'string-no-newline': true,
		'unit-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'property-no-unknown': true,
		'keyframe-declaration-no-important': true,
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': [
			true,
			{
				ignoreShorthands: [
					'grid-template',
				],
			},
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'block-no-empty': [
			true,
			{
				ignore: [
					'comments',
				],
			},
		],
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'media-feature-name-no-unknown': true,
		'at-rule-no-unknown': true,
		'declaration-property-value-no-unknown': true,
		'comment-no-empty': true,
		'no-descending-specificity': [
			true,
			{
				ignore: [
					'selectors-within-list',
				],
			},
		],
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'@stylistic/no-extra-semicolons': true,
		'no-invalid-double-slash-comments': true,
		'alpha-value-notation': 'percentage',
		'hue-degree-notation': 'angle',
		'color-function-notation': 'modern',
		'color-named': 'never',
		'function-url-no-scheme-relative': true,
		'keyframes-name-pattern': reLowerCase,
		'number-max-precision': 3,
		'time-min-milliseconds': 100,
		'value-no-vendor-prefix': [
			true,
			{
				ignoreValues: [
					'grab',
					'grabbing',
				],
			},
		],
		'property-no-vendor-prefix': [
			true,
			{
				ignoreProperties: [
					'app-region', // For Electron
					'appearance',
					'mask',
					'tab-size', // It's still only prefixed in Firefox
				],
			},
		],
		'declaration-no-important': true,
		'declaration-property-value-disallowed-list': {
			'/^border(?!-(width|spacing|radius|(top|bottom)-(left|right)-radius))/': [
				/thin/,
				/medium/,
				/thick/,
				'0', // Prefer `none`
			],
			'/^transition/': [
				/all/,
			],
		},
		'selector-class-pattern': reName,
		'selector-id-pattern': reName,
		'selector-max-attribute': 8,
		'selector-max-class': 8,
		'selector-max-compound-selectors': 8,
		'@stylistic/selector-max-empty-lines': 0,
		'selector-max-universal': 1,
		'selector-no-vendor-prefix': [
			true,
			{
				ignoreSelectors: [
					'::-webkit-input-placeholder',
				],
			},
		],
		'media-feature-name-no-vendor-prefix': true,
		'at-rule-no-vendor-prefix': true,
		'at-rule-property-required-list': {
			'font-face': [
				'font-display',
				'font-family',
				'font-style',
			],
		},
		'comment-word-disallowed-list': [
			[
				/^TODO:/,
				/^FIXME:/,
				'fuck',
				'shit',
				'damn',
				'twerk',
				'egg yolk',
			],
			{
				severity: 'warning',
			},
		],
		'max-nesting-depth': [
			8,
			{
				ignore: [
					'pseudo-classes',
				],
			},
		],
		'@stylistic/color-hex-case': 'lower',
		'color-hex-length': 'short',
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'named-where-possible',
		'@stylistic/function-comma-newline-after': 'always-multi-line',
		'@stylistic/function-comma-newline-before': 'never-multi-line',
		'@stylistic/function-comma-space-after': 'always-single-line',
		'@stylistic/function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'@stylistic/function-parentheses-newline-inside': 'always-multi-line',
		'@stylistic/function-parentheses-space-inside': 'never-single-line',
		'function-url-quotes': 'always',
		'@stylistic/function-whitespace-after': 'always',
		'@stylistic/number-leading-zero': 'always',
		'@stylistic/number-no-trailing-zeros': true,
		'@stylistic/string-quotes': [
			'single',
			{
				avoidEscape: false,
			},
		],
		'length-zero-no-unit': true,
		'@stylistic/unit-case': 'lower',
		'value-keyword-case': 'lower',
		'@stylistic/value-list-comma-newline-after': 'always-multi-line',
		'@stylistic/value-list-comma-newline-before': 'never-multi-line',
		'@stylistic/value-list-comma-space-after': 'always-single-line',
		'@stylistic/value-list-comma-space-before': 'never',
		'@stylistic/value-list-max-empty-lines': 0,
		'@stylistic/property-case': 'lower',
		'@stylistic/declaration-bang-space-after': 'never',
		'@stylistic/declaration-bang-space-before': 'always',
		'@stylistic/declaration-colon-newline-after': 'always-multi-line',
		'@stylistic/declaration-colon-space-after': 'always-single-line',
		'@stylistic/declaration-colon-space-before': 'never',
		'declaration-empty-line-before': 'never',
		'@stylistic/declaration-block-semicolon-newline-after': 'always',
		'@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
		'@stylistic/declaration-block-semicolon-space-after': 'always-single-line',
		'@stylistic/declaration-block-semicolon-space-before': 'never',
		'@stylistic/declaration-block-trailing-semicolon': 'always',
		'@stylistic/block-closing-brace-empty-line-before': 'never',
		'@stylistic/block-closing-brace-newline-after': 'always',
		'@stylistic/block-closing-brace-newline-before': 'always',
		'@stylistic/block-opening-brace-newline-after': 'always',
		'@stylistic/block-opening-brace-space-before': 'always',
		'@stylistic/selector-attribute-brackets-space-inside': 'never',
		'@stylistic/selector-attribute-operator-space-after': 'never',
		'@stylistic/selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'@stylistic/selector-combinator-space-after': 'always',
		'@stylistic/selector-combinator-space-before': 'always',
		'@stylistic/selector-descendant-combinator-no-non-space': true,
		'@stylistic/selector-pseudo-class-case': 'lower',
		'@stylistic/selector-pseudo-class-parentheses-space-inside': 'never',
		'@stylistic/selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
		'@stylistic/selector-list-comma-newline-after': 'always',
		'@stylistic/selector-list-comma-newline-before': 'never-multi-line',
		'@stylistic/selector-list-comma-space-after': 'always-single-line',
		'@stylistic/selector-list-comma-space-before': 'never',
		'rule-empty-line-before': [
			'always',
			{
				except: [
					'after-single-line-comment',
					'first-nested',
				],
				ignore: [
					'after-comment',
				],
			},
		],
		'@stylistic/media-feature-colon-space-after': 'always',
		'@stylistic/media-feature-colon-space-before': 'never',
		'@stylistic/media-feature-name-case': 'lower',
		'@stylistic/media-feature-parentheses-space-inside': 'never',
		'@stylistic/media-feature-range-operator-space-after': 'always',
		'@stylistic/media-re-range-operator-space-before': 'always',
		'@stylistic/media-query-list-comma-newline-after': 'always',
		'@stylistic/media-query-list-comma-newline-before': 'never-multi-line',
		'@stylistic/media-query-list-comma-space-before': 'never',
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'inside-block',
					'blockless-after-blockless',
				],
				ignore: [
					'after-comment',
				],
			},
		],
		'@stylistic/at-rule-name-case': 'lower',
		'@stylistic/at-rule-name-newline-after': 'always-multi-line',
		'@stylistic/at-rule-name-space-after': 'always-single-line',
		'@stylistic/at-rule-semicolon-newline-after': 'always',
		'@stylistic/at-rule-semicolon-space-before': 'never',
		'comment-whitespace-inside': 'always',
		'@stylistic/indentation': [
			'tab',
			{
				baseIndentLevel: 1,
			},
		],
		'@stylistic/linebreaks': 'unix',
		'@stylistic/max-empty-lines': 2,
		'@stylistic/no-eol-whitespace': true,
		'@stylistic/no-missing-end-of-source-newline': true,
		'@stylistic/no-empty-first-line': true,
		'@stylistic/unicode-bom': 'never',

		// `stylelint-order`
		'order/order': [
			'dollar-variables',
			'custom-properties',
			'declarations',
			'rules',
		],
		// Disabled for now: https://github.com/sindresorhus/stylelint-config-xo/pull/2#issuecomment-363438756
		// 'order/properties-order': propertiesOrder,

		// `stylelint-declaration-block-no-ignored-properties`
		'plugin/declaration-block-no-ignored-properties': true,
	},
};

export default config;
