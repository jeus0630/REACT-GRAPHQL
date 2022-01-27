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

export const useCharacters = () => {

}