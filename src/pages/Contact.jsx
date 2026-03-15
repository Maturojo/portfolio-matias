import { useState } from "react";

export default function Contact() {
  const endpoint = "https://formspree.io/f/xpqadlyq";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  // state: idle | sending | success | error

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Ingresá tu nombre.";
    if (!form.email.trim()) return "Ingresá tu email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return "Ingresá un email válido.";
    if (!form.message.trim()) return "Escribí tu mensaje.";
    if (form.message.trim().length < 10) return "El mensaje es muy corto (mínimo 10 caracteres).";
    return "";
  }

  async function onSubmit(e) {
    e.preventDefault();

    const err = validate();
    if (err) return setStatus({ state: "error", message: err });

    setStatus({ state: "sending", message: "Enviando..." });

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Form submission failed");

      setStatus({ state: "success", message: "Mensaje enviado. Te respondo a la brevedad." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        state: "error",
        message: "Hubo un problema al enviar. Probá de nuevo o escribime directo por email.",
      });
    }
  }

  return (
    <section>
      <h2>Contacto</h2>
      <p className="muted">
        Completá el formulario o escribime a{" "}
        <a href="mailto:maturojo123mdq@gmail.com">maturojo123mdq@gmail.com</a>.
      </p>

      <div className="card contactCard">
        <form onSubmit={onSubmit} className="form">
          <div className="field">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={onChange}
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="tuemail@gmail.com"
              autoComplete="email"
            />
          </div>

          <div className="field">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={onChange}
              placeholder="Contame en qué puedo ayudarte…"
            />
          </div>

          <div className="formActions">
            <button className="btn" type="submit" disabled={status.state === "sending"}>
              {status.state === "sending" ? "Enviando..." : "Enviar"}
            </button>

            <a className="btn btn--ghost" href="mailto:maturojo123mdq@gmail.com">
              Enviar por email
            </a>
          </div>

          {status.state !== "idle" && (
            <div
              className={`alert ${
                status.state === "success"
                  ? "alert--ok"
                  : status.state === "error"
                  ? "alert--err"
                  : ""
              }`}
              role="status"
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
