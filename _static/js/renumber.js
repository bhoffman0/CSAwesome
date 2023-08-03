// The new numbering for chapters in the book. The non-funny numbers should
// basically correspond to the original units in CSAwesome which themselves
// correspond to the order give by the College Board in the CED. For now the
// funny numbers are commented out because I haven't added those chapters yet.

// Set this to true to skip renumbering things if they won't actually change.
// You'll still get the small table of contents built from the actual TOC.
const skipRenumbering = false;

const numbers = [
  // add a unit 0 to the toctree
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17"
];

// Adjust these two values. They are indices, not the unit numbers.
const practiceUnitsStart = 11;
const practiceUnits = 5;
const unitsAfterPractice = 1;

// Derived
const afterPractice = practiceUnitsStart + practiceUnits;
const end = afterPractice + unitsAfterPractice;

// Add selectors here if you find any more places where automatic numbers
// appear. These selectors should select the elements that contain the text
// starting with the unit number to be replaced.
const selectors = [
  '.toctree-wrapper ul li a',          // Main TOC
  'span.section-number',               // Text in chapters
  'li.dropdown.globaltoc-container a', // Dropdown menu
];

const chapterNum = /^(\d+)(\.| )(.*)$/;

const newNumber = (orig) => numbers[orig - 1];

const renumber = (e) => {
  e.innerText = e.innerText.replace(chapterNum, (match, p1, p2, p3) => `${numbers[p1 - 1]}${p2}${p3}`);
};


const buildSmallTOC = () => {
  const units = [...document.querySelectorAll('#table-of-contents .toctree-wrapper > ul > li')];

  const smallTOC = document.createElement('ul');
  const prep = units[0].cloneNode();
  prep.append("Practice units: ");

  const addToSmallTOC = (e) => {
    const copy = e.cloneNode();
    const a = e.querySelector('a').cloneNode(true);
    a.innerText = a.innerText.replace(/^(.*?)\./, 'Unit $1:');
    copy.append(a);
    smallTOC.append(copy);
  };

  const addToPrepEntry = (e, i, arr) => {
    const a = e.querySelector('a').cloneNode(true);
    a.innerText = numbers[i + practiceUnitsStart];
    prep.append(a);
    if (i < arr.length - 1) prep.append(", ");
  };

  // Add the main units
  units.slice(0, practiceUnitsStart).forEach(addToSmallTOC);

  // The prep entry
  units.slice(practiceUnitsStart, afterPractice).forEach(addToPrepEntry);
  smallTOC.append(prep);

  // And any remaining units.
  units.slice(afterPractice, end).forEach(addToSmallTOC);

  return smallTOC;
};


window.addEventListener("DOMContentLoaded", (event) => {

  if (!skipRenumbering) {
    // Renumbering of the TOC and section headers.
    selectors.forEach(s => {
      document.querySelectorAll(s).forEach(renumber);
    });
  }

  // Fill the small toc if it's on the page
  document.getElementById('small_toc')?.replaceWith(buildSmallTOC());

});
