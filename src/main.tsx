import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Planet from "./components/planets-page-structure/Structure.tsx";
import merc from "./assets/images/planets/mercury.svg";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mercury",
    element: (
      <>
        <App />
        <Planet planetName="mercury" img={merc} />
      </>
    ),
  },
  {
    path: "/venus",
    element: (
      <>
        <App />
        <Planet planetName="venus" img={merc} />
      </>
    ),
  },
  {
    path: "/earth",
    element: (
      <>
        <App />
        <Planet planetName="earth" img={merc} />
      </>
    ),
  },
  {
    path: "/mars",
    element: (
      <>
        <App />
        <Planet planetName="mars" img={merc} />
      </>
    ),
  },
  {
    path: "/jupiter",
    element: (
      <>
        <App />
        <Planet planetName="jupiter" img={merc} />
      </>
    ),
  },
  {
    path: "/saturn",
    element: (
      <>
        <App />
        <Planet planetName="saturn" img={merc} />
      </>
    ),
  },
  {
    path: "/uranus",
    element: (
      <>
        <App />
        <Planet planetName="uranus" img={merc} />
      </>
    ),
  },
  {
    path: "/neptune",
    element: (
      <>
        <App />
        <Planet planetName="neptune" img={merc} />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
