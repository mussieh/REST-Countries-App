import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

const router = createBrowserRouter([
    {
        path: "/REST-Countries-App/",
        element: <Home />,
    },
    {
        path: "details/:cca3",
        element: <CountryDetails />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
