// Create API slice to use RTK query functionality which helps in fetching and caching the data from server.
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * Creates multiple queries and mutations to retrieve and send data to server.
 */
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({
        // Gets all users from the server and saves the result as cache for faster retrieval of data in same subsequent requests.
        getAllUsers: builder.query({
            query: () => "users",
            providesTags: ["Users"]
        }),

        // Adds new user to the server and invalidates the cache of existing users so that new user can be added to the result.
        addNewUser: builder.mutation({
            query: (userDetails) => ({
                url: "users",
                method: "POST",
                body: userDetails
            }),
            invalidatesTags: ["Users"]
        }),

        // Edits an existing user on server and invalidates the cache of existing users so that updated user can be added to the result.
        editUser: builder.mutation({
            query: ({id, updatedUser}) => ({
                url: `users/${id}`,
                method: "PUT",
                body: updatedUser
            }),
            invalidatesTags: ["Users"]
        }),

        // Deletes an existing user on server and invalidates the cache of existing users so that deleted user can be removed from the result.
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Users"]
        })
    })
})

// Export auto generated hooks to use in components later.
export const {useGetAllUsersQuery, useAddNewUserMutation, useEditUserMutation, useDeleteUserMutation} = userApi;