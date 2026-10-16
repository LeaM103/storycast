(() => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

  const transcriptToggle = document.querySelector("[data-toggle-transcript]");
  const transcriptContent = document.querySelector("#transcript-content");
  if (transcriptToggle && transcriptContent) {
    transcriptToggle.addEventListener("click", () => {
      const expanded = transcriptToggle.getAttribute("aria-expanded") === "true";
      transcriptToggle.setAttribute("aria-expanded", String(!expanded));
      transcriptContent.hidden = expanded;
      transcriptToggle.textContent = expanded ? "Show transcript" : "Hide transcript";
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();