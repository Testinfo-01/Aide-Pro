const translations = {
  fr: {
    slogan: "Un Clic, Un Pro, Une Solution",
    servicesTitle: "Présentation des services"
  },
  en: {
    slogan: "Reliable services at your fingertips",
    servicesTitle: "Service Overview"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const userLang = localStorage.getItem("lang") || "fr";
  langSelect.value = userLang;
  updateLang(userLang);

  langSelect.addEventListener("change", () => {
    const selected = langSelect.value;
    localStorage.setItem("lang", selected);
    updateLang(selected);
  });
});

function updateLang(lang) {
  const t = translations[lang];
  document.getElementById("slogan").textContent = t.slogan;
  document.getElementById("servicesTitle").textContent = t.servicesTitle;
}
