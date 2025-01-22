import { useGetAllUsersQuery } from "../store/APISlice";

const AllUsers = () => {

    const {data, isLoading, isError, error} = useGetAllUsersQuery();

    if (isLoading) return <p>Loading...</p>
    
    if (isError) {
        console.log(error);
        return <p>An Error has occured in loading the data!</p>
    };

    return (
        <>
            {data && 
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>E-mail</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.name.split(" ")[0]}</td>
                            <td>{user.name.split(" ")[1]}</td>
                            <td>{user.email}</td>
                            <td>{user.company.name}</td>
                        </tr>)}
                    </tbody>
                </table>
            }
        </>
    )
};

export default AllUsers;