import React from 'react'
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { IHeader } from './types';
import { useNavigate } from 'react-router-dom';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({autenticado}: IHeader) => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
      navigate('/login')
  }

  const handleClickSignUp = () => {
    navigate('/CreateAcc')
  }


  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/112978343?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" onClick={handleClickSignIn} />
                <Button title="Cadastrar" onClick={handleClickSignUp} />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
