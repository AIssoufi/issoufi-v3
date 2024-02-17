import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0 20px 20px;
  position: relative;
  overflow: hidden;

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    top: 18px;
    bottom: 0;
    width: 1px;
    background-color: white;
    left: 7px;
  }
`;

export const Header = styled.header`
  display: flex;
  position: relative;

  ::before {
    content: '\002B24';
    position: absolute;
    font-size: 7px;
    left: -17px;
    top: 0;
    bottom: 0;
    right: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;

export const State = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--secpndary-dark-color);
`;

export const Descriptiopn = styled.main`
  font-size: 14px;
  font-weight: 400;
`;
