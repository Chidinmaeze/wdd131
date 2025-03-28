// Dynamically set the current year in the footer
const currentYearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Dynamically set the last modified date in the footer
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;

// Hamburger menu toggle functionality
const hamburger = document.getElementById('hamburger');
const navigation = document.querySelector('.navigation');

// Toggle the navigation menu visibility
hamburger.addEventListener('click', function () {
    navigation.classList.toggle('open');
});