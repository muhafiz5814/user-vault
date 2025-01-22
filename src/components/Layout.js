import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <h1>This is layout of UserVault.</h1>
            <Outlet />
        </>
    )
}

export default Layout;