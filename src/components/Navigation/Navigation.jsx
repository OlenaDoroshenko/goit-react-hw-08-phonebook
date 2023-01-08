import NavItem from 'components/base/NavItem.styled';
import StyledNav from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <StyledNav>
      <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </StyledNav>
  );
};

export default Navigation;
