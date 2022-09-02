import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useChannelContext } from "../hooks/useChannelContext";
import { FormEvent } from "../types/shared";

export const Navbar = () => {
  const { login } = useChannelContext();

  const [userName, setUserName] = useState("");

  const onSubmitLogin: FormEvent = (e) => {
    e.preventDefault();
    login(userName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <form
          className="form-inline d-none d-md-flex ml-auto"
          onSubmit={onSubmitLogin}
          action="submit"
        >
          <Input
            onChange={setUserName}
            value={userName}
            placeholder="Username"
          />

          <Button />
        </form>
      </div>
    </nav>
  );
};
