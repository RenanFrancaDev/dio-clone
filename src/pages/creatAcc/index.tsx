import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { api } from "../../services/api";

import { Container, Title, Column, TitleLogin, SubtitleLogin, Link, SubText, Row, Wrapper} from './styles';


const CreateAcc = () => {


        const { control, formState: { errors } } = useForm();

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input name="user" control={control} placeholder="Nome Completo" leftIcon={<MdAccountBox />}/>
                    <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                    <Input name="password" control={control} type="password" placeholder="Senha" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                <SubText>Já tem cadastro? <Link href='login'>Fazer Login</Link></SubText>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { CreateAcc }

