import "./languageToggle.css";
import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      aria-label={
        language === "pt" ? "Switch to English" : "Mudar para Português"
      }
    >
      <span className={`lang-option ${language === "pt" ? "active" : ""}`}>
        <svg viewBox="0 0 36 36" width="18" height="18">
          <rect fill="#009B3A" width="36" height="36" rx="4" />
          <path fill="#FEDF00" d="M1.5 18L18 5l16.5 13L18 31z" />
          <circle fill="#002776" cx="18" cy="18" r="7" />
        </svg>
        PT
      </span>
      <span className="lang-divider">/</span>
      <span className={`lang-option ${language === "en" ? "active" : ""}`}>
        <svg viewBox="0 0 36 36" width="18" height="18">
          <rect fill="#B22234" width="36" height="36" rx="4" />
          <rect fill="#fff" y="3" width="36" height="2.4" />
          <rect fill="#fff" y="8" width="36" height="2.4" />
          <rect fill="#fff" y="13" width="36" height="2.4" />
          <rect fill="#fff" y="18" width="36" height="2.4" />
          <rect fill="#fff" y="23" width="36" height="2.4" />
          <rect fill="#fff" y="28" width="36" height="2.4" />
          <rect fill="#3C3B6E" width="16" height="16" rx="2" />
        </svg>
        EN
      </span>
    </button>
  );
};
