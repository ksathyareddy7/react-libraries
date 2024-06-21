import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

function MyTranslation() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("title")}</h1>
      {/* accessing key in a namespace */}
      <p>{t("description.part2")}</p>
      <div>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("de")}>German</button>
      </div>
    </div>
  );
}

// i18n translations might still be loading by the http backend
// use react's Suspense
export function I18NextComponent() {
  return (
    <Suspense fallback="loading">
      <MyTranslation />
    </Suspense>
  );
}

/*

Important Links:

https://formatjs.io/docs/polyfills/intl-pluralrules

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules#examples

*/
