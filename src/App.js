import React from 'react'
import ListOfCategories from './components/ListOfCategories'
import {ListOfPhotoCards} from './components/ListOfPhotoCards'
import { GlobalStyles } from './GlobalStyles'
import Logo from './components/Logo'

export const App = () => {
  return <>
    <GlobalStyles />
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2}/>
  </>
}