// It's a page component to show all users.
import { Link } from "react-router";
import { useGetAllUsersQuery, useDeleteUserMutation } from "../store/APISlice";
import { useEffect } from "react";

import SingleDetail from "../components/SingleDetail";
import ActionButton from "../components/ActionButton";

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
            {/* Show all the users once fetched from the server. Also add link to edit the user and button to delete the user. */}
            <div className="text-white flex flex-wrap gap-3 p-8 justify-center">
                {data && data.map((user) => (
                    <div className="min-w-80 p-5 bg-slate-700 ps-8">
                        <div>
                            <SingleDetail title={"ID"} value={user.id} />
                            <SingleDetail title={"Username"} value={user.username} />
                            <SingleDetail title={"First Name"} value={user.name.split(" ")[0]} />
                            <SingleDetail title={"Last Name"} value={user.name.split(" ")[1]} />
                            <SingleDetail title={"E-mail"} value={user.email} />
                            <SingleDetail title={"Company"} value={user.company.name} />
                        </div>
                        <div className="mt-4">
                            <Link to={`../edit-user/${user.id}`} >
                                <ActionButton title={"Edit"} />
                            </Link>

                            <ActionButton onClickHandler={() => {deleteHandler(user.id)}} title={"Delete"} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default AllUsers;