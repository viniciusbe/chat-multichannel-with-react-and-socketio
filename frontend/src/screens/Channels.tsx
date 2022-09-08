import { useState } from "react";

import { Button } from "../components/Button";
import { Content } from "../components/Content";
import { Input } from "../components/Input";
import { IChannel } from "../context/ChannelContext";

import { useChannelContext } from "../hooks/useChannelContext";

import { IoMdAdd } from "react-icons/io";

interface ChannelsProps {
  filteredChannels: IChannel[];
}

export const Channels = ({ filteredChannels }: ChannelsProps) => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, joinChannel, channel } = useChannelContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    createChannel(channelName);
    setChannelName("");
  };

  return (
    <>
      {filteredChannels.map(({ id, name }) => (
        <a
          href={`#${id}`}
          key={id}
          className={`sidebar-link ${id === channel?.id ? "active" : ""} `}
          onClick={() => joinChannel(id)}
        >
          {name}
        </a>
      ))}

      <form className="sidebar-content d-flex" onSubmit={handleSubmit}>
        <Input
          value={channelName}
          onChange={setChannelName}
          placeholder="Channel name"
        />
        <Button disabled={!channelName}>
          <IoMdAdd />
        </Button>
      </form>
    </>
  );
};
