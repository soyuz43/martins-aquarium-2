import { database } from './aquariumData.js';

export const tipList = () => {
    // Initialize the HTML string with a <ul> element
    let htmlString = '<ul class="tips">';

    // Iterate over each tip in the database
    for (const tip of database.tips) {
        // Append an <li> element for each tip
        htmlString += `
            <li class="tip">
                <h3>${tip.topic}</h3>
                <p>${tip.text}</p>
            </li>
        `;
    }

    // Close the <ul> element
    htmlString += '</ul>';

    // Return the complete HTML string
    return htmlString;
};
