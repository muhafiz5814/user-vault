import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <div className="min-h-screen bg-slate-800 text-white">
                <header className="bg-slate-500">
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