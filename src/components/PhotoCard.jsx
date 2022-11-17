import React, { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import useLocalStorage from '../hooks/useLocalStorage'
import useNearScreen from '../hooks/useNearScreen'

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

const Img = styled.img`
  ${fadeIn()}
  box-shadow:  0px 10px 14px rgba(0,0,0,.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

const Button = styled.button`
  border: none;
  background: none;
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`

const Article = styled.article`
  min-height: 200px;
`

function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }) {

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && <>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} alt="" />
          </ImgWrapper>
        </a>
        <Button onClick={() => { setLiked(!liked) }}>
          <Icon size={'32px'} /> {likes} likes!
        </Button>
      </>}
    </Article>
  )
}

export default PhotoCard