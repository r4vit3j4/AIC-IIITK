import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BoardMembers from "./pages/BoardMembers";
import Careers from "./pages/Careers";
import ErrorPage from "./pages/ErrorPage";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";
import Mentors from "./pages/Mentors";
import News from "./pages/News";
import SeedFund from "./pages/SeedFund";
import StartupListPage from "./pages/StartupListPage";
import StartupPage from "./pages/StartupPage";
import SummaryPage from "./pages/SummaryPage";
import TeamPage from "./pages/TeamPage.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Static Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/board" element={<BoardMembers />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/sia" element={<StartupPage />} />
        <Route path="/sisfs" element={<SeedFund />} />
        <Route path="/careers" element={<Careers />} />

        {/* Non Static Pages */}
        <Route path="/news" element={<News />} />
        <Route path="/startup" element={<StartupListPage />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
