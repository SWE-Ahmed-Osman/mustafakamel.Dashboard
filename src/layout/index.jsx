import React from "react";
import AdminContent from "./AdminContent";
import Sidebar from "./Sidebar";

import "./dashLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin_layout">
      <Sidebar />
      <AdminContent />
    </div>
  );
};

export default AdminLayout;
