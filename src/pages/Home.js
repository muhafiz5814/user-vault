// Home page component to render on landing page.
import { Link } from "react-router";

const Home = () => {
    return (
        <>
            <div className="text-white text-center mt-28">
                <p className="text-2xl md:text-3xl xl:text-4xl mb-20">Welcome to UserVault - A user management dashboard.</p>
                <Link to={"users"} className="m-10 bg-white text-black font-bold text-lg p-4">See all users</Link>
                <Link to={"add-user"} className="m-10 bg-white text-black font-bold text-lg p-4">Create User</Link>
            </div>
        </>
    )
}

export default Home;