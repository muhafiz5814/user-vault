import { Link } from "react-router";

const Home = () => {
    return (
        <>
            <div className="text-white">
                <p>Welcome to UserVault - A user management dashboard.</p>
                <Link to={"users"} className="m-10">See all users</Link>
                <Link to={"add-user"} className="m-10">Create User</Link>
            </div>
        </>
    )
}

export default Home;