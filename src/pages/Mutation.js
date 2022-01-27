import React from 'react';
import {useMutation, gql} from "@apollo/client";

const createMutation = gql`
    mutation($name: ) {
        createProduct{
            
        }
    }
`

const Mutation = () => {

    const [createProduct, {data, error, loading}] = useMutation(createMutation);

    return (
        <div>

        </div>
    );
};

export default Mutation;