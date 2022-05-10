import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  color: #0804f3;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.06;

  :not(:last-child) {
    margin-right: 16px;
  }

  &.active {
    color: white;
    border-bottom: 2px solid white;
  }
`;
