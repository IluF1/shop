import { createBrowserRouter } from "react-router-dom";

import { Auth } from "@/pages/Auth";
import { CardPage } from "@/pages/Card";
import { Home } from "@/pages/Home";
import { Profile } from "@/pages/Profile";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/card/:id",
        element: <CardPage />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);
