import React from 'react';
import {gql,useQuery} from "@apollo/client";

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){
        character(id: $id){
            name
            origin{
                name
            }
            location{
                name
            }
        }
    }
`

const Character = () => {

    const {error, loading, data} = useQuery(GET_CHARACTER,{
        variables: {
            id : 4
        }
    });

    console.log({error,loading,data});
    return (
        <div>

        </div>
    );
};

export default Character;