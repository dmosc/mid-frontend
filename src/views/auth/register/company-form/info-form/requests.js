import {gql} from '@apollo/client';

const CREATE_COMPANY = gql`
    mutation createCompany($company: CompanyCreate!) {
        createCompany(company: $company) {
            id
        }
    }
`;

const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $user: UserUpdate!) {
        updateUser(id: $id, user: $user) {
            id
        }
    }
`;

export {CREATE_COMPANY, UPDATE_USER};