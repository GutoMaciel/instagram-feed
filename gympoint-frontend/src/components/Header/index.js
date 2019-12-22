import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <strong>GYMPOINT</strong>

          <Link to="/students/list">ALUNOS</Link>
          <Link to="/plans/list">PLANOS</Link>
          <Link to="/enrollments/list">MATRÍCULAS</Link>
          <Link to="/helporders/list">PEDIDOS DE AUXÍLIO</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <span>Gustavo Maciel</span>
              <Link to="/">Sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
