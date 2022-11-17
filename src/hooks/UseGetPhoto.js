import { gql, useQuery } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const useGetPhoto = id => {
  const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, { variables: {
    id: id
  }})
  console.log(error);
  return { loading, data, error }
}