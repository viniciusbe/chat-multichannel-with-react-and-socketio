import { Link } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelList = () => {
  const { channels } = useChannelContext();

  return (
    <ul>
      {channels.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/chat/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
