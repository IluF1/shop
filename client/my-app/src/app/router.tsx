import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Spinner } from "@/components/Ui/Spinner";

const Auth = lazy(() => import("@/pages/Auth/Auth"));
const Home = lazy(() => import("@/pages/Home/Home"));
const CardPage = lazy(() => import("@/pages/Card/Card"));
const Profile = lazy(() => import("@/pages/Profile/Profile"));
const Registration = lazy(() => import("@/pages/Registration/Registration"));

export const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<Spinner />}>
                <Home />
            </Suspense>
        ),
    },
    {
        path: "/auth",
        element: (
            <Suspense fallback={<Spinner />}>
                <Auth />
            </Suspense>
        ),
    },
    {
        path: "/card/:id",
        element: (
            <Suspense fallback={<Spinner />}>
                <CardPage />
            </Suspense>
        ),
    },
    {
        path: "/profile",
        element: (
            <Suspense fallback={<Spinner />}>
                <Profile />
            </Suspense>
        ),
    },
    {
        path: "/registration",
        element: (
            <Suspense fallback={<Spinner />}>
                <Registration />
            </Suspense>
        ),
    },
]);
