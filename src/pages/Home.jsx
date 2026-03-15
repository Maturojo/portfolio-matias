import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nProvider";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiVite, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";


export default function Home() {
  const { t } = useI18n();

  return (
    <section className="home">
      <div className="hero">
        <p className="pill">{t("home.pill")}</p>
        <h1>{t("home.h1")}</h1>
        <p className="hero__sub">{t("home.sub")}</p>

        <div className="hero__actions">
          <Link className="btn" to="/proyectos">{t("home.ctaProjects")}</Link>
          <Link className="btn btn--ghost" to="/contacto">{t("home.ctaContact")}</Link>
        </div>
      </div>

      {/* EXPERIENCIA INTERNACIONAL */}
      <div className="block">
        <h2>{t("home.intlTitle")}</h2>
        <div className="card">
          <p className="muted" style={{ marginTop: 0 }}>
            {t("home.intlDesc")}
          </p>
        </div>
      </div>

      {/* TECNOLOGÍAS */}
      <div className="block">
        <h2>{t("home.techTitle")}</h2>
        <p className="muted">{t("home.techSub")}</p>
        <div className="techGrid">
          <Tech icon={<FaReact />} label="React" />
          <Tech icon={<SiVite />} label="Vite" />
          <Tech icon={<FaJsSquare />} label="JavaScript" />
          <Tech icon={<FaHtml5 />} label="HTML5" />
          <Tech icon={<FaCss3Alt />} label="CSS / SCSS" />
          <Tech icon={<FaNodeJs />} label="Node.js" />
          <Tech icon={<SiMongodb />} label="MongoDB" />
          <Tech icon={<FaGitAlt />} label="Git / GitHub" />
        </div>
      </div>

      {/* FORMACIÓN */}
      <div className="block">
        <h2>{t("home.educationTitle")}</h2>
        <div className="timeline">
          <div className="timelineItem">
            <span className="dot" />
            <div>
              <h3>{t("home.edu1Title")}</h3>
              <p className="muted">{t("home.edu1Desc")}</p>
            </div>
          </div>
          <div className="timelineItem">
            <span className="dot" />
            <div>
              <h3>{t("home.edu2Title")}</h3>
              <p className="muted">{t("home.edu2Desc")}</p>
            </div>
          </div>
          <div className="timelineItem">
            <span className="dot" />
            <div>
              <h3>{t("home.edu3Title")}</h3>
              <p className="muted">{t("home.edu3Desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLEMENTARIAS */}
      <div className="block">
        <h2>{t("home.extraTitle")}</h2>
        <div className="techGrid">
          <Tech icon={<SiAdobephotoshop />} label="Photoshop" />
          <Tech icon={<SiAdobeillustrator />} label="Illustrator" />
          <Tech label="Excel" />
          <Tech label="Trello" />
          <Tech label="Process / Ops" />
          <Tech label="Client communication" />
        </div>
      </div>
    </section>
  );
}

function Tech({ icon, label }) {
  return (
    <div className="techCard">
      {icon && <div className="techIcon">{icon}</div>}
      <span>{label}</span>
    </div>
  );
}

