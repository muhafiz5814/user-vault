import { useParams } from "react-router";

import UserForm from "../components/UserForm";


import { useGetAllUsersQuery } from "../store/APISlice";

const EditUser = () => {

    const {id} = useParams();

    const {isLoading, isError, error, data} = useGetAllUsersQuery();

    // Show loading message on query loading.
    if (isLoading) return <p>Loading...</p>;

    // Show error message on query error.
    if (isError) {
        console.error(error);
        return <p>An error has occured!</p>;
    }

    const user = data?.find((user) => user.id === parseInt(id));
    // console.log(data)
    console.log(user)
    return (
        <>
            <UserForm user={user} Editing={true} />
        </>
    )
};

export default EditUser;