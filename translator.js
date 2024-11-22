// Function to fetch translation JSON file
async function fetchTranslations(lang) {
  try {
    const response = await fetch(`translation/${lang}.json`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching translation file:", error);
    return {};
  }
}

// Function to update all content based on language
async function updateLanguage(lang) {
  const translations = await fetchTranslations(lang);

  // Find all elements with data-key and update their text content
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });

  // Adjust text direction for RTL languages (Arabic)
  // document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Event Listener for Language Selection
const languageSelector = document.getElementById("languageSelector");
const selectedFlag = document.getElementById("selectedFlag");

languageSelector.addEventListener("change", async (event) => {
  const selectedOption = event.target.options[event.target.selectedIndex];
  const selectedLang = event.target.value;
  const flagSrc = selectedOption.getAttribute("data-flag");

  // Update the flag and language
  selectedFlag.src = flagSrc || "";
  selectedFlag.alt = selectedOption.textContent.trim();

  // Update the content language
  await updateLanguage(selectedLang);
});

// Set Default Language on Page Load
document.addEventListener("DOMContentLoaded", async () => {
  const defaultLang = "en";

  // Set the default language in the dropdown
  languageSelector.value = defaultLang;

  // Set the default flag
  const defaultOption =
    languageSelector.options[languageSelector.selectedIndex];
  selectedFlag.src = defaultOption.getAttribute("data-flag");
  selectedFlag.alt = defaultOption.textContent.trim();

  // Update the content language
  await updateLanguage(defaultLang);
});
