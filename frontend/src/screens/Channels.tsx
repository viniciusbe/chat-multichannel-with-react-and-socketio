import { useState } from "react";

import { Button } from "../components/Button";
import { Content } from "../components/Content";
import { Input } from "../components/Input";

import { useChannelContext } from "../hooks/useChannelContext";

export const Channels = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, channels, joinChannel } = useChannelContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    createChannel(channelName);
    setChannelName("");
  };

  return (
    <Content>
      <h1 className="content-title">Criar Canal</h1>

      <form onSubmit={handleSubmit}>
        <Input
          value={channelName}
          onChange={setChannelName}
          placeholder="Nome do Canal"
        />
        <Button disabled={!channelName} text="Criar" />
      </form>

      <ul>
        {channels.map(({ id, name }) => (
          <li key={id} className="sidebar-link" onClick={() => joinChannel(id)}>
            {name}
          </li>
        ))}
      </ul>
    </Content>
  );
};
