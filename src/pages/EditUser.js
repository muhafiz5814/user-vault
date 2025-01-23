// A page component to update an existing user.
// It renders UserForm component as child to show input form elements.
// Gets parameter value from url path to get a specific user from data.
import { useParams } from "react-router";

import UserForm from "../components/UserForm";

import { useGetAllUsersQuery } from "../store/APISlice";

const EditUser = () => {

    // Get id parameter from path.
    const {id} = useParams();

    // Instead of making a fetch request for a single user, use hook to get all the users.
    // As we go the edit page from AllUsers page, it means this hook has already been called earlier and it's result has been stored in cache. Calling this hook here will not fetch data from server, while it will use cache data and it will result in faster UI changes and better user experience.
    const {isLoading, isError, error, data} = useGetAllUsersQuery();

    // Show loading message on query loading.
    if (isLoading) return <p>Loading...</p>;

    // Show error message on query error.
    if (isError) {
        console.error(error);
        return <p>An error has occured!</p>;
    }

    // Once the data has fetched the users, find a perticular user details using id.
    const user = data?.find((user) => user.id === parseInt(id));

    return (
        <>
        {/* Send user details and a flag to tell UserForm that it is going to edit existing user. */}
            <UserForm user={user} Editing={true} />
        </>
    )
};

export default EditUser;