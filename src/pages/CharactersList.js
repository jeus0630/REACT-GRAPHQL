import React from 'react';
import {useQuery, gql} from "@apollo/client";

const GET_CHARACTERS = gql`
    query{
        characters{
            results{
                name
                image
                gender
            }
        }
    }
`

const CharactersList = () => {
    const {error, loading, data} = useQuery(GET_CHARACTERS);

    if (loading) return <div>spinner...</div>
    return (
        <>
            {
                data.characters.results.map(character => {
                    return (
                        <>
                            <img src={character.image} alt=""/>
                            <div>
                                {character.name}
                            </div>
                        </>
                    )
                })
            }
        </>
    )

};

export default CharactersList;
