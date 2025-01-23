// It's a page component to show all users.
import { Link } from "react-router";
import { useGetAllUsersQuery, useDeleteUserMutation } from "../store/APISlice";
import { useEffect } from "react";

const AllUsers = () => {

    // Fetch all the users from server using hook provided by userAPI slice.
    const {data, isLoading, isError, error} = useGetAllUsersQuery();

    // Get delete mutation trigger function and other useful properties from delete mutation hook.
    const [deleteUser, {isLoading: isDeleting, isError: isDeletingError, error: deletingError, data: deletedData, isSuccess}] = useDeleteUserMutation();

    // It rerenders the component and show message of successfully deletion of user once deleted.
    // It only rerenders when the value of isSuccess changes.
    useEffect(() => {
        if(isSuccess) {
            alert(`User deleted successfully.`);
        }
    }, [isSuccess])

    // Show loading message while data is being loaded from the server.
    if (isLoading) return <p>Loading...</p>
    
    // Show error message to user if any error occures in fetching the data.
    if (isError) {
        console.error(error);   //  For development/troubleshoot purpose
        return <p>An Error has occured in loading the data!</p>
    };

    // Show error message to user if any error occures in deleting the user.
    if (isDeletingError) {
        console.error(deletingError);   //  For development/troubleshoot purpose
        return <p>An Error has occured in loading the data!</p>
    };

    /**
     * Deletes a user of specified id from the server.
     * 
     * @param {Number} id id of the user to be deleted from server
     */
    const deleteHandler = async (id) => {
        // Ask for confirmation before deleting the user.
        const confirm = window.confirm(`Do you want to delete user ?`);
        try {
            if(confirm) await deleteUser(id).unwrap();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {/* Show all the users in tabular form once fetched from the server. Also add link to edit the user and button to delete the user. */}
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
                                {/* As data do not have first name and last name separately, we have to split full name to get first name and last name. */}
                                <td>{user.name.split(" ")[0]}</td>
                                <td>{user.name.split(" ")[1]}</td>
                                <td>{user.email}</td>
                                <td>{user.company.name}</td>
                                {/* Add link to edit the user and a button to delete a user. */}
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