import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "proyectos", element: <Projects /> },
      { path: "sobre-mi", element: <About /> },
      { path: "contacto", element: <Contact /> },
    ],
  },
]);

export default router;
