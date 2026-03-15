import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h2>Proyectos</h2>
      <p className="muted">Una selección corta, enfocada en proyectos con impacto real.</p>

      <div className="grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
