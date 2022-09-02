import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { Content } from "../components/Content";
import { Input } from "../components/Input";

import { useChannelContext } from "../hooks/useChannelContext";
import { Container, Form } from "./styles";

export const Channels = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, userName, channels } = useChannelContext();
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    createChannel(channelName);
    setChannelName("");
  };

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, []);

  return (
    <Content>
      <h1 className="content-title">Criar Canal</h1>

      <Form onSubmit={handleSubmit}>
        <Input
          value={channelName}
          onChange={setChannelName}
          placeholder="Nome do Canal"
        />
        <Button disabled={!channelName} text="Criar" />
      </Form>

      <ul>
        {channels.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/chat/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </Content>
  );
};
