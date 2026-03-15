export const projects = [
  {
    title: "Sistema de gestión - Sur Maderas",
    description:
      "App interna para gestionar productos, notas de pedido y calendario. Autenticación con JWT y persistencia en MongoDB.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT"],
    repoUrl: "https://github.com/Maturojo/Surmaderas-gestion.git",
    demoUrl: "",
  },
  {
    title: "Cotizador / Calculadora de cortes",
    description:
      "Herramienta para calcular cortes a partir de medidas de placa, con interfaz clara y orientación comercial.",
    stack: ["HTML", "SCSS", "JavaScript"],
    repoUrl: "https://github.com/Maturojo/CotizadordeCortes.git",
    demoUrl: "https://surmaderas.com.ar/cotizador-de-cortes/",
  },

  {
    id: "generador-nota-pedido",
    title: "Generador de Nota de Pedido · Sur Maderas",
    tagline: "Carga de pedidos y generación/consulta de notas para operación diaria.",
    description:
      "Aplicación para registrar notas de pedido con datos de cliente, vendedor, medio de pago, productos y cálculos (total, descuento, adelanto y resto). Pensada para uso interno en el flujo comercial.",
    stack: ["JavaScript", "HTML", "CSS", "Deploy: Render"],
    demoUrl: "https://generadodenotadepedido-1.onrender.com/",
    repoUrl: "https://github.com/Maturojo/generadoDeNotaDePedido.git",
    highlights: [
      "Formulario completo de nota de pedido (cliente, vendedor, medio de pago)",
      "Gestión de múltiples productos por pedido",
      "Cálculos de totales y saldos (total, descuento, adelanto, resta)",
      "Acciones para guardar y visualizar notas",
    ],
    featured: true,
  },
  {
    id: "asistente-virtual-gestion-tareas",
    title: "Asistente Virtual · Sur Maderas",
    tagline: "Dashboard interno con acceso admin y vista por empleados.",
    description:
      "Aplicación interna orientada a organización operativa. Incluye flujo de acceso para administrador y secciones de empleados, con instalación tipo app (PWA) para uso rápido en escritorio.",
    stack: ["JavaScript", "HTML", "CSS", "PWA", "Deploy: Render"],
    demoUrl: "https://gestodetareas-1.onrender.com/index.html",
    repoUrl: "",
    highlights: [
      "Pantalla de acceso de administrador",
      "Sección de empleados / dashboard",
      "Opción para instalar como app (PWA)",
    ],
    featured: true,
  },
  {
    id: "coder-react-app",
    title: "Coder React App",
    tagline: "Proyecto en React deployado, orientado a práctica de arquitectura y componentes.",
    description:
      "Aplicación desarrollada en React y deployada en Vercel. Enfocada en componentización, navegación y estructura de proyecto para un entorno real de frontend.",
    stack: ["React", "JavaScript", "Deploy: Vercel"],
    demoUrl: "https://coder-react-matias-rojo.vercel.app/",
    repoUrl: "https://github.com/Maturojo/Coder-React-MatiasRojo.git",
    highlights: [
      "Estructura de componentes reutilizables",
      "Deploy público en Vercel",
      "Base sólida para seguir iterando features",
    ],
    featured: false,
},
];
