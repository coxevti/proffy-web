import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, TopBarContainer, HeaderContent } from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => (
  <Container>
    <TopBarContainer>
      <Link to="/">
        <img src={backIcon} alt="Voltar" />
      </Link>
      <img src={logoImg} alt="Proffy" />
    </TopBarContainer>
    <HeaderContent>
      <strong>{title}</strong>
      {children}
    </HeaderContent>
  </Container>
);

export default PageHeader;