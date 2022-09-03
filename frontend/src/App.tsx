import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import { Channels } from "./screens/Channels";
import { Chat } from "./screens/Chat";

import halfmoon from "halfmoon";

function App() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
    halfmoon.toggleDarkMode();
  }, []);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/chat/:channelId" element={<Chat />} />
          <Route path="/channels" element={<Channels />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
