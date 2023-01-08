import { useDispatch } from "react-redux";
import Input from "components/base/Input.styled";
import Button from "components/base/Button.styled";
import StyledForm from "../base/Form.styled";
import { logIn } from "redux/auth/operations";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };

    return (<StyledForm onSubmit={handleSubmit}>
        <label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            required
          />
        </label>
        <Button type="submit">Log In</Button>
      </StyledForm>)
}

export default LoginForm;