import { useMemo, useState } from "react";
import { Input } from "../components/Input";

import { useChannelContext } from "../hooks/useChannelContext";
import { Channels } from "../screens/Channels";

export const Sidebar = () => {
  const [search, setSearch] = useState("");

  const { channels } = useChannelContext();

  const filteredChannels = useMemo(
    () => channels.filter((c) => c.name.includes(search.toLocaleLowerCase())),
    [channels, search]
  );

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <a href="#" className="sidebar-brand">
          Chats
        </a>

        <div className="sidebar-content">
          <Input placeholder="Search" onChange={setSearch} value={search} />
        </div>

        <Channels filteredChannels={filteredChannels} />
      </div>
    </div>
  );
};
