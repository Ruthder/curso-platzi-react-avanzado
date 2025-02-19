import React from 'react'
import ListOfCategories from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { GlobalStyles } from './GlobalStyles'
import Logo from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {

  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return <>
    <GlobalStyles />
    <Logo />
    {
      detailId ? <PhotoCardWithQuery id={detailId}/> :
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
    }
  </>
}