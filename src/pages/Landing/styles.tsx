import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const PageLandingContent = styled.div`
  .hero-image {
    width: 100%;
  }
  .total-connections {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-left: 0.8rem;
    }
  }
  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total"
    ;
    .hero-image {
      grid-area: hero;
      justify-self: end;
    }
    .total-connections {
      grid-area: total;
      justify-self: end;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3.2rem;
  img {
    height: 10rem;
  }
  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  @media(max-width: 282px){
    margin-bottom: 2.2rem;
    img {
      height: 7rem;
    }
    h2 {
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 3rem;
      margin-top: 0.8rem;
    }
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin-bottom: 0;
    text-align: left;
    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
    img {
      height: 100%;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;
    text-decoration: none;
    color: var(--color-button-text);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    img {
      width: 4rem;
    }
    &:first-child {      
      margin-right: 1.6rem;
    }
    &.study {
      background: var(--color-primary-lighter);
      &:hover {
        background: var(--color-primary-light);
      }
    }
    &.give-classes {
      background: var(--color-secondary);
      &:hover {
        background: var(--color-secondary-dark);
      }
    }
  }
  @media(max-width: 620px){
    a {
      width: 15rem;
      height: 8.4rem;
    }    
  }
  @media(max-width: 282px){
    display: block;
    padding: 4rem;
    a {
      width: 100%;
      & + a {
        margin-top: 2rem;
      }
    }
  }
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
    a {
      font-size: 2.4rem;
      img {
        margin-right: 2.4rem;
      }
    }
  }
`;