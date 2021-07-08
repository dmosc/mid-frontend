import {gql} from '@apollo/client';

const GET_SIGNED_URL = gql`
    query signFileUrl($filePath: String!) {
        signFileUrl(filePath: $filePath) {
            signedUrl
            fileUrl
        }
    }
`;

export {GET_SIGNED_URL};
