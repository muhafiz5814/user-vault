import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <header className="bg-slate-500 text-white">
                <div>
                    <p className="text-2xl ms-10 py-2">UserVault</p>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Layout;