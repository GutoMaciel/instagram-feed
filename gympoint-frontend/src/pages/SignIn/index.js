import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import { Container } from '~/pages/_layouts/auth/styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido.')
    .required('O email é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <img src={logo} alt="Gympoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" placeholder="example@email.com" />
        <strong>SUA SENHA</strong>
        <Input name="password" type="password" placeholder="**********" />
        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </Container>
  );
}
