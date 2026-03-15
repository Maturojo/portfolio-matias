import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useI18n } from "../i18n/I18nProvider";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="brand">
          Matías Rojo
        </NavLink>

        <nav className="nav">
          <NavLink to="/proyectos" className={({ isActive }) => (isActive ? "active" : "")}>
            {t("nav.projects")}
          </NavLink>
          <NavLink to="/sobre-mi" className={({ isActive }) => (isActive ? "active" : "")}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="rightSide">
          <button
            className="langBtn"
            type="button"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Switch language"
            title="Switch language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <div className="social">
            <a className="iconBtn" href="https://github.com/Maturojo" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <FaGithub size={18} />
            </a>
            <a className="iconBtn" href="https://www.linkedin.com/in/matias-nahuel-rojo-antu%C3%B1a-385624230" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
