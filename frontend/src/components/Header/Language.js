import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18n";
import { useState } from "react";
import { toUpper } from "lodash";
const Language = (props) => {
  const { t } = useTranslation;
  const [language, setLanguage] = useState("en");
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(i18n.language);
  };
  return (
    // i18n.language === "vi" ? "VIE" : "ENG"
    <>
      <NavDropdown
        title={toUpper(language)}
        id="basic-nav-dropdown-2"
        className="language"
      >
        <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>
          English
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>
          Việt Nam
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};
export default Language;
