import MyPortfolio from "./components/MyPortfolio";
import "./index.css";
import { MainContextProvider } from "./context/MainContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProjectsSection from "./components/ProjectsSection";
import Layout from "./Layout";
import DetailedProject from "./components/DetailedProject";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <MyPortfolio />,
        },

        {
          path: "about",
          element: <MyPortfolio />,
        },

        {
          path: "projects",
          element: <ProjectsSection />,
        },

        {
          path: "skills",
          element: <MyPortfolio />,
        },

        {
          path: "contact",
          element: <MyPortfolio />,
        },
        {
          path: "projects/:project_URL",
          element: <DetailedProject />,
        },
      ],
    },
  ]);
  return (
    <MainContextProvider>
      <RouterProvider router={router}>
        <MyPortfolio />
      </RouterProvider>
    </MainContextProvider>
  );
}

export default App;
