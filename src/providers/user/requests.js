import {gql} from '@apollo/client';

const GET_USER = gql`
    query user($id: ID!) {
        user(id: $id) {
            id
            firstName
            lastName
            email
            profileImg
        }
    }
`;

export {GET_USER};