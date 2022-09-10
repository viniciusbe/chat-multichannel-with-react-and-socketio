import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import { Chat } from "./screens/Chat";

import halfmoon from "halfmoon";
import "halfmoon/css/halfmoon-variables.min.css";
import { useChannelContext } from "./hooks/useChannelContext";

function App() {
  const { channels, createChannel, joinChannel, channel } = useChannelContext();

  useEffect(() => {
    halfmoon.onDOMContentLoaded();
    halfmoon.toggleDarkMode();
  }, []);

  useEffect(() => {
    if (!channels.length) {
      createChannel("First Channel");

      return;
    }

    if (!channel) {
      const [firstChannel] = channels;
      joinChannel(firstChannel.id);
    }
  }, [channels, channel]);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
