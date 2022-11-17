import React from 'react'
import styled from 'styled-components'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

const Anchor = styled.a `
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  border-radius: 50%;
  height: 75px;
  width: 75px;
  overflow: hidden;
  object-fit: cover;
`

function Category({cover = DEFAULT_IMAGE, path, emoji = '?'}) {

  return (
    <Anchor href={path}>
      <Image src={cover} alt="" />
      {emoji}
    </Anchor>
  )
}

export default Category