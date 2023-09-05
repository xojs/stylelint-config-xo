'use strict';
// - const propertiesOrder = require('./properties-order');

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

module.exports = {
	plugins: [
		'stylelint-order',
		'stylelint-declaration-block-no-ignored-properties'
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
					'grid-template'
				]
			}
		],
		'declaration-block-no-shorthand-property-overrides': true,
		'block-no-empty': [
			true,
			{
				ignore: [
					'comments'
				]
			}
		],
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'media-feature-name-no-unknown': true,
		'at-rule-no-unknown': true,
		'comment-no-empty': true,
		'no-descending-specificity': [
			true,
			{
				ignore: [
					'selectors-within-list'
				]
			}
		],
		'no-duplicate-at-import-rules': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
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
					'grabbing'
				]
			}
		],
		'property-no-vendor-prefix': [
			true,
			{
				ignoreProperties: [
					'app-region', // For Electron
					'appearance',
					'mask',
					'tab-size' // It's still only prefixed in Firefox
				]
			}
		],
		'declaration-no-important': true,
		'declaration-property-value-disallowed-list': {
			'/^border(?!-(width|spacing|radius|(top|bottom)-(left|right)-radius))/': [
				/thin/,
				/medium/,
				/thick/,
				'0' // Prefer `none`
			],
			'/^transition/': [
				/all/
			]
		},
		'selector-class-pattern': reName,
		'selector-id-pattern': reName,
		'selector-max-attribute': 8,
		'selector-max-class': 8,
		'selector-max-compound-selectors': 8,
		'selector-max-universal': 1,
		'selector-no-vendor-prefix': [
			true,
			{
				ignoreSelectors: [
					'::-webkit-input-placeholder'
				]
			}
		],
		'media-feature-name-no-vendor-prefix': true,
		'at-rule-no-vendor-prefix': true,
		'at-rule-property-required-list': {
			'font-face': [
				'font-display',
				'font-family',
				'font-style'
			]
		},
		'comment-word-disallowed-list': [
			[
				/^TODO:/,
				/^FIXME:/,
				'fuck',
				'shit',
				'damn',
				'twerk',
				'egg yolk'
			],
			{
				severity: 'warning'
			}
		],
		'max-nesting-depth': [
			8,
			{
				ignore: [
					'pseudo-classes'
				]
			}
		],
		'color-hex-length': 'short',
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'named-where-possible',
		'function-name-case': 'lower',
		'function-url-quotes': 'always',
		'length-zero-no-unit': true,
		'value-keyword-case': 'lower',
		'declaration-empty-line-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
		'rule-empty-line-before': [
			'always',
			{
				except: [
					'after-single-line-comment',
					'first-nested'
				],
				ignore: [
					'after-comment'
				]
			}
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: [
					'inside-block',
					'blockless-after-blockless'
				],
				ignore: [
					'after-comment'
				]
			}
		],
		'comment-whitespace-inside': 'always',

		// `stylelint-order`
		'order/order': [
			'dollar-variables',
			'custom-properties',
			'declarations',
			'rules'
		],
		// Disabled for now: https://github.com/sindresorhus/stylelint-config-xo/pull/2#issuecomment-363438756
		// 'order/properties-order': propertiesOrder,

		// `stylelint-declaration-block-no-ignored-properties`
		'plugin/declaration-block-no-ignored-properties': true
	}
};
