import React, { Fragment, useState } from 'react'
import Category from './Category'
import styled, { css } from 'styled-components'
import { useEffect } from 'react'
import UseCategoriesData from '../hooks/useCategories'

import db from '../../api/db.json'

const Item = styled.li`
  padding: 0px 8px;
`

const ListC = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${props => props.fixed && css`
    {
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    right: 0;
    top: -20px;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    transform: scale(.5);
    z-index: 1;
    }
  `}
`

function ListOfCategories() {

  const mockCategories = db.categories
  const [showFixed, setShowFixed] = useState(false)

  const { categories, loading } = UseCategoriesData()

  useEffect(
    () => {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200
        if (showFixed != newShowFixed) {
          setShowFixed(newShowFixed)
        }
      }
      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    }
  )

  const renderList = (fixed) => {
    return <ListC fixed={fixed}>
      {
        loading ? <Item key={'loading'}>
          <Category />
        </Item> :
          categories.map(category =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          )
      }
    </ListC>
  }
  if (loading) {
    return <div>Cargando..</div>
  }
  return (
    <Fragment>
      {renderList(false)}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

export default ListOfCategories