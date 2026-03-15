export default function ProjectCard({ title, description, stack, repoUrl, demoUrl }) {
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__desc">{description}</p>

      <div className="tags">
        {stack.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="card__actions">
        {demoUrl && (
          <a className="btn" href={demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {repoUrl && (
          <a className="btn btn--ghost" href={repoUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
