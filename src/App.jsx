import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import TeamPage from "./pages/TeamPage";

const router = createBrowserRouter([
  // Static Pages
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/summary",
    element: <SummaryPage />,
  },
  {
    path: "/board",
    element: <BoardMembers />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/mentors",
    element: <Mentors />,
  },
  {
    path: "/sia",
    element: <StartupPage />,
  },

  {
    path: "/sisfs",
    element: <SeedFund />,
  },
  {
    path: "/mentors",
    element: <Mentors />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  // Non Static Pages
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/startup",
    element: <StartupListPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default App;
