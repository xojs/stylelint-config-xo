'use strict';

module.exports = {
	plugins: [
		'stylelint-order'
	],
	rules: {
		'color-no-invalid-hex': true,
		'font-family-no-duplicate-names': true,
		// 'font-family-no-missing-generic-family-keyword': true,
		'function-calc-no-unspaced-operator': true,
		'function-linear-gradient-no-nonstandard-direction': true,
		'string-no-newline': true,
		'unit-no-unknown': true,
		'shorthand-property-no-redundant-values': true,
		'property-no-unknown': true,
		'keyframe-declaration-no-important': true,
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides': true,
		'block-no-empty': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': true,
		'media-feature-name-no-unknown': true,
		'at-rule-no-unknown': true,
		'comment-no-empty': true,
		'no-descending-specificity': true,
		'no-duplicate-selectors': true,
		'no-empty-source': true,
		'no-extra-semicolons': true,
		'no-invalid-double-slash-comments': true,
		'no-unknown-animations': true,
		'color-named': 'never',
		'function-url-no-scheme-relative': true,
		'number-max-precision': 3,
		'time-min-milliseconds': 100,
		'value-no-vendor-prefix': true,
		'property-blacklist': [
			'float'
		],
		'property-no-vendor-prefix': true,
		'declaration-no-important': true,
		'declaration-property-value-blacklist': {
			'/^border/': [
				'/thin/', // TODO: Open issue on stylelint about allowing regex literals here
				'/medium/',
				'/thick/',
				'none' // Prefer `none`
			],
			'/^transition/': [
				'/all/'
			]
		},
		'selector-class-pattern': /^[a-z][a-z0-9_-]+$/, // Enforces lowercase
		'selector-id-pattern': /^[a-z][a-z0-9_-]+$/, // Enforces lowercase
		'selector-max-attribute': 4,
		'selector-max-class': 4,
		'selector-max-compound-selectors': 4,
		'selector-max-empty-lines': 0,
		'selector-max-universal': 1,
		'selector-no-vendor-prefix': true,
		'media-feature-name-blacklist': [
			'max-width', {
				message: 'Prefer `min-width` because mobile-first'
			}
		],
		'media-feature-name-no-vendor-prefix': true,
		'at-rule-no-vendor-prefix': true,
		'comment-word-blacklist': [
			[
				'/^TODO:/',
				'/^FIXME:/',
				'fuck',
				'shit',
				'damn',
				'twerk',
				'egg yolk'
			], {
				severity: 'warning'
			}
		],
		'max-nesting-depth': 3,
		'color-hex-case': 'upper',
		'color-hex-length': 'short',
		'font-family-name-quotes': 'always-where-recommended',
		'font-weight-notation': 'named-where-possible',
		'function-comma-newline-after': 'never-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always',
		'function-comma-space-before': 'never',
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-parentheses-newline-inside': 'never-multi-line',
		'function-parentheses-space-inside': 'never',
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',
		'number-leading-zero': 'always',
		'number-no-trailing-zeros': true,
		'string-quotes': ['single', {avoidEscape: false}],
		'length-zero-no-unit': true,
		'unit-case': 'lower',
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
		'custom-property-empty-line-before': 'never',
		'property-case': 'lower',
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-empty-line-before': 'never',
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-newline-before': 'never-multi-line',
		'declaration-block-semicolon-space-after': 'always-single-line',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-trailing-semicolon': 'always',
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-after': 'always',
		'block-closing-brace-newline-before': 'always',
		'block-opening-brace-newline-after': 'always',
		'block-opening-brace-space-before': 'always',
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-type-case': 'lower',
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-list-comma-space-after': 'always-single-line',
		'selector-list-comma-space-before': 'never',
		'rule-empty-line-before': ['always', {
			except: [
				'after-single-line-comment',
				'first-nested'
			],
			ignore: [
				'after-comment'
			]
		}],
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-before': 'never',
		'at-rule-empty-line-before': ['always', {
			except: [
				'after-same-name',
				'inside-block'
			],
			ignore: [
				'after-comment'
			]
		}],
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': 'always-multi-line',
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',
		'comment-whitespace-inside': 'always',
		indentation: 'tab',
		'max-empty-lines': 2,
		'no-eol-whitespace': true,
		'no-missing-end-of-source-newline': true,

		'order/properties-order': [{
			// Must be first
			properties: [
				'all'
			]
		},
		{
			// Display and box model
			properties: [
				'display',
				'box-sizing',
				'overflow',
				'width',
				'height',
				'min-width',
				'min-height',
				'max-width',
				'max-height',
				'padding',
				'padding-top',
				'padding-right',
				'padding-bottom',
				'padding-left',
				'padding-block-start',
				'padding-block-end',
				'padding-inline-start',
				'padding-inline-end',
				'border',
				'border-top',
				'border-right',
				'border-bottom',
				'border-left',
				'border-width',
				'border-top-width',
				'border-right-width',
				'border-bottom-width',
				'border-left-width',
				'border-color',
				'border-top-color',
				'border-right-color',
				'border-bottom-color',
				'border-left-color',
				'border-style',
				'border-top-style',
				'border-right-style',
				'border-bottom-style',
				'border-left-style',
				'border-image',
				'border-image-source',
				'border-image-width',
				'border-image-outset',
				'border-image-repeat',
				'border-image-slice',
				// TODO: Add the rest of the `border` properties
				'border-radius',
				'border-top-left-radius',
				'border-top-right-radius',
				'border-bottom-left-radius',
				'border-bottom-right-radius',
				'margin',
				'margin-top',
				'margin-right',
				'margin-bottom',
				'margin-left',
				'margin-block-start',
				'margin-block-end',
				'margin-inline-start',
				'margin-inline-end'
			]
		},
		{
			// Positioning
			properties: [
				'position',
				'top',
				'right',
				'bottom',
				'left',
				'vertical-align'
			]
		},
		{
			// Float
			properties: [
				'float',
				'clear'
			]
		},
		{
			// Flexbox
			properties: [
				'flex',
				'flex-basis',
				'flex-direction',
				'flex-flow',
				'flex-grow',
				'flex-shrink',
				'flex-wrap'
			]
		},
		{
			// Grid
			properties: [
				'grid',
				'grid-area',
				'grid-template',
				'grid-template-areas',
				'grid-template-rows',
				'grid-template-columns',
				'grid-row',
				'grid-row-start',
				'grid-row-end',
				'grid-column',
				'grid-column-start',
				'grid-column-end',
				'grid-auto-rows',
				'grid-auto-columns',
				'grid-auto-flow',
				'grid-gap',
				'grid-row-gap',
				'grid-column-gap'
			]
		},
		{
			// Align
			properties: [
				'align-content',
				'align-items',
				'align-self'
			]
		},
		{
			// Justify
			properties: [
				'justify-content',
				'justify-items',
				'justify-self'
			]
		},
		{
			// Order
			properties: [
				'order'
			]
		},
		{
			// Columns
			properties: [
				'columns',
				'column-gap',
				'column-fill',
				'column-rule',
				'column-rule-width',
				'column-rule-style',
				'column-rule-color',
				'column-span',
				'column-count',
				'column-width'
			]
		},
		{
			// Transform
			properties: [
				'transform',
				'transform-origin',
				'transform-box',
				'transform-style',
				'transform-function',
				'backface-visibility',
				'perspective',
				'perspective-origin'
			]
		},
		{
			// Visibility
			properties: [
				'visibility',
				'opacity',
				'z-index'
			]
		},
		{
			// Style
			properties: [
				'color',
				'background',
				'background-color',
				'background-image',
				'background-repeat',
				'background-position',
				'background-size',
				'background-attachment',
				'background-clip',
				'background-origin',
				'background-blend-mode',
				'outline',
				'outline-width',
				'outline-color',
				'outline-style',
				'outline-offset',
				'box-shadow'
			]
		},
		{
			// Lists
			properties: [
				'list-style',
				'list-style-type',
				'list-style-position',
				'list-style-image',
				'caption-side'
			]
		},
		{
			// Tables
			properties: [
				'table-layout',
				'border-collapse',
				'border-spacing',
				'empty-cells'
			]
		},
		{
			// Font
			properties: [
				'font',
				'font-family',
				'font-size',
				'font-size-adjust',
				'font-style',
				'font-weight',
				'font-smoothing',
				'font-synthesis',
				'font-kerning',
				'font-stretch',
				'font-variant',
				'font-variant-caps',
				'font-variant-numeric',
				'font-variant-position',
				'font-variant-ligatures',
				'font-variant-alternates',
				'font-variant-east-asian',
				'font-language-override',
				'font-feature-settings'
			]
		},
		{
			// Text alignment and decoration
			properties: [
				'direction',
				'tab-size',
				'text-align',
				'text-align-last',
				'text-justify',
				'text-indent',
				'text-transform',
				'text-decoration',
				'text-decoration-line',
				'text-decoration-color',
				'text-decoration-style',
				'text-rendering',
				'text-emphasis',
				'text-emphasis-color',
				'text-emphasis-style',
				'text-emphasis-position',
				'text-combine-upright',
				'text-underline-position',
				'text-orientation',
				'text-shadow',
				'text-overflow'
			]
		},
		{
			// Text spacing
			properties: [
				'line-height',
				'word-spacing',
				'letter-spacing',
				'white-space',
				'word-break',
				'word-wrap'
			]
		},
		{
			// Interactivity
			properties: [
				'transition',
				'transition-property',
				'transition-duration',
				'transition-timing-function',
				'transition-delay',
				'animation',
				'animation-name',
				'animation-duration',
				'animation-timing-function',
				'animation-direction',
				'animation-delay',
				'animation-iteration-count',
				'animation-fill-mode',
				'animation-play-state',
				'pointer-events',
				'cursor'
			]
		},
		{
			// Content
			properties: [
				'content',
				'quotes'
			]
		},
		{
			// Counters
			properties: [
				'counter-reset',
				'counter-increment'
			]
		}]
	}
};
