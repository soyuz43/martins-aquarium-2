import { database } from './aquariumData.js';

export const locationList = () => {
    let htmlString = '<article class="locations">';

    // Iterate over each location in the database
    for (const location of database.locations) {
        // Append a <section> element for each location
        htmlString += `
            <section class="location">
                <h3>${location.name}</h3>
                <p><strong>Country:</strong> ${location.country}</p>
                <p>${location.description}</p>
            </section>
        `;
    }

    // Close the <article> element
    htmlString += '</article>';

    // Return the complete HTML string
    return htmlString;
};
