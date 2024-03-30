import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Planet from "./components/planets-page-structure/Structure.tsx";

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
        <Planet planetName="mercury" />
      </>
    ),
  },
  {
    path: "/venus",
    element: (
      <>
        <App />
        <Planet planetName="venus"/>
      </>
    ),
  },
  {
    path: "/earth",
    element: (
      <>
        <App />
        <Planet planetName="earth"/>
      </>
    ),
  },
  {
    path: "/mars",
    element: (
      <>
        <App />
        <Planet planetName="mars" />
      </>
    ),
  },
  {
    path: "/jupiter",
    element: (
      <>
        <App />
        <Planet planetName="jupiter"  />
      </>
    ),
  },
  {
    path: "/saturn",
    element: (
      <>
        <App />
        <Planet planetName="saturn"  />
      </>
    ),
  },
  {
    path: "/uranus",
    element: (
      <>
        <App />
        <Planet planetName="uranus"  />
      </>
    ),
  },
  {
    path: "/neptune",
    element: (
      <>
        <App />
        <Planet planetName="neptune" />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
