const conditionalLoadScript = (filename, condition) => {
	if (!!condition) {
		const min = sht_theme.debug ? '' : '.min';
		let script = document.createElement('script');
		script.setAttribute(
			'src',
			`${sht_theme.directory_uri}/assets/scripts/${filename}${min}.js?version=${sht_theme.version}`
		);
		document.head.appendChild(script);
	}
};

conditionalLoadScript(
	'screenshot-dom',
	document.querySelectorAll('.wp-block-cover.is-style-some-1080').length
);
