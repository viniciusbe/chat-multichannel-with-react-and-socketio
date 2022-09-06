import { Channels } from "../screens/Channels";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <a href="" className="sidebar-brand">
          Chats
        </a>

        <div className="sidebar-content">
          <input type="text" className="form-control" placeholder="Search" />
        </div>

        <Channels />
      </div>
    </div>
  );
};
