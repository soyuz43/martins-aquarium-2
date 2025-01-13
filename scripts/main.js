import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

// ! Generate the fish list
const fishHTML = fishList()
// Select the container element
const fishListContainer = document.getElementById('fishList');
// Render each HTML string to the correct DOM element
fishListContainer.innerHTML = fishHTML;

// ! Generate the care tips
const tipHTML = tipList()
const tipListContainer = document.getElementById('tipList');
tipListContainer.innerHTML = tipHTML;

// ! Generate the location list
const locationHTML = locationList()
const locationListContainer = document.getElementById('locationList');
locationListContainer.innerHTML = locationHTML;
// Render each HTML string to the correct DOM element