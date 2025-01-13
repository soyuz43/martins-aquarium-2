import { database } from './aquariumData.js';

export const fishList = () => {
    // Start with an empty string
    let htmlString = '';

    // Iterate over each fish in the database
    for (const fish of database.fish) {
        // Append an HTML representation of the fish to the htmlString
        htmlString += `
            <div class="fish-card">
            <div class="image-container">
                <img src="${fish.image}" alt="${fish.species}">
            </div>
                <h2>${fish.name}</h2>
                <p>Species: ${fish.species}</p>
                <p>Length: ${fish.length} inches</p>
                <p>Location: ${fish.location}</p>
                <p>Diet: ${fish.diet}</p>
            </div>
        `;
    }

    // Return the complete HTML string
    return htmlString;
};
