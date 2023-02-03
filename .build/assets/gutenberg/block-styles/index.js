import domReady from '@wordpress/dom-ready';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';

domReady(() => {
	registerBlockStyle('core/cover', {
		name: 'some-1080',
		label: 'Social Media',
	});
});

window.addEventListener('load', () => {
	unregisterBlockStyle('core/image', 'default');
	unregisterBlockStyle('core/image', 'rounded');
	unregisterBlockStyle('core/separator', 'wide');
});
