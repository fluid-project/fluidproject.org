# Fluid Community Icon Set

This is a font containing icons used for the "community links" section of the Fluid website.

## Icon PUA Unicode List

* Book e602
* Bug e605
* Camera e600
* Envelope e603
* github e601
* People e606
* Speech bubbles e604
* External link e608

## To use

In your HTML:

        <span class="fluid-community-wiki"></span>
        <span class="fluid-community-bugs"></span>
        <span class="fluid-community-presentations"></span>
        <span class="fluid-community-mailinglist"></span>
        <span class="fluid-community-source"></span>
        <span class="fluid-community-meetings"></span>
        <span class="fluid-community-irc"></span>
        <span class="fluid-community-ext-link">Link</span>

In your CSS:

        @font-face {
            font-family: 'fluid-community';
            src:url('../fonts/fluid-community.eot?#iefix') format('embedded-opentype'),
                url('../fonts/fluid-community.eot'),
                url('../fonts/fluid-community.ttf');
        }

        .fluid-community-icon:before {
            font-family: 'fluid-community';
        }

        .fluid-community-wiki:before          { content: '\e602'; }
        .fluid-community-bugs:before          { content: '\e605'; }
        .fluid-community-presentations:before { content: '\e600'; }
        .fluid-community-mailinglist:before   { content: '\e603'; }
        .fluid-community-source:before        { content: '\e601'; }
        .fluid-community-meetings:before      { content: '\e606'; }
        .fluid-community-irc:before           { content: '\e604'; }
        .fluid-community

## Modifying the font:

1. Run IcoMoon for Chrome browser.
2. Open the selection.json file.
3. Delete, add, or replace icons as needed.
