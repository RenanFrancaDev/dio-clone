import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('email não valido').required('Campo obrigatório'),
    password: yup.string().min(5, 'mínimo de 3 caracteres').required('Campo obrigatório'),
  }).required();


const Login = () => {

        const navigate = useNavigate();

        const { control, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema),
            mode: 'onChange',
        });

            const onSubmit = async formData => {
                try{
                    const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
                    if(data.length === 1){
                        navigate('/feed')
                    }
                }catch{
                    alert('ERROR, favor comunicar ao suporte')
                }
            };

    

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                 <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />}
                    errorMessage={errors?.email?.message}/>
                    <Input name="password" control={control} type="password" placeholder="Senha" leftIcon={<MdLock />}
                     errorMessage={errors?.password?.message}/>
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }

