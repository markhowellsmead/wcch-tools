import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { _x, __ } from '@wordpress/i18n';
import QRCode from 'qrcode';

import block_json from '../../../block.json';
const { name: block_name } = block_json;

registerBlockType(block_name, {
	icon: 'megaphone',
	edit: ({ attributes, setAttributes }) => {
		const blockProps = useBlockProps();
		const { url } = attributes;

		return (
			<>
				<InspectorControls>
					<PanelBody title={__('QR Code Settings', 'sht')}>
						<PanelRow>
							<TextControl
								label={__('URL', 'sht')}
								value={url}
								type="url"
								onChange={(url) => setAttributes({ url })}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<div {...blockProps}>
					<p>
						<strong>QR Code block</strong>
					</p>
					{url && (
						<>
							<div dangerouslySetInnerHTML={{ __html: url }} />
						</>
					)}
					{!url && (
						<div dangerouslySetInnerHTML={{ __html: 'No URL' }} />
					)}
				</div>
			</>
		);
	},
});
