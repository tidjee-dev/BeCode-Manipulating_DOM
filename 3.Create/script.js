/**
 * Generates an array of learner names.
 * @param {number} count - The number of learners to generate.
 * @returns {string[]} An array of learner names.
 */
const generateLearners = (count) => Array.from({ length: count }, (_, i) => `Learner ${i + 1}`);

/**
 * Creates a section element for a learner.
 * @param {string} name - The name of the learner.
 * @returns {HTMLElement} The section element for the learner.
 */
const createLearnerSection = (name) => {
  const section = document.createElement("section");
  section.innerHTML = `<p>${name}</p>`;
  section.style.padding = "10px";
  section.style.margin = "10px 0";
  section.style.textAlign = "center";
  section.style.backgroundColor = randomColor();
  section.style.color = getTextColor(section.style.backgroundColor);

  return section;
};

/**
 * Generates a random RGB color.
 * @returns {string} A random RGB color string.
 */
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Determines if a color is dark based on its brightness.
 * @param {string} color - An RGB color string.
 * @returns {boolean} True if the color is dark, otherwise false.
 */
const isDarkColor = (color) => {
  const [r, g, b] = color.match(/\d+/g).map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};

/**
 * Returns an appropriate text color based on the background color.
 * @param {string} bgColor - The background color.
 * @returns {string} The text color, either "white" or "black".
 */
const getTextColor = (bgColor) => {
  return isDarkColor(bgColor) ? "white" : "black";
};

// Generate learners and create sections
const learners = generateLearners(25);
const article = document.querySelector("article");
const sections = learners.map(createLearnerSection);

/**
 * Shuffles an array of sections randomly.
 * @param {HTMLElement[]} sections - The sections to shuffle.
 * @returns {HTMLElement[]} The shuffled sections.
 */
const shuffleSections = (sections) => sections.sort(() => Math.random() - 0.5);

// Shuffle sections and append them to the article
const shuffledSections = shuffleSections(sections);
article.append(...shuffledSections);

