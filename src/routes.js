import { createBrowserRouter } from "react-router";

// Import necessary components to render on specific path.
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import NewUser from "./pages/NewUser";
import EditUser from "./pages/EditUser";

/**
 * Creates routes for different static and dynamic paths.
 */
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
            },
            {
                path: "edit-user/:id",
                element: <EditUser />
            }
        ]
    }
])