import { Link } from "react-router";
import { useGetAllUsersQuery, useDeleteUserMutation } from "../store/APISlice";
import { useEffect } from "react";

const AllUsers = () => {

    const {data, isLoading, isError, error} = useGetAllUsersQuery();

    const [deleteUser, {isLoading: isDeleting, isError: isDeletingError, error: deletingError, data: deletedData, isSuccess}] = useDeleteUserMutation();

    useEffect(() => {
        if(isSuccess) {
            alert(`User deleted successfully.`);
        }
    })

    if (isLoading) return <p>Loading...</p>
    
    if (isError) {
        console.log(error);
        return <p>An Error has occured in loading the data!</p>
    };

    const deleteHandler = async (id) => {
        const confirm = window.confirm(`Do you want to delete user ?`);
        try {
            if(confirm) await deleteUser(id).unwrap();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="text-white">
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
                                <th>ACTIONS</th>
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
                                <td>
                                    <Link to={`../edit-user/${user.id}`}>Edit</Link> 
                                    <button onClick={() => {deleteHandler(user.id)}}>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                }
            </div>
        </>
    )
};

export default AllUsers;