import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  padding: 20px 0;
`;

export const Logo = styled.div`
  font-family: 'Saira Stencil One', cursive;
  font-size: 36px;
  transform: scale(1);
  transition-property: transform;
  transition-duration: 0.3s;

  :hover {
    transform: scale(1.15);
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;

  ${props =>
    props.isSticky &&
    css`
      position: fixed;
      top: 20px;
      z-index: 1;
      right: 20px;
    `}
`;

interface MenuProps {
  isSticky: boolean;
}
