import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useChannelContext } from "../hooks/useChannelContext";

export const Login = () => {
  const { login } = useChannelContext();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  return (
    <div>
      <h1>Login</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(userName);
          navigate("/channels");
        }}
      >
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          id="username"
          placeholder="Seu usuario"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit" disabled={!userName}>
          Entrar
        </button>
      </form>
    </div>
  );
};
