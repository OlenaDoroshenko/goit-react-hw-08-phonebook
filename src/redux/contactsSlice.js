import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://connections-api.herokuapp.com', 
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if(token){
        headers.set('Authorization', `Bearer ${token}`);
      };
      return headers;
    },
  }),
  // baseQuery: axiosBaseQuery({
  //   baseUrl: 'https://connections-api.herokuapp.com',
  // }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
