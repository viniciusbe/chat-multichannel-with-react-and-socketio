import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useChannelContext } from "../hooks/useChannelContext";
import { FormEvent } from "../types/shared";
import halfmoon from "halfmoon";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const { login, userName } = useChannelContext();

  const [userNameInput, setUserNameInput] = useState("");

  const onSubmitLogin: FormEvent = (e) => {
    e.preventDefault();
    login(userNameInput);
  };

  const handleToggleTheme = () => {
    halfmoon.toggleDarkMode();
  };

  const handleToggleSidebar = () => {
    halfmoon.toggleSidebar();
  };

  console.log(userNameInput);

  return (
    <nav className="navbar">
      <div className="navbar-content justify-content-between w-full">
        <button
          className="btn btn-action"
          type="button"
          onClick={handleToggleSidebar}
        >
          <FiMenu />
        </button>

        {userName ? (
          userName
        ) : (
          <form
            className="form-inline d-none d-md-flex ml-auto"
            onSubmit={onSubmitLogin}
            action="submit"
          >
            <Input
              onChange={setUserNameInput}
              value={userNameInput}
              placeholder="Username"
            />

            <Button disabled={!userNameInput} />
          </form>
        )}

        <button
          className="btn  ml-10 btn-action"
          type="button"
          onClick={handleToggleTheme}
        >
          <WiMoonAltThirdQuarter />
        </button>
      </div>
    </nav>
  );
};
