import { useGetAllUsersQuery } from "../store/APISlice";

const AllUsers = () => {

    const {data, isLoading, isError, error} = useGetAllUsersQuery();

    return (
        <>
            {isLoading && <p>Loading...</p> }
            {data && <p>Data recieved.</p>}
            {isError && <p>Error ${error} recieved.</p>}
        </>
    )
};

export default AllUsers;