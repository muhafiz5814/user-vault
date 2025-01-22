import { Link } from "react-router";

const Home = () => {
    return (
        <>
            <p>Welcome to UserVault - A user management dashboard.</p>
            <Link to={"users"}>See all users</Link>
            <Link to={"add-user"}>Create User</Link>
        </>
    )
}

export default Home;