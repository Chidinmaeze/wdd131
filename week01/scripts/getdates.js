// Dynamically set the current year
const currentYearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Dynamically set the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

//or getdates.js

//const currentYear = new Date().getFullYear();
//document.getElementById('copyrightYear').textContent = `© ${currentYear}`;
//document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;/