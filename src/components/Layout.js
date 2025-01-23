// Outer layout component for all other page components.
// This is parent component of every other component.
import { Link, Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-800 ">
                <header className="bg-slate-500 text-white">
                    <div>
                        <p className="text-2xl ms-6 py-2"><Link to={"/"}>UserVault</Link></p>
                    </div>
                </header>
                <main className="w-full">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout;