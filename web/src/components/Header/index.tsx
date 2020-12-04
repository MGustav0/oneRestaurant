import React from 'react';
import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import Logo from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </header>
    </Container>
  );
};

export default Header;
