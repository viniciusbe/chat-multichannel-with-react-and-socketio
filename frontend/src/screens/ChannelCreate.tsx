import { useState } from "react";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel } = useChannelContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    createChannel(channelName);
    setChannelName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="channelName">Nome do Canal</label>
        <input
          type="text"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <button type="submit" disabled={!channelName}>
          Criar
        </button>
      </form>
    </div>
  );
};
