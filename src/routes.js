import { createBrowserRouter } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import NewUser from "./pages/NewUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "users",
                element: <AllUsers />
            },
            {
                path: "add-user",
                element: <NewUser />
            }
        ]
    }
])