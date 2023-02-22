import { FiThumbsUp } from 'react-icons/fi'
import React from 'react'
import { ICard } from './types'

import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'
const Card = ({src}: ICard) => {
  return (
    <CardContainer>
      <ImageBackground src={src} />
      <Content>
        <UserInfo>
          <UserPicture src='https://avatars.githubusercontent.com/u/112978343?v=4' />
         <div>
          <h4>Renan França</h4>
          <p>Há 20 minutos</p>
        </div> 
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade...<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card }
