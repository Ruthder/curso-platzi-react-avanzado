import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const withPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = categoryId => {
  const { loading, data, error } = useQuery(withPhotos, { variables: { categoryId } })
  return { loading, data, error }
}