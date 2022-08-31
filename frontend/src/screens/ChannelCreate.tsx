import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, userName } = useChannelContext();
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
