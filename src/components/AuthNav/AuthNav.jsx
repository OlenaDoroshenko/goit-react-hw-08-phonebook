import NavItem from 'components/base/NavItem.styled';
import AuthNavBox from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthNavBox>
      <NavItem to="/register">
        Register
      </NavItem>
      <NavItem to="/login">
        Log In
      </NavItem>
    </AuthNavBox>
  );
};

export default AuthNav;