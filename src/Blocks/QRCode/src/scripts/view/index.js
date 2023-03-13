import QRCode from 'qrcode';

// domready event handler
function onReady() {
	// get all QRCode blocks
	const blocks = document.querySelectorAll('.wp-block-sht-qr-code');

	// loop through blocks
	blocks.forEach((block) => {
		// get the URL
		const url = block.dataset.url;

		// create an image element
		const image = document.createElement('img');

		// set the canvas size
		image.style.width = '100%';
		image.style.height = '100%';

		// append the canvas to the block
		block.appendChild(image);

		// generate the QRCode
		QRCode.toDataURL(
			url,
			{
				width: 1000,
				height: 1000,
				type: 'svg',
				margin: 0,
				color: {
					dark: '#495057ff',
				},
			},
			(err, url) => {
				if (err) {
					throw err;
				}
				image.src = url;
			}
		);
	});
}

// wait for the dom to be ready
document.addEventListener('DOMContentLoaded', onReady);
