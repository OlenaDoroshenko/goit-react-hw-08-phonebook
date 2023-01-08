import { Header } from "./AppBar.styled";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { selectIsLoggedIn } from "redux/selectors";
import { useSelector } from "react-redux";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Header>
    )
}

export default AppBar