// Outer layout component for all other page components.
// This is parent component of every other component.
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-800 ">
                <header className="bg-slate-500 text-white">
                    <div>
                        <p className="text-2xl ms-10 py-2">UserVault</p>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout;