/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { useState } from 'react';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const accordionTitle = attributes.accordionTitle;
	const accordionContent = attributes.accordionContent;
	const headingLevel = attributes.headingLevel;
	//if ( accordionTitle === undefined ) {
	//	accordionTitle = "shit";
	//}
	//alert("The accordion title is: |" + accordionTitle + "|");
	//alert("The accordion content is: |" + accordionContent + "|");
	//alert("The accordion heading level is: |" + headingLevel + "|");

	const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'wwu-accordion-block' ) }>
				
				<TextControl
					label={ __(
						'Title:',
						'wwu-accordion-block'
					) }
					value={ accordionTitle || '' }
					onChange={ ( value ) =>
						setAttributes( { accordionTitle: value } )
					}
            	/>

				<TextControl
                            label={ __(
                                'Content:',
                                'wwu-accordion-block'
                            ) }
                            value={ accordionContent || '' }
                            onChange={ ( value ) =>
                                setAttributes( { accordionContent: value } )
                            }
            	/>
			 
				<SelectControl
					label={ __( 'Select a Heading Level:' ) }
					value={ headingLevel } // e.g: value = 'a'
					onChange={ ( selection ) => { setAttributes( { headingLevel: selection } ) } }
					__nextHasNoMarginBottom
				>
					<optgroup label="Heading Levels">
						<option value="h3">h3</option>
						<option value="h4">h4</option>
						<option value="h5">h5</option>
					</optgroup>
				</SelectControl>

				
                </PanelBody>
            </InspectorControls>
			
			<div class="accordion-set" {...blockProps} >  
                <div class="item">
                    <h3 class="title">
                        <div class="expand">
                            <span class="component-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>
                            {accordionTitle}
                        </div>
                    </h3>

                    <div class="content">
                        <p>{accordionContent}</p>
                    </div>
                </div>
            </div>
		</>
	);
}
