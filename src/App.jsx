import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Error, HomeLayout, About, Exercises } from "./pages";
import { ElementError } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ElementError />,
      },
      {
        path: "exercises",
        element: <Exercises />,
        errorElement: <ElementError />,
      },
      {
        path: "exercise/:id",
        element: <Exercises />,
        errorElement: <ElementError />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ElementError />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
