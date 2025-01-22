import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "users",
            providesTags: ["Users"]
        }),

        addNewUser: builder.mutation({
            query: (userDetails) => ({
                url: "users",
                method: "POST",
                body: userDetails
            }),
            invalidatesTags: ["Users"]
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE"
            })
        })
    })
})

export const {useGetAllUsersQuery, useAddNewUserMutation, useDeleteUserMutation} = userApi;