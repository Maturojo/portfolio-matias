export default function About() {
  return (
    <section>
      <h2>Sobre mí</h2>

      <p className="muted">
        Soy desarrollador junior orientado a frontend y full stack, con experiencia real construyendo
        aplicaciones para gestión interna, organización de tareas y procesos comerciales.
        Trabajo con foco en soluciones prácticas, código claro y herramientas que realmente se usan
        en el día a día.
      </p>

      <div className="twoCol">
        {/* DESARROLLO */}
        <div className="card">
          <h3>Desarrollo / Programación</h3>
          <ul className="list">
            <li>HTML5, CSS3, SCSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React (Vite, React Router)</li>
            <li>Node.js, Express</li>
            <li>MongoDB (Atlas)</li>
            <li>APIs REST, autenticación con JWT</li>
            <li>Git & GitHub</li>
            <li>Deploy en Vercel y Render</li>
          </ul>
        </div>

        {/* HERRAMIENTAS DE NEGOCIO */}
        <div className="card">
          <h3>Herramientas de negocio y gestión</h3>
          <ul className="list">
            <li>Excel avanzado (control de ingresos, gastos, inversiones)</li>
            <li>Google Sheets</li>
            <li>Organización de tareas y flujos de trabajo</li>
            <li>Automatización de procesos internos</li>
            <li>Uso de herramientas digitales en entornos reales de trabajo</li>
          </ul>
        </div>

        {/* DISEÑO */}
        <div className="card">
          <h3>Diseño y contenido</h3>
          <ul className="list">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Edición y preparación de material gráfico</li>
            <li>Diseño de interfaces simples y funcionales</li>
            <li>Enfoque en UX clara y usable</li>
          </ul>
        </div>

        {/* ORGANIZACIÓN Y TRABAJO */}
        <div className="card">
          <h3>Organización y trabajo en equipo</h3>
          <ul className="list">
            <li>Trello (gestión de tareas y proyectos)</li>
            <li>Trabajo con equipos pequeños y familiares</li>
            <li>Comunicación clara con perfiles no técnicos</li>
            <li>Orientación a resultados y mejora continua</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
