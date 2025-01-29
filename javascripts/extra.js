document.addEventListener("DOMContentLoaded", function() {
  // Sync with Material's native storage key
  const STORAGE_KEY = "md-color-scheme";

  // Get initial theme state
  const savedTheme = localStorage.getItem(STORAGE_KEY) || "default";
  document.body.setAttribute("data-md-color-scheme", savedTheme);

  // Watch for theme changes
  const mutationObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === "data-md-color-scheme") {
        const currentTheme = document.body.getAttribute("data-md-color-scheme");
        localStorage.setItem(STORAGE_KEY, currentTheme);
      }
    });
  });

  // Start observing body attributes
  mutationObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["data-md-color-scheme"]
  });

  // Debounced click handler
  let isToggling = false;
  document.querySelector(".md-header__button[data-md-color-scheme]").addEventListener("click", () => {
    if (!isToggling) {
      isToggling = true;
      setTimeout(() => {
        isToggling = false;
      }, 300);
    }
  });
});