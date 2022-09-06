import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import { Chat } from "./screens/Chat";

import halfmoon from "halfmoon";
import "halfmoon/css/halfmoon-variables.min.css";

function App() {
  useEffect(() => {
    halfmoon.onDOMContentLoaded();
    halfmoon.toggleDarkMode();
  }, []);

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
