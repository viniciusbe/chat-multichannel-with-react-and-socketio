import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import { Channels } from "./screens/Channels";
import { Chat } from "./screens/Chat";
import { Login } from "./screens/Login";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:channelId" element={<Chat />} />
          <Route path="/channels" element={<Channels />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
