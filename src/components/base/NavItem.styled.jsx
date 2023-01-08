import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid #11998e;
  border-radius: 4px;
  text-decoration: none;
  color: #11998e;
  font-weight: 500;
  &.active {
    background-color: #11998e;
    color: #FFFFFF;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #11998e;
    background-color: #FFFFFF;
  }
`;

export default NavItem;