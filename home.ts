document.addEventListener("DOMContentLoaded", async () => {
  const languageButton = document.getElementById("language-btn") as HTMLButtonElement;
  let currentLanguage: string = "en";

  // Load translations
  const translations = await fetch("lang.json").then((res) => res.json());

  const updateLanguage = (language: string) => {
    currentLanguage = language;

    // Replace content dynamically
    Object.keys(translations[language]).forEach((key) => {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = translations[language][key];
      }
    });
  };

  // Initialize with default language
  updateLanguage(currentLanguage);

  // Handle language change on button click
  languageButton.addEventListener("click", () => {
    const languages = ["en", "zh"];
    const nextLanguageIndex = (languages.indexOf(currentLanguage) + 1) % languages.length;
    updateLanguage(languages[nextLanguageIndex]);
  });
});
