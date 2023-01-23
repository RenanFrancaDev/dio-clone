import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Renan França" image="https://avatars.githubusercontent.com/u/112978343?v=4" percentual={100}/>
                <UserInfo nome="Jhonny Bravo" image="https://preview.redd.it/0soscn36gad61.png?width=640&crop=smart&auto=webp&s=289d32678785355e759c6e7ef56725c5d37ea8a5" percentual={65}/>
                <UserInfo nome="Dexter" image="https://i.pinimg.com/originals/44/b5/aa/44b5aa15b6ac861494e452d9c47d7e19.jpg" percentual={45}/>
                <UserInfo nome="Felicia" image="https://i.pinimg.com/236x/f3/ee/c4/f3eec485f633a58bf202dc112d81cac6--a-squirrel-duff.jpg" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
