import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form>
            <h1>Faça seu Cadastro</h1>

            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para Logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
