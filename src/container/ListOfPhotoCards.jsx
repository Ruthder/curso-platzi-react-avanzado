import React, { Component } from 'react'
import PhotoCard from '../components/PhotoCard'
import { useGetPhotos } from '../hooks/useGetPhotos'

export const ListOfPhotoCards = () => {
  const { data, loading, error } = useGetPhotos(2)  // destructuras la data y el estado de loading y error 
  if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
  if (error) return <pre>{error.message}</pre>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}