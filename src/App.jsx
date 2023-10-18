// import React from "react";
import { Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ExploreCity from "./pages/ExploreCity";
import Favorite from "./pages/Favorite";
import Settings from "./pages/Settings";
import Ticket from "./pages/Ticket";
import { HiOutlineHome } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { CiMail } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import profilePicture from "./assets/istockphoto-1407759041-1024x1024.jpg";

function App() {
  const userProfilePicture = profilePicture;
  const userName = "John Doe";
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-slate-300 grid grid-cols-[auto,1fr]">
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          {
            label: (
              <div className="flex items-center">
                <img
                  src={userProfilePicture}
                  alt="Profile Picture"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span>{userName}</span>
              </div>
            ),
            key: "/profile",
          },
          { label: "Dashboard", key: "/", icon: <HiOutlineHome /> },
          {
            label: "Explore City",
            key: "/explore-city",
            icon: <RxDashboard />,
          },
          { label: "Ticket", key: "/favorites", icon: <CiMail /> },
          {
            label: "Favorites",
            key: "/settings",
            icon: <MdFavoriteBorder />,
          },
          { label: "Settings", key: "/ticket", icon: <FiSettings /> },
          { label: "LogOut", key: "/logout", icon: <AiOutlineLogout /> },
        ]}
      ></Menu>
      <div className="flex flex-col">
        <Header />
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/explore-city" element={<ExploreCity />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
}

function Header() {
  return (
    <div className="h-16 bg-white flex items-center justify-around w-[95%] mx-auto rounded-lg">
      <div className="ml-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white border border-slate-400 text-slate-400 px-3 py-2 rounded"
        />
      </div>
      <div className="mr-4 flex items-center">
        <div className="mr-4">
          <span className="text-slate-400 font-semibold">
            Tuesday, October 17, 2023
          </span>
        </div>
        <div>
          <IoMdNotificationsOutline className="h-6 w-6 text-slate-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default App;
