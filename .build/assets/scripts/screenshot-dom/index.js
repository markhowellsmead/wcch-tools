import html2canvas from 'html2canvas-objectfit-fix';
import { saveAs } from 'file-saver';

document.querySelectorAll('.wp-block-cover').forEach((cover_block) => {
	cover_block.style.cursor = 'pointer';
	cover_block.addEventListener('click', (event) => {
		html2canvas(event.currentTarget, {
			letterRendering: 1,
			allowTaint: true,
			scale: 1,
		}).then(function (canvas) {
			canvas.toBlob(function (blob) {
				saveAs(blob, 'wcch-social-media-image.jpg');
			});
		});
	});
});
