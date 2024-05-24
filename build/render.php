<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
	
	if (! isset( $attributes['headingLevel'] )) { 
		$attributes['headingLevel'] = 'h3';
	}
	if (! isset( $attributes['accordionTitle'] )) { 
		$attributes['accordionTitle'] = 'N/A';
	}
	if (! isset( $attributes['accordionContent'] )) { 
		$attributes['accordionContent'] = 'N/A';
	}

    $myProps = get_block_wrapper_attributes();
	$myProps = rtrim($myProps, '"');
	$myProps = $myProps . ' item"';
	echo "The Props are: |" . $myProps . "|";
	$block_content = '
	<wwu-accordion ' . $myProps . ' >
		<wwu-accordion-item label=" ' . $attributes['accordionTitle'] . '" heading-level="' . $attributes['headingLevel'] . '">
			<p>' . $attributes['accordionContent'] . '</p>
		</wwu-accordion-item>
	</wwu-accordion>
	
	<script>
	if (customElements.get("wwu-accordion") === undefined) {
		//alert("Custom element NOT defined");
		var scriptTag = document.createElement("script");
		scriptTag.type = "text/javascript";
		scriptTag.src = "https://ashlar.blob.core.windows.net/ashlar-theme-files/js/accordion.js";
		$("body").append(scriptTag);
	} else {
		//alert("Custom element IS defined");
	}
	</script>
	';
	
	echo $block_content; 
	

    
	
