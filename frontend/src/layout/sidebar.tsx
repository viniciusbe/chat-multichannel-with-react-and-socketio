import { useMemo, useState } from "react";
import { Input } from "../components/Input";
import { NoUserFound } from "../components/NoUserFound";

import { useChannelContext } from "../hooks/useChannelContext";
import { Channels } from "../screens/Channels";

export const Sidebar = () => {
  const [search, setSearch] = useState("");

  const { channels, userName } = useChannelContext();

  const filteredChannels = useMemo(
    () =>
      channels.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      ),
    [channels, search]
  );

  return (
    <div className="sidebar">
      <div className="sidebar-menu d-flex flex-column h-full m-0 pt-20">
        <a href="#" className="sidebar-brand">
          Chats
        </a>

        <div className="sidebar-content">
          <Input placeholder="Search" onChange={setSearch} value={search} />
        </div>

        {userName ? (
          <Channels filteredChannels={filteredChannels} />
        ) : (
          <NoUserFound />
        )}
      </div>
    </div>
  );
};
