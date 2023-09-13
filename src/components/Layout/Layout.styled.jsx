import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
  padding: 20px;
  z-index: 10;
  background: linear-gradient(to right, #2c4ca3, #4e5c9b, #2968b9, #262c75);
  box-shadow: 0px 4px 12px rgba(24, 9, 96, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
  transition: color 200ms linear;

  :hover {
    color: #ecfa9e;
  }

  &.active {
    color: #ecfa9e;
  }
`;

export { Header, Nav, Link };
