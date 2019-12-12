import React from 'react';
import {connect} from 'react-redux';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import {Wrapper, Container, Logo} from './styles';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.lenght,
  }),
  null,
)(Header);
