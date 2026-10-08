import { createBrowserRouter } from "react-router-dom";

import UserWrapper from "../layouts/userLayouts/UserWrapper";

import Home from "../pages/home/Home";
import About from "../pages/about/About";

import Experiences from "../pages/experiences/Experiences";
import Movies from "../pages/experiences/movies/Movies";
import Events from "../pages/experiences/events/Events";
import Plays from "../pages/experiences/plays/Plays";
import Activities from "../pages/experiences/activities/Activities";

import NotFound from "../pages/NotFound";
import Contact from "../pages/contact/Contact";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <UserWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "experiences",
        children: [
          {
            index: true,
            element: <Experiences />,
          },

          {
            path: "movies",
            element: <Movies />,
          },

          {
            path: "events",
            element: <Events />,
          },

          {
            path: "plays",
            element: <Plays />,
          },

          {
            path: "activities",
            element: <Activities />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
