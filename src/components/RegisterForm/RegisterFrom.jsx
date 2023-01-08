import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import Input from "components/base/Input.styled";
import Button from "components/base/Button.styled";
import StyledForm from "../base/Form.styled";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };

    return (<StyledForm onSubmit={handleSubmit}>
      <label>
          Username
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </label>
        <label>
          Email
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter password"
            minLength="6"
          title="Phone number must be at least 8 characters"
            required
          />
        </label>
        <Button type="submit">Register</Button>
      </StyledForm>)
}

export default RegisterForm;