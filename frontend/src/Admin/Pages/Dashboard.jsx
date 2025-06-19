import React from "react";
import AdminSidebar from "../adminComponents/AdminSidebar";
import Topbar from "../adminComponents/Topbar";
import Cards from "../adminComponents/Cards";

export const Dashboard = () => (
  <div className="flex min-h-screen bg-gray-50">
    <AdminSidebar />
    <div className="flex-1 flex flex-col ml-64">
      <Topbar />
      <Cards />
    </div>
  </div>
);
