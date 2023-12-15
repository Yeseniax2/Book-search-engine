import { gql } from "@apollo/client";

export const GET_ME = gql`
     {
        me{
            me {
                _id
                username
                email
                savedBooks {
                  bookId
                  authors
                  image
                  link
                  title
                  description
                }
              }
            }
          `;
    