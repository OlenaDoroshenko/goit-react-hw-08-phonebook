import Menu from "./UserMenu.styled";
import Button from "components/base/Button.styled";
import { selectUser } from "redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Menu>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Menu>
  );
};

export default UserMenu;