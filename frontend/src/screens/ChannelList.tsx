import { Link } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelList = () => {
  const { channels } = useChannelContext();

  return (
    <ul>
      {channels.map(({ id, name }) => (
        <li>
          <Link id={id} to={`/chat/${id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
