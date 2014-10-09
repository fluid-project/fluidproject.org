# Fluid Star Icon

The star icon used for the Fluid logo is an icon font. The 

## To use

In your HTML:

        <span class="fluid-star"></span>

In your CSS:

        @font-face {
            font-family: 'fluid-star';
            src:url('../fonts/fluid-star.eot?#iefix') format('embedded-opentype'),
            url('../fonts/fluid-star.eot'),
            url('../fonts/fluid-star.ttf');
        }
        
        .fluid-star:before {
            content: '\e600';
            font-family: 'fluid-star';
            font-size: 3.5rem;
        }

## Modifying the font:

1. Run IcoMoon for Chrome browser.
2. Open the selection.json file.
3. Delete, add, or replace icon as needed.
