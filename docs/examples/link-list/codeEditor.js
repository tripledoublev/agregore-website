import { $, loadingSpinner, backdrop, iframe } from '/common.js'; // Import common functions



// Import CSS from Agregore theme to use in the iframe preview
export let basicCSS = `
@import url("agregore://theme/vars.css");
            body, * {
                font-size: 1.2rem;
                margin: 0;
                padding: 0;
                font-family: var(--ag-theme-font-family);
                background: var(--ag-theme-background);
                color: var(--ag-theme-text);
            }
`;



// Show or hide the loading spinner
export function showSpinner(show) {
    backdrop.style.display = show ? 'block' : 'none';
    loadingSpinner.style.display = show ? 'block' : 'none';
}
