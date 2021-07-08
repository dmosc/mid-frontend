import {gql} from '@apollo/client';

const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $user: UserUpdate!) {
        updateUser(id: $id, user: $user) {
            id
        }
    }
`;

export {UPDATE_USER};