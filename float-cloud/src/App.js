import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Styled from "styled-components";

//import 페이지
import CreateAcc from "./Pages/Account/CreateAcc";
import Home from "./Pages/Account/Home";
import Login from "./Pages/Account/Login";

import ManageLead from "./Pages/Setting/ManageLead";
import ManageMem from "./Pages/Setting/ManageMem";
import SettingMain from "./Pages/Setting/SettingMain";

import AddComent from "./Pages/Team/AddComment";
import TeamMain from "./Pages/Team/TeamMain";

import Main from "./Pages/Main";

//각자의 경로는 주석처리 해서 push 하기!!
function App() {
  return (
    <BrowserRouter>
      <Styled />
      <Routes>
        {/* 홍민우 경로 */}
        <Route path="/" element={<Home />} />

        {/* 최윤서 경로 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;