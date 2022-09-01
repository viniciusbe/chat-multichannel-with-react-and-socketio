import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { useChannelContext } from "../hooks/useChannelContext";
import { FormEvent } from "../types/shared";
import { Form } from "./styles";

export const Login = () => {
  const { login } = useChannelContext();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const onSubmitLogin: FormEvent = (e) => {
    e.preventDefault();
    login(userName);
    navigate("/channels");
  };

  return (
    <div>
      <h1>Login</h1>

      <Form onSubmit={onSubmitLogin}>
        <Input value={userName} onChange={setUserName} placeholder="Seu nome" />
        <Button disabled={!userName} text="Entrar" />
      </Form>
    </div>
  );
};
